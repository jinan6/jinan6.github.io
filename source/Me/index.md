---
title: 关于
date: 2020-07-22 08:43:29
top_img: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200619104100.jpg
type: 'Me'
comments: false
---

<center>
    <div class="tip key font5 fas fa-key"><p>此页面加载较慢，暂关闭评论，留言👉👉{% btn 'https://jinan6.vip/board',留言板 %}</p></div>
</center>

<!-- https://www.bootcdn.cn/botui/ -->
<link href="https://cdn.bootcss.com/botui/0.3.9/botui-theme-default.css" rel="stylesheet">
<link href="https://cdn.bootcss.com/botui/0.3.9/botui.min.css" rel="stylesheet">

{% raw %}
<!-- 因为vue和botui更新导至bug,现将对话移至js下的botui中配置 -->

<div class="entry-content">
  <div class="moe-mashiro" style="text-align:center; font-size: 30px; margin-bottom: 20px;">[关于我]</div>
  <div id="hello-mashiro" class="popcontainer" style="min-height: 300px; padding: 2px 6px 4px; background-color: rgb(242, 242, 242, 0.5); border-radius: 10px;">
    <center>
    <p>
    </p>
    <h4>
    与&nbsp;<ruby>
    仅安&nbsp;<rp>
    （</rp>
    <rt>
    真（ま）白（しろ）</rt>
    <rp>
    ）</rp>
    </ruby>
    对话中...</h4>
    <p>
    </p>
    </center>
    <bot-ui></botui>
  </div>
</div>

<!--<script src="https://cungudafa.gitee.io/js/botui.js></script>-->

<script src="https://cdn.jsdelivr.net/gh/jinan6/CDN/js/botui.js"></script>
<script>
bot_ui_ini()
</script>



{% endraw %}