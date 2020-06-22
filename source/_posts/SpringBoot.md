---
title: SpringBoot
tags: 记录
categories: 记录
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200622093715.jpg
abbrlink: 1864766114
date: 2020-06-22 08:39:15
sticky:
top_img:
---

{% note success %}
Spring Boot 相关内容
{% endnote %}

### 什么是 Spring Boot

Spring Boot 是Spring社区发布的一个开源项目，旨在帮助开发者快速并且更简单的构建项目。大多数Spring Boot 项目只需要很少的配置文件。

### Spring Boot 自动装配的原理

在 spring 程序中 main方法中，添加**@SpringBootApplication** 或者 **@EnableAutoConfiguration** 会自动去maven容器中读取每个 starter 中的**spring.factories**文件，该文件里配置了所有需要被创建spring 容器中的**bean**。

### Spring Boot 读取配置文件的方式

Spring Boot 默认读取配置文件为 application.properties 或者是 application.yml

### Spring Boot的优缺点

#### 优点：

1. 快速构建项目
2. 对主流开发框架的无配置集成
3. 项目可独立运行，无须外部依赖 Servlet 容器
4. 提供运行时的应用监控
5. 极大的提高了开发、部署效率
6. 与云计算的天然集成

#### 缺点：

1. 如果你不认同spring框架，也许这就是缺点

### Spring Boot的几个常用注解

1. @RestController 和 @Controller 指定一个类，作为控制器的注解
2. @RequestMapping 方法级别的映射注解
3. @EnableAutoConfiguration和@SpringBootApplication是类级别的注解，根据maven依赖的 jar 来自动猜测完成正确的 spring 的对应配置，只要引入了spring-boot-starter-web的依赖，默认会自动配置 Spring MVC 和 Tomcat 容器
4. @Configuration 类级别的注解，一般这个注解用来标识main 方法所在的类，完成元数据 bean的初始化
5. @ComponentScan 类级别的注解，自动扫描加载所有的 Spring 组件包括 Bean注入，一般用在 main方法所在的类上
6. @ImportResource 类级别注解，当我们必须使用一个xml的配置时，使用@ImportResource和@Configuration来标识这个文件资源的类
7. @Autowired 注解，一般结合@ComponentScan注解，来自动注入一个 Service 或 Dao 级别的Bean
8. @Component 类级别注解，用来标识一个组件，比如我自定了一个 filter，则需要用此注解标识后，Spring Boot才会正确识别

### spring的IOC 和AOP

![](https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200622090710.jpg)

![](https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200622090735.jpg)

### Spring Boot 的核心配置文件有哪几个，区别是什么

Spring Boot 的核心配置文件是 application 和bootstrap 配置文件

application 配置文件，主要用于 Spring Boot 项目的自动化配置

bootstrap 配置文件有以下应用场景

使用 Spring Cloud Config 配置中心时，这时需要在 bootstrap 配置文件中添加连接到配置中心的配置属性来加载外部配置中心的配置信息； 一些固定的不能被覆盖的属性；一些加密/解密的场景

### Spring Boot 的配置文件有哪几种格式，有什么区别

**.properties 和 .yml**

yml拥有天然的树状结构；

在properties文件中是以”.”进行分割的， 在.yml中是用”:”进行分割；

.yml的数据格式是K-V格式（和json很像），并且通过”:”进行赋值；

在.yml中缩进一定不能使用TAB，否则会报很奇怪的错误；

每个k的冒号后面一定都要加一个空格；

.yml比.properties对中文对支持更友好。

### Spring Boot 需要独立的容器运行吗

可以不需要，内置Tomcat /jetty 等容器

### 运行 Spring Boot 有哪几种方式

1. 打包用命令或者放到容器中运行
2. 用 Maven / Gradle 插件运行
3. 直接执行 main 方法

### 如何集成 Spring Boot 和 ActiveMQ 

对于集成 Spring Boot 和 ActiveMQ，只需要引入相应的依赖。只需要很少的配置，并且不需要样板代码

### 什么是 Swagger

Swagger广泛用于可视化API，使用Swagger UI为前端开发人员提供在线沙箱。Swagger是用于生成RESTful Web服务的可视化表示的工具，规范和完整框架实现。它使文档能够以与服务器相同的速度更新。当通过Swagger正确定义时，消费者可以使用最少量的实现逻辑来理解远程服务并与其进行交互。因此，Swagger消除了调用服务时的猜测。

### 如何使用 Spring Boot实现 异常处理

Spring 提供了一种使用 ControllerAdvice 处理异常的非常有用的方法。通过实现一个ControllerAdvice类，来处理控制器类抛出的所有异常

### RequestMapping 和 GetMapping的不同之处

1. RequestMapping 具有类属性的，可以进行 GET，POST，PUT或者其他的注释中具有的请求方法
2. GetMapping 是GET请求方法中的一个特例。它只是 ResquestMapping 的一个延伸，目的是为了提高清晰度。

### Spring Boot 是否可以兼容老 Spring 项目

可以兼容，使用 @ImportResource 注入老 Spring 项目配置文件

### 如何理解 Spring Boot中的 Starters

**Starters**可以理解为启动器，它包含了一系列可以集成到应用里面的依赖包，你可以一站式集成**Spring**及其他技术，而不需要到处找实例代码和依赖包。

例如：你想使用 **Spring JPA**访问数据库，只要加入**spring-boot-starter-data-jpa** 启动器依赖就能使用了。

### Spring Boot 支持哪些日志框架

1. Java Util Logging
2. Log4j2
3. Lockback

如果你使用 Starters 启动器，Spring Boot 将使用Lockback作为默认的日志框架

### Spring Boot实现热部署的方式有哪几种

1. Spring Loaded
2. Spring-boot-devtools

### Spring Boot的项目的开发环境，生产环境如何切换

profile配置:

spring-boot默认为了支持不同的配置环境.

配置步骤：

1. 提供环境
   1. ​	按照命名模板:application-{profile}.properties(例如: application-pro1.properties/application-pro2.properties)
2. 选择激活的环境
   1. application.properties中设置:spring.profiles.active=pro1

### 如何使用Spring Boot实现分页和排序

使用Spring Boot实现分页非常简单。使用Spring Data-JPA可以实现将可分页的org.springframework.data.domain.Pageable传递给存储库方法。