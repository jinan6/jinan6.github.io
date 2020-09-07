"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}$(function(){function u(t){var e=$("#nav"),i=0===t||(1===t?a+n>e.width()-o-30:a+n>e.width()-30);i?e.addClass("hide-menu"):e.removeClass("hide-menu")}function p(){$("#sidebar").removeClass("tocOpenPc").animate({left:"-300px"},400),$("#menus").animate({paddingRight:0},400),$("#body-wrap").animate({paddingLeft:0},400),$("#nav").hasClass("hide-menu")&&setTimeout(function(){u(2)},400)}function g(){var e=$("#toggle-menu"),i=$("#mobile-sidebar-menus"),a=$("#mobile-toc-button"),n=$("#menu_mask"),o=$("body"),s=$("#sidebar");function t(t){btf.sidebarPaddingR(),o.css("overflow","hidden"),n.fadeIn(),"menu"===t&&(e.removeClass("close").addClass("open"),i.addClass("open")),"toc"===t&&(a.removeClass("close").addClass("open"),s.addClass("tocOpenMobile").css({transform:"translate3d(-100%,0,0)",left:""}))}function c(t){o.css({overflow:"","padding-right":""}),n.fadeOut(),"menu"===t&&(e.removeClass("open").addClass("close"),i.removeClass("open")),"toc"===t&&(a.removeClass("open").addClass("close"),s.removeClass("tocOpenMobile").css({transform:""}))}function l(t){t.matches?s.hasClass("tocOpenPc")&&p():(d.hasClass("on")&&v(),a.hasClass("open")&&c("toc"))}e.on("click",function(){t("menu")}),a.on("click",function(){t("toc")}),n.on("click touchstart",function(t){e.hasClass("open")&&c("menu"),a.hasClass("open")&&c("toc")}),$(window).on("resize",function(t){e.is(":visible")||e.hasClass("open")&&c("menu")});var r=window.matchMedia("(max-width: 1024px)"),d=$("#toggle-sidebar");r.addListener(l),document.addEventListener("pjax:send",function(){r.removeListener(l)}),s.find(".toc-link").on("click",function(t){t.preventDefault(),btf.scrollToDest(decodeURI($(this).attr("href"))),window.innerWidth<1024&&c("toc")})}function m(){var n,o,s,c,t,e=GLOBAL_CONFIG.highlight.highlightCopy,i=GLOBAL_CONFIG.highlight.highlightLang,a=GLOBAL_CONFIG_SITE.isHighlightShrink,l=e||i||void 0!==a,r="highlighjs"===GLOBAL_CONFIG.highlight.plugin?$("figure.highlight"):$('pre[class*="language-"]');l&&r.length&&(n="prismjs"===GLOBAL_CONFIG.highlight.plugin,c=!(s=o="")===a?"closed":"",void 0!==a&&(o='<i class="fas fa-angle-down expand '.concat(c,'"></i>')),e&&(s='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),i?n?r.each(function(){var t=$(this),e=void 0!==t.attr("data-language")?t.attr("data-language"):"Code",i='<div class="code-lang">'.concat(e,"</div>");t.wrap('<figure class="highlight"></figure>').before('<div class="highlight-tools '.concat(c,'">').concat(o+i+s,"</div>"))}):r.each(function(t,e){var i=$(this),a=i.attr("class").split(" ")[1];"plain"!==a&&void 0!==a||(a="Code");var n='<div class="code-lang">'.concat(a,"</div>");i.prepend('<div class="highlight-tools '.concat(c,'">').concat(o+n+s,"</div>"))}):(t='<div class="highlight-tools '.concat(c,'">').concat(o+s,"</div>"),n?r.wrap('<figure class="highlight"></figure>').before(t):r.prepend(t)),void 0!==a&&$(".highlight-tools >.expand").on("click",function(){var t=$(this),e=t.parent().nextAll();t.toggleClass("closed"),e.is(":visible")?e.css("display","none"):e.css("display","block")}),e&&$(".highlight-tools >.copy-button").on("click",function(){var t=$(this).parents("figure.highlight");t.addClass("copy-true");var e=window.getSelection(),i=document.createRange();n?i.selectNodeContents(t.find("> pre code")[0]):i.selectNodeContents(t.find("table .code pre")[0]),e.removeAllRanges(),e.addRange(i);var a;e.toString();a=this,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):$(a).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1},450,function(){setTimeout(function(){$(a).prev(".copy-notice").animate({opacity:0},650)},400)})):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):$(a).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport),e.removeAllRanges(),t.removeClass("copy-true")}))}var a=$("#site-name").width(),n=$("#menus").width(),o=$("#sidebar").width()||300,v=function(){$("#nav").hasClass("hide-menu")||u(1),$("#sidebar").addClass("tocOpenPc").animate({left:0},400),$("#menus").animate({paddingRight:300},400),$("#body-wrap").animate({paddingLeft:300},400)};function b(){var o=0,s=!0,c=$("#rightside"),l=$("#nav"),r="function"==typeof chatBtnHide,d="function"==typeof chatBtnShow;$(window).scroll(btf.throttle(function(t){var e,i,a=$(this).scrollTop(),n=(i=o<(e=a),o=e,i);56<a?(n?(l.hasClass("visible")&&l.removeClass("visible"),d&&!0===s&&(chatBtnHide(),s=!1)):(l.hasClass("visible")||l.addClass("visible"),r&&!1===s&&(window.chatBtnShow(),s=!0)),l.addClass("fixed"),"0"===c.css("opacity")&&c.css({opacity:"1",transform:"translateX(-38px)"})):(0===a&&l.removeClass("fixed").removeClass("visible"),c.css({opacity:"",transform:""}))},200))}function C(){var f=$("#sidebar"),u=f.find(".toc-child"),p=f.find(".toc-link"),s=$("#article-container");u.hide(),$(window).scroll(btf.throttle(function(t){var e=$(this).scrollTop();i(e),a(e)},100));var i=function(t){var e=s.height(),i=$(window).height(),a=(t-s.offset().top)/(i<e?e-i:$(document).height()-i),n=Math.round(100*a),o=100<n?100:n<=0?0:n;f.find(".progress-num").text(o),f.find(".sidebar-toc__progress-bar").animate({width:o+"%"},100)},g=GLOBAL_CONFIG.isanchor,m=5<=GLOBAL_CONFIG.hexoversion.split(".")[0],v=s.find("h1,h2,h3,h4,h5,h6"),a=function(e){if(0===p.length)return!1;var i="";v.each(function(){var t=$(this);e>t.offset().top-70&&(i=m?"#"+encodeURI($(this).attr("id")):"#"+$(this).attr("id"))}),""===i&&(p.removeClass("active"),u.hide());var t,a,n,o,s,c,l,r,d,h=p.filter(".active");i&&h.attr("href")!==i&&(g&&(d=i,window.history.replaceState&&d!==window.location.hash&&window.history.replaceState(void 0,void 0,d)),p.removeClass("active"),(t=p.filter('[href="'+i+'"]')).addClass("active"),s=e,c=t.offset().top,l=f.find(".sidebar-toc__content"),r=l.scrollTop(),c>s+$(window).height()-100&&l.scrollTop(r+100),c<s+100&&l.scrollTop(r-100),n=0<(a=t.parents(".toc-child")).length?a.last():t,(o=n.closest(".toc-item").find(".toc-child")).is(":visible")||o.fadeIn(400),n.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide())}}var y=!1,t=$("#rightside");t.on("click","#readmode",function(){$("body").toggleClass("read-mode")}),$("#darkmode").length&&t.on("click","#darkmode",function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&$("#disqus_thread").children().length&&setTimeout(function(){return window.disqusReset()},200)}),t.on("click","#rightside_config",function(){return $("#rightside-config-hide").toggleClass("show")}),t.on("click","#go-up",function(){return btf.scrollToDest("body")});function L(t){t.each(function(t,e){var i=$(e),a=i.attr("datetime");i.text(btf.diffDate(a,!0)).css("display","inline")})}var s,O=function(){$("#article-container .tabs").find(".tab > button:not(.tab-to-top)").on("click",function(t){var e,i,a,n=$(this),o=n.parent();o.hasClass("active")||(e=n.parents(".nav-tabs").next(),o.siblings(".active").removeClass("active"),o.addClass("active"),i=n.attr("data-href"),e.find("> .tab-item-content").removeClass("active"),e.find("> ".concat(i)).addClass("active"),0<(a=e.find(i).find(".justified-gallery")).length&&btf.initJustifiedGallery(a))})},w=function(){$("#article-container .tabs .tab-to-top").on("click",function(){btf.scrollToDest($(this).parents(".tabs"))})};window.refreshFn=function(){var t,e,i,a,n,o,s,c,l,r,d,h,f;window.innerWidth<768?u(0):u(2),$("#nav").css({opacity:"1",animation:"headerNoOpacity 1s"}),GLOBAL_CONFIG_SITE.isPost?(1024<window.innerWidth&&$("#toggle-sidebar").hasClass("on")&&setTimeout(function(){v()},400),$("#toggle-sidebar").on("click",function(){var t=$(this).hasClass("on");t?$(this).removeClass("on"):$(this).addClass("on"),(t?p:v)()}),GLOBAL_CONFIG_SITE.isSidebar&&C(),void 0!==GLOBAL_CONFIG.noticeOutdate&&(s=GLOBAL_CONFIG.noticeOutdate,(c=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=s.limitDay&&(o='<div class="post-outdate-notice">'.concat(s.messagePrev+" "+c+" "+s.messageNext,"</div>"),"top"===s.position?$("#article-container").prepend(o):$("#article-container").append(o))),GLOBAL_CONFIG.relativeDate.post&&L($("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&L($("#recent-posts time")),!GLOBAL_CONFIG.runtime||(n=$("#runtimeshow")).length&&(a=n.attr("data-publishDate"),n.text(btf.diffDate(a)+" "+GLOBAL_CONFIG.runtime)),(i=$("#last-push-date")).length&&(t=i.attr("data-lastPushDate"),e=btf.diffDate(t,!0),i.text(e)),$("#aside-cat-list .card-category-list-item.parent i").on("click",function(t){t.preventDefault();var e=$(this);e.toggleClass("expand"),e.parents(".parent").next().toggle()})),g(),GLOBAL_CONFIG_SITE.isHome&&$("#scroll_down").on("click",function(){btf.scrollToDest("#content-inner")}),GLOBAL_CONFIG.highlight&&m(),GLOBAL_CONFIG.isPhotoFigcaption&&$("#article-container img").not(".justified-gallery img").each(function(t,e){var i,a=$(e);a.attr("alt")&&(i=$('<div class="img-alt is-center">'+a.attr("alt")+"</div>"),a.after(i))}),(r=$(".justified-gallery")).length&&((l=r.find("img")).unwrap(),l.length&&l.each(function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")}),y?btf.initJustifiedGallery(r):($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.justifiedGallery.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.justifiedGallery.js),function(){btf.initJustifiedGallery(r)}),y=!0)),"null"!==GLOBAL_CONFIG.lightbox&&("fancybox"===GLOBAL_CONFIG.lightbox?($("#article-container img:not(.gallery-group-img)").not($("a>img")).each(function(t,e){var i=$(e).attr("data-lazy-src")?$(e).attr("data-lazy-src"):$(e).attr("src"),a=$(e).attr("alt")?$(e).attr("alt"):"";$(e).wrap('<a href="'.concat(i,'" data-fancybox="group" data-caption="').concat(a,'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})):(d=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"))).on("open",function(t){var e="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";d.update({background:e})})),b(),$("#article-container table").not($("figure.highlight > table")).each(function(){$(this).wrap('<div class="table-wrap"></div>')}),(h=$(".hide-button")).length&&h.on("click",function(t){var e=$(this),i=$(this).next(".hide-content");e.toggleClass("open"),i.toggle(),e.hasClass("open")&&0<i.find(".justified-gallery").length&&btf.initJustifiedGallery(i.find(".justified-gallery"))}),O(),w(),f=!1,$("#switch-comments-btn").on("click",function(){$("#post-comment > .comment-wrap > div").each(function(){$(this).is(":visible")?$(this).hide():$(this).css({display:"block",animation:"tabshow .5s"})}),f||"function"!=typeof loadOtherComment||(f=!0,loadOtherComment())})},refreshFn(),$(window).on("resize",function(){window.innerWidth<768?u(0):$("#sidebar").hasClass("tocOpenPc")&&$("#nav").hasClass("fixed")?u(1):u(2)}),$("#mobile-sidebar-menus .expand").on("click",function(){$(this).parents(".menus_item").find("> .menus_item_child").slideToggle(),$(this).toggleClass("hide")}),$(window).on("touchmove",function(t){var e=$("#nav .menus_item_child");e.is(":visible")&&e.css("display","none")}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(s=GLOBAL_CONFIG.copyright,document.body.oncopy=function(t){t.preventDefault();var e=window.getSelection(0).toString(),i=e.length>s.limitCount?e+"\n\n\n"+s.languages.author+"\n"+s.languages.link+window.location.href+"\n"+s.languages.source+"\n"+s.languages.info:e;return t.clipboardData?t.clipboardData.setData("text",i):window.clipboardData.setData("text",i)}),GLOBAL_CONFIG.baiduPush&&function(){var t=document.createElement("script"),e=window.location.protocol.split(":")[0];t.src="https"===e?"https://zz.bdstatic.com/linksubmit/push.js":"http://push.zhanzhang.baidu.com/push.js",t.dataset.pjax="";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i)}()});