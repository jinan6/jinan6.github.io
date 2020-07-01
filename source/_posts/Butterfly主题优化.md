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

## 标签

标签内容全部来自 [小康博客](https://www.antmoe.com/posts/a811d614/index.html)

### 自定义小标签

<div class="snote red"><p>默认red</p></div>
<div class="snote quote"><p>quote</p></div>
<div class="snote info"><p>info</p></div>
<div class="snote done"><p>done</p></div>
<div class="snote success"><p>success</p></div>
<div class="snote danger"><p>danger</p></div>
<div class="snote error"><p>error</p></div>
<div class="snote radiation"><p>radiation</p></div>
<div class="snote bug"><p>bug</p></div>
<div class="snote idea yellow"><p>idea-yellow</p></div>
<div class="snote link blue"><p>link- blue</p></div>
<div class="snote paperclip"><p>paperclip</p></div>
<div class="snote todo"><p>todo</p></div>
<div class="snote msg cyan"><p>msg cyan</p></div>
<div class="snote guide"><p>guide</p></div>
<div class="snote download"><p>download</p></div>
<div class="snote up"><p>up</p></div>
<div class="snote undo"><p>undo</p></div>
<div class="snote quote"><p class='p subtitle'>小标题</p></div>

### 小标签
<span class="inline-tag red">红色小标签</span>
<span class="inline-tag green">绿色小标签</span>
<span class="inline-tag blue">蓝色小标签</span>
<span class="inline-tag yellow">黄色小标签</span>
<span class="inline-tag grey">灰色小标签</span>

### 渐变背景标签

<div class='tip'><p>默认情况<p></div>
<div class='tip info'><p>info<p></div>
<div class='tip success'><p>success<p></div>
<div class='tip error'><p>error<p></div>
<div class='tip warning'><p>warning<p></div>
<div class='tip font5 fas fa-atom'><p>自定义font5图标<p></div>
<div class="tip wtgo font5 fas fa-bolt"><p>文字</p><p></p></div>
<div class="tip ban font5 fas fa-ban"><p>文字</p><p></p></div>
<div class="tip home font5 fas fa-home"><p>文字</p><p></p></div>
<div class="tip important font5 fas fa-home"><p>魔改标签4</p><p></p></div>
<div class="tip ref font5 fas fa-sync"><p>魔改标签5</p><p></p></div>
<div class="tip ffa font5 fas fa-cogs"><p>魔改标签6</p><p></p></div>
<div class="tip key font5 fas fa-key"><p>魔改标签7</p><p></p></div>
<div class="tip socd font5 fas fa-bell"><p>魔改标签8</p><p></p></div>
<div class="tip qq font5 fab fa-qq"><p>魔改标签9</p><p></p></div>

#### 添加动画效果

<div class='tip faa-horizontal animated'><p>默认情况<p></div>
<div class='tip info faa-flash animated'><p>info<p></div>
<div class='tip success faa-spin animated'><p>success<p></div>
<div class='tip error faa-shake animated'><p>error<p></div>

```html
<div class='tip faa-horizontal animated'><p>默认情况<p></div>
<div class='tip info faa-flash animated'><p>info<p></div>
<div class='tip success faa-spin animated'><p>success<p></div>
<div class='tip error faa-shake animated'><p>error<p></div>
```

#### 参数说明

| 参数                      | 说明                                 |
| ------------------------- | ------------------------------------ |
| faa-wrench animated       | faa-wrench表示抖动，animated表示自动 |
| faa-wrench animated-hover | animated-hover表示hover点击动画      |
| faa-fast                  | 快速                                 |
| faa-slow                  | 慢速                                 |

### tag标签格式

{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}
{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}

### Folding

{% folding 查看图片测试 %}

![](https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200620194436.jpg)

{% endfolding %}

{% folding cyan open, 查看默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding green, 查看代码测试 %}

{% endfolding %}

{% folding yellow, 查看列表测试 %}

- haha
- hehe

{% endfolding %}

{% folding red, 查看嵌套测试 %}

{% folding blue, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

hahaha <span><img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/emoji/tieba/%E6%BB%91%E7%A8%BD.png' style='height:24px'></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}

### Fancybox

一行一个图片

{% fancybox %}
![图片描述](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)
{% endfancybox %}

一行多个图片（不换行）

{% fancybox %}
![图片描述](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/B18FCBB3-67FD-48CC-B4F3-457BA145F17A.jpeg)
![图片描述](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/67239FBB-E15D-4F4F-8EE8-0F1C9F3C4E7C.jpeg)
![图片描述](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/00E0F0ED-9F1C-407A-9AA6-545649D919F4.jpeg)
{% endfancybox %}

多行多个图片

{% fancybox stretch, 4 %}
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/B951AE18-D431-417F-B3FE-A382403FF21B.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/AEB33F9D-7294-4CF1-B8C5-3020748A9D45.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/250662D4-5A21-4AAA-BB63-CD25CF97CFF1.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/10A0FCE5-36A1-4AD0-8CF0-019259A89E03.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/B951AE18-D431-417F-B3FE-A382403FF21B.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/AEB33F9D-7294-4CF1-B8C5-3020748A9D45.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/250662D4-5A21-4AAA-BB63-CD25CF97CFF1.jpeg)
![](https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/landscape/10A0FCE5-36A1-4AD0-8CF0-019259A89E03.jpeg)
{% endfancybox %}