---
title: SpringBoot添加热部署
categories: SpringBoot
tags: maven依赖
abbrlink: 10499
date: 2020-05-10 12:12:57
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200530093615.jpeg
---

<center>springBootmaven依赖</center>

```java
<!-- 热部署 -->
        <dependency>
			    <groupId>org.springframework.boot</groupId>
			    <artifactId>spring-boot-devtools</artifactId>
			    <optional>true</optional> <!-- 这个需要为 true 热部署才有效 -->
		</dependency>
```