---
title: spring boot 实现自定义排序
tags: 排序
categories: SpringBoot
abbrlink: 14324
date: 2020-05-11 15:54:34
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200530093937.jpeg
---

<center>实现排序小功能</center>

<!--more-->

效果图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191105194125483.png)
在文本框中输入值，触发失焦事件，根据正序或是倒序进行排序（dao层中的SQL语句）

首先在数据库的表中新建一列  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191105194428662.png)
HTML界面
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191105194751196.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTc3NzU0NA==,size_16,color_FFFFFF,t_70)
添加文本框
代码如下：

```html
<input type="text" size="2" v-model="site.sort" v-on:blur="sort(site.nid,site.sort)">
```

在文本框输入完值后，鼠标离开，触发失焦事件  v-on:blur  （vue之中）

下面是方法代码：

```javascript
sort:function(nid,sort){
					//alert(11);
					$.post("/news/sorts",{nid:nid,sort:sort},function(data){
						window.location.href="/admin/news";
					})
				},
```

控制层代码：

```java

		//排序
		@RequestMapping("sorts")
		@ResponseBody
		public String sorts(HttpServletRequest request) {
			
			Integer nid=Integer.parseInt(request.getParameter("nid"));
			Integer sort=Integer.parseInt(request.getParameter("sort"));
			
			News news=newsService.findById(nid);
			news.setNid(nid);
			news.setSort(sort);
			newsService.save(news);
			
			return "1";
		}
```

dao层：
![在这里插入图片描述](https://img-blog.csdnimg.cn/201911051952387.png)
根据实际情况在你的SQL语句中加入以上代码 
具体根据什么排序根据自己起的字段名