---
title: next主题添加自定义友链
essential: true
tags: hexo
categories: 
	- Hexo
	- Next
abbrlink: 48141
date: 2020-05-28 09:52:21
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200619145438.jpg
---

> Hexo博客Next主题友链页面，本站用的是next7.8版本，版本不同可能略有差异

### link渲染文件

在 `hexo/themes/next/layout` 目录下建一个 `links.swig`文件，写入以下代码：

````javascript


{% block content %}
  {######################}
  {### LINKS BLOCK ###}
  {######################}

    <div id="links">
        <style>

            #links{
               margin-top: 5rem;
            }

            .links-content{
                margin-top:1rem;
            }

            .link-navigation::after {
                content: " ";
                display: block;
                clear: both;
            }

            .card {
                width: 300px;
                font-size: 1rem;
                padding: 10px 20px;
                border-radius: 4px;
                transition-duration: 0.15s;
                margin-bottom: 1rem;
                display:flex;
            }
            .card:nth-child(odd) {
                float: left;
            }
            .card:nth-child(even) {
                float: right;
            }
            .card:hover {
                transform: scale(1.1);
                box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
            }
            .card a {
                border:none;
            }
            .card .ava {
                width: 3rem!important;
                height: 3rem!important;
                margin:0!important;
                margin-right: 1em!important;
                border-radius:4px;

            }
            .card .card-header {
                font-style: italic;
                overflow: hidden;
                width: 236px;
            }
            .card .card-header a {
                font-style: normal;
                color: #2bbc8a;
                font-weight: bold;
                text-decoration: none;
            }
            .card .card-header a:hover {
                color: #d480aa;
                text-decoration: none;
            }
            .card .card-header .info {
                font-style:normal;
                color:#a3a3a3;
                font-size:14px;
                min-width: 0;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        </style>
        <div class="links-content">

             <div class="no-icon note warning"><div class="link-info">👨‍🎓 跟着大佬走，成为小大佬</div></div>
            <div class="link-navigation">
                    {% for link in theme.defaultlinks %}

                    <div class="card">
                        <img class="ava nofancybox" src="{{ link.avatar }}"/>
                        <div class="card-header">
                        <div><a href="{{ link.site }}" target="_blank"> {{ link.nickname }}</a> <a href="{{ link.site }}"><span class="focus-links"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp;关注</span></a></div>
                        <div class="info">{{ link.info }}</div>
                        </div>
                    </div>

                {% endfor %}

            </div>

            <div class="no-icon note primary"><div class="link-info">🍭 五湖四海的朋友们</div></div>

             <div class="link-navigation">
                    {% for link in theme.friendslinks %}

                    <div class="card">
                        <img class="ava nofancybox" src="{{ link.avatar }}"/>
                        <div class="card-header">
                        <div><a href="{{ link.site }}" target="_blank"> {{ link.nickname }}</a> <a href="{{ link.site }}"><span class="focus-links"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp;关注</span></a></div>
                        <div class="info">{{ link.info }}</div>
                        </div>
                    </div>

                {% endfor %}

            </div>

            {{ page.content }}
            </div>
        </div>

  {##########################}
  {### END LINKS BLOCK ###}
  {##########################}
{% endblock %}
````

### page渲染文件

修改 `hexo/themems/next/layout/page.swig` 文件，在

````javascript
{%- elif page.type === 'schedule' and not page.title %}
    {{- __('title.schedule') + page_title_suffix }}
````

下添加以下代码

````javas
{%- elif page.type === 'links' and not page.title %}
	  {{- __('title.links') + page_title_suffix }}
````

然后在这个文件中，接着引入刚才新建的 swig 页面：

在

````javascript
 {% include '_scripts/pages/schedule.swig' %}
````

下，加入以下代码：

````javascript
 {% elif page.type === 'links' %}
		           {% include 'links.swig' %}
````

### index文件

修改 `links` 文件夹下的 `index.md` 文件，可以自己根据需要修改



````markdown
---
title: 友情链接
date: 2020-05-12 13:56:52
type: "links"

---

---

### 友链声明：

1、本站会主动保存您的 HTTPS 形式的头像图片链接
2、本站会定期清理无法访问的友链，如果更换了链接信息请至评论区留言，谢谢合作！
3、本站会定期查看双方是否互为友链，如果取消本站友链，本站也会将您的友链移除

### 申请方式：

先将本站的友链添加到您的友链，相关信息如下
然后按照以下格式在本站留言区留言，待博主为您添上友链

>名称：Sakura` Blogs
>头像链接：https://jinan6.github.io/images/avatar.png
>主页链接：https://jinan6.github.io/
>说明信息：个人小站
````

### config配置文件

最后，我们添加友链的话，需要在主题配置文件 `hexo/themes/next/_config.xml` 文件末尾添加：

````javascript

# 友情链接
defaultlinks:
  - nickname: AomanHao     # 昵称
    avatar: http://www.aomanhao.top/images/Avatar.jpg    # 头像地址
    site: http://www.aomanhao.top #友链地址
    info: 图像处理，优化世界

friendslinks:
  - nickname: AomanHao     # 昵称
    avatar: http://www.aomanhao.top/images/Avatar.jpg    # 头像地址
    site: http://www.aomanhao.top #友链地址
    info: 图像处理，优化世界
````

`defaultlinks:`呼应的是`link.swig`文件中 `👨‍🎓 跟着大佬走，成为小大佬`段落，此处链接写大佬的博客；
`friendslinks:`呼应的是`link.swig`文件中 `🍭 五湖四海的朋友们`段落，此处链接写朋友的博客。
此处内容可以根据自己需要自行修改

### 参考文章

[AomanHao的个人博客](https://www.aomanhao.top/2019/12/29/hexo_links/)