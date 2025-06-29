---
layout: post
title: pve-common and pve-guest-common | a non-official reference
date: 2025-06-27 13:25:59 +0200
tags: en dev cloud proxmox
author: gwynplaine
---

This is a non-official reference for the tools at the [pve-common](https://git.proxmox.com/?p=pve-common.git) and [pve-guest-common](https://git.proxmox.com/?p=pve-guest-common.git) repos.

Remember to take a look to the [README.dev](https://git.proxmox.com/?p=pve-common.git;a=blob_plain;f=README.dev;hb=HEAD) at the git repo.

## pve-common
### PVE::ProcFSTools
#### `check_process_running`
checks if a process is running. Reads `proc/$pid/stat` using `read_proc_pid_stat`.

#### `read_proc_pid_stat`
Reads the stat from a `$pid` passed as argument. Returns a reference to a hash containing the information if succeed, otherwise returns `undef`. The keys in the hash are: status, ppid, utime, stime, starttime, vsize, rss.

#### `read_memory_usage`
Returns memory usage of the current process. 

### PVE::Tools
#### `run_command`
run a command in shell. Takes two parameters: `$cmd` and `%param`. Returns the exit code of the command.
`$cmd` may be:
+ a string.
+ an array of strings.
+ an array of arrays. Each array represents a command, and each command's output is piped intothe following command's standard input. For this a shell command string is created with pipe symbols between eachcommand.

From the source code:
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
+ `afterfork`
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

#### `file_get_contents`
Takes `$filename`, `$max` as arguments. Get contents of a file.

#### `file_set_contents`
Takes `$filename`, `$data`, `$perm`, `$force_utf8` as arguments
Set contents to a file by creating a temporary file and then rename it.

#### `tempfile_contents`
Takes `$data`, `$perm` and `%opts` as arguments.
create an (ideally) anon file with the $data as content and return its FD-path and FH

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

After using the `register_method`, you may add the `$cmdef` variable (see `PVE::CLIHandler`).  The next example is an adaptation from one in the code source:
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
Your new module may have a package called `PVE::Config` (or something like that). There are some method that you may implement:
+ `guest_type`
+ `config_file`
+ `cfs_config_file`
The source file have some useful comments.
The `AbstractConfig.pm` declares abstracts method related to:
+ Internal snapshot
+ Rollback
+ Config files
But also declares some methods related.