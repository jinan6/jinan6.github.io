---
title: IDEA连接数据库出现的问题
tags: IDEA
categories: IDEA
abbrlink: 517722444
date: 2020-12-01 10:54:23
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20210604113009.png
sticky:
top_img:
---

{% note success %}  今天使用IDEA连接数据库时，出现问题，特此记录 {% endnote %}

### 报错

**Server returns invalid timezone. Go to 'Advanced' tab and set 'serverTimezone' prope**

服务器返回无效时区。进入“Advanced”选项卡并设置“serverTimezone”

提示我们时区不对，需要进行设置时区

### 解决

**方法一：**

同步MySQL的驱动，例如本机安装的是5.7版本的，那么IDEA要连接mysql也应该匹配下驱动版本。把Driver改成MySQL for 5.1就可以了

![](https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20201201111939.png)

**方法二：**

点击`Advanced`设置，里面更改时区设置为 `Hongkong`即可

![](https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20201201112032.png)