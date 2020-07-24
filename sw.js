/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4cd5984df05e0167fcda997d93341bbe"],["/Me/index.html","da5b3d30806e0b55e218f5bc8dfc6a80"],["/about/index.html","059f77755375259c8381ce8182387868"],["/archives/2020/05/index.html","6213d23d838ab134e00d603109527239"],["/archives/2020/05/page/2/index.html","6d4c48f1c845fbc788ce5f698356a248"],["/archives/2020/06/index.html","e084df9183158ba615bc7df83cf5e753"],["/archives/2020/06/page/2/index.html","2f6e1ca70b49dfe86268117ce9a4c4ea"],["/archives/2020/index.html","7217a334377bd533eae2982c9f47437b"],["/archives/2020/page/2/index.html","b7c1ef5f358cf5fea48deee12519f651"],["/archives/2020/page/3/index.html","1f83a28ad4cbf5d3ad0f2a28fbd502e7"],["/archives/index.html","5d197e0ba8afb41ed2315f37d065575b"],["/archives/page/2/index.html","c2cbcd560e0f1a8ca8147509cfe43149"],["/archives/page/3/index.html","023914de5eaddb45125d3e79d4aadd3f"],["/bangumis/index.html","161624efc87ea8be53428094f658dbb2"],["/board/index.html","6c11e4a7eb797639e461bfeb37c7813b"],["/categories/Git/index.html","10b3923cce1e4f833b3f204b7b90ffee"],["/categories/Hexo/Butterfly/index.html","900614bf6c47521fc68eeca273d79570"],["/categories/Hexo/Next/index.html","d5f1745a3531225cfbb8a35c3b105fbb"],["/categories/Hexo/index.html","ffc9a978527cd4408ed0137afebc9bfa"],["/categories/Hexo/备份/index.html","77bdd59a82f9dc351da06a6c898ce366"],["/categories/IDEA/index.html","02f1cba6bc21d895441d7fd301b37f2c"],["/categories/Maven/index.html","311f64969876b3a5c13ff79a651409c4"],["/categories/MySQL/index.html","266b0f2aaa33bd899b41eede5ebedbc6"],["/categories/MySQL/优化/index.html","f6c496f6f3685be1730148132bbfa597"],["/categories/MySQL/引擎/index.html","b8cebf563f9aa25f3105f7d113882aa9"],["/categories/SpringBoot/SpringSecurity/index.html","2f89453dfc787c3752a06edefc22f86f"],["/categories/SpringBoot/Swagger/index.html","2d5b3745372d2c52df6ca716848454f8"],["/categories/SpringBoot/index.html","4bacf4d8a729bae9825f74554a00a9ea"],["/categories/Vue/index.html","1dc1cb063e1dba156ed32b972144711d"],["/categories/ajax/index.html","13ef5683a6187be43967e2065f39f6a0"],["/categories/emoji/index.html","f2336ae0904a15e123b9fb071660635d"],["/categories/index.html","92d18ac7a16d29d66a7965c22acc9e48"],["/categories/linux/index.html","a58a83fffacedabc00da6725561ba44a"],["/categories/数据库设计/index.html","f1aaa429530308a07058a1c7eb60c26d"],["/categories/记录/index.html","fb7f03de0343236099f9ea0d925fa553"],["/categories/面向对象/index.html","98a9a008ecc67bf65787352b640db4de"],["/css/index.css","5fd834c03cafa4e0ac610630dba23e67"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.png","c9656983e0141c4d2301d6a217961667"],["/img/avatar.png","a1548b3252b0e3c47adcfd56d98bfb69"],["/img/favicon-16x16-next.png","efc289a0f524cbeae804e301feeb56cd"],["/img/favicon-32x32-next.png","efc289a0f524cbeae804e301feeb56cd"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wechatpay.png","bfa7e10082cdfbf206c5127311f2a40c"],["/index.html","450319be79a72d61e3d902eeb986a7dd"],["/js/main.js","b382597891e958e71bb7c1099977ec66"],["/js/music.js","78b406ec883d52229a2ec4d6311bc115"],["/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/link/index.html","a22105305972aa02939dfc49bea9f9a2"],["/music/index.html","44d1454848104b1a0928710a4d92a95f"],["/page/2/index.html","76bff884a6e3fe003369615434a38683"],["/page/3/index.html","ba7726331490f023c63f2209fba9c0b9"],["/page/4/index.html","bb4a815c347141854a6090ef2a0892ba"],["/posts/13258/index.html","0c7fcb55a313fde7dc3b1b7da7f5dd91"],["/posts/1359691355/index.html","dd49ea9f3ec21f548e380f3f7db7c01c"],["/posts/14324/index.html","c458dad738d7583a43abf0bec5943ce3"],["/posts/14393/index.html","f1d033ed26d2962aa00fd8fa915552ce"],["/posts/1553907357/index.html","fc897e0c6575f9c01ab94fe96ab62d76"],["/posts/1864766114/index.html","912424a8a5d58de872b3115124e83a63"],["/posts/2352548230/index.html","faf1749886eb60be9ce2355657c3915d"],["/posts/25396/image-20200515193027529.png","1dfa8c2ba2a3af4cbf70db66ad8cbcd9"],["/posts/25396/image-20200515193212898.png","0df8195d2fa50cb023d83a943a75e2b9"],["/posts/25396/image-20200515193240630.png","177e009c0429cb3a7254b1c7d682c2aa"],["/posts/25396/image-20200515193903771.png","aeb4fb7f9e44d5428b46db2ef5f58eb8"],["/posts/25396/image-20200515195209340.png","22978e93b749e7eebcc3cc63327c3c96"],["/posts/25396/image-20200515200355611.png","5caf04a888375ccd6a2ff2e8bfd908f0"],["/posts/25396/image-20200515201112827.png","ce6132975eea9a1128a4efa3513582dd"],["/posts/25396/image-20200516222500714.png","70a7e1e585bcc0d3a0966ba304c006ff"],["/posts/25396/image-20200517170054604.png","73e1c8306391defec040b07cc0569be1"],["/posts/25396/image-20200517170527296.png","fe7d7f953761eaed529889cfb2291268"],["/posts/25396/image-20200517170949578.png","a910ed84e3df25339a454fc298e784e3"],["/posts/25396/image-20200517171011384.png","09980fef34197bfb4c848a5b86f5baa4"],["/posts/25396/image-20200517171353373.png","40fa46a10da30d5bc6261b9f04a139ea"],["/posts/25396/image-20200517172727084.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517172730649.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517173246459.png","cc6fdd185c05cbcd37fec0e852a611f6"],["/posts/25396/image-20200517174357885.png","28b1a5ed29591f10935c219a4fc5f282"],["/posts/25396/image-20200517174420239.png","e3494f720f9ff930ae6b13bf9ae42e9c"],["/posts/25396/image-20200517175435773.png","e544deb938716d4857cf2f62be5a8d34"],["/posts/25396/image-20200517175844957.png","c2cc7cff6d3557a4b0c88fc21b68e778"],["/posts/25396/image-20200517180546503.png","8ed3df0a1627da082e53d874b2485122"],["/posts/25396/image-20200521215626753.png","15342c03b327bb77eddb3816b648b5a0"],["/posts/25396/image-20200522124822493.png","e72575193d58cb0a325354a47aca5381"],["/posts/25396/image-20200522212021634.png","d0cefd4e019f433a4cc980e8165cb449"],["/posts/25396/index.html","8c16d6d5abb80db489b389508b2d927e"],["/posts/26259/index.html","8d561af4270ff5de2a920daffc626438"],["/posts/29333/index.html","f02e53945ab985a884e1e67dac91bdd4"],["/posts/3112011529/index.html","fb1bda4dd5026dfb9aa43067ba29379f"],["/posts/3120427724/index.html","223483f76191e458d7978981a71cd298"],["/posts/3155752545/image-20200604155255484.png","cb09cc3688945161d5551a351f7ca824"],["/posts/3155752545/index.html","a6b1d102ab1da02e2690511e4b9e87e2"],["/posts/31683/index.html","d54d111dae88a7b144a984b12c2437c8"],["/posts/3261239934/index.html","a6208c79954808492681e0c6a63a68fe"],["/posts/34782/index.html","259e12e419836befb42cb4d7031014cd"],["/posts/3661501281/index.html","a8ade7cb5f8fbb7769b121ce8bc18b8c"],["/posts/3984882913/index.html","9f51681825e583736667d794989f8bff"],["/posts/41739/image-20200525194743301.png","3e1e9e22cc72305d7a71885996a99f3e"],["/posts/41739/image-20200525194905458.png","8d2a09b63c675cc633c979653a4a100e"],["/posts/41739/image-20200525195035039.png","e7318b93cac9719578ba39bebd579444"],["/posts/41739/image-20200525195113526.png","cd30d10151c984d8e8c60a8916522e6a"],["/posts/41739/image-20200525195141092.png","3bc1bf5b4d4f147cae614eed5e873a07"],["/posts/41739/image-20200525195257690.png","b768e2e882628840dbfb8b5dbeccc6af"],["/posts/41739/image-20200526095527277.png","b8eb6f65e585ab1524fb0b052c0e1916"],["/posts/41739/image-20200526101428664.png","3a1e5873e8932a3ac399b1cdda8b22a9"],["/posts/41739/image-20200526101532280.png","128d6ec7d72d31861c50ca5cf16063c9"],["/posts/41739/image-20200526101637132.png","6eeddcc05075deec6fbf3900f075741f"],["/posts/41739/image-20200526102133363.png","74ee6450821d9908b8b6c3592d452df1"],["/posts/41739/image-20200526103909262.png","d5f5f0426cf61ee59c449e1ad6474fe2"],["/posts/41739/image-20200526104513794.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104526805.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104759021.png","bcb4a45d1bdf7f10d88acf9497618d06"],["/posts/41739/image-20200526105146033.png","4b7e752ff2ab5deb9e227e526f0a5a1d"],["/posts/41739/image-20200526105325301.png","9438ecd08715fbb97481ec6e941167a5"],["/posts/41739/image-20200526105538621.png","fd6e4d7a4df4abf522548a3db4424a7d"],["/posts/41739/image-20200526110122986.png","ab3ad4b11caa1e63b1023356df8b1b94"],["/posts/41739/image-20200526110943364.png","0a74d3071743f10469f7d3515ba67a33"],["/posts/41739/image-20200526142911511.png","6ea294c5f1457cf1a1fb03ce0279dab9"],["/posts/41739/image-20200526154923596.png","1df86ad0b07c69385b3a9dd298a1c397"],["/posts/41739/image-20200526155002906.png","5ef9c86c75348bf000142a57119aff0b"],["/posts/41739/image-20200526155021754.png","787291b1ed33b376fe6ae13b2bef0178"],["/posts/41739/image-20200526155102089.png","67d74968316983b19ea67313ba12dab3"],["/posts/41739/image-20200526155116682.png","0e95b3f550c9a64a22f1c8a0283b82a1"],["/posts/41739/image-20200526155131075.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155136600.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155710071.png","f1d3fb40eac9fc2d34e726b675d25a8c"],["/posts/41739/image-20200526160938838.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526160941638.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526161439575.png","8ce48af513e1c5f8493dd9af102d991e"],["/posts/41739/image-20200526161548429.png","8f03bfcdfd7658418bc1b2dd659decec"],["/posts/41739/index.html","15ba91f96bc3d5491fc0ae1e6bb80792"],["/posts/47733/index.html","7c5d90a2469a59d5d4f8030ed02a0f83"],["/posts/48141/index.html","4472e1d89144c11244c6de5f6253f466"],["/posts/49984/index.html","7cfa28a80056d9b52ebb833960f1401a"],["/posts/56512/index.html","11b6eccf298b9880c0ed647aa13be8fb"],["/posts/59764/index.html","7f0f20406c7e2c07ce057cdb9d658ecf"],["/posts/709269996/index.html","42fe4e4bb1ef9f8679a2acce6ad26c60"],["/posts/961488241/index.html","cb57bc37cd263b05f6d9ee7c9160c020"],["/shuoshuo/index.html","6048adf9cf716137475a95b33cdc001c"],["/sw-register.js","e4821fbf9ccd5abb76192b7a76e0c99b"],["/tags/Butterfly/index.html","67a0cd3e81f9a6ab5642462ebcdb6c9a"],["/tags/Git/index.html","c8c2aff3feebedea4b77c5025257ffbb"],["/tags/IDEA/index.html","1acd2565131137ed2f10bf24b0404d2d"],["/tags/Maven/index.html","da6db1fdec6fb097366ad436573f2a01"],["/tags/MySQL/index.html","1f3a9cf4fa20461baf8d7ec63a1203e8"],["/tags/SpringBoot/index.html","20b886d9912661703b61ce6de14fa551"],["/tags/SpringSecurity/index.html","444d2475ec8f5900a294fa07ae8937ef"],["/tags/Swagger/index.html","972183dadeabb474620cf45d2c6aa786"],["/tags/emoji/index.html","efe3450577ed382c22e65ca7cfc5607f"],["/tags/hexo/index.html","5fd47b8592f85b772ab3cec5f5da2474"],["/tags/index.html","f7a1ac60dfcf6545f518a3af628c4c7e"],["/tags/linux/index.html","0bc58d16b650eaa105c05c8ee736062a"],["/tags/判断/index.html","d297a8535e6a0db15277a1fee06f2dc3"],["/tags/图表/index.html","d27ad5657dfea1ce9ac26600c8277f89"],["/tags/排序/index.html","c0f64ee86d5d53011cc99b308c6e0d94"],["/tags/数据库设计/index.html","5ff483b584b3b97952591ad5576f604a"],["/tags/记录/index.html","ff7985afe40e83d1c6a4ef66c513d5cc"],["/tags/面向对象/index.html","ebc727db912c2bc59f2d4868483a60f7"]];
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
