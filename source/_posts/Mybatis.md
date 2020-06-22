---
title: Mybatis
tags: 记录
categories: 记录
cover: 'https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200622084022.jpg'
abbrlink: 3661501281
date: 2020-06-22 08:40:49
sticky:
top_img:
---

{% note success %}
mybatis相关内容
{% endnote %}

在使用MyBatis的时候,除了可以使用@Param注解来实现多参数入参,还可以用（**A**）传递多个参数值。

​		A.用Map对象可以实现传递多参数值

​		B.用List对象可以实现传递多参数值

​		C.用数组的方式传递

​		D.用Set集合的方式传递

### 什么是MyBatis

MyBatis是一个可以自定义SQL、存储过程和高级映射的持久层框架

### MyBatis的缓存

MyBatis 的缓存分为一级缓存和二级缓存，一级缓存放在 session里面，默认就有，二级缓存放在它的命名空间里，默认是不打开的，使用二级缓存，属性类需要实现Serializable序列化接口（可用来保存对象的状态），可在它的映射文件中配置< cache/>

### \#{}和${}的区别是什么

#{}是预编译处理，${}是字符串替换

mybatis 在处理#{}时，会将SQL中的#{}替换为？号，调用PreparedStatement的set方法来赋值

Mybatis在处理时，就是把${}替换成变量的值。

使用#{}可以有效的防止SQL注入，提高系统安全性。

### MyBatis框架适用场合

1. MyBatis专注于SQL本身，是一个足够灵活的DAO层解决方案
2. 对性能的要求很高，或者需求变化较多的项目，如互联网项目，MyBatis将是不错的选择。

### Mybatis分为哪三层

1. API接口层：提供给外部使用的接口API
2. 数据处理层：负责具体的SQL
3. 基础支撑层：负责最基本的功能支撑，如连接管理，事务管理，配置加载和缓存处理

### 什么情况下用注解绑定,什么情况下用xml绑定

当Sql语句比较简单时候,用注解绑定；当SQL语句比较复杂时候,用xml绑定,一般用xml绑定的比较多

### 在mapper中如何传递多个参数

1. 直接在方法中传递参数，xml文件用\#{0} #{1}来获取
2. 使用 @param 注解:这样可以直接在xml文件中通过#{name}来获取

### resultType resultMap的区别

1. 类的名字和数据库相同时，可以直接设置resultType参数为Pojo类
2. 若不同，需要设置resultMap 将结果名字和Pojo名字进行转换

### MyBatis的好处是什么

1. MyBatis把sql语句从Java源程序中独立出来，放在单独的XML文件中编写，给程序的维护带来了很大便利。
2. MyBatis封装了底层JDBC API的调用细节，并能自动将结果集转换成Java Bean对象，大大简化了Java数据库编程的重复工作。
3. 因为MyBatis需要程序员自己去编写sql语句，程序员可以结合数据库自身的特点灵活控制sql语句，因此能够实现比Hibernate等全自动orm框架更高的查询效率，能够完成复杂查询。

### 什么是Mybatis的接口绑定，有什么好处

Mybatis实现了DAO接口与xml映射文件的绑定，自动为我们生成接口的具体实现，使用起来变得更加省事和方便。

### Mybatis的好处

把Sql语句从Java中独立出来。

封装了底层的JDBC，API的调用，并且能够将结果集自动转换成JavaBean对象，简化了Java数据库编程的重复工作。

自己编写Sql语句，更加的灵活。

入参无需用对象封装（或者map封装）,使用@Param注解

### Mybatis配置一对多

```xml
<collection property="topicComment" column="id" ofType="com.tmf.bbs.pojo.Comment" select="selectComment" />
property：属性名
column：共同列
ofType：集合中元素的类型
select：要连接的查询
```

### Mybatis配置一对一

```xml
<association property="topicType" select="selectType" column="topics_type_id" javaType="com.tmf.bbs.pojo.Type"/>
property：属性名
select：要连接的查询
column：共同列
javaType：集合中元素的类型
```

### Mybatis的优点

基于 SQL 语句编程，相当灵活，不会对应用程序或者数据库的现有设计造成任

何影响，SQL 写在 XML 里，解除 sql 与程序代码的耦合，便于统一管理；提供 XML

标签，支持编写动态 SQL 语句，并可重用。

与 JDBC 相比，减少了 50%以上的代码量，消除了 JDBC 大量冗余的代码，不

需要手动开关连接；

很好的与各种数据库兼容（因为 MyBatis 使用 JDBC 来连接数据库，所以只要

JDBC 支持的数据库 MyBatis 都支持）。

能够与 Spring 很好的集成；

提供映射标签，支持对象与数据库的 ORM 字段关系映射；提供对象关系映射

标签，支持对象关系组件维护。

### Mybatis的缺点

SQL 语句的编写工作量较大，尤其当字段多、关联表多时，对开发人员编写

SQL 语句的功底有一定要求。

SQL 语句依赖于数据库，导致数据库移植性差，不能随意更换数据库。

### MyBatis 框架适用场合

MyBatis 专注于 SQL 本身，是一个足够灵活的 DAO 层解决方案。

对性能的要求很高，或者需求变化较多的项目，如互联网项目，MyBatis 将是

不错的选择。

### Mybais 基本注解有什么 

1. @Insert简单插入
2. @Upload简单修改
3. @Delete简单删除
4. @Select简单查询

### Mybatis的表关联的映射有哪几种

一对一查询： 一对多查询： 多对多查询：

### JDBC缺点是什么

结果处理存在着重复代码，处理相当的麻烦，sql写在代码中不好维护，频繁的创建数据库连接对象容易造成系统资源的浪费。

### mybatis是如何解决JDBC存在的问题

比mybatis将sql语句配置在一个xml文件中与Java代码分离，这样利于维护，还有mybatis将自动封装Java对象映射到sql语句

### 实现一对多有哪几种方式

两种方式：联合查询、嵌套查询两个方式。嵌套查询它是先查一个表，然后根据这个表里的外键ID，再去另一个表里查询数据。联合查询它是通过几个表一起联合查询的，只查询一次。

### 使用Mybatis框架时 当实体类中的属性名和表中的字段名不一样，怎么办

1.  写sql语句是起别名，别名跟类名属性保持一致
2.  在Mapper映射中使用resultMap来自定义映射规则