/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","862577d81b9ffda9b434a0f592cb0dde"],["/Me/index.html","b3d4f5708317b69818d64409969cb456"],["/about/index.html","d85bfeb2723460d9b8aaf2908fa1db52"],["/archives/2020/05/index.html","1789f59addb67c4cc46f4e6e7f10abf6"],["/archives/2020/05/page/2/index.html","b029d5704686f044b7ecb38643fd4d42"],["/archives/2020/06/index.html","e59ca6c51d41493021f72bd1db1d8840"],["/archives/2020/06/page/2/index.html","bd602529bee6974d3a7bda19dba98f3f"],["/archives/2020/index.html","9ca78de775b20a3a860538b747427254"],["/archives/2020/page/2/index.html","e231a71cf37914bd047abb7ea69e245f"],["/archives/2020/page/3/index.html","0d125a95d6b2b9f42d69ebc4228dbafc"],["/archives/index.html","1e6ab9bf6079c799c603951c7d87ffd8"],["/archives/page/2/index.html","90243334a914705df6cf413029d3388b"],["/archives/page/3/index.html","2f33f950288c8afcc62a920ba6869e5d"],["/bangumis/index.html","5a866bd0fcd2840be953a4b946880ecf"],["/board/index.html","eae32c556b50d14835eb955894d38357"],["/categories/Git/index.html","b36dc0a695bad214fdb5dbb5feb06972"],["/categories/Hexo/Butterfly/index.html","63fc83e51c33401b806886c72487369f"],["/categories/Hexo/Next/index.html","bc61eb05211c15c6edf2e9df358a6984"],["/categories/Hexo/index.html","9eca3987aba337b8fdab859fee9bbfaf"],["/categories/Hexo/备份/index.html","5cac3f068dc090b824836782897c72f9"],["/categories/IDEA/index.html","a0e0e190627673ffc26f6d496c7c82f1"],["/categories/Maven/index.html","44683e5bab4862cbc84b5ed15f76fbe3"],["/categories/MySQL/index.html","0280616cfd21961d177630d1dcbf6f86"],["/categories/MySQL/优化/index.html","587f7046a1e5e9cc310254bdc952d569"],["/categories/MySQL/引擎/index.html","f02052617ddbb319e3854b1bb33390c8"],["/categories/SpringBoot/SpringSecurity/index.html","a45c463d77ae2709eeb2716ff371ca6a"],["/categories/SpringBoot/Swagger/index.html","b8a706f13fdbac576309c130005babe7"],["/categories/SpringBoot/index.html","ce51821b19a55ce186f433619a527fe8"],["/categories/Vue/index.html","c452ceaca89e8c405da8cbcf3697cc6b"],["/categories/ajax/index.html","c015a88c74d48874a5004b20cac7b83d"],["/categories/emoji/index.html","abeed0ffaf665e8d9a55f3b3b7c15d48"],["/categories/index.html","495729baab6e23f7a3304a10ba49a07a"],["/categories/linux/index.html","7503eb10cefd2d74d2a3dad27244863d"],["/categories/数据库设计/index.html","f6bd6b10f4980864ba94b38d226b9f12"],["/categories/记录/index.html","d684887a6902b8098615b18a5435a73d"],["/categories/面向对象/index.html","dcdea086685fb3ac3b8ec4e256d4f487"],["/css/index.css","5fd834c03cafa4e0ac610630dba23e67"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.png","c9656983e0141c4d2301d6a217961667"],["/img/avatar.png","a1548b3252b0e3c47adcfd56d98bfb69"],["/img/favicon-16x16-next.png","efc289a0f524cbeae804e301feeb56cd"],["/img/favicon-32x32-next.png","efc289a0f524cbeae804e301feeb56cd"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wechatpay.png","bfa7e10082cdfbf206c5127311f2a40c"],["/index.html","dead0aaaf57d1d2fdbae3c15339a2a3d"],["/js/main.js","b382597891e958e71bb7c1099977ec66"],["/js/music.js","78b406ec883d52229a2ec4d6311bc115"],["/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/link/index.html","a28085001b10a7f7bd80b6ceb057da18"],["/music/index.html","143f9ed464945169e4b2c235b84da850"],["/page/2/index.html","00c26a3466acc00cecf83e32d1e30c7c"],["/page/3/index.html","8558f080a97c84675adbc161954e3efc"],["/page/4/index.html","7739b4814574814c5f34e04a28b61f01"],["/posts/13258/index.html","17a94b1d5de722372750d8571867e2d0"],["/posts/1359691355/index.html","67ee8b2c47a539b96c241229b7848fce"],["/posts/14324/index.html","f1261baf35191c5fc85c8fc62e06dcd0"],["/posts/14393/index.html","4c69dd19ad9db3447527db819f0c7981"],["/posts/1553907357/index.html","23d117857bcd0eeac326d336b0a1a485"],["/posts/1864766114/index.html","100471d6b7612beccd25ffb3ec32927f"],["/posts/2352548230/index.html","aa89a7cb37d5d1fa1c97e557928f8c8b"],["/posts/25396/image-20200515193027529.png","1dfa8c2ba2a3af4cbf70db66ad8cbcd9"],["/posts/25396/image-20200515193212898.png","0df8195d2fa50cb023d83a943a75e2b9"],["/posts/25396/image-20200515193240630.png","177e009c0429cb3a7254b1c7d682c2aa"],["/posts/25396/image-20200515193903771.png","aeb4fb7f9e44d5428b46db2ef5f58eb8"],["/posts/25396/image-20200515195209340.png","22978e93b749e7eebcc3cc63327c3c96"],["/posts/25396/image-20200515200355611.png","5caf04a888375ccd6a2ff2e8bfd908f0"],["/posts/25396/image-20200515201112827.png","ce6132975eea9a1128a4efa3513582dd"],["/posts/25396/image-20200516222500714.png","70a7e1e585bcc0d3a0966ba304c006ff"],["/posts/25396/image-20200517170054604.png","73e1c8306391defec040b07cc0569be1"],["/posts/25396/image-20200517170527296.png","fe7d7f953761eaed529889cfb2291268"],["/posts/25396/image-20200517170949578.png","a910ed84e3df25339a454fc298e784e3"],["/posts/25396/image-20200517171011384.png","09980fef34197bfb4c848a5b86f5baa4"],["/posts/25396/image-20200517171353373.png","40fa46a10da30d5bc6261b9f04a139ea"],["/posts/25396/image-20200517172727084.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517172730649.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517173246459.png","cc6fdd185c05cbcd37fec0e852a611f6"],["/posts/25396/image-20200517174357885.png","28b1a5ed29591f10935c219a4fc5f282"],["/posts/25396/image-20200517174420239.png","e3494f720f9ff930ae6b13bf9ae42e9c"],["/posts/25396/image-20200517175435773.png","e544deb938716d4857cf2f62be5a8d34"],["/posts/25396/image-20200517175844957.png","c2cc7cff6d3557a4b0c88fc21b68e778"],["/posts/25396/image-20200517180546503.png","8ed3df0a1627da082e53d874b2485122"],["/posts/25396/image-20200521215626753.png","15342c03b327bb77eddb3816b648b5a0"],["/posts/25396/image-20200522124822493.png","e72575193d58cb0a325354a47aca5381"],["/posts/25396/image-20200522212021634.png","d0cefd4e019f433a4cc980e8165cb449"],["/posts/25396/index.html","7d64746680eb504ab0613ef74074b64e"],["/posts/26259/index.html","04d36c1a333b228936728557f0da99b6"],["/posts/29333/index.html","32aa45f0fe5b22f90625f9b7f19919da"],["/posts/3112011529/index.html","ad4454f962d99e4d2b62186dd46ae09f"],["/posts/3120427724/index.html","3d8915ba19a6d54ece6dc3a8bab65e05"],["/posts/3155752545/image-20200604155255484.png","cb09cc3688945161d5551a351f7ca824"],["/posts/3155752545/index.html","103222dfe6e8fe000ee6288d59233e52"],["/posts/31683/index.html","d0926accb8e991e07e9b97dbb5f9f4b7"],["/posts/3261239934/index.html","e84372b28faf43787694ae4d713ec8d9"],["/posts/34782/index.html","43867471c68e3b7c55f0b81c089a2064"],["/posts/3661501281/index.html","5781dbbfa7f3348bb81da86cd08cec4b"],["/posts/3984882913/index.html","bfda8bf90aa1fbbb405fbf0fd9d63476"],["/posts/41739/image-20200525194743301.png","3e1e9e22cc72305d7a71885996a99f3e"],["/posts/41739/image-20200525194905458.png","8d2a09b63c675cc633c979653a4a100e"],["/posts/41739/image-20200525195035039.png","e7318b93cac9719578ba39bebd579444"],["/posts/41739/image-20200525195113526.png","cd30d10151c984d8e8c60a8916522e6a"],["/posts/41739/image-20200525195141092.png","3bc1bf5b4d4f147cae614eed5e873a07"],["/posts/41739/image-20200525195257690.png","b768e2e882628840dbfb8b5dbeccc6af"],["/posts/41739/image-20200526095527277.png","b8eb6f65e585ab1524fb0b052c0e1916"],["/posts/41739/image-20200526101428664.png","3a1e5873e8932a3ac399b1cdda8b22a9"],["/posts/41739/image-20200526101532280.png","128d6ec7d72d31861c50ca5cf16063c9"],["/posts/41739/image-20200526101637132.png","6eeddcc05075deec6fbf3900f075741f"],["/posts/41739/image-20200526102133363.png","74ee6450821d9908b8b6c3592d452df1"],["/posts/41739/image-20200526103909262.png","d5f5f0426cf61ee59c449e1ad6474fe2"],["/posts/41739/image-20200526104513794.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104526805.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104759021.png","bcb4a45d1bdf7f10d88acf9497618d06"],["/posts/41739/image-20200526105146033.png","4b7e752ff2ab5deb9e227e526f0a5a1d"],["/posts/41739/image-20200526105325301.png","9438ecd08715fbb97481ec6e941167a5"],["/posts/41739/image-20200526105538621.png","fd6e4d7a4df4abf522548a3db4424a7d"],["/posts/41739/image-20200526110122986.png","ab3ad4b11caa1e63b1023356df8b1b94"],["/posts/41739/image-20200526110943364.png","0a74d3071743f10469f7d3515ba67a33"],["/posts/41739/image-20200526142911511.png","6ea294c5f1457cf1a1fb03ce0279dab9"],["/posts/41739/image-20200526154923596.png","1df86ad0b07c69385b3a9dd298a1c397"],["/posts/41739/image-20200526155002906.png","5ef9c86c75348bf000142a57119aff0b"],["/posts/41739/image-20200526155021754.png","787291b1ed33b376fe6ae13b2bef0178"],["/posts/41739/image-20200526155102089.png","67d74968316983b19ea67313ba12dab3"],["/posts/41739/image-20200526155116682.png","0e95b3f550c9a64a22f1c8a0283b82a1"],["/posts/41739/image-20200526155131075.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155136600.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155710071.png","f1d3fb40eac9fc2d34e726b675d25a8c"],["/posts/41739/image-20200526160938838.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526160941638.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526161439575.png","8ce48af513e1c5f8493dd9af102d991e"],["/posts/41739/image-20200526161548429.png","8f03bfcdfd7658418bc1b2dd659decec"],["/posts/41739/index.html","a9340ce53626e9ecc59d725ec4c17176"],["/posts/47733/index.html","22e20e9a68cd060af4faab978124f3f0"],["/posts/48141/index.html","a7a7dd87665537f52c7b7adc5c3518b1"],["/posts/49984/index.html","2cfa86806ab8259bece803f8ae4ce0e7"],["/posts/56512/index.html","1e754dfe1aae0a54398e7d074bd6d0d7"],["/posts/59764/index.html","42d1707b6f07f30f44abb226b0e0bd53"],["/posts/709269996/index.html","205bb0ffd9c60dc65c3a8f4a431e3b0f"],["/posts/961488241/index.html","319b01896d1e51abfc928f7ff035d737"],["/shuoshuo/index.html","a416ee255e1148a6f63b68b9663311f1"],["/sw-register.js","1739c9f2fbd1cfdd8c2ee0ffeb9a2d6b"],["/tags/Butterfly/index.html","3a1abd81be5fae947fc93b5926791851"],["/tags/Git/index.html","e7e6b70fa0ff7d9414d1b75f13468e35"],["/tags/Hexo/index.html","c64ff53c79c79cccd0af66f94550528f"],["/tags/IDEA/index.html","158b6aede01f162e9b9a752294ba9a95"],["/tags/Maven/index.html","d9980bfbb27f25e7ec1412d465af189d"],["/tags/MySQL/index.html","42c4eac0b98ebd36695e39a0fe5db746"],["/tags/SpringBoot/index.html","514e2b21bcfc6d3068789f5faf2762c5"],["/tags/SpringSecurity/index.html","7004b35942633e05f5575898b037215c"],["/tags/Swagger/index.html","fc0251f8f97638f0c6b1cb03fb769d05"],["/tags/emoji/index.html","1d1a0a62ae2df313494c4159b2c45fb5"],["/tags/index.html","b2774ee6c9d8cf542bf90342f09250c1"],["/tags/linux/index.html","33d5babb3e57f6dd66faece8f32c9c1e"],["/tags/判断/index.html","50f2b7432d6d7a588cf10c1f49650782"],["/tags/图表/index.html","13439f0ec0300220788e794f97932546"],["/tags/排序/index.html","0bd3e3d3b650a917747a213ac7f08af6"],["/tags/数据库设计/index.html","6bac497f2e7c47b8b856a61a4639690f"],["/tags/记录/index.html","c750d7d43677654bd42a18827c0da1c8"],["/tags/面向对象/index.html","10d0acb7faa8fd04692522cdeed3e0b7"]];
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
