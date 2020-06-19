---
title: SpringBoot集成Swagger
tags:
  - SpringBoot
  - Swagger
categories: 
  - SpringBoot
  - Swagger
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200619150441.jpg
abbrlink: 1553907357
date: 2020-06-14 19:39:59
sticky:
top_img:
---

> Swagger 是一个规范和完整的框架，用于生成、描述、调用和可视化 RESTful 风格的 Web 服务。
>
> 总体目标是使客户端和文件系统作为服务器以同样的速度来更新。文件的方法、参数和模型紧密集成到服务器端的代码，允许 API 来始终保持同步。Swagger 让部署管理和使用功能强大的 API 从未如此简单。

### SpringBoot集成Swagger

1. 新建一个springboot项目

2. 引入pom依赖

   ```xml
   <!--swagger依赖-->
           <!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger2 -->
           <dependency>
               <groupId>io.springfox</groupId>
               <artifactId>springfox-swagger2</artifactId>
               <version>2.9.2</version>
           </dependency>
           <!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger-ui -->
           <dependency>
               <groupId>io.springfox</groupId>
               <artifactId>springfox-swagger-ui</artifactId>
               <version>2.9.2</version>
           </dependency>
   ```

   

3. 配置Swagger------> config配置

   ```java
   @Configuration
   @EnableSwagger2 //开启Swagger2
   public class SwaggerConfig {
       
   }
   
   ```

   

4. 测试运行，访问swagger界面 http://127.0.0.1:8080/swagger-ui.html

   效果图：

   ![Swagger](https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200614195806.png)

### 配置Swagger的bean实例

Swagger的bean实例

````java
    //配置Swagger的Docket的bean实例
    @Bean
    public Docket docket(){
        return  new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo());
    }

    //配置Swagger信息  apiInfo
    private ApiInfo apiInfo(){

        //作者信息
        Contact contact = new Contact("jinan","https://jinan6.vip/","");

        return  new ApiInfo(
                "仅安的swagger信息",
                "仅安的Api文档",
                "1.1",
                "https://jinan6.vip/"   ,
                contact,
                "Apache 2.0",
                "http://www.apache.org/licenses/LICENSE-2.0",
                new ArrayList()
        );

    }
````

效果：

![bean实例](https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200615082137.png)

### Swagger配置扫描接口

```java
                .select()
                //RequestHandlerSelectors，配置要扫描接口的方式
                //basePackage  指定要扫描的包
                // any() 扫描全部
                //none() 不扫描
                //withClassAnnotation() 扫描类上的注解，参数是一个注解的反射对象
                //withMethodAnnotation() 扫描方法上的注解
                .apis(RequestHandlerSelectors.basePackage("com.jinan.controller"))
```

效果：

![自定义扫描接口](https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200615084653.png)

过滤信息

```java
 //paths() 过滤什么路径
                .paths(PathSelectors.ant("/jinan/**"))
```

效果：

![过滤](https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200615084952.png)

### 配置是否启动SWagger

```java
.enable(false)
//enbale是否启动SWagger ，如果为false，则不能再浏览器中访问
```

### 配合API文档的分组

```java
.groupName("仅安")
```

#### 配置多个分组

写多个实例就可以

```java
 @Bean
    public Docket docket1(){
        return  new Docket(DocumentationType.SWAGGER_2).groupName("A");
    }
    @Bean
    public Docket docket2(){
        return  new Docket(DocumentationType.SWAGGER_2).groupName("B");
    }

    @Bean
    public Docket docket3(){
        return  new Docket(DocumentationType.SWAGGER_2).groupName("C");
    }

    @Bean
    public Docket docket4(){
        return  new Docket(DocumentationType.SWAGGER_2).groupName("D");
    }
```

效果图：

![分组](https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200615092516.png)



### 实体类配置

新建一个实体类

```java
@ApiModel("用户实体类")
public class User {
    @ApiModelProperty("用户名")
    public String username;
    @ApiModelProperty("密码")
    public String password;
}
```

在控制器中加入代码

```java
//只要接口的中返回值中存在我们的实体类，就会被扫描到Swagger中
    @PostMapping("/user")
    public User user(){
        return new User();
    }
```

```java
@ApiOperation("hello2控制类")
    @PostMapping("/hello2")
    public String hello2(@ApiParam("用户名") String username){
        return  "111"+username;
    }
```



### 注释

1.  **@ApiModel**   实体类注释
2. **@ApiModelProperty**  实体类字段注释
3. **@ApiOperation**  接口的注释
4. **@ApiParam**  接口里面的参数注释

效果：

![实体类](https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200615094912.png)

![接口](https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200615094952.png)



### 测试API接口

新建一个测试接口

````java
@ApiOperation("用户登录控制器")
    @PostMapping("/log")
    public String  log(@RequestParam @ApiParam("用户名") String username, @RequestParam @ApiParam("用户密码") String password){
        String start="";
        if(username.equals("123")&&password.equals("123")){
            start="登录成功";
        }else{
            start="用户名或密码错误";
        }
        return start;
    }
````

#### 测试

找到需要测试的接口

![](https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200615102100.png)

![](https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200615102438.png)



测试完成后会在下方显示结果，成功与否

