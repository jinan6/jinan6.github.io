---
title: Github + Hexo 搭建个人博客基础篇
tags: hexo
categories: hexo和next
abbrlink: 31683
date: 2020-05-13 19:28:54
top: 9
essential: true
---

#### 前言

> 突发奇想，想自己搞一个博客于是就有了后来的事。记录下这个过程，积累一些经验，同时也方便以后自己看看

<!--more-->

#### 本文目录

- 安装环境
- 安装**Node.js**
- 添加国内镜像
- 安装**Git**
- 注册**Github**账号
- 创建**Git**仓库
- 安装**Hexo**
- 配置本地**Hexo**
- 连接**Github**与本地
- 写文章，发布
- 更换自己喜欢的**Hexo**主题
- 结语

#### 安装环境

要想搭建**Hexo**，我们先需要安装一下两个其他的东西

- <span style='color:red'>**Node.js**</span>
- <span style='color:red'>**Git**</span>

#### 安装Node.js

初识**Node.js**

> 简单的说 Node.js 就是运行在服务端的 JavaScript。
>
> Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。
>
> Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

点击 [这里](https://nodejs.org/en/download/) 进入==Node.js官网==下载对应得版本自行安装即可

![Node.js](https://img-blog.csdnimg.cn/2020051322344366.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)检查是否安装完成，按**Win+R**打开命令提示符，输入以下代码，查看版本号，如果出现，即为安装成功

```
node -v
npm -v
```

#### 添加国内镜像

换成阿里的国内镜像，同样是按**Win+R**，输入

```
npm config set registry https://registry.npm.taobao.org
```

#### 安装Git

初识Git

> Git是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。

#### 安装Git

点击 [这里](https://git-scm.com/download/win) 进去==Git官网==下载对应版本，自行安装即可![Git](https://img-blog.csdnimg.cn/20200513223543248.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)

按**Win+R**，输入以下命令查看是否安装成功

```
git --version
```

#### 注册Github账号

点击 [这里](https://github.com/) 进去官网，点击右上角 ==**Sign up**== 进行注册，如果有账号，直接登录即可

#### 创建Git仓库

登录之后新建一个仓库用来存储![创建仓库](https://img-blog.csdnimg.cn/20200513223630340.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)![基本设置](https://img-blog.csdnimg.cn/20200513222317701.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)

点击仓库右上角的 ==**Settings**==，进去页面后往下滑动，找到以下内容![GitHub Pages](https://img-blog.csdnimg.cn/20200513222438682.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)

我们就可以通过这里面的这个地址进行访问了

![首页](https://img-blog.csdnimg.cn/202005132225366.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)

以上是默认效果

#### 安装Hexo

认识什么是Hexo

> Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 [Markdown](http://daringfireball.net/projects/markdown/)（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

选择一个盘，在里面==新建一个文件夹==用来存放博客文件。建完后在该文件夹右键  <span style='color:red'>Git Bash Here</span> 输入以下 命令即可安装

```
$ npm install hexo-cli -g
```

输入 <span style='color:red'>hexo -v</span> 检验是否成功

#### 配置本地Hexo

在刚才新建的文件夹下 右键  <span style='color:red'>Git Bash Here</span> 输入以下 命令进行==初始化==

```
hexo init
npm install
```

初始化完成后接着输入 <span style='color:red'>hexo g</span> 生成静态网页，然后输入<span style='color:red'>hexo s</span> 打开本地服务器，

```
显示以下内容表示开启成功
INFO Hexo is running at http://0.0.0.0:4000/. Press Ctrl+C to stop.
```

在浏览器地址栏输入  http://localhost:4000/ 进入，就可以预览了

![首页](https://img-blog.csdnimg.cn/20200513222610660.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)

按 <span style='color:red'>Ctrl + C</span>关闭本地服务器



##### 常用命令

1. ==hexo g 生成静态网页==
2. ==hexo s打开服务器==
3. ==hexo clean 清理缓存==
4. ==hexo d 部署到 Github==

#### 连接本地与Github

###### 生成密钥

右键  <span style='color:red'>Git Bash Here</span> 输入以下 命令

```
git config --global user.name "Name"
git config --global user.email "Email"
```

里面的**Name**和**Email** 就是注册**Github**时的==用户名==和==邮箱==

然后生成密钥

```
ssh-keygen -t rsa -C "Email"
```

**Email**还是注册时的邮箱

接下来会出现

```
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/you/.ssh/id_rsa):
//到这里可以直接回车将密钥按默认文件进行存储
```

之后：

```
Enter passphrase (empty for no passphrase):
//这里是要你输入密码，其实不需要输什么密码，直接回车就行
Enter same passphrase again:
```

接下来

```
Your identification has been saved in /c/Users/you/.ssh/id_rsa.
Your public key has been saved in /c/Users/you/.ssh/id_rsa.pub.
The key fingerprint is:
这里是各种字母数字组成的字符串，结尾是你的邮箱
The key's randomart image is:
这里也是各种字母数字符号组成的字符串
```

这样密钥就生成了，一般会存放在 <span style='color:red'>/C/Users/you/.ssh/id_rsa.pub.</span>中

运行以下命令将其==复制==到剪贴板

```
clip < ~/.ssh/id_rsa.pub
```

###### 连接Github

点击==**Settings**=

![设置](https://img-blog.csdnimg.cn/20200513222646787.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)

再点击SSH and GPG keys，新建一个SSH，名字随便起，再把刚才复制的密钥粘贴进来

![新建SSH](https://img-blog.csdnimg.cn/20200513222738405.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)



然后打开博客文件夹下的==<span style='color:red'>_config.yml</span>== 文件，进行修改，这是博客的配置文件，需要修改以下才能连接**Github**

![文件夹](https://img-blog.csdnimg.cn/20200513222813871.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)

修改以下配置

```
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type:
```

改成

```
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repository: git@github.com:jinan6/jinan6.github.io.git
  branch: master
```

![deploy](https://img-blog.csdnimg.cn/20200513223037887.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)

然后右键  <span style='color:red'>Git Bash Here</span> 输入以下 命令,出现用户名，那就成功了

```
ssh -T git@github.com
//注意不要做任何修改
```

#### 写文章

在博客根目录下 ，右键  <span style='color:red'>Git Bash Here</span> 输入以下 命令安装一个插件

```
npm i hexo-deployer-git
```

然后输入，新建一片文章

```
hexo new post "article title"
引号内的是名字
```

会生成在以下目录里== **根目录/source/_posts=**=

然后就可以进行编辑了，编辑完成后 输入<span style='color:red'>hexo g</span> 生成静态网页，输入<span style='color:red'>hexo s</span> 打开本地服务进行预览，确认无误后输入 <span style='color:red'>hexo d</span>  部署到**Github**

#### 更换喜欢的主题

点击 这里 [主题](https://hexo.io/themes/) 进去**Hexo** 官网的主题库寻找自己喜欢的主题，选完之后进入它的**Github**地址

我这里以自用的**next**为例

![主题地址](https://img-blog.csdnimg.cn/20200513223250506.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)

然后打开**博客文件夹**下的的 ==**themes**== 目录，右键  <span style='color:red'>Git Bash Here</span> 输入以下 命令

```
$ git clone 此处填写你刚才复制的主题地址
```

例如：

```
$ git clone git@github.com:theme-next/hexo-theme-next.git
```

下载完成后会在==**themes**==文件夹下生成该主题的文件夹,然后打开**博客文件夹**下的<span style='color:red'>_config.yml</span> 文件，进行修改

搜索 **theme**![更改主题](https://img-blog.csdnimg.cn/20200513223146381.png)

这样就替换完成了，部署到**Github**，在**博客文件夹**根目录下右键  <span style='color:red'>Git Bash Here</span>  输入以下命令

```
hexo clean
hexo g
hexo d
```

这样在此访问网站就可以看到我们的主题就已经更换了

#### 结语

这样一个简单的个人博客就搭建完成了，后续推出一些美化的博客