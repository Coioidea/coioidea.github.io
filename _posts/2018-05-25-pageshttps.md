---
layout: post
title: "Github Pages支持HTTPS加密啦！"
categories: "dev"
tags: ["Lets encrypt","Github Page","HTTPS证书"]
---
# Github Pages支持HTTPS加密啦！
HTTPS加密是这几年的趋势啊，因为各大运营商的运营策略（苦笑），广告篡改，内容跳转……你的HTTP网站在数据收到前不知被人修改了多少次。并且HTTP在互联网上是明文的，安全也是重要威胁啊！而这次的Github Pages支持HTTPS也是大望所归。（明明是：hub啊，再没有小绿锁我就要跳槽啦·掀桌
<!-- moreandmore -->
首先呢，这次Github是和let's encrypt合作的。也因此，hub首次成为了let's encrypt的银牌会员（关于这个大厂，站长们应该很熟悉了吧！//将收费HTTPS证书扼杀在摇篮>^<）
![Enforce HTTPS](https://blog.github.com/assets/img/2018-05-01-github-pages-custom-domains-enforce-https.png)

如上图，开启自定义域名后，启用加密也是一键的事啊。然后关于pages的自定义域名配置绑定问题就不多讲了。大家都是有技术的人。
最后根据[Github的博客](https://blog.github.com/2018-05-01-github-pages-custom-domains-https/)的叙述，开启HTTPS的同时也会启用强大的CDN加速哦。因为上面托管的都是静态的网站，CDN压力不大。我个人开启后，确实速度更快啊！