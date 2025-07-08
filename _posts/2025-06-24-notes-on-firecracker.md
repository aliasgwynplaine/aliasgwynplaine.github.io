---
layout:     post
title:      notes on firecracker microvms
date:       2025-06-24 13:25:59 +0200
tags:       en dev cloud
author:     gwynplaine
---

As a part of my _stage_ at a lab, I needed to know how to operate firecracker microvms and have an idea of how they work.

So here I present an ordered list of resources not only to get started with firecracker but also tu understand a little about what it is happening at a lower level.

This list will change as I discover more resources.

## practical information
1. [firecracker-docs-getting-started](https://github.com/firecracker-microvm/firecracker/blob/main/docs/getting-started.md) installation. "hello world".
2. [firecracker-docs-network-setup](https://github.com/firecracker-microvm/firecracker/blob/main/docs/network-setup.md) network. routes. firewall.
3. [firecracker-docs-rootfs-kernel-set-up](https://github.com/firecracker-microvm/firecracker/blob/main/docs/rootfs-and-kernel-setup.md). custom rootfs and kernel image. freeBSD.
4. [firecracker-docs-vsocks](https://github.com/firecracker-microvm/firecracker/blob/main/docs/vsock.md).
5. [firecracker-docs-actions](https://github.com/firecracker-microvm/firecracker/blob/main/docs/api_requests/actions.md). API. HTTP. unix sockets.
6. [firecracker-docs-prod-host-setup](https://github.com/firecracker-microvm/firecracker/blob/main/docs/prod-host-setup.md). host setup for production envinronments.
7. [firecracker-docs-device-api](https://github.com/firecracker-microvm/firecracker/blob/main/docs/device-api.md). API. HTTP.
8. [firecracker-docs-mmds](https://github.com/firecracker-microvm/firecracker/blob/main/docs/mmds/mmds-user-guide.md)

> To inspect the Firecracker API, you may want use the [swagger editor](https://editor.swagger.io/). The specification is [here](https://github.com/firecracker-microvm/firecracker/blob/main/src/firecracker/swagger/firecracker.yaml)

## deeper technical questions
1. [firecracker-docs-desing](https://github.com/firecracker-microvm/firecracker/blob/main/docs/design.md)
2. [article: some remarks on the arch](https://ongres.com/blog/automation-to-run-vms-based-on-vanilla-cloud-images-on-firecracker/)
3. [article: deep dive into firecracker](https://unixism.net/2019/10/how-aws-firecracker-works-a-deep-dive/)
4. [paper from the creators](https://www.usenix.org/system/files/nsdi20-paper-agache.pdf)


## some code & examples
1. [on firecracker automation](https://gitlab.com/ongresinc/blog-posts-src/-/tree/master/202012-firecracker_cloud_image_automation). bash.
4. [on firecracker automation with go](https://jvns.ca/blog/2021/01/23/firecracker--start-a-vm-in-less-than-a-second/). go sdk.


