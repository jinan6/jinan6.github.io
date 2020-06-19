---
title: IDEA设置Maven仓库阿里云镜像
tags: IDEA
categories: IDEA
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200619150139.jpg
abbrlink: 2352548230
date: 2020-06-10 09:10:54
sticky:
top_img:
---

{% note success %} 使用maven.aliyun.com中的仓库地址作为下载源，速度更快更稳定 {% endnote %}

阿里云maven仓库地址：[https://maven.aliyun.com/mvn/view](https://links.jianshu.com/go?to=https%3A%2F%2Fmaven.aliyun.com%2Fmvn%2Fview)

## 过程

1. 找到idea中maven中的“**settings.xml**”位置

2. 一般在安装目录下的**IntelliJ IDEA 2020.1\plugins\maven\lib\maven3\conf**里

3. 找到< mirror > 标签

4. 在标签下加入以下代码

   ```code
   <mirror>
       <id>aliyunmaven</id>
       <mirrorOf>*</mirrorOf>
       <name>阿里云公共仓库</name>
       <url>https://maven.aliyun.com/repository/public</url>
   </mirror>
   ```

   

![](IDEA设置Maven仓库阿里云镜像/20200610091848.png)

然后保存即可