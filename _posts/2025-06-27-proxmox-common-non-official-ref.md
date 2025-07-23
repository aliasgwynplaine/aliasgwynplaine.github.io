---
layout: post
title: proxmox-ve | a non-official dev reference
date: 2025-06-27 13:25:59 +0200
tags: en dev cloud proxmox
author: gwynplaine
---

> [!DISCLAIMER]
> Those are the notes i've been taking for some project at a lab where
> i am intern (2025). As an open-source project, it's likely this reference will 
> become outdated soon. The only way to be sure what a function does, is reading 
> the source code by yourself. So go ahead, don't be afraid to read, it's just 
> some perl code :P 

This is a non-official personal reference for the tools at the [pve-common](https://git.proxmox.com/?p=pve-common.git) and [pve-guest-common](https://git.proxmox.com/?p=pve-guest-common.git), and some other repos from the Proxmox Virtual Environment. I'll try to write about the relationship a repo has with another.

Remember to take a look to the [README.dev](https://git.proxmox.com/?p=pve-common.git;a=blob_plain;f=README.dev;hb=HEAD) at the git repo before doing anything. There, you'll find instructions to setup the dev environment.

This reference is organized in the next way:
+ repo (e.g. pve-common)
    + package (e.g. PVE::ProcFSTools)
        + function (e.g. check_process_running)

## pve-common
### PVE::ProcFSTools
#### `check_process_running`
checks if a process is running. Reads `proc/$pid/stat` using `read_proc_pid_stat`.

#### `read_proc_pid_stat`
Reads the stat from a `$pid` passed as argument. Returns a reference to a hash containing the information if succeed, otherwise returns `undef`. The keys in the hash are: status, ppid, utime, stime, starttime, vsize, rss.

#### `read_memory_usage`
Returns memory usage of the current process. 

### PVE::INotify
#### `nodename`
returns the name of the current node.

### PVE::Tools
#### `run_with_timeout`
Takes `$timeout`, `$code` and `@param` as arguments. Then, it runs `&$code(@param)` with `$timeout`. Depending on the context, will return
+ `($res, $got_timeout)`
+ `$res`

#### `run_command`
runs a command in shell. Takes two parameters: `$cmd` and `%param`. Returns the exit code of the command.
`$cmd` may be:
+ a string.
+ an array of strings.
+ an array of arrays. Each array represents a command, and each command's output is piped into the following command's standard input. For this a shell command string is created with pipe symbols between each command.

> [!REMARK]
> From the source code:
> Each command is a list of strings meant to end up in the final command unchanged. In order to achieve this, every argument is shell-quoted.
> 
> Quoting can be disabled for a particular argument by turning it into a reference, this allows inserting arbitrary shell options.
> For instance: the `$cmd` `[ [ 'echo', 'hello', \'>/dev/null' ] ]` will not produce any output, while the `$cmd` `[ [ 'echo', 'hello', '>/dev/null' ] ]` will literally print: `hello >/dev/null`

`%param` may contain the next keys:
+ `timeout`
+ `umask`
+ `errmsg`
+ `input`
+ `output`
+ `outfunc`. function to process the text output.
+ `errfunc`
+ `logfunc`
+ `afterfork`. function to be executed after the command.
+ `noerr`
+ `keeplocale`
+ `quiet`
#### `run_fork_with_timeout`
This functions receives three arguments: `$timeout`, `$sub`, `$opts`.
SIGKILL after `$timeout`.  `$opts` must be a reference to a hash with a key `afterfork` that points to a subroutine.

#### `run_fork`
The function receives two arguments: `$code` and `$opts`. Then calls `run_fork_with_timeout(undef, $code, $opts)`. Not exported.

#### `pipe_socket_to_command`
Runs a command with a tcp socket as standard input. Takes `$cmd`, `$ip` and `$port`. Returns `undef`.
#### `file_copy`.
Makes a copy of a file. Takes `$filename`, `$dst`, `$max`, `$perm` as arguments. Then, it makes
```perl
file_set_contents($dst, file_get_contents($filename, $max), $perm)
```
#### `file_get_contents`
Takes `$filename`, `$max` as arguments. Get contents of a file.

#### `file_set_contents`
Takes `$filename`, `$data`, `$perm`, `$force_utf8` as arguments
Set contents to a file by creating a temporary file and then rename it.

#### `tempfile_contents`
Takes `$data`, `$perm` and `%opts` as arguments.
create an (ideally) anon file with the `$data` as content and return its FD-path and FH

#### `safe_print`
Takes `$filename`, `$fh` and `$data` as arguments. Attempts to write `$data` to `$fh`. Dies if not succeed.

### PVE::RESTHandler
#### `register_method`
This is an important method in order to create a new component. It adds commands commands and parameters to your new module, but also adds endpoints to the REST API. REST API and the command line tools use the same code. The _method_ takes `$info`, a hash reference, as argument. 

The package `PVE::CLIHandler` inherits this method, and registers the help method, that may also be inherited by the component you're developing. You may achieve this by adding this lines to your code:
```perl
use PVE::CLIHandler;
use base qw(PVE::CLIHandler);

# some code...

__PACKAGE__->register_method({
	# your command spec here
});
```

Check other repos to have an idea of how your command specs would look like.

After using the `register_method`, you may add the `$cmdef` variable (see `PVE/CLIHandler.pm` source code).  The next example is an adaptation from one in the code source:
```perl
our $cmddef = {
    command => [ __PACKAGE__, 'command', [ 'arg1', 'arg2' ], { node => $nodename } ],
    'do' => {
        this => [ __PACKAGE__, 'method', [ 'arg1' ], undef, sub {
            my ($res) = @_;
            print "$res\n";
        }],
        that => [ __PACKAGE__, 'subroutine' [] ],
    },
    dothat => { alias => 'do that' },
}
```

When you're defining some options for your command, you may need to add "standard options". Those are defined in `PVE::JSONSchema`. The definitions may be at `$method_schema`.

The HTTP server use the URL (a path) to find the corresponding method.

## pve-guest-common

### PVE::AbstractConfig
Your new module may have a package called `PVE::COMPONENT::Config` (or something like that). There are some method that you may implement:
+ `guest_type`
+ `config_file`
+ `cfs_config_file`

> [!REMARK]
>In order to properly write the config files in the pmxcfs, you may need to make modifications in the `pve-cluster` repo. Check the `cfs_file_version` function and the `$observed` variabloe in the `PVE::Cluster` package.

The source file have some useful comments.
The `AbstractConfig.pm` declares abstracts method related to:
+ Internal snapshot
+ Rollback
+ Config files
But also declares some methods related.

## pve-cluster
### PVE::Cluster
Uses the pmxcfs. 
#### `cfs_register_file`
receives `$filename`, `$parser`, `$writer` as argument. 
`$filename` will be added to the `$observed` variable (a hash ref). The `$parser` and `$writer` function refs are added to the `$file_info` hash ref.
`$writer` must craft a raw string to be written to a file.

> [!From the sources]
> this is just a readonly copy, the relevant one is in status.c from pmxcfs
> observed files are the one we can get directly through IPCC, they are cached
> using a computed version and only those can be used by the cfs_*_file methods

#### `cfs_read_file`
receives `$filename` and then calls `ccache_read` who uses `$parser` registered with `cfs_register_file` to parse the file.

#### `cfs_write_file`
receives `$filename` and then calls  `$writer` registered with `cfs_register_file` to craft the content to write to the file. The writing is actually done by `PVE::Tools::file_set_contents`.