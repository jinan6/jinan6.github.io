---
title: MySQL数据库引擎
essential: true
tags: MySQL
categories: MySQL
abbrlink: 29333
date: 2020-05-25 19:58:29
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200530092928.jpeg
---

> 关于数据库引擎

<!--more-->



````sql
INNODB  默认使用
MYISAM  早些年使用
````



### INNODB引擎和MYISAM引擎的区别

|              | MYISAM | INNODB         |
| ------------ | ------ | -------------- |
| 事务支持     | 不支持 | 支持           |
| 数据行锁定   | 不支持 | 支持           |
| 外键约束     | 不支持 | 支持           |
| 全文索引     | 支持   | 不支持         |
| 表空间的大小 | 较小   | 较大，约为两倍 |

常规使用操作

- MYISAM   节约空间，速度较快
- INNODB   安全性高，事务的处理，多表用户操作



> 在物理空间的位置

所有数据库文件都存在**data**目录下

本质还是文件的存储！

### MySQL引擎在物理文件上的区别

- InnoDB 在数据库表中只有一个*.frm文件，以及上级目录下的 ibdata1文件
- MYISAM对应文件
  - *.frm   表结构的定义文件
  - *.MYD   数据文件（data）
  - *.MYI  索引文件（index）



