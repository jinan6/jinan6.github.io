---
title: Butterfly主题优化
tags: Butterfly
categories: 
	- Hexo
	- Butterfly
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200619145708.jpg
abbrlink: 3112011529
date: 2020-06-01 09:10:58
sticky:
---

{% note success %}  关于Butterfly主题的一些优化 {% endnote %}

### 优化文章链接

Hexo默认使用的文章永久链接格式是：

````css
year/:month/:day/:title/
````

这种链接，如果遇上个中文标题，简直要爆炸，在分享时会出现乱码问题。

这种方式不仅导致链接变得非常长，而且一旦修改文章发布日期或者标题，链接立马失效，造成大量死链

#### 解决方法

安装abbrlink插件

在博客根目录下执行以下代码

````bash
npm install hexo-abbrlink --save
````

安装完成后==编辑站点配置文件==，修改如下配置

```yaml
#permalink: :year/:month/:day/:title/
#permalink_defaults:
permalink: posts/:abbrlink/
abbrlink:
  alg: crc32 #support crc16(default) and crc32
  rep: dec   #support dec(default) and hex
```

重新生成部署即可

### 加入哔哩哔哩番剧页面插件

#### 效果

[实例效果](https://jinan6.vip/bangumis/)

#### 安装插件

````bash
npm install hexo-bilibili-bangumi --save
````

#### 更新插件

````bash
npm install hexo-bilibili-bangumi --update --save
````

#### 修改站点配置文件

````yaml
bangumi:
  enable: true 
  path: 
  vmid: 
  title: '追番列表'
  quote: '生命不息，追番不止！'
  show: 1
  loading:
````

- **enable**: 是否启用
- **path**: 番剧页面路径，默认 `bangumis/index.html`
- **vmid**: 哔哩哔哩番剧页面的 `vmid(uid)`, [https://space.bilibili.com/](https://blog.hclonely.com/go/?to=aHR0cHM6Ly9zcGFjZS5iaWxpYmlsaS5jb20v) 通过这个链接获取
- **title**: 该页面的标题
- **quote**: 写在页面开头的一段话，支持 html 语法
- **show**: 初始显示页面：`0: 想看` , `1: 在看` , `2: 看过`，默认为 `1`
- **loading**: 图片加载完成前的 loading 图片

#### 创建一个页面

````bash
hexo new page bangumis
````

编辑这个页面的==index.md==文件，加入type

````markdown
---
title: 番剧
date: 2020-06-01 08:06:18
type: "bangumis"
---
````

#### 如果哔哩哔哩上面的番剧进行了更新，需要用

```bash
hexo bangumi -u
```

执行番剧的更新

#### 删除数据

````bash
hexo bangumi -d
````

参考自[Hexo哔哩哔哩番剧页面插件](https://blog.hclonely.com/posts/8422e92e/) 

### 添加音乐页面

#### 效果

[实例页面](https://jinan6.vip/music/)

#### 安装插件

````yaml
npm install aplayer

npm install --save hexo-tag-aplayer
````

#### 创建页面

```yaml
hexo new page music
```

修改==index.md==文件，加入type

```markdown
---
title: 音乐
date: 2020-05-29 13:51:08
type: "music"
---
```

然后加入以下代码，即可实现效果

```html
<!DOCTYPE html> <html> 	<head> 		<meta charset="utf-8" /> 		<title></title>	 	<!-- require APlayer --> 	
    <link rel="stylesheet"href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css"> 
    <script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script> 	<!-- require MetingJS --> 
    <script src="https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js"></script> 	</head> 
    <body>  
        <meting-js server="netease" type="playlist" id="你的网易云歌单id"></meting-js> 		 	</body>
</html>

```

### 文章统计图表

#### 详情

[标签页](https://jinan6.vip/tags/)

[分类页](https://jinan6.vip/categories/)

[归档页](https://jinan6.vip/archives/)

安装插件

````code
npm install hexo-charts -S
````

#### 归档页面

在`主题目录/Butterfly/layout/archive.pug`文件的`#archive`下面添加一行`#posts-chart`, 新添加的比上一行多缩进两个空格

````code
block content
  include ./includes/mixins/article-sort.pug
  #archive
    #posts-chart
````

#### 标签和分类页

编辑`主题目录/Butterfly/layout/page.pug`文件，在`.tag-cloud`下面添加一行`#tags-chart`，在`.category-content`下面添加一行`#categories-chart`，新添加的比上一行多缩进两个空格。

```code
block content
  if page.type === 'tags'
    .tag-cloud
      #tags-chart
```

````code
else if page.type === 'categories'
  .category-content
    #categories-chart
````

此功能参考自[懒人大佬](https://blog.hclonely.com/posts/57bd67ce/#文章统计图表)

### Valine添加标签及图标

参考[懒人大佬](https://blog.hclonely.com/posts/409d3090/)

### 解决Valine自动唤醒失败问题

参考[小康大佬](https://www.antmoe.com/posts/2380732b/index.html)

### 添加说说功能

[文档](https://artitalk.js.org/doc.html#👀-前言)已经很详细了。

### 优化移动端显示

参考自 [乐特博客](https://blog.lete114.top/article/eef7397d.html)

未完待续。。。