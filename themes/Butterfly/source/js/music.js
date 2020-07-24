document.writeln("<script src=\'https://cdn.jsdelivr.net/npm/pjax/pjax.min.js\'></script>");
document.writeln("<script>var pjax = new Pjax({");
document.writeln("  selectors: [");
document.writeln("    \'title\',");
document.writeln("    \'meta[name=description]\',");
document.writeln("    \'#config_change\',");
document.writeln("    \'#body-wrap\',");
document.writeln("    \'#rightside\',");
document.writeln("    \'.js-pjax\'");
document.writeln("  ],");
document.writeln("  cacheBust: false,");
document.writeln("})");
document.writeln("");
document.writeln("document.addEventListener(\'pjax:complete\', function () {");
document.writeln("  refreshFn()");
document.writeln("");
document.writeln("  $(\'script[data-pjax]\').each(function () {");
document.writeln("    $(this).parent().append($(this).remove())");
document.writeln("  })");
document.writeln("");
document.writeln("  GLOBAL_CONFIG.islazyload && lazyLoadInstance.update()");
document.writeln("");
document.writeln("  typeof chatBtnFn === \'function\' && chatBtnFn()");
document.writeln("  typeof panguInit === \'function\' && panguInit()");
document.writeln("");
document.writeln("  if (typeof gtag === \'function\') {");
document.writeln("    gtag(\'config\', \'ca-pub-1197128104711052\', {\'page_path\': window.location.pathname});");
document.writeln("  }");
document.writeln("");
document.writeln("  if (document.getElementsByClassName(\'aplayer\').length){");
document.writeln("    loadMeting()");
document.writeln("  }");
document.writeln("})");
document.writeln("");
document.writeln("document.addEventListener(\'pjax:send\', function () {");
document.writeln("  if (window.aplayers) {");
document.writeln("    for (let i = 0; i < window.aplayers.length; i++) {");
document.writeln("      if (!window.aplayers[i].options.fixed) {");
document.writeln("        window.aplayers[i].destroy()");
document.writeln("      }");
document.writeln("    }");
document.writeln("  }");
document.writeln("");
document.writeln("  $(window).off(\'scroll\')");
document.writeln("");
document.writeln("  //reset readmode");
document.writeln("  $(\'body\').hasClass(\'read-mode\') && $(\'body\').removeClass(\'read-mode\')");
document.writeln("");
document.writeln("  //reset font-size");
document.writeln("  $(\'body\').css(\'font-size\') !== originFontSize && $(\'body\').css(\'font-size\', parseFloat(originFontSize))");
document.writeln("})</script>");
document.writeln("<link rel=\'stylesheet\' href=\'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css\'>");
document.writeln("<script src=\'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js\'></script>");
document.writeln("<script src=\'https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js\'></script>");
document.writeln("<meting-js server=\'netease\' type=\'playlist\' id=\'5015814685\' fixed=\'true\'></meting-js>");