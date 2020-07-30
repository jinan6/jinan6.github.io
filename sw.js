/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0fdfce8586137c6779844b416e3eec9e"],["/Me/index.html","61aa59ff725a6b9736ce6b0fe95309f3"],["/about/index.html","61df7faf51ba08a4d0356fbc63d9c1e6"],["/archives/2020/05/index.html","7feec41a9e68a239695dc95f0730d465"],["/archives/2020/05/page/2/index.html","1c9f05322869c9e195c11a6d8cfaeb10"],["/archives/2020/06/index.html","f5c9ed09cf82975b02e4fbb776ccdcc5"],["/archives/2020/06/page/2/index.html","18bee609e3965635d71f29bd06ae649c"],["/archives/2020/07/index.html","ae674dfc50a30027f04d1e20cb0d80ee"],["/archives/2020/index.html","b933c88031fbd7576192ad4c582da2c0"],["/archives/2020/page/2/index.html","d825a74c968e6465b23ac7f515a3e961"],["/archives/2020/page/3/index.html","5ef053d22fb62bd90463afb0d50efe00"],["/archives/index.html","41d9131667b7017bc5513f7aa277e8f0"],["/archives/page/2/index.html","967049cde052613b9dea7662bd7e54e6"],["/archives/page/3/index.html","1ebefbf1802e2f9a35fea4dbe6e2e925"],["/board/index.html","dd2d45a7573da73dbd531ebb80b2f658"],["/categories/Git/index.html","292f7cec480577f60c87e2e8bbdadc2e"],["/categories/Hexo/Butterfly/index.html","6d5d5402bbb394760c44960ee6a81f1d"],["/categories/Hexo/Next/index.html","1681bc490b2b743a6817e63b808e78d5"],["/categories/Hexo/index.html","e69b583df68180e03bcd47914e61ecec"],["/categories/Hexo/备份/index.html","fa6b0c8906487cf81ed5b066fbe6b934"],["/categories/IDEA/index.html","636ab75cea39063ebfbf124ffd657c2e"],["/categories/Maven/index.html","3dd0f1cacb4fe5001a9c9e37cbac53dc"],["/categories/MySQL/index.html","f2e5f9e0ba139b035a56899c9cd277a9"],["/categories/MySQL/优化/index.html","0cf604334f68887f3581bfcac0bb3a38"],["/categories/MySQL/引擎/index.html","5d8a9648447b1f20f24a52048ddce4cc"],["/categories/SpringBoot/SpringSecurity/index.html","fed3d28dbc2aa502862b0cbd22150757"],["/categories/SpringBoot/Swagger/index.html","fd11376bc50bd43189c9790a910cae44"],["/categories/SpringBoot/index.html","2d0c89700432212bb8ea1f1fb099b44f"],["/categories/Vue/index.html","57004c4e4993276e81a4fb895e84556c"],["/categories/ajax/index.html","a09e374f59a2ba0b2733cabfd0b1690b"],["/categories/emoji/index.html","a6fea676c98b022cf1ffe9c957c240bf"],["/categories/index.html","fdedf8cfad54821577112d1fa5ca0f87"],["/categories/linux/index.html","4a5f4af55872ed70c66889f59a89c98e"],["/categories/数据库设计/index.html","a92fe2bd1ec222433264d2c492ec6553"],["/categories/记录/index.html","1358ebb1ce9296c595fe72e6442d7484"],["/categories/面向对象/index.html","227b02c071d3bfc41a9e4611994cc06d"],["/css/index.css","94bdb6d95a565154ac85d31eae781399"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","88d4efd6d1c18238d48f30e80086d48d"],["/js/main.js","93f896da422f60a01877bfc22af3cb7a"],["/js/search/algolia.js","abe3b44001d9a025182917740708187c"],["/js/search/local-search.js","c2214edec977430f63225991604b79c4"],["/js/third-party/ClickShowText.js","f66854e27a08e7c5ca9f2c479fdeff3f"],["/js/third-party/activate-power-mode.js","6f588d15a5b7f1ebeca1c3578a5d3f6c"],["/js/third-party/canvas-nest.js","1cb48fb0ef3a385189b87c27a87c8ed5"],["/js/third-party/canvas-ribbon.js","8f2d884a863da4da823f16797ca8d941"],["/js/third-party/click_heart.js","ab9c59d47b40dc21c50e8907ce24790c"],["/js/third-party/fireworks.js","9eff589921aa2eadfb1e1023eef8f873"],["/js/third-party/piao.js","fd0ae3b2e1416f2cdb2e4371587225f3"],["/js/tw_cn.js","eae7af9b8da0ff4a8712154a71b5a806"],["/js/utils.js","6c0901991ec8d8a7a81beb32da47a42c"],["/link/index.html","ad04b11a6c76b6c5df852501b9cdd211"],["/live2dw/assets/model.2048/texture_00.png","ae34664ad879d043476c43d041b4aecd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","9e5807b4c34af34e7c80879a3d0e089f"],["/page/2/index.html","dd063801adc1dd82367693c2679c62ae"],["/page/3/index.html","7275c0804b68481de218b32450d72e7e"],["/page/4/index.html","d0cd348ad5487a09426072ff632674d4"],["/posts/1124952030/index.html","f3e91d436ef8c3858b9dec0b8e956e8b"],["/posts/13258/index.html","c2f01232f99d40348b216f5ca7a150bf"],["/posts/1359691355/index.html","e9f001a6d8b1c8e589766c7fa8462638"],["/posts/14324/index.html","0299d91109093538426dbc65a7583d73"],["/posts/14393/index.html","5e5199259b15702c18c889de20877ffb"],["/posts/1553907357/index.html","7566761a5048860608461adbf85b677d"],["/posts/1864766114/index.html","b06035d713d048cc96229aac5129d0e9"],["/posts/2352548230/index.html","c219768e48c19161a4bef1c87f6f25a8"],["/posts/25396/image-20200515193027529.png","1dfa8c2ba2a3af4cbf70db66ad8cbcd9"],["/posts/25396/image-20200515193212898.png","0df8195d2fa50cb023d83a943a75e2b9"],["/posts/25396/image-20200515193240630.png","177e009c0429cb3a7254b1c7d682c2aa"],["/posts/25396/image-20200515193903771.png","aeb4fb7f9e44d5428b46db2ef5f58eb8"],["/posts/25396/image-20200515195209340.png","22978e93b749e7eebcc3cc63327c3c96"],["/posts/25396/image-20200515200355611.png","5caf04a888375ccd6a2ff2e8bfd908f0"],["/posts/25396/image-20200515201112827.png","ce6132975eea9a1128a4efa3513582dd"],["/posts/25396/image-20200516222500714.png","70a7e1e585bcc0d3a0966ba304c006ff"],["/posts/25396/image-20200517170054604.png","73e1c8306391defec040b07cc0569be1"],["/posts/25396/image-20200517170527296.png","fe7d7f953761eaed529889cfb2291268"],["/posts/25396/image-20200517170949578.png","a910ed84e3df25339a454fc298e784e3"],["/posts/25396/image-20200517171011384.png","09980fef34197bfb4c848a5b86f5baa4"],["/posts/25396/image-20200517171353373.png","40fa46a10da30d5bc6261b9f04a139ea"],["/posts/25396/image-20200517172727084.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517172730649.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517173246459.png","cc6fdd185c05cbcd37fec0e852a611f6"],["/posts/25396/image-20200517174357885.png","28b1a5ed29591f10935c219a4fc5f282"],["/posts/25396/image-20200517174420239.png","e3494f720f9ff930ae6b13bf9ae42e9c"],["/posts/25396/image-20200517175435773.png","e544deb938716d4857cf2f62be5a8d34"],["/posts/25396/image-20200517175844957.png","c2cc7cff6d3557a4b0c88fc21b68e778"],["/posts/25396/image-20200517180546503.png","8ed3df0a1627da082e53d874b2485122"],["/posts/25396/image-20200521215626753.png","15342c03b327bb77eddb3816b648b5a0"],["/posts/25396/image-20200522124822493.png","e72575193d58cb0a325354a47aca5381"],["/posts/25396/image-20200522212021634.png","d0cefd4e019f433a4cc980e8165cb449"],["/posts/25396/index.html","2bc70caab601e66bce7c1ee22d0d6380"],["/posts/26259/index.html","f48505a5550fdeb28292ba23f4656bac"],["/posts/29333/index.html","9dc9021b16ffafb3a879fcbb059f969d"],["/posts/3112011529/index.html","076f68100c957e8e7837453baed56c31"],["/posts/3120427724/index.html","d737760e3e11292628efb7f9b35c9cf6"],["/posts/3155752545/image-20200604155255484.png","cb09cc3688945161d5551a351f7ca824"],["/posts/3155752545/index.html","53662454c79ec24bf94b7656d09ca05c"],["/posts/31683/index.html","87384aee6f3ba1239a28b597dbf8949f"],["/posts/3261239934/index.html","cb34ccc07e49b7234f1a6dd22912f2a9"],["/posts/34782/index.html","a11f0d1a514b1a7e84c7cdd8f2a457a9"],["/posts/3661501281/index.html","142e78d4dca5c8b3cda30b17bd6ab71b"],["/posts/3984882913/index.html","1f23f45ef31fd36619f059099f1891d6"],["/posts/41739/image-20200525194743301.png","3e1e9e22cc72305d7a71885996a99f3e"],["/posts/41739/image-20200525194905458.png","8d2a09b63c675cc633c979653a4a100e"],["/posts/41739/image-20200525195035039.png","e7318b93cac9719578ba39bebd579444"],["/posts/41739/image-20200525195113526.png","cd30d10151c984d8e8c60a8916522e6a"],["/posts/41739/image-20200525195141092.png","3bc1bf5b4d4f147cae614eed5e873a07"],["/posts/41739/image-20200525195257690.png","b768e2e882628840dbfb8b5dbeccc6af"],["/posts/41739/image-20200526095527277.png","b8eb6f65e585ab1524fb0b052c0e1916"],["/posts/41739/image-20200526101428664.png","3a1e5873e8932a3ac399b1cdda8b22a9"],["/posts/41739/image-20200526101532280.png","128d6ec7d72d31861c50ca5cf16063c9"],["/posts/41739/image-20200526101637132.png","6eeddcc05075deec6fbf3900f075741f"],["/posts/41739/image-20200526102133363.png","74ee6450821d9908b8b6c3592d452df1"],["/posts/41739/image-20200526103909262.png","d5f5f0426cf61ee59c449e1ad6474fe2"],["/posts/41739/image-20200526104513794.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104526805.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104759021.png","bcb4a45d1bdf7f10d88acf9497618d06"],["/posts/41739/image-20200526105146033.png","4b7e752ff2ab5deb9e227e526f0a5a1d"],["/posts/41739/image-20200526105325301.png","9438ecd08715fbb97481ec6e941167a5"],["/posts/41739/image-20200526105538621.png","fd6e4d7a4df4abf522548a3db4424a7d"],["/posts/41739/image-20200526110122986.png","ab3ad4b11caa1e63b1023356df8b1b94"],["/posts/41739/image-20200526110943364.png","0a74d3071743f10469f7d3515ba67a33"],["/posts/41739/image-20200526142911511.png","6ea294c5f1457cf1a1fb03ce0279dab9"],["/posts/41739/image-20200526154923596.png","1df86ad0b07c69385b3a9dd298a1c397"],["/posts/41739/image-20200526155002906.png","5ef9c86c75348bf000142a57119aff0b"],["/posts/41739/image-20200526155021754.png","787291b1ed33b376fe6ae13b2bef0178"],["/posts/41739/image-20200526155102089.png","67d74968316983b19ea67313ba12dab3"],["/posts/41739/image-20200526155116682.png","0e95b3f550c9a64a22f1c8a0283b82a1"],["/posts/41739/image-20200526155131075.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155136600.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155710071.png","f1d3fb40eac9fc2d34e726b675d25a8c"],["/posts/41739/image-20200526160938838.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526160941638.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526161439575.png","8ce48af513e1c5f8493dd9af102d991e"],["/posts/41739/image-20200526161548429.png","8f03bfcdfd7658418bc1b2dd659decec"],["/posts/41739/index.html","77af0d2050e31e2a548025be891bcad2"],["/posts/47733/index.html","e7df7c3e0adde8ad956d75bced4c1046"],["/posts/48141/index.html","6f444e916d455937a45d7e2c32b7bc23"],["/posts/49984/index.html","ab4cc8bd405f2f7015b592b4d5d45a33"],["/posts/56512/index.html","21e835e5239e84a34ec9442fad8b554b"],["/posts/59764/index.html","a999422eeda08e467fa84146ee7a5061"],["/posts/709269996/index.html","5cb45d80e65f82c0ab74f2bb7478fc17"],["/posts/961488241/index.html","c6a49ef76ed94be15dd4a08e357f5797"],["/shuoshuo/index.html","becc4a7d7d81ba5963f6dae17cb35fcc"],["/sw-register.js","005b86b3fd61fb892df6699899cc5a37"],["/tags/Butterfly/index.html","1491b4aef059a7af2732559958898cfb"],["/tags/Git/index.html","bd4a2f92268c553af2295ec1f159dc55"],["/tags/IDEA/index.html","2445afd6ae728fc81210c3a3faaec4e1"],["/tags/Maven/index.html","41a8106e69fefb827c7823704d8ea814"],["/tags/MySQL/index.html","3118e2fa9f7208bf24325394ef112d59"],["/tags/SpringBoot/index.html","18cd2f973bd378a61c633b5b675d5d68"],["/tags/SpringSecurity/index.html","d18d161c64823c283bb528a1670687df"],["/tags/Swagger/index.html","8a1745208c702e2c348b02e2c21d611f"],["/tags/emoji/index.html","5008c571e433de669a4625c27fd9306b"],["/tags/hexo/index.html","10551a2768050b4552d4e692b9452664"],["/tags/index.html","0c8bfee59ae016c7bf9cb8ff95e3824c"],["/tags/linux/index.html","7033e458ed22f1b4cf2a98f60f2a8622"],["/tags/判断/index.html","dead6ccbc0100ca5dce0866ff2eb9171"],["/tags/图表/index.html","4f091e6a917957e30ed3429d873b21de"],["/tags/排序/index.html","be0fe8ea97f1df94d987f4ba7c972367"],["/tags/数据库设计/index.html","adaaac01424d90ece3b2c65c5decc5d2"],["/tags/记录/index.html","fb983f357866693725d4b061f545621c"],["/tags/面向对象/index.html","ffc60bca8df6789909b9177f49176ebc"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
