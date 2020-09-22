---
title: Butterfly主题优化
tags: Butterfly
categories: 
	- Hexo
	- Butterfly
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200807190152.jpg
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

安装完成后`编辑站点配置文件`，修改如下配置

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

编辑这个页面的`index.md`文件，加入type

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

### 标签

标签内容来自 [小康博客](https://www.antmoe.com/posts/a811d614/index.html)

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

### 使用neat压缩

在博客根目录下执行

```code
npm install hexo-neat --save
```

在站点配置文件加入

```yml
neat_enable: true
neat_html:
  enable: true
  exclude:
neat_css:
  enable: true
  exclude:
    - '*.min.css'
neat_js:
  enable: true
  mangle: true
  output:
  compress:
  exclude:
    - '*.min.js'
```

### hexo-offline-popup

hexo-offline-popup 是一个 [hexo](https://hexo.io/) 插件， 它可加速你的Hexo网站的加载速度，以及网站内容更新弹窗提示。

1. 使用

   在博客根目录安装插件

   ```code
   npm i hexo-offline-popup --save
   ```

2. 在博客根目录的`_config.yml`中添加如下配置

   ```yml
   # offline config passed to sw-precache.
   service_worker:
     maximumFileSizeToCacheInBytes: 5242880
     staticFileGlobs:
     - public/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}
     stripPrefix: public
     verbose: false
   ```

   

具体请看 插件作者  👉👉👉 [Colsrch's blog](https://colsrch.top/posts/32c8ba21/index.html?_sw-precache=93427639c70cbddfaff098f669eff7a2)

### 侧边栏的github-badge

{% note info %}
[大佬原文](https://zykj.js.org/posts/e55bad60/#github-badge)
{% endnote %}

- 在 `themes\Butterfly\source\css` 文件夹新建 `custom.css` 文件，文件内容如下：

```css
.github-badge {
    display:inline-block;
    border-radius:4px;
    text-shadow:none;
    font-size:13px;
    color:#fff;
    line-height:15px;
    margin-bottom:5px;
}
.github-badge a{
    display: inline-block;
    margin: 0 1px 5px;
}
.github-badge .badge-subject {
    display:inline-block;
    background-color:#4D4D4D;
    padding:4px 4px 4px 6px;
    border-top-left-radius:4px;
    border-bottom-left-radius:4px;
}
.github-badge .badge-value {
    display:inline-block;
    padding:4px 6px 4px 4px;
    border-top-right-radius:4px;
    border-bottom-right-radius:4px;
}
.github-badge .bg-brightgreen {
    background-color:#4DC820 !important;
}
.github-badge .bg-orange {
    background-color:#FFA500 !important;
}
.github-badge .bg-yellow {
    background-color:#D8B024 !important;
}
.github-badge .bg-blueviolet {
    background-color:#8833D7 !important;
}
.github-badge .bg-pink {
    background-color:#F26BAE !important;
}
.github-badge .bg-red {
    background-color:#e05d44 !important;
}
.github-badge .bg-blue {
    background-color:#007EC6 !important;
}
.github-badge .bg-lightgrey {
    background-color:#9F9F9F !important;
}
.github-badge .bg-grey, .github-badge .bg-gray {
    background-color:#555 !important;
}
.github-badge .bg-lightgrey, .github-badge .bg-lightgray {
    background-color:#9f9f9f !important;
}
```

- 在 `butterfly.yml`、`card_announcement` 下 `content` 中添加

```yml
<div class="item-headline" style="margin:10px 0"><i class="fas fa-laptop card-announcement-animation"></i><span>关于本站</span></div><div class="github-badge"><a style="color:#fff" href="https://hexo.io/" target="_blank" title="由 Hexo 强力驱动"><span class="badge-subject">Powered</span><span class="badge-value bg-blue">Hexo5.0.0</span></a><a style="color:#fff" href="https://github.com/" target="_blank" title="静态网页托管于 Github" ><span class="badge-subject">Hosted</span><span class="badge-value bg-brightgreen">Github</span><a style="color:#fff" href="https://www.jsdelivr.com/" target="_blank" title="jsDelivr 提供 CDN 加速服务" ><span class="badge-subject">CDN</span><span class="badge-value bg-orange">jsDelivr</span></a><a style="color:#fff" href="https://github.com/jerryc127/hexo-theme-butterfly" target="_blank" title="站点使用 Butterfly 3.0.0-rc2 主题" ><span class="badge-subject">Theme</span><span class="badge-value bg-blue">Butterfly 3.0.0-rc2</span></a><a style="color:#fff" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" title="本站点采用知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议进行许可"><span class="badge-subject"><i class="fa fa-copyright"></i></span><span class="badge-value bg-lightgrey">BY-NC-SA 4.0</span></a></div>
```

具体可以到我的侧边栏查看

### 添加当前访问用户

{% note info %}
[大佬原文](https://zykj.js.org/posts/e55bad60/#github-badge)
{% endnote %}

1. 在 `themes\Butterfly\source\css` 下创建 `tag.css` 文件、输入以下内容

   ```css
   span.btn {
       display: inline;
   }
   
   span.btn > a {
       display: inline-block;
       background: #2196f3;
       color: #fff;
       padding: 4px 4px 2px 4px;
       margin: 2px;
       line-height: 1.1;
       border-radius: 2px;
       transition: all .28s ease;
       -moz-transition: all .28s ease;
       -webkit-transition: all .28s ease;
       -o-transition: all .28s ease;
   }
   
   span.btn > a i {
       margin-right: 2px;
   }
   
   span.btn > a:hover {
       color: #fff;
       background: #ff5722;
   }
   
   span.btn > a:not([href]) {
       opacity: .5;
   }
   
   span.btn > a:not([href]):hover {
       cursor: not-allowed;
   }
   
   span.btn.regular > a {
       padding: 8px 12px 6px 12px;
   }
   
   span.btn.regular > a i {
       margin-right: 4px;
   }
   
   span.btn.large > a {
       padding: 12px 36px 10px 36px;
   }
   
   span.btn.large > a i {
       margin-right: 8px;
   }
   
   span.btn.center {
       display: block;
       text-align: center;
   }
   
   [data-theme="dark"] div.btns {
       filter: brightness(0.7);
   }
   
   [data-theme="dark"] div.btns a {
       background: 0 0;
   }
   
   div.btns {
       margin: 0 -8px;
       display: flex;
       flex-wrap: wrap;
       align-items: flex-start;
       overflow: visible;
       line-height: 1.8;
   }
   
   div.btns, div.btns p, div.btns a {
       font-size: .8125rem;
       color: #555;
   }
   
   div.btns b {
       font-size: .875rem;
   }
   
   div.btns.wide > a {
       padding-left: 32px;
       padding-right: 32px;
   }
   
   div.btns.fill > a {
       flex-grow: 1;
       width: auto;
   }
   
   div.btns.around {
       justify-content: space-around
   }
   
   div.btns.center {
       justify-content: center
   }
   
   div.btns.grid2 > a {
       width: calc(100% / 2 - 16px);
   }
   
   @media screen and (max-width: 1024px) {
       div.btns.grid2 > a {
           width: calc(100% / 2 - 16px);
       }
   }
   
   @media screen and (max-width: 768px) {
       div.btns.grid2 > a {
           width: calc(100% / 2 - 16px);
       }
   }
   
   @media screen and (max-width: 500px) {
       div.btns.grid2 > a {
           width: calc(100% / 1 - 16px);
       }
   }
   
   div.btns.grid3 > a {
       width: calc(100% / 3 - 16px);
   }
   
   @media screen and (max-width: 1024px) {
       div.btns.grid3 > a {
           width: calc(100% / 3 - 16px);
       }
   }
   
   @media screen and (max-width: 768px) {
       div.btns.grid3 > a {
           width: calc(100% / 3 - 16px);
       }
   }
   
   @media screen and (max-width: 500px) {
       div.btns.grid3 > a {
           width: calc(100% / 1 - 16px);
       }
   }
   
   div.btns.grid4 > a {
       width: calc(100% / 4 - 16px);
   }
   
   @media screen and (max-width: 1024px) {
       div.btns.grid4 > a {
           width: calc(100% / 3 - 16px);
       }
   }
   
   @media screen and (max-width: 768px) {
       div.btns.grid4 > a {
           width: calc(100% / 3 - 16px);
       }
   }
   
   @media screen and (max-width: 500px) {
       div.btns.grid4 > a {
           width: calc(100% / 2 - 16px);
       }
   }
   
   div.btns.grid5 > a {
       width: calc(100% / 5 - 16px);
   }
   
   @media screen and (max-width: 1024px) {
       div.btns.grid5 > a {
           width: calc(100% / 4 - 16px);
       }
   }
   
   @media screen and (max-width: 768px) {
       div.btns.grid5 > a {
           width: calc(100% / 3 - 16px);
       }
   }
   
   @media screen and (max-width: 500px) {
       div.btns.grid5 > a {
           width: calc(100% / 2 - 16px);
       }
   }
   
   div.btns a {
       transition: all .28s ease;
       -moz-transition: all .28s ease;
       -webkit-transition: all .28s ease;
       -o-transition: all .28s ease;
       margin: 8px;
       margin-top: calc(1.25 * 16px + 32px);
       min-width: 120px;
       font-weight: bold;
       display: flex;
       justify-content: flex-start;
       align-content: center;
       align-items: center;
       flex-direction: column;
       padding: 8px;
       text-align: center;
       background: #f6f6f6;
       border-radius: 4px;
   }
   
   div.btns a > img:first-child, div.btns a > i:first-child {
       transition: all .28s ease;
       -moz-transition: all .28s ease;
       -webkit-transition: all .28s ease;
       -o-transition: all .28s ease;
       height: 64px;
       width: 64px;
       box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
       margin: 16px 8px 4px 8px;
       margin-top: calc(-1.25 * 16px - 32px);
       border: 2px solid #fff;
       background: #fff;
       line-height: 60px;
       font-size: 28px;
   }
   
   div.btns a > img:first-child.auto, div.btns a > i:first-child.auto {
       width: auto
   }
   
   div.btns a > i:first-child {
       color: #fff;
       background: #2196f3;
   }
   
   div.btns a p, div.btns a b {
       margin: .25em;
       font-weight: normal;
       line-height: 1.25;
       word-wrap: break-word;
   }
   
   div.btns a b {
       font-weight: bold;
       line-height: 1.3;
   }
   
   div.btns a img {
       margin: .4em auto;
   }
   
   div.btns a:not([href]) {
       cursor: default;
       color: inherit;
   }
   
   div.btns a[href]:hover {
       background: rgba(255, 87, 34, 0.15);
   }
   
   div.btns a[href]:hover, div.btns a[href]:hover b {
       color: #ff5722;
   }
   
   div.btns a[href]:hover > img:first-child, div.btns a[href]:hover > i:first-child {
       transform: scale(1.1) translateY(-8px);
       box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
   }
   
   div.btns a[href]:hover > i:first-child {
       background: #ff5722;
   }
   
   div.btns.circle a > img:first-child, div.btns.circle a > i:first-child {
       border-radius: 32px;
   }
   
   div.btns.rounded a > img:first-child, div.btns.rounded a > i:first-child {
       border-radius: 16px;
   }
   
   [data-theme="dark"] .checkbox {
       filter: brightness(0.7);
   }
   
   .checkbox {
       display: flex;
       align-items: center;
   }
   
   .checkbox input {
       -webkit-appearance: none;
       -moz-appearance: none;
       -ms-appearance: none;
       -o-appearance: none;
       appearance: none;
       position: relative;
       height: 16px;
       width: 16px;
       transition: all .15s ease-out 0s;
       cursor: pointer;
       display: inline-block;
       outline: none;
       border-radius: 2px;
       flex-shrink: 0;
       margin-right: 8px;
   }
   
   .checkbox input[type=checkbox]:before, .checkbox input[type=checkbox]:after {
       position: absolute;
       content: "";
       background: #fff;
   }
   
   .checkbox input[type=checkbox]:before {
       left: 1px;
       top: 5px;
       width: 0;
       height: 2px;
       transition: all .2s ease-in;
       transform: rotate(45deg);
       -webkit-transform: rotate(45deg);
       -moz-transform: rotate(45deg);
       -ms-transform: rotate(45deg);
       -o-transform: rotate(45deg);
   }
   
   .checkbox input[type=checkbox]:after {
       right: 7px;
       bottom: 3px;
       width: 2px;
       height: 0;
       transition: all .2s ease-out;
       transform: rotate(40deg);
       -webkit-transform: rotate(40deg);
       -moz-transform: rotate(40deg);
       -ms-transform: rotate(40deg);
       -o-transform: rotate(40deg);
       transition-delay: .25s;
   }
   
   .checkbox input[type=checkbox]:checked:before {
       left: 0;
       top: 7px;
       width: 6px;
       height: 2px;
   }
   
   .checkbox input[type=checkbox]:checked:after {
       right: 3px;
       bottom: 1px;
       width: 2px;
       height: 10px;
   }
   
   .checkbox.minus input[type=checkbox]:before {
       transform: rotate(0);
       left: 1px;
       top: 5px;
       width: 0;
       height: 2px;
   }
   
   .checkbox.minus input[type=checkbox]:after {
       transform: rotate(0);
       left: 1px;
       top: 5px;
       width: 0;
       height: 2px;
   }
   
   .checkbox.minus input[type=checkbox]:checked:before {
       left: 1px;
       top: 5px;
       width: 10px;
       height: 2px;
   }
   
   .checkbox.minus input[type=checkbox]:checked:after {
       left: 1px;
       top: 5px;
       width: 10px;
       height: 2px;
   }
   
   .checkbox.plus input[type=checkbox]:before {
       transform: rotate(0);
       left: 1px;
       top: 5px;
       width: 0;
       height: 2px;
   }
   
   .checkbox.plus input[type=checkbox]:after {
       transform: rotate(0);
       left: 5px;
       top: 1px;
       width: 2px;
       height: 0;
   }
   
   .checkbox.plus input[type=checkbox]:checked:before {
       left: 1px;
       top: 5px;
       width: 10px;
       height: 2px;
   }
   
   .checkbox.plus input[type=checkbox]:checked:after {
       left: 5px;
       top: 1px;
       width: 2px;
       height: 10px;
   }
   
   .checkbox.times input[type=checkbox]:before {
       transform: rotate(45deg);
       left: 3px;
       top: 1px;
       width: 0;
       height: 2px;
   }
   
   .checkbox.times input[type=checkbox]:after {
       transform: rotate(135deg);
       right: 3px;
       top: 1px;
       width: 0;
       height: 2px;
   }
   
   .checkbox.times input[type=checkbox]:checked:before {
       left: 1px;
       top: 5px;
       width: 10px;
       height: 2px;
   }
   
   .checkbox.times input[type=checkbox]:checked:after {
       right: 1px;
       top: 5px;
       width: 10px;
       height: 2px;
   }
   
   .checkbox input[type=radio] {
       border-radius: 50%;
   }
   
   .checkbox input[type=radio]:before {
       content: "";
       display: block;
       width: 8px;
       height: 8px;
       border-radius: 50%;
       margin: 2px;
       transform: scale(0);
       transition: all .25s ease-out;
   }
   
   .checkbox input[type=radio]:checked:before {
       transform: scale(1);
   }
   
   .checkbox input {
       border: 2px solid #2196f3;
   }
   
   .checkbox input[type=checkbox]:checked {
       background: #2196f3;
   }
   
   .checkbox input[type=radio]:checked:before {
       background: #2196f3;
   }
   
   .checkbox.red input {
       border-color: #fe5f58;
   }
   
   .checkbox.red input[type=checkbox]:checked {
       background: #fe5f58;
   }
   
   .checkbox.red input[type=radio]:checked:before {
       background: #fe5f58;
   }
   
   .checkbox.green input {
       border-color: #3dc550;
   }
   
   .checkbox.green input[type=checkbox]:checked {
       background: #3dc550;
   }
   
   .checkbox.green input[type=radio]:checked:before {
       background: #3dc550;
   }
   
   .checkbox.yellow input {
       border-color: #ffbd2b;
   }
   
   .checkbox.yellow input[type=checkbox]:checked {
       background: #ffbd2b;
   }
   
   .checkbox.yellow input[type=radio]:checked:before {
       background: #ffbd2b;
   }
   
   .checkbox.cyan input {
       border-color: #1bcdfc;
   }
   
   .checkbox.cyan input[type=checkbox]:checked {
       background: #1bcdfc;
   }
   
   .checkbox.cyan input[type=radio]:checked:before {
       background: #1bcdfc;
   }
   
   .checkbox.blue input {
       border-color: #2196f3;
   }
   
   .checkbox.blue input[type=checkbox]:checked {
       background: #2196f3;
   }
   
   .checkbox.blue input[type=radio]:checked:before {
       background: #2196f3;
   }
   
   .checkbox p {
       display: inline-block;
       margin-top: 2px !important;
       margin-bottom: 0 !important;
   }
   
   [data-theme="dark"] details {
       filter: brightness(0.7);
   }
   
   details {
       display: block;
       padding: 16px;
       margin: .5rem 0;
       border-radius: 4px;
       font-size: .7375rem;
       transition: all .28s ease;
       -moz-transition: all .28s ease;
       -webkit-transition: all .28s ease;
       -o-transition: all .28s ease;
       border: 1px solid #f6f6f6;
   }
   
   details summary {
       cursor: pointer;
       padding: 16px;
       margin: -16px;
       border-radius: 4px;
       color: rgba(85, 85, 85, 0.7);
       font-size: .7375rem;
       font-weight: bold;
       position: relative;
       line-height: normal;
   }
   
   details summary > p, details summary > h1, details summary > h2, details summary > h3, details summary > h4, details summary > h5, details summary > h6 {
       display: inline;
       border-bottom: none !important;
   }
   
   details summary:hover {
       color: #555;
   }
   
   details summary:hover:after {
       position: absolute;
       content: '+';
       text-align: center;
       top: 50%;
       transform: translateY(-50%);
       right: 16px;
   }
   
   details > summary {
       background: #f6f6f6;
   }
   
   details[blue] {
       border-color: #e8f4fd;
   }
   
   details[blue] > summary {
       background: #e8f4fd;
   }
   
   details[cyan] {
       border-color: #e8fafe;
   }
   
   details[cyan] > summary {
       background: #e8fafe;
   }
   
   details[green] {
       border-color: #ebf9ed;
   }
   
   details[green] > summary {
       background: #ebf9ed;
   }
   
   details[yellow] {
       border-color: #fff8e9;
   }
   
   details[yellow] > summary {
       background: #fff8e9;
   }
   
   details[red] {
       border-color: #feefee;
   }
   
   details[red] > summary {
       background: #feefee;
   }
   
   details[open] {
       border-color: rgba(85, 85, 85, 0.2);
   }
   
   details[open] > summary {
       border-bottom: 1px solid rgba(85, 85, 85, 0.2);
       border-bottom-left-radius: 0;
       border-bottom-right-radius: 0;
   }
   
   details[open][blue] {
       border-color: rgba(33, 150, 243, 0.3);
   }
   
   details[open][blue] > summary {
       border-bottom-color: rgba(33, 150, 243, 0.3);
   }
   
   details[open][cyan] {
       border-color: rgba(27, 205, 252, 0.3);
   }
   
   details[open][cyan] > summary {
       border-bottom-color: rgba(27, 205, 252, 0.3);
   }
   
   details[open][green] {
       border-color: rgba(61, 197, 80, 0.3);
   }
   
   details[open][green] > summary {
       border-bottom-color: rgba(61, 197, 80, 0.3);
   }
   
   details[open][yellow] {
       border-color: rgba(255, 189, 43, 0.3);
   }
   
   details[open][yellow] > summary {
       border-bottom-color: rgba(255, 189, 43, 0.3);
   }
   
   details[open][red] {
       border-color: rgba(254, 95, 88, 0.3);
   }
   
   details[open][red] > summary {
       border-bottom-color: rgba(254, 95, 88, 0.3);
   }
   
   details[open] > summary {
       color: #555;
       margin-bottom: 0;
   }
   
   details[open] > summary:hover:after {
       content: '-';
   }
   
   details[open] > div.content {
       padding: 16px;
       margin: -16px;
       margin-top: 0;
   }
   
   details[open] > div.content p > a:hover {
       text-decoration: underline;
   }
   
   details[open] > div.content > p:first-child, details[open] > div.content > .tabs:first-child, details[open] > div.content > ul:first-child, details[open] > div.content > ol:first-child, details[open] > div.content > .highlight:first-child, details[open] > div.content > .note:first-child, details[open] > div.content > .fancybox:first-child, details[open] > div.content > details:first-child {
       margin-top: 0;
   }
   
   details[open] > div.content > p:last-child, details[open] > div.content > .tabs:last-child, details[open] > div.content > ul:last-child, details[open] > div.content > ol:last-child, details[open] > div.content > .highlight:last-child, details[open] > div.content > .note:last-child, details[open] > div.content > .fancybox:last-child, details[open] > div.content > details:last-child {
       margin-bottom: 0;
   }
   
   
   [data-theme="dark"] span.p {
       filter: brightness(0.7);
   }
   
   p.p.subtitle {
       font-weight: bold;
       color: #2196f3;
       padding-top: 1rem;
   }
   
   p.p.subtitle:first-child {
       padding-top: .5rem;
   }
   
   span.p.code, p.p.code {
       font-family: Menlo, Monaco, monospace, courier, sans-serif
   }
   
   span.p.left, p.p.left {
       display: block;
       text-align: left;
   }
   
   span.p.center, p.p.center {
       display: block;
       text-align: center;
   }
   
   span.p.right, p.p.right {
       display: block;
       text-align: right;
   }
   
   span.p.small, p.p.small {
       font-size: .575rem;
   }
   
   span.p.large, p.p.large {
       font-size: 2rem;
       line-height: 1.4;
   }
   
   span.p.huge, p.p.huge {
       font-size: 4rem;
       line-height: 1.4;
   }
   
   span.p.ultra, p.p.ultra {
       font-size: 6rem;
       line-height: 1.4;
   }
   
   span.p.small, p.p.small, span.p.large, p.p.large, span.p.huge, p.p.huge, span.p.ultra, p.p.ultra {
       font-family: UbuntuMono, "PingFang SC", "Microsoft YaHei", Helvetica, Arial, Menlo, Monaco, monospace, sans-serif;
       margin: 0;
       padding: 0;
   }
   
   span.p.bold, p.p.bold {
       font-weight: bold;
   }
   
   span.p.h1, p.p.h1 {
       font-size: 1.625rem;
       color: #555;
       padding-top: 1rem;
   }
   
   span.p.h2, p.p.h2 {
       font-size: 1.375rem;
       color: #555;
       padding-top: 1rem;
       border-bottom: 1px solid rgba(85, 85, 85, 0.1)
   }
   
   span.p.h3, p.p.h3 {
       font-size: 1.25rem;
       color: #2196f3;
       padding-top: 1rem
   }
   
   span.p.h4, p.p.h4 {
       font-size: 1.125rem;
       color: #555;
       padding-top: 1rem
   }
   
   span.p.red, p.p.red {
       color: #fe5f58
   }
   
   span.p.yellow, p.p.yellow {
       color: #ffbd2b
   }
   
   span.p.green, p.p.green {
       color: #3dc550
   }
   
   span.p.cyan, p.p.cyan {
       color: #1bcdfc
   }
   
   span.p.blue, p.p.blue {
       color: #2196f3
   }
   
   span.p.gray, p.p.gray {
       color: #666
   }
   ```

   如果不填加此css  会无法显示色彩样式

2. 在 `themes\Butterfly\layout\includes\widget\` 下创建 `card_ip.pug` 文件

   ```code
   .card-widget.card-ip
           .card-content
               .item-headline
                   i.fa.fa-user(aria-hidden="true")
                   span= _p('aside.card_ip')
               .ip_content
                   = _p('欢迎来自 ')
                   span(class="p red")= _p('未知区域')
                   = _p(' 的小伙伴')
                   br
                   = _p('访问IP为： ')
                   span(class="p cyan")= _p('未知IP')
                   br
                   = _p('浏览器版本：')
                   span(class="p blue")= _p('未知浏览器')
   ```

3. 编辑此目录下的 `index.pug` 、 在合适位置添加

   ```code
   if theme.aside.card_ip
           !=partial('includes/widget/card_ip', {}, {cache: theme.fragment_cache})
   ```

4. 编辑 `themes\Butterfly\languages\zh-CN.yml` 文件、在 `aside` 下添加

   ```yml
   card_ip: 当前访问用户
   ```

5. 在 `source\_data\butterfly.yml` - `aside` 下添加

   ```yml
   card_ip: true
   ```

6. 在 `themes\Butterfly\source\js` 下创建 `ip_content.js`

   ```javas
   //获取当前IP地址和浏览器标识
   function getBrowserInfo() {
       var agent = navigator.userAgent.toLowerCase();
   
       var regStr_ie = /msie [\d.]+;/gi;
       var regStr_ff = /firefox\/[\d.]+/gi
       var regStr_chrome = /chrome\/[\d.]+/gi;
       var regStr_saf = /safari\/[\d.]+/gi;
   
       //IE
       if (agent.indexOf("msie") > 0) {
           return agent.match(regStr_ie);
       }
   
       //firefox
       if (agent.indexOf("firefox") > 0) {
           return agent.match(regStr_ff);
       }
   
       //Chrome
       if (agent.indexOf("chrome") > 0) {
           return agent.match(regStr_chrome);
       }
   
       //Safari
       if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
           return agent.match(regStr_saf);
       }
   }
   
   var ip_content = document.querySelector(".ip_content");
   
   if (ip_content != null && typeof (returnCitySN) != undefined) {
       ip_content.innerHTML = '欢迎来自 <span class="p red">' + returnCitySN["cname"] + "</span> 的小伙伴<br>" + "访问IP为： <span class='p cyan'>" + returnCitySN["cip"] + "</span><br>浏览器版本：<span class='p blue'>" + getBrowserInfo() + '</span>';
   }
   ```

7. 最后编辑`butterfly.yml`，在`inject`中添加以下内容

   ```yml
   inject:
     head:
      - <link rel="stylesheet" href="/css/tag.css">   #色彩样式
     bottom:
         - <script src="https://pv.sohu.com/cityjson?ie=utf-8"></script>   #搜狐的获取 ip 和位置
         - <script src="/js/ip_content.js"></script>	#新建的js
   ```

### 添加文章日历

{% note info %}
本功能具体实现方法转载自 [Hexo添加小部件(Butterfly主题) 日历](https://blog.csdn.net/weixin_42429718/article/details/105620623)，参考自 [HCLonely Blog](https://blog.hclonely.com/)

{% endnote %}

首先，安装 `hexo-generator-calendar` 插件

```bash
npm install --save git://github.com/howiefh/hexo-generator-calendar.git
```

然后在``themes\butterfly\source\js`下创建两个js文件，文件名为 `calendar.js` 和 `languages.js`

**calendar.js**

```javas
/**
 * Calendar - displays a calendar of the current month. Dates appear links if there are posts for that day.
 */

(function($) {

    var aCalendar = function(language, options, object) {
      var now = new Date();
      var nDay = now.getDate();
      var nMonth = now.getMonth();
      var nYear = now.getFullYear();
      var dDay = nDay;
      var dMonth = nMonth;
      var dYear = nYear;
      var instance = object;
      var allPosts = null;
      var months = null;
      /* Current month's posts */
      var current = {
        posts: [],
        prev: null,
        next: null
      };
      var currentLanguage = 'en';
  
      initLanguage(language);
  
      var settings = $.extend({}, $.fn.aCalendar.defaults, typeof calLanguages === 'undefined' ? {} : calLanguages[currentLanguage], options);
  
      if (settings.root[0] !== '/') {
        settings.root = '/' + settings.root;
      }
  
      if (settings.root[settings.root.length - 1] !== '/') {
        settings.root += '/';
      }
  
      /**
       * Initial language.
       */
      function initLanguage(key) {
        if (key && typeof calLanguages !== 'undefined' && calLanguages[key]) {
          currentLanguage = key;
        }
      }
  
      /**
       * Click handler for next month arrow button.
       */
      function nextMonth() {
        if (dMonth < 11) {
          dMonth++;
        } else {
          dMonth = 0;
          dYear++;
        }
  
        draw();
      };
  
      /**
       * Click handler for previous month arrow button.
       */
      function previousMonth() {
        if (dMonth > 0) {
          dMonth--;
        } else {
          dMonth = 11;
          dYear--;
        }
  
        draw();
      };
  
      /**
       * Click handler for navigating to a month if there are posts.
       */
      function toPostsMonth(date) {
        if (date) {
          dYear = date.getFullYear();
          dMonth = date.getMonth();
          draw();
        }
      }
  
      /**
       * Load current month's posts.
       */
      function loadPosts() {
        if (settings.single) {
          loadAllPosts();
        } else {
          loadPostsByMonth();
        }
      }
  
      /**
       * Load all month's posts.
       */
      function loadAllPosts() {
        if (settings.url != null && settings.url != '') {
          if (allPosts === null) {
            $.ajax({
              url: settings.url,
              async: false,
              success: function(data) {
                allPosts = data;
                initMonths(Object.keys(allPosts));
              }
            });
          }
  
          if (allPosts !== null) {
            if (parse()) {
              current.posts = allPosts[dYear + '-' + (dMonth + 1)];
            }
          }
        }
      }
  
      /**
       * Load posts by the month.
       */
      function loadPostsByMonth() {
        if (months === null) {
          $.ajax({
            url: settings.root + 'list.json',
            async: false,
            success: function(data) {
              initMonths(data);
            }
          });
        }
  
        if (parse()) {
          $.ajax({
            url: settings.root + dYear + '-' + (dMonth + 1) + '.json',
            async: false,
            success: function(data) {
              current.posts = data;
            }
          });
        }
      }
  
      /**
       * Initial months array.
       */
      function initMonths(array) {
        months = array.map(function(item) {
          var ym = item.split('-');
          return new Date(Date.UTC(+ym[0], +ym[1] - 1));
        });
      }
  
      /**
       * Parse posts month array, and set current.next and current.prev.
       *
       * @return if there are posts in this month, return true. ortherwise return false.
       */
      function parse() {
        var time = Date.UTC(dYear, dMonth);
  
        if (months === null || months.length === 0) {
          return false;
        }
  
        //If no posts in the current month, and before (or after) the current month yet not published articles, then the response to click previous month's (or next month's) event don't need to parse months array
        if (current.posts.length === 0 && (current.prev === null && current.next !== null && current.next.getTime() > time || current.next === null && current.prev !== null && current.prev.getTime() < time)) {
          return false;
        }
  
        current.posts = [];
  
        for (var i = 0; i < months.length; i++) {
          var cTime = months[i].getTime();
          if (time === cTime) {
            current.prev = i === 0 ? null : months[i - 1];
            current.next = i === months.length - 1 ? null : months[i + 1];
            return true;
          } else if (time < cTime) {
            current.prev = i === 0 ? null : months[i - 1];
            current.next = months[i];
            break;
          } else {
            current.prev = months[i];
            current.next = null;
          }
        }
  
        return false;
      }
  
      /**
       * Format date object.
       */
      function simpleDateFormat(date, fmt) {
        var o = {
          'LMM+': settings.months[date.getMonth()],
          'MM+': date.getMonth() + 1
        };
  
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
  
        for (var k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (k === 'LMM+') ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
          }
        }
  
        return fmt;
      }
  
      /**
       * Draw calendar.
       *
       */
      function draw() {
        loadPosts();
        var dWeekDayOfMonthStart = new Date(dYear, dMonth, 1).getDay() - settings.weekOffset;
        if (dWeekDayOfMonthStart <= 0) {
          dWeekDayOfMonthStart = 6 - ((dWeekDayOfMonthStart + 1) * -1);
        }
  
        var dLastDayOfMonth = new Date(dYear, dMonth + 1, 0).getDate();
        var dLastDayOfPreviousMonth = new Date(dYear, dMonth, 0).getDate() - dWeekDayOfMonthStart + 1;
  
        var cHead = $('<div/>').addClass('cal-head');
        var cNext = $('<div/>');
        var cPrevious = $('<div/>');
        var cTitle = $('<div/>').addClass('cal-title');
        cPrevious.html(settings.headArrows.previous);
        cNext.html(settings.headArrows.next);
        curDate = new Date(Date.UTC(dYear, dMonth));
        if (current.posts.length === 0) {
          cTitle.html(simpleDateFormat(curDate, settings.titleFormat));
        } else {
          cTitleLink = $('<a/>').attr('href', simpleDateFormat(curDate, settings.titleLinkFormat))
            .attr('title', simpleDateFormat(curDate, settings.postsMonthTip))
            .html(simpleDateFormat(curDate, settings.titleFormat));
          cTitle.html(cTitleLink);
        }
  
        cPrevious.on('click', previousMonth);
        cNext.on('click', nextMonth);
  
        cHead.append(cPrevious);
        cHead.append(cTitle);
        cHead.append(cNext);
  
        var cBody = $('<table/>').addClass('cal');
  
        var dayOfWeek = settings.weekOffset;
        var cWeekHead = $('<thead/>');
        var cWeekHeadRow = $('<tr/>');
        for (var i = 0; i < 7; i++) {
          if (dayOfWeek > 6) {
            dayOfWeek = 0;
          }
  
          var cWeekDay = $('<th/>').attr('scope', 'col').attr('title', settings.dayOfWeek[dayOfWeek]);
          cWeekDay.html(settings.dayOfWeekShort[dayOfWeek]);
          cWeekHeadRow.append(cWeekDay);
          dayOfWeek++;
        }
  
        cWeekHead.append(cWeekHeadRow);
        cBody.append(cWeekHead);
  
        var cFoot = $('<tfoot/>');
        var cFootRow = $('<tr/>');
        var cPrevPosts = $('<td/>').attr('colspan', 3);
        var cPad = $('<td/>').html('&nbsp;');
        var cNextPosts = $('<td/>').attr('colspan', 3);
        if (current.prev) {
          cPrevPosts.html(settings.footArrows.previous + settings.months[current.prev.getMonth()])
            .addClass('cal-foot')
            .attr('title', simpleDateFormat(current.prev, settings.postsMonthTip));
        }
  
        if (current.next) {
          cNextPosts.html(settings.months[current.next.getMonth()] + settings.footArrows.next)
            .addClass('cal-foot')
            .attr('title', simpleDateFormat(current.next, settings.postsMonthTip));
        }
  
        cPrevPosts.on('click', function() {
          toPostsMonth(current.prev);
        });
  
        cNextPosts.on('click', function() {
          toPostsMonth(current.next);
        });
  
        cFootRow.append(cPrevPosts);
        cFootRow.append(cPad);
        cFootRow.append(cNextPosts);
        cFoot.append(cFootRow);
  
        var cMainPad = $('<tbody/>');
        var day = 1;
        var dayOfNextMonth = 1;
        for (var i = 0; i < 6; i++) {
          var cWeek = $('<tr/>');
          for (var j = 0; j < 7; j++) {
            var cDay = $('<td/>');
            if (i * 7 + j < dWeekDayOfMonthStart) {
              cDay.addClass('cal-gray');
              cDay.html(dLastDayOfPreviousMonth++);
            } else if (day <= dLastDayOfMonth) {
              if (day == dDay && nMonth == dMonth && nYear == dYear) {
                cDay.addClass('cal-today');
              }
  
              var count = {
                num: 0,
                keys: []
              };
              for (var k = 0; k < current.posts.length; k++) {
                var d = new Date(Date.parse(current.posts[k].date));
                if (d.getDate() == day) {
                  count.keys[count.num++] = k;
                }
              }
  
              if (count.num !== 0) {
                var index = count.keys[0];
                var cLink = $('<a>').attr('href', current.posts[index].link).attr('title', current.posts[index].title).html(day++);
                cDay.append(cLink);
              } else {
                cDay.html(day++);
              }
            } else {
              cDay.addClass('cal-gray');
              cDay.html(dayOfNextMonth++);
            }
  
            cWeek.append(cDay);
          }
  
          cMainPad.append(cWeek);
        }
  
        cBody.append(cWeekHead);
        cBody.append(cFoot);
        cBody.append(cMainPad);
  
        $(instance).html(cHead);
        $(instance).append(cBody);
      }
  
      return draw();
    };
  
    $.fn.aCalendar = function(Lang, oInit) {
      return this.each(function() {
        return aCalendar(Lang, oInit, $(this));
      });
    };
  
    // plugin defaults
    $.fn.aCalendar.defaults = {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      dayOfWeekShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      postsMonthTip: 'Posts published in LMM yyyy',
      titleFormat: 'yyyy LMM',
      titleLinkFormat: '/archives/yyyy/MM/',
      headArrows: {previous: '<span class="cal-prev"></span>', next: '<span class="cal-next"></span>'},
      footArrows: {previous: '« ', next: ' »'},
      weekOffset: 0,
      single: true,
      root: '/calendar/',
      url: '/calendar.json'
    };
  
    $(document).ready(function () {
        $('#calendar').aCalendar('zh-CN');//'zh-CN'请根据自己博客的语言选择
    });
    

  }(jQuery));

```

**languages.js**

```javas
var calLanguages = {
    ar: { // Arabic
      months: [
        'كانون الثاني', 'شباط', 'آذار', 'نيسان', 'مايو', 'حزيران', 'تموز', 'آب', 'أيلول', 'تشرين الأول', 'تشرين الثاني', 'كانون الأول'
      ],
      dayOfWeekShort: [
        'ن', 'ث', 'ع', 'خ', 'ج', 'س', 'ح'
      ],
      dayOfWeek: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد']
    },
    ro: { // Romanian
      months: [
        'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'
      ],
      dayOfWeekShort: [
        'Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'
      ],
      dayOfWeek: ['Duminică', 'Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă']
    },
    id: { // Indonesian
      months: [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ],
      dayOfWeekShort: [
        'Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'
      ],
      dayOfWeek: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    },
    is: { // Icelandic
      months: [
        'Janúar', 'Febrúar', 'Mars', 'Apríl', 'Maí', 'Júní', 'Júlí', 'Ágúst', 'September', 'Október', 'Nóvember', 'Desember'
      ],
      dayOfWeekShort: [
        'Sun', 'Mán', 'Þrið', 'Mið', 'Fim', 'Fös', 'Lau'
      ],
      dayOfWeek: ['Sunnudagur', 'Mánudagur', 'Þriðjudagur', 'Miðvikudagur', 'Fimmtudagur', 'Föstudagur', 'Laugardagur']
    },
    bg: { // Bulgarian
      months: [
        'Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'
      ],
      dayOfWeekShort: [
        'Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'
      ],
      dayOfWeek: ['Неделя', 'Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота']
    },
    fa: { // Persian/Farsi
      months: [
        'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
      ],
      dayOfWeekShort: [
        'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'
      ],
      dayOfWeek: ['یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه', 'یک‌شنبه']
    },
    ru: { // Russian
      months: [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ],
      dayOfWeekShort: [
        'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'
      ],
      dayOfWeek: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    },
    uk: { // Ukrainian
      months: [
        'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
      ],
      dayOfWeekShort: [
        'Ндл', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'
      ],
      dayOfWeek: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота']
    },
    en: { // English
      months: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
      ],
      dayOfWeekShort: [
        'S', 'M', 'T', 'W', 'T', 'F', 'S'
      ],
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      postsMonthTip: 'Posts published in LMM yyyy',
      titleFormat: 'LMM yyyy'
    },
    el: { // Ελληνικά
      months: [
        'Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'
      ],
      dayOfWeekShort: [
        'Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ'
      ],
      dayOfWeek: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
    },
    de: { // German
      months: [
        'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
      ],
      dayOfWeekShort: [
        'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'
      ],
      dayOfWeek: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
    },
    nl: { // Dutch
      months: [
        'januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'
      ],
      dayOfWeekShort: [
        'zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'
      ],
      dayOfWeek: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']
    },
    tr: { // Turkish
      months: [
        'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
      ],
      dayOfWeekShort: [
        'Paz', 'Pts', 'Sal', 'Çar', 'Per', 'Cum', 'Cts'
      ],
      dayOfWeek: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
    },
    fr: { //French
      months: [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ],
      dayOfWeekShort: [
        'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'
      ],
      dayOfWeek: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
    },
    es: { // Spanish
      months: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      dayOfWeekShort: [
        'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'
      ],
      dayOfWeek: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    },
    th: { // Thai
      months: [
        'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
      ],
      dayOfWeekShort: [
        'อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'
      ],
      dayOfWeek: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์', 'อาทิตย์']
    },
    pl: { // Polish
      months: [
        'styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'
      ],
      dayOfWeekShort: [
        'nd', 'pn', 'wt', 'śr', 'cz', 'pt', 'sb'
      ],
      dayOfWeek: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota']
    },
    pt: { // Portuguese
      months: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ],
      dayOfWeekShort: [
        'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'
      ],
      dayOfWeek: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    },
    ch: { // Simplified Chinese
      months: [
        '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
      ],
      dayOfWeekShort: [
        '日', '一', '二', '三', '四', '五', '六'
      ]
    },
    se: { // Swedish
      months: [
        'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'
      ]
    },
    kr: { // Korean
      months: [
        '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'
      ],
      dayOfWeekShort: [
        '일', '월', '화', '수', '목', '금', '토'
      ],
      dayOfWeek: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
    },
    it: { // Italian
      months: [
        'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
      ],
      dayOfWeekShort: [
        'Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'
      ],
      dayOfWeek: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato']
    },
    da: { // Dansk
      months: [
        'January', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'July', 'August', 'September', 'Oktober', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'
      ],
      dayOfWeek: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']
    },
    no: { // Norwegian
      months: [
        'Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'
      ],
      dayOfWeekShort: [
        'Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'
      ],
      dayOfWeek: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']
    },
    ja: { // Japanese
      months: [
        '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'
      ],
      dayOfWeekShort: [
        '日', '月', '火', '水', '木', '金', '土'
      ],
      dayOfWeek: ['日曜', '月曜', '火曜', '水曜', '木曜', '金曜', '土曜']
    },
    vi: { // Vietnamese
      months: [
        'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
      ],
      dayOfWeekShort: [
        'CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'
      ],
      dayOfWeek: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy']
    },
    sl: { // Slovenščina
      months: [
        'Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij', 'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Ned', 'Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob'
      ],
      dayOfWeek: ['Nedelja', 'Ponedeljek', 'Torek', 'Sreda', 'Četrtek', 'Petek', 'Sobota']
    },
    cs: { // Čeština
      months: [
        'Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'
      ],
      dayOfWeekShort: [
        'Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'
      ]
    },
    hu: { // Hungarian
      months: [
        'Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Va', 'Hé', 'Ke', 'Sze', 'Cs', 'Pé', 'Szo'
      ],
      dayOfWeek: ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat']
    },
    az: { //Azerbaijanian (Azeri)
      months: [
        'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'
      ],
      dayOfWeekShort: [
        'B', 'Be', 'Ça', 'Ç', 'Ca', 'C', 'Ş'
      ],
      dayOfWeek: ['Bazar', 'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 'Cümə axşamı', 'Cümə', 'Şənbə']
    },
    bs: { //Bosanski
      months: [
        'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'
      ],
      dayOfWeekShort: [
        'Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'
      ],
      dayOfWeek: ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota']
    },
    ca: { //Català
      months: [
        'Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'
      ],
      dayOfWeekShort: [
        'Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'
      ],
      dayOfWeek: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte']
    },
    'en-GB': { //English (British)
      months: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
      ],
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    et: { //'Eesti'
      months: [
        'Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'
      ],
      dayOfWeekShort: [
        'P', 'E', 'T', 'K', 'N', 'R', 'L'
      ],
      dayOfWeek: ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev']
    },
    eu: { //Euskara
      months: [
        'Urtarrila', 'Otsaila', 'Martxoa', 'Apirila', 'Maiatza', 'Ekaina', 'Uztaila', 'Abuztua', 'Iraila', 'Urria', 'Azaroa', 'Abendua'
      ],
      dayOfWeekShort: [
        'Ig.', 'Al.', 'Ar.', 'Az.', 'Og.', 'Or.', 'La.'
      ],
      dayOfWeek: ['Igandea', 'Astelehena', 'Asteartea', 'Asteazkena', 'Osteguna', 'Ostirala', 'Larunbata']
    },
    fi: { //Finnish (Suomi)
      months: [
        'Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'
      ],
      dayOfWeekShort: [
        'Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'
      ],
      dayOfWeek: ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai']
    },
    gl: { //Galego
      months: [
        'Xan', 'Feb', 'Maz', 'Abr', 'Mai', 'Xun', 'Xul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'
      ],
      dayOfWeekShort: [
        'Dom', 'Lun', 'Mar', 'Mer', 'Xov', 'Ven', 'Sab'
      ],
      dayOfWeek: ['Domingo', 'Luns', 'Martes', 'Mércores', 'Xoves', 'Venres', 'Sábado']
    },
    hr: { //Hrvatski
      months: [
        'Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'
      ],
      dayOfWeekShort: [
        'Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'
      ],
      dayOfWeek: ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subotagg']
    },
    ko: { //Korean (한국어)
      months: [
        '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'
      ],
      dayOfWeekShort: [
        '일', '월', '화', '수', '목', '금', '토'
      ],
      dayOfWeek: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
    },
    lt: { //Lithuanian (lietuvių)
      months: [
        'Sausio', 'Vasario', 'Kovo', 'Balandžio', 'Gegužės', 'Birželio', 'Liepos', 'Rugpjūčio', 'Rugsėjo', 'Spalio', 'Lapkričio', 'Gruodžio'
      ],
      dayOfWeekShort: [
        'Sek', 'Pir', 'Ant', 'Tre', 'Ket', 'Pen', 'Šeš'
      ],
      dayOfWeek: ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis']
    },
    lv: { //Latvian (Latviešu)
      months: [
        'Janvāris', 'Februāris', 'Marts', 'Aprīlis ', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'
      ],
      dayOfWeekShort: [
        'Sv', 'Pr', 'Ot', 'Tr', 'Ct', 'Pk', 'St'
      ],
      dayOfWeek: ['Svētdiena', 'Pirmdiena', 'Otrdiena', 'Trešdiena', 'Ceturtdiena', 'Piektdiena', 'Sestdiena']
    },
    mk: { //Macedonian (Македонски)
      months: [
        'јануари', 'февруари', 'март', 'април', 'мај', 'јуни', 'јули', 'август', 'септември', 'октомври', 'ноември', 'декември'
      ],
      dayOfWeekShort: [
        'нед', 'пон', 'вто', 'сре', 'чет', 'пет', 'саб'
      ],
      dayOfWeek: ['Недела', 'Понеделник', 'Вторник', 'Среда', 'Четврток', 'Петок', 'Сабота']
    },
    mn: { //Mongolian (Монгол)
      months: [
        '1-р сар', '2-р сар', '3-р сар', '4-р сар', '5-р сар', '6-р сар', '7-р сар', '8-р сар', '9-р сар', '10-р сар', '11-р сар', '12-р сар'
      ],
      dayOfWeekShort: [
        'Дав', 'Мяг', 'Лха', 'Пүр', 'Бсн', 'Бям', 'Ням'
      ],
      dayOfWeek: ['Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба', 'Ням']
    },
    'pt-BR': { //Português(Brasil)
      months: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ],
      dayOfWeekShort: [
        'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'
      ],
      dayOfWeek: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    },
    sk: { //Slovenčina
      months: [
        'Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So'
      ],
      dayOfWeek: ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota']
    },
    sq: { //Albanian (Shqip)
      months: [
        'Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor'
      ],
      dayOfWeekShort: [
        'Die', 'Hën', 'Mar', 'Mër', 'Enj', 'Pre', 'Shtu'
      ],
      dayOfWeek: ['E Diel', 'E Hënë', 'E Martē', 'E Mërkurë', 'E Enjte', 'E Premte', 'E Shtunë']
    },
    'sr-YU': { //Serbian (Srpski)
      months: [
        'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'
      ],
      dayOfWeekShort: [
        'Ned', 'Pon', 'Uto', 'Sre', 'čet', 'Pet', 'Sub'
      ],
      dayOfWeek: ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak', 'Petak', 'Subota']
    },
    sr: { //Serbian Cyrillic (Српски)
      months: [
        'јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар'
      ],
      dayOfWeekShort: [
        'нед', 'пон', 'уто', 'сре', 'чет', 'пет', 'суб'
      ],
      dayOfWeek: ['Недеља', 'Понедељак', 'Уторак', 'Среда', 'Четвртак', 'Петак', 'Субота']
    },
    sv: { //Svenska
      months: [
        'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'
      ],
      dayOfWeek: ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag']
    },
    'zh-TW': { //Traditional Chinese (繁體中文)
      months: [
        '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
      ],
      dayOfWeekShort: [
        '日', '一', '二', '三', '四', '五', '六'
      ],
      dayOfWeek: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    },
    'zh-CN': { //Simplified Chinese (简体中文)
      months: [
        '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
      ],
      dayOfWeekShort: [
        '日', '一', '二', '三', '四', '五', '六'
      ],
      dayOfWeek: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      postsMonthTip: '查看yyyy年MM月的文章',
      titleFormat: 'yyyy年MM月'
    },
    he: { //Hebrew (עברית)
      months: [
        'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
      ],
      dayOfWeekShort: [
        'א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'
      ],
      dayOfWeek: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת', 'ראשון']
    },
    hy: { // Armenian
      months: [
        'Հունվար', 'Փետրվար', 'Մարտ', 'Ապրիլ', 'Մայիս', 'Հունիս', 'Հուլիս', 'Օգոստոս', 'Սեպտեմբեր', 'Հոկտեմբեր', 'Նոյեմբեր', 'Դեկտեմբեր'
      ],
      dayOfWeekShort: [
        'Կի', 'Երկ', 'Երք', 'Չոր', 'Հնգ', 'Ուրբ', 'Շբթ'
      ],
      dayOfWeek: ['Կիրակի', 'Երկուշաբթի', 'Երեքշաբթի', 'Չորեքշաբթի', 'Հինգշաբթի', 'Ուրբաթ', 'Շաբաթ']
    },
    kg: { // Kyrgyz
      months: [
        'Үчтүн айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш Оона', 'Аяк Оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'
      ],
      dayOfWeekShort: [
        'Жек', 'Дүй', 'Шей', 'Шар', 'Бей', 'Жум', 'Ише'
      ],
      dayOfWeek: [
        'Жекшемб', 'Дүйшөмб', 'Шейшемб', 'Шаршемб', 'Бейшемби', 'Жума', 'Ишенб'
      ]
    },
    rm: { // Romansh
      months: [
        'Schaner', 'Favrer', 'Mars', 'Avrigl', 'Matg', 'Zercladur', 'Fanadur', 'Avust', 'Settember', 'October', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Du', 'Gli', 'Ma', 'Me', 'Gie', 'Ve', 'So'
      ],
      dayOfWeek: [
        'Dumengia', 'Glindesdi', 'Mardi', 'Mesemna', 'Gievgia', 'Venderdi', 'Sonda'
      ]
    },
    ka: { // Georgian
      months: [
        'იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'
      ],
      dayOfWeekShort: [
        'კვ', 'ორშ', 'სამშ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'
      ],
      dayOfWeek: ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი']
    },
  };
```

然后编辑编辑`calendar.js` 文件，在文件最后`}(jQuery));`之前添加:

```javas
$(document).ready(function () {
    $('#calendar').aCalendar('zh-CN');//'zh-CN'请根据自己博客的语言选择
});
```

当然我这里已经添加好了，你也可以直接引用链接，放到`butterfly.yml`.里的`inject->bottom`里面

```code
      - <script src="https://cdn.jsdelivr.net/gh/jinan6/CDN/js/calendar.js"></script>
      - <script src="https://cdn.jsdelivr.net/gh/jinan6/CDN/js/languages.js"></script>
```

在 `themes\Butterfly\source\css\_layout` 目录下，新建 `calendar.styl`文件

```css
#calendar
  a
    text-decoration none

.cal-head
  margin-bottom: 15px
  position relative
  height 20px
  padding 8px 6px 2px 6px

.cal-prev,.cal-next
  position absolute
  top 9px
  width 16px
  height 18px
  padding 3px 4px
  border 1px solid transparent
  color #333
  outline 0

.cal-prev
  left 8px
  &:before
    border-right 9px solid #333

.cal-next
  right 8px
  &:before
    border-left 9px solid #333

.cal-prev:before,.cal-next:before
  content ''
  display block
  width 0
  height 0
  border-top 5px solid transparent
  border-bottom 5px solid transparent

.cal-title
  width 120px
  margin 0 auto
  color #333
  font bold 14px/18px Arial
  text-align center
  a
    border 1px solid transparent
    color #9f9f9f

.cal,
.cal th,
.cal td
  border 1px solid #d1d1d1

.cal
  display: table
  border-collapse separate
  border-spacing 0
  border-width 1px 0 0 1px
  table-layout fixed
  width 100%
  margin 0
  th
    background #9f9f9f
    color #fff
    border-width 0 1px 1px 0
    font-weight 700
  td
    border-width 0 1px 1px 0
  tbody
    a
      background-color #007acc
      color #fff
      display block
      font-weight 700
    .cal-today
      background-color #66ecfd
      color #fff
  .cal-gray
    color #bbb8b8

[data-theme='dark'] .cal .cal-gray
  color #505050

.cal th,
.cal td
  font-weight normal
  line-height 2.5625
  padding 0
  text-align center

[data-theme='dark'] .cal .cal-foot
  color #9f9f9f

.cal .cal-foot
  color #2ca6cb

.cal-title a:hover,
.cal-prev:hover,
.cal-next:hover,
.cal .cal-foot:hover,
.cal .cal-foot:focus,
.cal tbody a:hover,
.cal tbody a:focus
  background-color #686868
  color #fff
  cursor pointer
```

在`themes\Butterfly\layout\includes\widget` 文件夹新建`card_calendar.pug` 文件，文件内容如下：

```code
.card-widget.card-calendar
  .card-content
    .item-headline
      i.far.fa-calendar-alt(aria-hidden="true")
      span= _p('aside.card_calendar')
    div.widget-wrap
    div#calendar.widget
```

编辑`同目录下的index.pug` 文件，在你想要显示的位置插入以下代码：

```code
if theme.aside.card_calendar
        !=partial('includes/widget/card_calendar', {}, {cache:theme.fragment_cache})
```

编辑 `butterfly.yml`文件，在 `card_webinfo`下面添加一行`card_calendar: true`

```code
card_calendar: true
```

编辑`themes\butterfly\languages\zh-CN.yml`文件，找到 `card_announcement: 公告` , 在下面添加一行 `card_calendar: 文章日历` (后面的文本可自定义)

```code
card_calendar: 文章日历
```

### 修改源码

{% note info %}
参考转载于[木槿的博客](https://xiabor.com/)
{% endnote %}

#### 调整页码圆角

修改`\source\css\_layout\pagination.styl`

```stylus
.page-number
  display: inline-block
  margin: 0 .2rem
  min-width: w = 1.5rem
  height: w
  text-align: center
  line-height: w
  cursor: pointer

&.current
  background: $theme-color
  color: $button-color
  cursor: default
  border-radius: 20px
```

#### 修改右下角返回顶部按钮

修改`\source\css\_layout\rightside.styl`，加大按钮宽度和高度。

```stylus
#rightside
  position: fixed
  right: -38px
  bottom: 10px
  z-index: 100
  opacity: 0
  transition: all .3s

  #rightside-config-hide
    transition: transform .4s
    transform: translate(40px, 0)

  & > div
    & > button,
    & > a
      display: block
      margin-bottom: 2px
      width: 35px
      height: 35px
      background-color: var(--btn-bg)
      color: var(--btn-color)
      text-align: center
      font-size: 16px
      line-height: 35px
      margin-bottom: 4px
      margin-right: 4px
      cursor: pointer
      border-radius: 3px
```

#### 文章目录美化

选择某一目录时，背景框宽度为最大且为方形，修改选中时边框为圆润且适应标题长度。

修改`\source\css\_layout\sidebar.styl`

```stylus
      &.active
        border-right-color: darken($theme-toc-color, 20%)
        background: $theme-toc-color
        color: $sidebar-active-color
        border-radius: 5px
        width: max-content
        padding-right: 5px
        padding-left: 5px
```

#### 修改文章底部标签框

修改`\source\css\_layout\post.styl`

```stylus
      &__tags
        display: inline-block
        margin: .4rem .4rem .4rem 0
        padding: 0 .6rem
        width: fit-content
        border: 2px solid $font-black
        border-radius: .2rem
        color: $font-black
        font-size: 14px
        text-decoration: overline
        cursor: pointer
        transition: all .2s ease-in-out
        
        .post-copyright
        position: relative
        margin: 2rem 0 .5rem
        padding: .5rem .8rem
        border: 1px solid $dark-white
        transition: box-shadow .3s ease-in-out
        border-radius: 5px
        
       .post-copyright
         &-meta
           color: $grey
           font-weight: bold
```

#### 修改链接颜色

修改`\source\css\var.styl`

```stylus
$a-link-color = #638fff
```

#### 自动切换夜间模式时间

修改`\layout\includes\head\darkmode.styl`，根据需要修改即可

#### 修改推荐文章和上下篇文章的图片圆角

上一篇下一篇图片圆角，修改`\source\css\_layout\pagination.styl`

```stylus
#pagination
  overflow: hidden
  margin-top: 1rem
  width: 100%
  border-radius: 8px
```

#### 相关文章图片圆角

修改`\source\css\_layout\relatedposts.styl`

```stylus
  .relatedPosts_item
    position: relative
    display: inline-block
    overflow: hidden
    margin: 3px
    width: calc(33.333% - 6px)
    height: 200px
    background: $dark-black
    vertical-align: bottom
    border-radius: 8px
```

#### 页脚跳动的心

{% note info %}
此功能转载于[一个懒人的博客](https://blog.hclonely.com/)
{% endnote %}

编辑`博客根目录/themes/Butterfly/layout/includes/footer.pug`文件，将`©${theme.since} - ${nowYear} By ${config.author}`改为`&copy;${theme.since} - ${nowYear + ' '} <i id="heartbeat" class="fa fas fa-heartbeat"></i> ${config.author}`, 将`©${nowYear} By ${config.author}`改为`&copy;${nowYear + ' '} <i id="heartbeat" class="fa fas fa-heartbeat"></i> ${config.author}`

在`inject->head`下面添加如下内容：

```yaml
- <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HCLonely/images@master/others/heartbeat.min.css">
```

### 添加左下角全局音乐播放器

{% note info %}
此功能转载于[Jerry的博客](https://demo.jerryc.me/posts/507c070f/)，供以后方便自己查找使用
{% endnote %}

首先，需要安装`hexo-tag-aplayer`这款插件。

在你的博客目录，右键`Git Bash Here`，输入以下命令安装插件

```bas
npm install --save hexo-tag-aplayer
```

然后，在博客配置文件中加入以下设置于

```yml
aplayer:
  meting: false
  asset_inject: false
```

在主题配置文件中，修改以下内容

```yml
# Inject the css and script (aplayer/meting)
aplayerInject:
  enable: true
  per_page: true
```

然后需要把 `aplayer`代碼插入到主題配置文件的 `inject.bottom` 去

```html
inject:
  head:
  bottom:
    - <div class="aplayer no-destroy" data-id="000PeZCQ1i4XVs" data-server="tencent" data-type="artist" data-fixed="true" data-mini="true" data-listFolded="false" data-order="random" data-preload="none" data-autoplay="true" muted></div>
```

参数详情：

| 选项          | 默认值     | 描述                                                        |
| ------------- | ---------- | ----------------------------------------------------------- |
| id            | **必须值** | 歌曲 id / 播放列表 id / 相册 id / 搜索关键字                |
| server        | **必须值** | 音乐平台: `netease`, `tencent`, `kugou`, `xiami`, `baidu`   |
| type          | **必须值** | `song`, `playlist`, `album`, `search`, `artist`             |
| fixed         | `false`    | 开启固定模式                                                |
| mini          | `false`    | 开启迷你模式                                                |
| loop          | `all`      | 列表循环模式：`all`, `one`,`none`                           |
| order         | `list`     | 列表播放模式： `list`, `random`                             |
| volume        | 0.7        | 播放器音量                                                  |
| lrctype       | 0          | 歌词格式类型                                                |
| listfolded    | `false`    | 指定音乐播放列表是否折叠                                    |
| storagename   | `metingjs` | LocalStorage 中存储播放器设定的键名                         |
| autoplay      | `true`     | 自动播放，移动端浏览器暂时不支持此功能                      |
| mutex         | `true`     | 该选项开启时，如果同页面有其他 aplayer 播放，该播放器会暂停 |
| listmaxheight | `340px`    | 播放列表的最大长度                                          |
| preload       | `auto`     | 音乐文件预载入模式，可选项： `none`, `metadata`, `auto`     |
| theme         | `#ad7a86`  | 播放器风格色彩设置                                          |

如果需要刷新网页音乐不间断，就需要在主题配置文件中将`pjax`设置为`true`

### 实现全站黑白

只需引入一条css即可实现

```css
   - '<style type="text/css">html{filter:progid:DXImageTransForm.Microsoft.BasicImage(grayscale=1);-webkit-filter:saturate(0)}</style>'  #全站黑白css

```

