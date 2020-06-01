---
title: linux虚拟机 安装Tomcat9.0（centos 6.7）
categories: linux
abbrlink: 13258
date: 2020-05-11 16:03:24
tags: linux
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200530094150.jpeg
---

<center>linux虚拟机上安装Tomcat</center>

linux虚拟机上安装Tomcat

注意：安装软件之前要安装java JDk

安装软件：apache-tomcat-9.0.29.tar.gz
下载地址：https://tomcat.apache.org/download-90.cgihttps://tomcat.apache.org/download-90.cgi
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191212173304320.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)
1、创建目录 ：`mkdir /usr/tomcat`
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191212173712986.png)
2、将下载的文件 移动到 /usr/tomcat/目录下
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191212173835943.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)
3、进行解压

```java
tar -xzvf  apache-tomcat-9.0.29.tar.gz
```
![解压](https://img-blog.csdnimg.cn/20191212174148591.png)
4、解压完成后 启动Tomcat
	进入Tomcat里面的bin 目录

```java
cd bin
```
进入bin目录后
![bin目录](https://img-blog.csdnimg.cn/20191212180612410.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)
执行： `./startup.sh`  -->启动tomcat

执行： `./shutdown.sh`  -->关闭tomcat
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191212174704499.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)

## 设置开机自启

每次开机都要启动，有点麻烦

可以设置成开机自启

1、找到/etc文件夹下的rc.local文件，
	输入`rc.local`  按 i 键 或 insert 键进行插入
	
2、在文件的最后添加以下java环境变量和启动tomcat命令

```java
export JAVA_HOME=/usr/java/jdk1.8.0_05 	

export JRE_HOME=$JAVA_HOME/jre

sh /usr/tomcat/apache-tomcat-9.0.29/bin/startup.sh
```
![均为你自己路径](https://img-blog.csdnimg.cn/20191212175306543.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)
添加完成后  按Esc 键 
然后  按  `:wq` 进行保存退出  （前面有一个英文的冒号，不要漏掉）

3、然后给 rc.local文件 添加权限

```java
chmod +x rc.local
```
4、最后重启 ，即可访问Tomcat

```java
reboot
```