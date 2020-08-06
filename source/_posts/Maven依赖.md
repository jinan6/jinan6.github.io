---
title: Maven依赖
tags:
  - Maven
categories:
  - Maven
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200806170404.jpg
sticky: 9
abbrlink: 3261239934
date: 2020-06-18 10:05:52
top_img:
---

{% note success %}
一些常用的Maven依赖
{% endnote %}



### MySQL

````xml
        <!--MySQL-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.13</version>
        </dependency>
````



### log4j

````xml
        <!--log4j-->
        <dependency>
            <groupId>log4j</groupId>
            <artifactId>log4j</artifactId>
            <version>1.2.17</version>
        </dependency>
````



### druid

```xml
        <!--druid-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.1.14</version>
        </dependency>
```



### Mybatis

```xml
        <!--引入mybatis-->
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
            <version>2.1.0</version>
        </dependency>
```



### Thymeleaf

```xml
        <!--thymeleaf模板引擎-->
        <dependency>
            <groupId>org.thymeleaf</groupId>
            <artifactId>thymeleaf-spring5</artifactId>
        </dependency>
        <dependency>
            <groupId>org.thymeleaf.extras</groupId>
            <artifactId>thymeleaf-extras-java8time</artifactId>
        </dependency>
```



### Thymeleaf和security整合包

```xml
        <!-- thymeleaf整合包 -->
        <dependency>
            <groupId>org.thymeleaf.extras</groupId>
            <artifactId>thymeleaf-extras-springsecurity4</artifactId>
            <version>3.0.4.RELEASE</version>
        </dependency>
```

### Spring整合thymeleaf模板

```yml
<!--thymeleaf模板-->
<dependency>
    <groupId>org.thymeleaf</groupId>
    <artifactId>thymeleaf-spring5</artifactId>
</dependency>
<dependency>
    <groupId>org.thymeleaf.extras</groupId>
    <artifactId>thymeleaf-extras-java8time</artifactId>
</dependency>
```



### Shiro

```xml
        <!-- shiro -->
        <dependency>
            <groupId>org.apache.shiro</groupId>
            <artifactId>shiro-spring</artifactId>
            <version>1.5.3</version>
        </dependency>
```



### SpringSecurity

```xml
        <!--security-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
            <version>2.3.1.RELEASE</version>
        </dependency>
```

### 热部署

```xml
<!-- 热部署 -->
        <dependency>
			    <groupId>org.springframework.boot</groupId>
			    <artifactId>spring-boot-devtools</artifactId>
			    <optional>true</optional> <!-- 这个需要为 true 热部署才有效 -->
		</dependency>
```

### JSONObject

```yml
        <dependency>
            <groupId>net.sf.json-lib</groupId>
            <artifactId>json-lib</artifactId>
            <version>2.4</version>
            <!-- 必须加jdk的版本号 -->
            <classifier>jdk15</classifier>
        </dependency>
```



### 常用命名空间

#### th:

```html
xmlns:th="http://www.thymeleaf.org"
```

#### sec:

```html
xmlns:sec="http://www.thymeleaf.org/thymeleaf-extras-springsecurity4"
```





