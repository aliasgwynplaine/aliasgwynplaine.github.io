---
layout: post
title: proxmox-ve dev notes | non-official guide
date: 2025-07-08 17:01:59 +0200
tags: en dev cloud proxmox
author: gwynplaine
---

Proxmox VE is a set of perl scripts (and some C code) that interact with each other.

I couldn't find (jun 2025) a proper documentation to understand the code in order to develop functionalities. The existing docs seem to be oriented to users (sysadmins). As a consequence, I was forced to read a lot (A LOT) of perl code to understand how this different components interact with each other, and I thought it would be a good idea to share my notes so anyone curious or somebody trying to start into proxmox dev could learn something.

Don't forget to take a look at the official [README.dev](https://git.proxmox.com/?p=pve-common.git;a=blob_plain;f=README.dev;hb=HEAD) before doing anything.

----

If you want functions and package reference, you may take a look to [this post]({% post_url 2025-06-27-proxmox-common-non-official-ref %})

----
## Filesystem
+ PVE.
	+ API2. this is where the HTTP API definitions are declared.
	+ CLI. this is where the CLI commands are declared.
	+ COMPONENTSPECIFICFOLDERSANDFILES

## How is the HTTP API defined ?
You'll find a `PVE/API2` folder in every component. Here are the API definitions, requirements and code triggered every time a endpoint is invoked. They must be include in some file (package) at the pve-manager component, which will inherit `PVE::RestHandler`.
For example, in pve-manager, the file `PVE/API2/Nodes.pm` you may find the next lines:
```perl
__PACKAGE__->register_method({
    subclass => "PVE::API2::LXC",
    path => 'lxc',
});
```
And, in the component pve-containter, you'll find the package `PVE::API2::LXC`, and in this package, you'll see a call to `register_method`:
```perl
__PACKAGE__->register_method({
    subclass => "PVE::API2::LXC::Config",
    path => '{vmid}/config',
});
```
Which in turn, will contain registered:
```perl
__PACKAGE__->register_method({
    name => 'vm_config',
    path => '',
    method => 'GET'
    # ... 
});
# ...
__PACKAGE__->register_method({
    name => 'update_vm',
    path => '',
    method => 'PUT',
# ...
});
#...
```
This will place an endpoint at `/api2/json/nodes/<nodename>/lxc/<vmid>config` with the methods PUT and GET triggering the code specified at `PVE::API2::LXC::Config`.

## Components
### pve-manager
This component handles the web interface. It has a `PVE::HTTPServer` package.

You may be interested in the folder `PVE/Services` where you will find interesting stuff such as:
+ `pveproxy.pm`. actually runs the HTTP server at 8006 calling `PVE::HTTPServer->new(...)`. Inherits `PVE::Daemon`
+ `pvedaemon.pm`. runs an HTTP Server at 85 locally. Inherits `PVE::Daemon`
+ `pvescheduler.pm`.

The files at `PVE/API2` inheriting `PVE::RESTHandler` define the HTTP API. Those files are added by `PVE/API2.pm`.
### pve-common
This component is important for developing purposes. You may want to read it and see what functions can be used in case you have some task that it's likely to be executed frequently, e.g., running a command, getting stats for a file, getting the name of the current node, etc.

It also contains different package that define clases that are inherit by all the the other components.

### pve-cluster
This component contains the `pmxcfs` (written in C). This filesystem is shared between the nodes and uses FUSE and corosync[^1].

The `pmxcfs` is mounted in `/etc/pve/` and every node in the cluster may have its own folder inside the `nodes` folder. For instance, if our node is called `node1`, there will be a folder  `/etc/pve/nodes/node1` and inside this folder you will have the config files of the VMs and containers, inside the `qemu-server` and `lxc` folders respectively. More info about this in [the official docs](https://pve.proxmox.com/wiki/Proxmox_Cluster_File_System_(pmxcfs))
### qemu-server
This component contains the scripts that handle the virtual machines. Proxmox uses Qemu as the virtualisation technology for the VMs.
### pve-container
This component contains the scripts that handle the containers. Proxmox uses LXC as the virtualisation technology for the containers.
## Building
If you take a look to the makefiles, you'll see that the components use `sbuild` to build.


----

[^1]: https://pve.proxmox.com/wiki/Proxmox_Cluster_File_System_(pmxcfs)
