---
title: Hexo博客美化之CSS篇
essential: true
tags: Hexo
categories: Hexo和next
abbrlink: 26259
date: 2020-05-23 17:37:46
top:
---

> 注意：本样式美化方式只适用于 Next 主题，并且最好懂一些 CSS 前端知识，以便有些不兼容样式部分可以自行在浏览器中 F12 调试。

<!--more-->

修改的话就找到next主题目录下的 `next\source\css\_custom\custom.styl` ，这个文件是Next主题预留给用户自定义修改css样式的文件，所以我们绝大多数全局样式都在这里进行修改即可。

由于next7.x版本以上删除了 `_custom\custom.styl` ，没有则新建，新建完成后在`next\source\css\main.styl`引入即可，在末尾加入

````css
@import "_custom/custom";
````



以下附上我的 `custom.styl` 文件内容为了以后方便查看

文件位置：**hexo/themes/next/source/css/_custom/custom.styl**

````css
 //背景图片
body {
    background:url(/images/aaa.jpg);
    background-repeat: no-repeat;
    background-attachment:fixed; //不重复
    background-size: cover;      //填充
    background-position:50% 50%;
}
//文章内容的透明度设置
.content-wrap {
  opacity: 1;		//0.9为透明
}
.content.index.posts-expand{
	opacity: 1;		//0.9为透明
}

 //侧边框的透明度设置
.sidebar {
  opacity: 1;
}

//菜单栏的透明度设置
.header-inner {
  // background: rgba(255,255,255,0.9);		//侧边栏上部分透明度
  border-radius: 20px;
}

//搜索框（local-search）的透明度设置
.popup {
  opacity: 0.9;
}
 // 主页文章添加阴影效果
.post {
   padding: 25px;
   background:rgba(255,255,255,0.9) none repeat scroll !important;
   -webkit-box-shadow: 0 0 5px rgba(202, 203, 203, .5);
   -moz-box-shadow: 0 0 5px rgba(202, 203, 204, .5);
}

// /*更好的侧边滚动条*/
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}
::-webkit-scrollbar-button:start:increment,::-webkit-scrollbar-button:end:decrement {
  display: none;
}
::-webkit-scrollbar-corner {
  display: block;
}
::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: rgba(0,0,0,.2);
}
::-webkit-scrollbar-thumb:hover {
  border-radius: 8px;
  background-color: rgba(0,0,0,.5);
}
::-webkit-scrollbar-track,::-webkit-scrollbar-thumb {
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
}
::-webkit-scrollbar-track:hover {
  background-color: rgba(0,0,0,.15);
}
::-webkit-scrollbar-button:start {
  width: 10px;
  height: 10px;
  /*background: url(../images/scrollbar_arrow.png) no-repeat 0 0;*/  /*可以添加滚动条样式*/
}

//文章标题与内容之间的间距
.posts-expand .post-meta {
    color: #999;
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
    font-size: 0.75em;
    margin: 3px 0 8px 0;	//主要
    text-align: center;
}

//其他文章圆角
.post-block + .post-block {
    border-radius: 15px 15px 15px 15px;
}

//第一篇文章圆角
article.post-block {
    border-radius: 15px 15px 15px 15px;
}
//文章间距
.post-block {
    padding: 35px;
}

//精品文章
.jingping{
  background : #00a8c3;
  padding:2px 4px 2px 4px;
  color: #fff;
}
//评论圆角
.v[data-class=v] {
    font-size: 16px;
    text-align: left;
    border-radius: 15px;
}

// //小猫
// //自定义回到顶部样式
// .back-to-top {
//   right: 60px;
//   width: 70px;  //图片素材宽度
//   height: 900px;  //图片素材高度
//   top: -900px;
//   bottom: unset;
//   transition: all .5s ease-in-out;
//   background: url("/images/scroll.png");

//   //隐藏箭头图标
//   > i {
//     display: none;
//   }

//   &.back-to-top-on {
//     bottom: unset;
//     top: 100vh < (900px + 200px) ? calc( 100vh - 900px - 200px ) : 0px;
//   }
// }
//阅读全文
// .btn {
//     display: inline-block;
//     padding: 0 20px;
//     font-size: 14px;
//     color: #fff;
//     background: #222;
//     border: 2px solid #222;
//     text-decoration: none;
//     border-radius: 0;
//     transition-property: background-color;
//     transition-duration: 0.2s;
//     transition-timing-function: ease-in-out;
//     transition-delay: 0s;
//     line-height: 2;
// }

//主体的间距 距离左侧
.content.index.posts-expand {
    opacity: 1;
 // margin-bottom: 50px;
    padding: 10px;
    // box-shadow: 0 0 14px rgba(202,203,203,.5);
}
//引用显示的左侧颜色
blockquote {
    border-left: 4px solid #ddd;
    color: var(--blockquote-color);
    margin: 0;
    padding: 0 15px;
    border-left-color: green;
}
//目录字体大小
.post-toc ol {
    list-style: none;
    margin: 0;
    padding: 0 2px 5px 10px;
    text-align: left;
    font-size: 15px;		//
}
//文章下方标签的CSS
.posts-expand .post-tags a {
    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
    font-family: 'Comic Sans MS',sans-serif;
    transition: .2s ease-out;
    padding: 3px 5px;
    margin: 5px;
    background: #f5f5f5;
    border-bottom: none;
    border-radius: 15px;
}
//文章下方上一篇下一篇的样式
.post-nav-item a {
    color: #5073b8;
    font-weight: 700;
    font-size: 16px;
}
//近期文章样式
.links-of-blogroll-title {
    font-size: 16px;
}
.links-of-blogroll-list a {
    color: #5073b8;
    font-weight: 700;
}
//去除超链接下划线
a {
    border-bottom: none;
}
//文章内容里的超链接
.post-body a:not(.btn):not(.hexo-douban-button):not(.hexo-douban-tab) {
    color: #5073b8;
    // border-bottom: none;
	border-bottom: 1px solid #999;
    text-decoration: none;
}
.post-body a:not(.btn):not(.hexo-douban-button):not(.hexo-douban-tab):hover {	//鼠标移动上取消下划线
    color: #5073b8;
    border-bottom: none;
    text-decoration: none;
}

//文章目录默认展开
.post-toc .nav .nav-child { display: block; }

//打赏按钮
.reward-container button {
        display: inline-block;
        width: 80px;
        height: 35px;
        border-radius: 5px;
        color: #fff;
        font-weight: 400;
        font-style: normal;
        font-variant: normal;
        font-stretch: normal;
        font-size: 18px;
        font-family: "Microsoft Yahei";
        background: #f44336;
}
//评论框去除下方广告
.v[data-class=v] .txt-right {
    text-align: right;
    display: none;
	margin-left: 30px;
}
// 文章主体阴影
.content.index.posts-expand {
    opacity: 1;
    padding: 10px;
    // margin-top: 30px;
    margin-bottom: 50px;
    padding: 25px;
    -webkit-box-shadow: 0 0 14px rgba(202,203,203,0.5);
    -moz-box-shadow: 0 0 14px rgba(202,203,204,0.5);
}

.content.post.posts-expand {
    margin-top: 50px;
    margin-bottom: 30px;
	border-radius: 30px;	//圆角
    // padding: 25px;
    -webkit-box-shadow: 0 0 14px rgba(202,203,203,0.5);
    -moz-box-shadow: 0 0 14px rgba(202,203,204,0.5);
}

.sidebar-inner {
    background: var(--content-bg-color);
    border-radius: 10px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.06), 0 1px 5px 0 rgba(0,0,0,.12), 0 -1px 0.5px 0 rgba(0,0,0,.09);
    box-sizing: border-box;
    color: var(--text-color);
    width: 240px;
    opacity: 0;
}

//相关文章样式
.popular-posts-header {
   // font-size: 1.5em;
   font-weight: bold;
   border-bottom: 1px solid #eee;
}
.popular-posts .popular-posts-item {
    margin-left: 3em;
    list-style-type: "🏷️ ";
}
.popular-posts-title a{
	    font-size: 1.12em;
	    border-bottom: 1px solid #999;
}
.popular-posts-title a:hover{		//鼠标放上取消下划线
	    font-size: 1.12em;
	    border-bottom: none;
}
````

