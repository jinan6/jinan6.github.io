---
title: linux虚拟机 安装java及配置环境（centos 6.7）
categories: linux
abbrlink: 59764
date: 2020-05-11 16:09:33
tags:
---

<center>linux安装java环境</center>

<!--more-->

#### 安装

***第一步：下载JDK***
进入https://www.oracle.com/java/technologies/javase-jdk8-downloads.html下载合适的JDK版本，进行安装

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191213105834340.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)
选择合适的版本 
由于是linux系统，所以需要下载linux版本的  及后缀名为 **tar.gz**的
本文  以   **jdk-8u5-linux-i586.tar.gz**  为例

***第二步 创建目录***

在**usr**目录下创建 **java**目录

```java
mkdir /usr/java
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191213110413660.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)
把下载好的文件放在**java**目录下
可以用  **filezilla** 工具进行传输

输入 ls 查看是否上传成功
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191213110705951.png)
出现上图即为成功

***第三步 解压***
进入 **/usr/java/**目录下准备解压

```java
tar zxvf jdk-8u5-linux-i586.tar.gz
```
等待解压完成

# 配置环境变量
输入`vim /etc/profile`
按 i 键进行插入
在最下面添加以下内容

```java
set java environment
JAVA_HOME=/usr/java/jdk1.8.0_05        
JRE_HOME=/usr/java/jdk1.8.0_05/jre     
CLASS_PATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib
PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin
export JAVA_HOME JRE_HOME CLASS_PATH PATH
```
注意：JAVA-HOME   JRE-HOME 均为你自己的路径  和你自己的JDK

然后按 Esc键  `:wq` 键  保存退出
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191213111507307.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)

**让修改生效**

```java
source /etc/profile
```

**测试**

```java
java -version
```
显示 java 版本信息，则说明 JDK 安装成功
