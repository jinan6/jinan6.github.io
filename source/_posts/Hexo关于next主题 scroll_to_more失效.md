---
title: hexo关于next主题 scroll_to_more失效
tags: Hexo
categories: 
	- Hexo
	- Next
abbrlink: 49984
date: 2020-05-13 09:16:04
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200530093305.jpg
---

<center>在美化过程中遇到的问题</center>

###### 问题：

在使用了<--more-->标签后，点击阅读原文会自动下滑到这个标签之下的内容中，个人感觉体验不是太好

------



###### 解决：

(1)：此方法适用于老版本

在主题配置文件搜索“ scroll_to_more: ” 改成 “ scroll_to_more: false ” 就可以了。

------

(2)：新版本已经移除此项，官方认为scroll_to_more是个默认行为for任何hexo主题。需要进行强制修改，在\themes\next\layout_macro\post.swig中将

````html
<a class="btn" href="{{ url_for(post.path) }}#more" rel="contents">
````

修改为

````html
<a class="btn" href="{{ url_for(post.path) }}" rel="contents">
````



