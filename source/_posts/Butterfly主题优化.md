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
info [大佬原文](https://zykj.js.org/posts/e55bad60/#github-badge)
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
info [大佬原文](https://zykj.js.org/posts/e55bad60/#github-badge)
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

   