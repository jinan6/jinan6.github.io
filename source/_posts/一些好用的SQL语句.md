---
title: 一些好用的SQL语句
abbrlink: 1321241776
date: 2020-09-08 14:45:29
tags: MySQL
categories: MySQL
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200909102906.jpg
---

<div class="snote success"><p>一些简单好用的SQL语句</p></div>

### ISNULL

使用指定的替换值替换 NULL

**语法：**

```sql
ISNULL ( check_expression , replacement_value )
```

**参数说明：**

1. check_expression 被检查是否为NULL的表达式，如果不为NULL，直接返回
2. check_expression 为NULL时返回的表达式

简单来说，就是如果 check_expression 不为 NULL，那么返回该表达式的值；否则返回 replacement_value。

### GROUP_CONCAT

如果有一条数据重复出现很多次，看上去就不太直观

使用这个函数可以将相同的行组合起来

**例子：**

```sql
select id,GROUP_CONCAT(name) from user group by id
```

### 去除重复列

1. 单表`distinct`
2. 多表`group by`

**也可以放在COUNT()中使用！**

**注意：**group by 必须放在 order by 和 limit之前，不然会报错

具体请看原文链接  [sql查询去除重复值语句](https://www.cnblogs.com/techliang666/p/10881402.html)

### UNION 语法

UNION 操作符用于合并两个或多个 SELECT 语句的结果集。

注意，UNION内部的 SELECT 语句必须拥有相同数量的列。列也必须拥有相似的数据类型。同时，每条 SELECT 语句中的列的顺序必须相同。

例子：

```sql
SELECT column_name(s) FROM table_name1
UNION
SELECT column_name(s) FROM table_name2
```

详细链接 [W3school](https://www.w3school.com.cn/sql/sql_union.asp)

<center style="font-size: 20px;">不定时补充~</center>

