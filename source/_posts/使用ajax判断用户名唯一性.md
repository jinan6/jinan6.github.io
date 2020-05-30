---
title: 使用ajax判断用户名唯一性
tags: 判断
categories: ajax
abbrlink: 14393
date: 2020-05-11 15:57:45
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200530093848.jpeg
---

<center>ajax判断用户名唯一</center>

<!--more-->

## 判断用户名唯一性

**dao层：**

```java
@Query(value="select * from stu  where name like CONCAT('%',:name,'%')",nativeQuery=true)
	  List<Stu> findByName(@Param("name") String name);
```
以上SQL语句也可以进行模糊查询，以后会有说明

**service层：**

```java
public List<Stu> findByName(String name) {
		return stuDao.findByName(name);
	}
```
**controller层：**

```java
//判断是否有重复名字
	@RequestMapping("findByName")
	@ResponseBody
	public boolean findByName(HttpServletRequest request) {
		String name=request.getParameter("name");
		if (stuService.findByName(name).size()>0) {
			return true;
		}else {
			return false;
		}
	}
```

以下是添加页面的代码：



```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<script src="/js/jquery-1.8.3.min.js"></script> 
		<!-- 我导入的是本地的js文件，如果你没有本地的，也可以导入网上的,
		例如：<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
</script>这种的菜鸟教程有很多 -->
		<script type="text/javascript">
			function  check(){ //这个是判断姓名不能为空的方法
				var name=document.getElementById("name");
				if(name.value==null ||name.value=="" ||name.value.length==0){
					alert("姓名不能为空！")
					name.focus();
					return false;
				}
					return true;
			}
			
			$(function(){// 这个是判断姓名唯一性的方法
				$("#name").blur(function(){
					var name=$("#name").val();//获取ID为name的值
					//alert(name);
				$.post("/stu/findByName",{name:name},function(data){
					if(data==true){
						$("#err").html("<font color='red'>该名称已被注册</font>");
						$("#submit").attr("disabled",true);
					}else{
						$("#err").html("<font color='green'>可以注册</font>");
						$("#submit").attr("disabled",false);
					}
				});
				});
			});
		</script>
	</head>
	<body align="center">
		<!-- 这里的提交路径是controller里面的添加方法，改成你自己的 -->
		<form action="/stu/save" method="post">
			姓名：<input type="text" name="name" id="name"><span id="err"></span><br>
			性别：<input type="text" name="sex" id="sex"><br>
			地址：<input type="text" name="address" id="address"><br>
			身份证号：<input type="text" name="sid" id="sid"><br>
			电话：<input type="text" name="iphone" id="iphone"><br>
			<input type="submit" id="submit" onclick="return check()" value="提交">
			<input type="reset" value="重置">
		</form>
	</body>
</html>
```
下面附上几张效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191021202911492.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)
我的数据库里有111这个用户名，当你输完之后，触发失焦事件
ajax会出来提示，同时，disabled 触发，提交按钮变为灰色，无法点击。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191021203131265.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)
当没有与数据库中重名的时候，ajax会提示可以注册
提交按钮也就可以点击

效果图有点难看，不要介意