---
title: 使用hexo-git-backup插件备份博客源文件
tags: Hexo
categories: 
  - Hexo
  - 备份
essential: true
abbrlink: 47733
date: 2020-05-17 18:25:20
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200619144053.jpg
---

> 在搭建好hexo博客之后也要给自己的博客进行备份，文章丢失可是很麻烦的一件事情。可以借助一个插件来进行备份源文件
>

#### 查看hexo版本

````javas
hexo version
````

#### 安装

如果你的版本是2.x.x使用这条命令：

````javas
npm install hexo-git-backup@0.0.91 --save
````

如果你的版本是3.x.x或者4.x.x则使用这条命令：

````javas
npm install hexo-git-backup --save
````

#### 建立分支

来到你的github仓库目录或者是coding的仓库目录，选择新建分支，我创建的分支名都为backup

#### 配置

打开博客配置文件_config.yml

在最下方添加

````javas
backup:
    type: git
    message: update xxx
    theme: coney,landscape,xxx
    repository:
       github: git@github.com:xxx/xxx.git,branchName
       gitcafe: git@github.com:xxx/xxx.git,branchName

````

**theme** 是主题名

**message** 是自定义信息

**branchName** 是分支名，用英文逗号和仓库名隔开备份

#### 备份

在博客根目录使用以下命令进行备份

````javascript
hexo backup
或者简写
hexo b
````

