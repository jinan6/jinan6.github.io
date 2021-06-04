---
title: JeecgBoot修改页面随笔
abbrlink: 738147356
date: 2021-06-04 11:27:10
tags: JeecgBoot
categories: JeecgBoot
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20210604113009.png
sticky:
top_img:
---

<div class="snote info"><p>修改页面的文件路径</p></div>

### 文档地址

JeecgBoot 开发文档：http://doc.jeecg.com

### 修改页面的一些默认文字，logo等

1. loading文字 （正在加载 Jeecg-Boot 快速开发平台,请耐心等待）

   位置：` index.html`

2. 浏览器标题（菜单名称 + Jeecg-Boot 企业级快速开发平台）

   ​	位置：`TabLayout.vue`

   `methods`下的`changeTitle`方法内的`projectTitle`，可以将其`赋值为你需要的内容`。

3. 侧边栏菜单上方的logo

   位置：`Logo.vue`

   修改两个img标签的src

   logo右侧的文字：

   `props-title-default`值

4. 侧边栏菜单展开关闭icon右侧的文字

   ​	位置：`GlobalHeader.vue`

   修改两个span标签的内容

5. 头部导航栏右侧的模块

   位置：`UserMenu.vue`

   欢迎，退出等等

6. 底部备案信息

   位置：`GlobalFooter.vue`

7. 登录界面

   位置：`UserLayout.vue`



### 参考链接

https://www.jianshu.com/p/6919a6d92a29