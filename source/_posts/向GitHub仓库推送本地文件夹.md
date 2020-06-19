---
title: 向GitHub仓库推送本地文件夹
tags: Git
categories: Git
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200619150022.jpg
abbrlink: 3120427724
date: 2020-06-04 19:37:43
sticky:
---

> 向GitHub仓库推送本地文件夹

首页先在**GitHub**上新建一个仓库，取名任意

其次在本地随便新建一个文件夹，在该文件夹内右键**Git Bash Here**

输入以下命令，下载到本地

```code
git clone  #后面跟上你的仓库地址
```

然后在下载下来的文件夹内，加入你想要添加的文件

添加完成后，输入以下命令

````code
git add .    #添加全部文件（git  add  -A）
git commit -m 'add all the file'    #提交修改
git status    #查看是否还有未提交
git remote  add  origin  你的仓库地址    #远程仓库关联到origin名称上
git push origin master    #将add内容推送到远程仓库 
````

上传过程中可能还会需要验证你的GitHub的用户名和密码，验证完成稍等一会即可