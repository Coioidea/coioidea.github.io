---
layout: post
title: "更新Manjaro Kernel"
categories: dev
tags: ["Kernel","Manjaro"]
# 更新Manjaro Kernel
---
最近因为忍受不了debian系包更新太慢，无奈使用了Manjaro，没想到，基于Arch系的Manjaro是如此方便。然而，系统自带的内核居然还是4.9的，这实在令人难以忍受，可能是出于稳定的考虑？（不过Manjaro还要稳定？）遂打开系统自带的设置管理器，可是每次我更新总会出现如下情况：
<!-- moreandmore -->
![Kernel](http://datast.qiniudn.com/20180511/0d34e5fa531eb383.png)

只能通过终端的方式操作，查了一下官方的wiki，有点头绪
就是通过pacman搞定，但要搞清楚需要多少包，比如我，有双显卡，如上图，那几个包都需要安装。

	sudo pacman -Syu linux416 linux416-bbswitch linux416-nvidia linux-416-r6168

每个人需要安装的包都不一样，建议先通过GUI方式确定一下包后再在命令行键入。


Ref:
* [Manjaro Kernels - Manjaro Linux](https://wiki.manjaro.org/index.php?title=Manjaro_Kernels#Identifying_the_Kernel_Being_Used)
* [The Linux Kernel Archives](https://www.kernel.org/)
