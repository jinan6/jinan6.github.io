"use strict";
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
logCss = function(n) {
    return "color: #fff; background: " + (0 < arguments.length && void 0 !== n ? n: "#49b1f5") + "; padding: 6px; border-radius: 5px; font-family: 'Product Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;\n"
};
window.lazyLoadOptions = {
    elements_selector: ".ll",
    threshold: 0
},
window.FPConfig = {
    delay: 0,
    ignoreKeywords: ["#"],
    maxRPS: 6,
    hoverDelay: 0
};
var _hmt = _hmt || []; !
function() {
    var n = document.createElement("script");
    n.src = "https://hm.baidu.com/hm.js?5de191b42e8915ea644fc19a8bd460e7";
    var o = document.getElementsByTagName("script")[0];
    o.parentNode.insertBefore(n, o)
} ();
var typStr = "日子还长，请别失望 ",
i = 0;
function typing() {
    var n = $("#typing");
    n && (i <= typStr.length ? (n.html(typStr.slice(0, i++) + "_"), setTimeout("typing()", 100)) : n.html(typStr))
}
function configs() {
    var t = $("#b2t"),
    s = $("#view-div"),
    i = $(window).height(),
    n = $("header"),
    o = $(".rebar"),
    e = $(window).scrollTop(),
    c = $(window).scrollTop(),
    r = !1;
    function a(n) {
        var o = $(window).scrollTop(),
        e = o - c;
        i < (c = o) ? (t.fadeIn(350).addClass("b2t--show"), 0 < e ? t.removeClass("b2t--hl") : t.addClass("b2t--hl"), s && s.css("opacity", 1), r = !1) : (t.removeClass("b2t--show").removeClass("b2t--hl").fadeOut(350), s && s.css("opacity", 0), requestAnimationFrame(a))
    }
    typing(),
    t && (t.click(function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }), $(document, window).scroll(function() {
        r || (requestAnimationFrame(a), r = !0)
    })),
    $(document, window).scroll(function() {
        e = $(window).scrollTop(),
        o && o.css("width", $(document).scrollTop() / ($(document).height() - $(window).height()) * 100 + "%"),
        0 < e ? n.addClass("header--show") : n.removeClass("header--show")
    }),
    n.hover(function() {
        e = $(window).scrollTop(),
        i < e && s && s.css("opacity", 1),
        n.addClass("header--show")
    }),
    n.mouseout(function() {
        0 === (e = $(window).scrollTop()) && n.removeClass("header--show"),
        e <= i && s && s.css("opacity", 0)
    })
}
$("#btn-dropdown").click(function() {
    var n = $("#dropdown-menus");
    requestAnimationFrame(function() {
        n.css("display", "flex"),
        requestAnimationFrame(function() {
            n.css("transform", "translateY(0)"),
            n.css("opacity", "1")
        })
    })
}),
$("#btn-dropback").click(function() {
    var n = $("#dropdown-menus");
    n.css("transform", "translateY(2.25rem)"),
    n.css("opacity", "0"),
    setTimeout(function() {
        n.css("display", "none")
    },
    350)
}),
$(function() {
    configs()
}),
$(document.body).on("touchmove",
function(n) {
    n.preventDefault()
}),
$(window).on("load",
function() {
    setTimeout(function() {
        $(document.body).unbind("touchmove")
    },
    750);
    var n = (new Date).getHours(),
    o = n < 4 ? "\n\n%c 凌晨了，记得早点休息！🛌 你爱人，和爱你的人都需要你！加油！ 👍%c \n\n": 4 <= n && n < 9 ? "\n\n%c 早上好呀! 努力的人都会得到一颗糖 🍖%c \n\n": 9 <= n && n < 12 ? "\n\n%c 上午好呀! 每一天都要活力满满！🍳%c \n\n": 12 <= n && n < 17 ? "\n\n%c 下午好呀! 每个下午最快乐的就是一杯下午茶啦！😴%c \n\n": 17 <= n && n < 20 ? "\n\n%c 下班了，陪家人健个身吧! 🚶‍♀️%c \n\n": 20 <= n && n < 22 ? "\n\n%c 晚上好，忙碌了一天，该洗洗睡了! 😎%c \n\n": "\n\n%c 今天也是美好的一天！成长，就是在有负面情绪的时候,总能一个人默默地消化,路还很长，微笑面对！🤪%c \n\n";
    console.log(o, logCss("#00c4b6"), ""),
    NProgress.done();
});