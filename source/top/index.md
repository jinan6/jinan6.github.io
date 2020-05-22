---
title: 文章热度排行
date: 2020-05-22 20:46:56
comments: true
---

<div id="top" style="margin-top:30px;"></div>

<script src="//cdn1.lncld.net/static/js/3.0.4/av-min.js"></script>
<!-- <script src="https://cdn1.lncld.net/static/js/av-core-mini-0.6.4.js"></script> -->
<script>AV.initialize("MAMAVASxjT5dcOMaFjPqd7yC-gzGzoHsz", "nMOGrsKQHA5s9IXapTQnBglA");</script>
<script type="text/javascript">
    var time = 0
    var title = ""
    var url = ""
    var query = new AV.Query('Counter');
    query.notEqualTo('id', 0);
    query.descending('time');
    query.limit(1000);
    query.find().then(function (todo) {
        for (var i = 0; i < 1000; i++) {
            var result = todo[i].attributes;
            time = result.time;
            title = result.title;
            url = result.url;
            var content = "<p class='my-article-top'>" + "<font color='#a7a7e5'>" + "➤【热度: " + "</font>" + "<font color='#f1a8ce'>" + time + " ℃】" + "</font>" + "<a href='"+"https://jinan6.github.io"+url+"'>" + title + "</a>" + "</p>";
            document.getElementById("top").innerHTML += content
        }
    }, function (error) {
        console.log("error");
    });
</script>
<style>.post-description {
        display: none;
    }
</style>
