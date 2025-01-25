---
layout:     post
title:      Troubleshooting installing elixir-bootlin for a custom  C/C++ project
date:       2025-01-25 21:35:59 +0200
categories: kernel sorbonne en
author:     gwynplaine
---

## Context
For a project at the university (actually two), I had the need to check more 
than one repository with C code distributed in many files. I decided to use 
elixir and placed in an online server to have access from anywhere.

Follow the instruction from the [repo](https://github.com/bootlin/elixir). Then, 
if you have any trouble, you can check if here's the solution.

## A little remark on Apache2 modules

You may need to enable the modules `rewrite` and `wsgi` if they are not enabled 
by default. You can do it with
```bash
sudo a2enmod write
sudo a2enmod wsgi
```

## Some remarks on the `000-default.conf` file
The repo does not specify in details what you need to change in the file. I 
present the contents of the file highlighting with **YOUMAYNEEDTOCHANGETHIS** 
what needs to be changed.

```conf
<Directory /usr/local/elixir/>
    AllowOverride None
    Require all denied
    <FilesMatch "wsgi.py">
        Require all granted
    </FilesMatch>
</Directory>
<Directory /usr/local/elixir/static/>
    AllowOverride None
    Require all granted
</Directory>
<VirtualHost *:80>
    ServerName MY_LOCAL_IP
    DocumentRoot /usr/local/elixir/

    SetEnv LXR_PROJ_DIR YOUMAYNEEDTOCHANGETHIS
    # restart-interval is 12 hours
    WSGIDaemonProcess Elixir processes=16 threads=1 \
        display-name=%{GROUP} restart-interval=43200 \
        home=/usr/local/elixir/ python-home=/usr/local/elixir/venv/
    WSGIApplicationGroup %{GLOBAL}

    WSGIProcessGroup Elixir
    WSGIScriptAliasMatch "^/(?!static/)" /usr/local/elixir/wsgi.py/$1

    AllowEncodedSlashes On
    RewriteEngine on
    RewriteRule "^/$" "YOUMAYNEEDTOCHANGETHIS" [R]
    RewriteRule "^/robots.txt$" "/static/robots.txt" [L]
    RewriteRule "^/favicon.ico$" "/static/img/favicon.ico" [L]
</VirtualHost>
```

Note: I need to change the css in order to have a proper highlighting.

## Tags were not showing
Looking at the logs, we can see that caused by a _dubious ownership in the repositories_ 
and git recomends us to add a global config.
![apache-logs](/assets/img/lxr/elixir-apache-logs.png)

However, this is not precise because it does not take in account the user who 
will be executing git, which will be `www-data`. Executing `git config --global *` 
will only change the `.gitconfig` in the home directory of the user executing 
the command. But, we need to change the config file of `www-data`, which has a 
his home directory set at `/var/www`. So, there where we need to place the 
`.gitconfig` which should look something like this:

```
[user]
        email = dummy@sorbonne-universite.fr
        name = dummy

[safe]
        directory = $PATH_TO_YOUR_PROJECT/repo
        directory = /usr/local/elixir
```
where `$PATH_TO_YOUR_PROJECT` is the path to your project directory.


I wouldn't have come to this solution if it wasn't for this 
[russian guys' video](https://www.youtube.com/watch?v=B6-afXtFd50). The solution 
was also posted in an [issue](https://github.com/bootlin/elixir/issues/223) in 
the github repo.

