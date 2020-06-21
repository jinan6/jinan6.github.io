---
title: SpringBoot集成SpringSecurity
tags:
  - SpringBoot
  - SpringSecurity
categories: 
  - SpringBoot
  - SpringSecurity
abbrlink: 3984882913
date: 2020-06-15 18:57:35
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200621195411.jpg
sticky:
top_img:
---

> 记录贴，方便以后查看

### 导入pom依赖

````java
<!--security-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
            <version>2.3.1.RELEASE</version>
        </dependency>

        <!-- thymeleaf整合包 -->
        <dependency>
            <groupId>org.thymeleaf.extras</groupId>
            <artifactId>thymeleaf-extras-springsecurity4</artifactId>
            <version>3.0.4.RELEASE</version>
        </dependency>

        <!--thymeleaf模板引擎-->
        <dependency>
            <groupId>org.thymeleaf</groupId>
            <artifactId>thymeleaf-spring5</artifactId>
        </dependency>
        <dependency>
            <groupId>org.thymeleaf.extras</groupId>
            <artifactId>thymeleaf-extras-java8time</artifactId>
        </dependency>
````



### 修改application.properties配置

````yaml
#关闭thymeleaf缓存
spring.thymeleaf.cache=false
````

### Controller

````java
@Controller
public class IndexController {

    @RequestMapping({"/","/index"})
    public String index(){
        return "index";
    }

    @RequestMapping("/toLogin")
    public  String toLogin(){
        return  "views/login";
    }

    @RequestMapping("/level1/{id}")
    public  String level1(@PathVariable("id") int id){
        return "views/level1/"+id;
    }

    @RequestMapping("/level2/{id}")
    public  String level2(@PathVariable("id") int id){
        return "views/level2/"+id;
    }

    @RequestMapping("/level3/{id}")
    public  String level3(@PathVariable("id") int id){
        return "views/level3/"+id;
    }
}
````



### 新建Config类

````java
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    //授权
    @Override
    protected void configure(HttpSecurity http) throws Exception {

    }

    //认证
    @Override
    protected  void configure(AuthenticationManagerBuilder auth) throws Exception{
        
    }

}
````

### 解析

#### 授权

方法：

````java
 //授权
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        
    }
````



````java
//请求授权的规则
        http.authorizeRequests()
                //首页所有人都可以访问
                .antMatchers("/").permitAll()
                //拥有对应权限的人才能访问
                .antMatchers("/level1/**").hasRole("vip1")
                .antMatchers("/level2/**").hasRole("vip2")
                .antMatchers("/level3/**").hasRole("vip3");
````

#### 认证

方法：

````java
//认证
    //密码编码  passwordEncoder
    @Override
    protected  void configure(AuthenticationManagerBuilder auth) throws Exception{
       
    }
````

添加用户及权限：

```java
//这些数据应该从数据库中读
        auth.inMemoryAuthentication().passwordEncoder(new BCryptPasswordEncoder())
                //角色以及对应的权限
                .withUser("jinan").password(new BCryptPasswordEncoder().encode("123456")).roles("vip2","vip3")
                .and()
                //角色以及对应的权限
                .withUser("root").password(new BCryptPasswordEncoder().encode("123456")).roles("vip1","vip2","vip3")
                .and()
                //角色以及对应的权限
                .withUser("guest").password(new BCryptPasswordEncoder().encode("123456")).roles("vip1");
    }
```



将密码进行编码：

````java
 auth.inMemoryAuthentication().passwordEncoder(new BCryptPasswordEncoder())
.password(new BCryptPasswordEncoder().encode("123456"))
````





#### 登录功能

````java
//没有权限默认会跳到登录页面,需要开启登录的界面
http.formLogin()
````

定制登录页

1. ````java
   http.formLogin().loginPage("/toLogin");
   ````

2. ````java
   // 第二种方式，表单如果提交到 login 的话
           // usernameParameter 表单的用户名
           // passwordParameter 表单的密码
           http.formLogin().loginPage("/toLogin").usernameParameter("user").passwordParameter("psd").loginProcessingUrl("/login");
   ````



#### 注销功能

````java
http.logout();
````

1. ````java
   //注销成功后跳转到首页
   http.logout().logoutSuccessUrl("/");
   ````

2. ````java
   //注销可能失败的原因
   http.csrf().disable();  //关闭csrf功能
   ````

#### 记住我功能

````java
http.rememberMe();
````

自定义接受前端参数

````java
http.rememberMe().rememberMeParameter("remember");
````

前端：

```html
<input type="checkbox" name="remember" /> 记住我
```

### 前端

#### 导入头文件

````html
xmlns:th="http://www.thymeleaf.org" xmlns:sec="http://www.thymeleaf.org/thymeleaf-extras-springsecurity4"
````

#### 判断是否登录

```java
sec:authorize="!isAuthenticated()" //未登录
sec:authorize="isAuthenticated()"	//已登录
```

#### 显示当前登录的用户名

```java
sec:authentication="name"	//获取当前登录的用户名
```

根据权限显示不同内容

```java
sec:authorize="hasRole('vip1')"
```



### 完整代码

#### html动态显示

````java
<!--springboot2.0.9版本支持-->
                <!--如果未登录-->
                <div sec:authorize="!isAuthenticated()">
                    <a class="item" th:href="@{/toLogin}">
                        <i class="address card icon"></i> 登录
                    </a>
                </div>

                <!--如果已登录-->
                <div sec:authorize="isAuthenticated()">
                    <a class="item">
                        用户名：<span sec:authentication="name"></span>
                    </a>
                </div>
                <div sec:authorize="isAuthenticated()">
                    <a class="item" th:href="@{/logout}">
                        <i class="sign-out icon"></i> 注销
                    </a>
                </div>
````



#### SecurityConfig

````java
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    //授权
    @Override
    protected void configure(HttpSecurity http) throws Exception {
//        super.configure(http);

        //首页所有人可以访问，但是功能页只有对应权限的人才能访问
        //请求授权的规则
        http.authorizeRequests()
                //首页所有人都可以访问
                .antMatchers("/").permitAll()
                //拥有对应权限的人才能访问
                .antMatchers("/level1/**").hasRole("vip1")
                .antMatchers("/level2/**").hasRole("vip2")
                .antMatchers("/level3/**").hasRole("vip3");

        //没有权限默认会跳到登录页面,需要开启登录的界面
        //定制登录页
        http.formLogin().loginPage("/toLogin");

        // 第二种方式，表单如果提交到 login 的话
        // usernameParameter 表单的用户名
        // passwordParameter 表单的密码
        http.formLogin().loginPage("/toLogin").usernameParameter("user").passwordParameter("psd").loginProcessingUrl("/login");

        //第二种方式，表单如果提交到 login 的话
        //http.formLogin().loginPage("/toLogin").usernameParameter("user").passwordParameter("psd").loginProcessingUrl("/login");

        //防止网站攻击 get post
        http.csrf().disable();  //关闭csrf功能，注销失败可能失败的原因
        //注销功能，注销成功后跳转到首页
        http.logout().logoutSuccessUrl("/");

        //开启记住我功能 cookies，自定义接受前端的参数
        http.rememberMe().rememberMeParameter("remember");
    }

    //认证
    //密码编码  passwordEncoder
    @Override
    protected  void configure(AuthenticationManagerBuilder auth) throws Exception{
       //这些数据应该从数据库中读
        auth.inMemoryAuthentication().passwordEncoder(new BCryptPasswordEncoder())
                //角色以及对应的权限
                .withUser("jinan").password(new BCryptPasswordEncoder().encode("123456")).roles("vip2","vip3")
                .and()
                //角色以及对应的权限
                .withUser("root").password(new BCryptPasswordEncoder().encode("123456")).roles("vip1","vip2","vip3")
                .and()
                //角色以及对应的权限
                .withUser("guest").password(new BCryptPasswordEncoder().encode("123456")).roles("vip1");
    }

}
````

