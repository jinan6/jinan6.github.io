---
title: MySQL数据库优化
tags: MySQL
categories:
  - MySQL
  - 优化
abbrlink: 3155752545
date: 2020-06-04 15:40:20
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200619145829.jpg
sticky:

---

{% note success %} 关于MySQL数据库优化 {% endnote %}

## 了解为什么要数据库优化

### 数据库优化的目的

#### 避免出现页面访问错误

- 由于数据库连接timeout产生页面5xx错误
- 由于慢查询造成页面无法加载
- 由于阻塞造成数据无法提交

#### 增加数据库的稳定性

- 很多数据库问题都是由于低效的查询引起的

#### 优化用户体验

- 流畅页面的访问速度
- 良好的网站功能体验

## 了解数据库优化的几个方式

### 优化方式

#### 可以从几个方面进行数据库优化

![优化方式](MySQL数据库优化/image-20200604155255484.png)

#### 如何查看SQL的查询效率

在日常工作中，我们有时会开慢查询去记录一些执行时间比较久的SQL语句，找出这些SQL语句并不意味着完事了，此时我们常常用到<span style="color:red">**explain**</span>这个命令来查看这个SQL语句的执行计划，查看该SQL语句有没有使用上了索引，有没有做全表扫描，这些都可以通过**explain**命令来查看。所以我们深入了解MySQL的基于开销的优化器，还可以获得很多可能被优化器考虑到的访问策略的细节，以及当运行SQL语句时哪种策略预计会被优化器采用

- --实际SQL，查找用户名为Jefabc的员工
- select * from emp where name ='Jefabc' ;
- <span style="color:red">-- 查看SQL是否使用索引，前面加上explain即可</span>
- explain  select * from emp where name ='Jefabc' ;



#### 概要描述：

**explain 出来的信息有10列，分别是id、select_type、table、type、possible_keys、key、key_len、ref、rows、Extra。**

1. id：选择标识符
2. select_type： 表示查询的类型
3. table： 输出结果的集
4. type： 表示表的连接类型
   - 对外访问方式，表示MySQL在表中找到所需行的方式，又称“访问类型”
   - 常用的类型有 **ALL**、**index**、**range**、**ref**、**eq_ref**、**const**、**system**、**NULL**
   - ALL：FUll Index Scan，MySQL将遍历全表以找到匹配的行
   - index：Full Index Scan，index与ALL区别为index类型值遍历索引树
   - range：只检索给定范围的行，使用一个索引来选择行
   - ref：表示上述表的连接匹配条件，即哪些列或常用被用于查找索引列上的值
5. possible_keys：表示查询时，可能使用的索引
6. key：表示实际使用的索引
7. key_len：索引字段的长度
8. ref：列与索引的比较
9. rows：扫描出的行数（估算的行数）
10. filtered：按表条件过滤的百分比
11. Extra：执行情况的描述和说明

## 使用索引和优化数据表结构来优化数据库查询

### 索引创建原则

<span style="color:red">1、索引创建原则</span>

a. ORDER BY +  LIMIT组合的索引优化

如果一个SQL语句形如：

**SELECT [column1],[column2..... FROM [TABLE] ORDER BY [sort] LIMIT[offset],[LIMIT];**

这个SQL语句优化比较简单，在[sort]这个栏位.上建立索引即可。



b.WHERE + ORDER BY +LIMIT组合的索引优化



如果一个SQL语句形如:

**SELECT [column1],[column2.... FROM [TABLE] WHERE [columnX] =[VALUE] ORDER BY [sort] LIMIT [offset],[LIMI刀];** 

这个语句，如果你仍然采用第一个例子中建立索引的方法，虽然可以用到索引，但是效率不高。更高效的方法是建立一个联合索引(columnX ,sort)

- 怎么加快查询速度，优化查询效率，主要原则就是应尽量避免全表扫描，应该考虑在**where**及**order by**涉及的列上建立索引。
- 建立索引不是建的越多越好，原则是：
  - **第一**：第一:一个 表的索引不是越多越好，也没有一一个具体的数字， 根据以往的经验，一一个表的索引最多不能超过6个，因为索引越多，对update 和insert操作也会有性能的影响，涉及到索引的新建和重建操作。
  - **第二**：建立索引的方法为：
    - 多数查询经常使用的列：
    - 很少进行修改操作的列
    - 索引需要建立在数据差异化大的列上

**四种索引的使用场景**

PRIMARY,INDEX,UNIQUE这三种是一类

PRIMARY主键。就是唯一且不能为空

INDEX索引，普通的

UNIQUE 唯一索引。不允许有重复。

FULLTEXT是全文索引，用于在一篇文章中，检索文本信息的。

举个例子来说，比如你在为某商场做一个会员卡的系统。

这个系统有一个会员表

有下列字段：

````code
会员编号  INT
会员姓名  VARCHAR(10)
会员身份证号码  VARCHAR(18)
会员电话  VARCHAR(10)
会员地址 VARCHAR (50)
会员备注信息 TEXT

````

<span style="color:red">2、SQL查询注意部分</span>

1. 任何地方都不要使用 select * from t，用具体的字段列表代替  *****，不要返回用不到的任何地段

2. 应尽量避免在where子句中使用**！=**或**<>**操作符，否则将引擎放弃使用索引而进行全表扫描

3. 应尽量避免在where子句中对字段进行表达式操作，这将导致引擎放弃使用索引而进行全表扫描。

   如:

   select id from t where num/2= 100

   应改为: 

   select id from t where num=100*2

4. 4.应尽量避免在where子句中使用or来连接条件，否则将导致引擎放弃使用索引而进行全表扫描，

如:

select id from t where num=10 or num=20

应改为:

select id from t where num=10 union all select id from t where num=20

### 表结构方面优化

1. 1.选择最合适的字段属性，使用可以存在数据的最小的数据类型，例如邮政编码，手机号码这类定长的数字可以用char(6),char(11);性别或者是否这种判断性文字可以用tinyint;字段属性尽量为notnull这样不用判断是否为空，减少一个步骤(用其他方式表达你想表达的NULL比如-1) ;如果一定要用text这种类型，最好是采用分表存储; 
2. 2.将常用信息和不常用信息分表存储，比如一个商城网站的用户表，用户的昵称，头像，密码，账号这类字段用户登录就会用到，而用户的兴趣爱好了，喜欢的颜色了这种字段就分表存储，相信大家京东账号中的个人信息可能也就在注册的时候打开过，以后就再没注意过了吧。

