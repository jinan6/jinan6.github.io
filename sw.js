/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d26344c82a99ef083fe07af1b0f78e72"],["/Me/index.html","d60f39c64872ad91c64641992c18b55a"],["/about/index.html","c663d6e0b9b9a567fc983fbbbcdb2975"],["/archives/2020/05/index.html","c16d235926e75172c5d52dea60912f46"],["/archives/2020/05/page/2/index.html","85c889b3e47039b24878d86ac0ba9f67"],["/archives/2020/06/index.html","74a3e815037180210d75e3109438f210"],["/archives/2020/06/page/2/index.html","a3fe00f6b7540686b85a37c2c62b3ef0"],["/archives/2020/index.html","2b361ebd1bdb0d0cd22d2b100b992ffa"],["/archives/2020/page/2/index.html","60ea46198f4c5da73bee257e0fb3fbcc"],["/archives/2020/page/3/index.html","22b30a98caa8cfba4944d9203e5979a8"],["/archives/index.html","e7bd7b4dd2d745d1db891e26a4d495be"],["/archives/page/2/index.html","8699e5dcc14b5f2adf9db932fca9e15f"],["/archives/page/3/index.html","2d81a46b6ac794ac93d62de740deba20"],["/bangumis/index.html","482919d9b774a4feb7c4a8ab2fd559cd"],["/board/index.html","4bf8dde9fa5f8eec0bac52c1077731a7"],["/categories/Git/index.html","427dfe9b22e616c25e9b50da5bfb9e78"],["/categories/Hexo/Butterfly/index.html","fb9e310c92e7a895df1ed86dca3499ac"],["/categories/Hexo/Next/index.html","96e0dd0a4394a3f638c9ff3f26806af8"],["/categories/Hexo/index.html","71a35f67f97c369989f08b4fe7e08cec"],["/categories/Hexo/备份/index.html","6356f48a1c7d5fde0496d24eab8f8083"],["/categories/IDEA/index.html","01347c8b1e40407b468855c544acb118"],["/categories/Maven/index.html","61005dc352a4304c4e7951b535ec7ae2"],["/categories/MySQL/index.html","29199d59b725c7d1bdbde222398e1134"],["/categories/MySQL/优化/index.html","0e119e045d72673a9bc3c2255542479c"],["/categories/MySQL/引擎/index.html","eb86dbcc9ed5c74371679f55da26a7cb"],["/categories/SpringBoot/SpringSecurity/index.html","eeff8e0f3026b147cbee84c5c89d1236"],["/categories/SpringBoot/Swagger/index.html","7add3dd16b8c7e3bfba815bf1242114a"],["/categories/SpringBoot/index.html","7fae363ee42b1e8ff43b22603f300642"],["/categories/Vue/index.html","d3dff3210572cfc2518357fbc742e595"],["/categories/ajax/index.html","28f1c5d1e4a08808a872d039cffc6a8f"],["/categories/emoji/index.html","80cf544f144cada0b6307f9ea5a3635e"],["/categories/index.html","4d4927ed2d83a142cf409c5add1cbac7"],["/categories/linux/index.html","976b28e59b12f89bb1ec4de6ab5cc635"],["/categories/数据库设计/index.html","4e475668b184f0dea04739208098d45c"],["/categories/记录/index.html","6427c8010150c82485e38bf385b61ca3"],["/categories/面向对象/index.html","45e62847fd971a42b6924436915f97d9"],["/css/index.css","5fd834c03cafa4e0ac610630dba23e67"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.png","c9656983e0141c4d2301d6a217961667"],["/img/avatar.png","a1548b3252b0e3c47adcfd56d98bfb69"],["/img/favicon-16x16-next.png","efc289a0f524cbeae804e301feeb56cd"],["/img/favicon-32x32-next.png","efc289a0f524cbeae804e301feeb56cd"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wechatpay.png","bfa7e10082cdfbf206c5127311f2a40c"],["/index.html","99c50b6122a3eb7ae0252abefeb53397"],["/js/main.js","b382597891e958e71bb7c1099977ec66"],["/js/music.js","78b406ec883d52229a2ec4d6311bc115"],["/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/link/index.html","bf06c7c090401869990884d9867fe105"],["/music/index.html","35dd2eb0f4123639f4a7b0400539d1d9"],["/page/2/index.html","fdb25741e0b110df15469c777a6d61a8"],["/page/3/index.html","9fa1c7c806c801d46263ff7ec9b76d7e"],["/page/4/index.html","5e4724773a5f315214c000bf1faf4fda"],["/posts/13258/index.html","17a94b1d5de722372750d8571867e2d0"],["/posts/1359691355/index.html","67ee8b2c47a539b96c241229b7848fce"],["/posts/14324/index.html","f1261baf35191c5fc85c8fc62e06dcd0"],["/posts/14393/index.html","4c69dd19ad9db3447527db819f0c7981"],["/posts/1553907357/index.html","23d117857bcd0eeac326d336b0a1a485"],["/posts/1864766114/index.html","100471d6b7612beccd25ffb3ec32927f"],["/posts/2352548230/index.html","aa89a7cb37d5d1fa1c97e557928f8c8b"],["/posts/25396/image-20200515193027529.png","1dfa8c2ba2a3af4cbf70db66ad8cbcd9"],["/posts/25396/image-20200515193212898.png","0df8195d2fa50cb023d83a943a75e2b9"],["/posts/25396/image-20200515193240630.png","177e009c0429cb3a7254b1c7d682c2aa"],["/posts/25396/image-20200515193903771.png","aeb4fb7f9e44d5428b46db2ef5f58eb8"],["/posts/25396/image-20200515195209340.png","22978e93b749e7eebcc3cc63327c3c96"],["/posts/25396/image-20200515200355611.png","5caf04a888375ccd6a2ff2e8bfd908f0"],["/posts/25396/image-20200515201112827.png","ce6132975eea9a1128a4efa3513582dd"],["/posts/25396/image-20200516222500714.png","70a7e1e585bcc0d3a0966ba304c006ff"],["/posts/25396/image-20200517170054604.png","73e1c8306391defec040b07cc0569be1"],["/posts/25396/image-20200517170527296.png","fe7d7f953761eaed529889cfb2291268"],["/posts/25396/image-20200517170949578.png","a910ed84e3df25339a454fc298e784e3"],["/posts/25396/image-20200517171011384.png","09980fef34197bfb4c848a5b86f5baa4"],["/posts/25396/image-20200517171353373.png","40fa46a10da30d5bc6261b9f04a139ea"],["/posts/25396/image-20200517172727084.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517172730649.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517173246459.png","cc6fdd185c05cbcd37fec0e852a611f6"],["/posts/25396/image-20200517174357885.png","28b1a5ed29591f10935c219a4fc5f282"],["/posts/25396/image-20200517174420239.png","e3494f720f9ff930ae6b13bf9ae42e9c"],["/posts/25396/image-20200517175435773.png","e544deb938716d4857cf2f62be5a8d34"],["/posts/25396/image-20200517175844957.png","c2cc7cff6d3557a4b0c88fc21b68e778"],["/posts/25396/image-20200517180546503.png","8ed3df0a1627da082e53d874b2485122"],["/posts/25396/image-20200521215626753.png","15342c03b327bb77eddb3816b648b5a0"],["/posts/25396/image-20200522124822493.png","e72575193d58cb0a325354a47aca5381"],["/posts/25396/image-20200522212021634.png","d0cefd4e019f433a4cc980e8165cb449"],["/posts/25396/index.html","d7e0ef4f9c9297c58dd985e3bd28fe45"],["/posts/26259/index.html","33e2ce110ceee194bc3a84fe4bf71d9d"],["/posts/29333/index.html","32aa45f0fe5b22f90625f9b7f19919da"],["/posts/3112011529/index.html","ad4454f962d99e4d2b62186dd46ae09f"],["/posts/3120427724/index.html","3d8915ba19a6d54ece6dc3a8bab65e05"],["/posts/3155752545/image-20200604155255484.png","cb09cc3688945161d5551a351f7ca824"],["/posts/3155752545/index.html","103222dfe6e8fe000ee6288d59233e52"],["/posts/31683/index.html","f4a0facf12dc1c95c4294f4efe36b2a2"],["/posts/3261239934/index.html","e84372b28faf43787694ae4d713ec8d9"],["/posts/34782/index.html","43867471c68e3b7c55f0b81c089a2064"],["/posts/3661501281/index.html","5781dbbfa7f3348bb81da86cd08cec4b"],["/posts/3984882913/index.html","bfda8bf90aa1fbbb405fbf0fd9d63476"],["/posts/41739/image-20200525194743301.png","3e1e9e22cc72305d7a71885996a99f3e"],["/posts/41739/image-20200525194905458.png","8d2a09b63c675cc633c979653a4a100e"],["/posts/41739/image-20200525195035039.png","e7318b93cac9719578ba39bebd579444"],["/posts/41739/image-20200525195113526.png","cd30d10151c984d8e8c60a8916522e6a"],["/posts/41739/image-20200525195141092.png","3bc1bf5b4d4f147cae614eed5e873a07"],["/posts/41739/image-20200525195257690.png","b768e2e882628840dbfb8b5dbeccc6af"],["/posts/41739/image-20200526095527277.png","b8eb6f65e585ab1524fb0b052c0e1916"],["/posts/41739/image-20200526101428664.png","3a1e5873e8932a3ac399b1cdda8b22a9"],["/posts/41739/image-20200526101532280.png","128d6ec7d72d31861c50ca5cf16063c9"],["/posts/41739/image-20200526101637132.png","6eeddcc05075deec6fbf3900f075741f"],["/posts/41739/image-20200526102133363.png","74ee6450821d9908b8b6c3592d452df1"],["/posts/41739/image-20200526103909262.png","d5f5f0426cf61ee59c449e1ad6474fe2"],["/posts/41739/image-20200526104513794.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104526805.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104759021.png","bcb4a45d1bdf7f10d88acf9497618d06"],["/posts/41739/image-20200526105146033.png","4b7e752ff2ab5deb9e227e526f0a5a1d"],["/posts/41739/image-20200526105325301.png","9438ecd08715fbb97481ec6e941167a5"],["/posts/41739/image-20200526105538621.png","fd6e4d7a4df4abf522548a3db4424a7d"],["/posts/41739/image-20200526110122986.png","ab3ad4b11caa1e63b1023356df8b1b94"],["/posts/41739/image-20200526110943364.png","0a74d3071743f10469f7d3515ba67a33"],["/posts/41739/image-20200526142911511.png","6ea294c5f1457cf1a1fb03ce0279dab9"],["/posts/41739/image-20200526154923596.png","1df86ad0b07c69385b3a9dd298a1c397"],["/posts/41739/image-20200526155002906.png","5ef9c86c75348bf000142a57119aff0b"],["/posts/41739/image-20200526155021754.png","787291b1ed33b376fe6ae13b2bef0178"],["/posts/41739/image-20200526155102089.png","67d74968316983b19ea67313ba12dab3"],["/posts/41739/image-20200526155116682.png","0e95b3f550c9a64a22f1c8a0283b82a1"],["/posts/41739/image-20200526155131075.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155136600.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155710071.png","f1d3fb40eac9fc2d34e726b675d25a8c"],["/posts/41739/image-20200526160938838.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526160941638.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526161439575.png","8ce48af513e1c5f8493dd9af102d991e"],["/posts/41739/image-20200526161548429.png","8f03bfcdfd7658418bc1b2dd659decec"],["/posts/41739/index.html","a9340ce53626e9ecc59d725ec4c17176"],["/posts/47733/index.html","8f4d035bcbc1a56816b4bf8f8842d9c9"],["/posts/48141/index.html","c198a2f39d46b7997d04c816b31e0669"],["/posts/49984/index.html","4022dd30f7452868300ed4b8ae8a72d3"],["/posts/56512/index.html","1e754dfe1aae0a54398e7d074bd6d0d7"],["/posts/59764/index.html","42d1707b6f07f30f44abb226b0e0bd53"],["/posts/709269996/index.html","205bb0ffd9c60dc65c3a8f4a431e3b0f"],["/posts/961488241/index.html","319b01896d1e51abfc928f7ff035d737"],["/shuoshuo/index.html","8ab30ecb2ff025700c79593e048fc562"],["/sw-register.js","4b7196ece5965b94d3eefcefb2c18696"],["/tags/Butterfly/index.html","82aac56b0331ef2b59c1fc9ea399df7e"],["/tags/Git/index.html","9e16c6636f6d3776f8f28581c680a04a"],["/tags/IDEA/index.html","fe2b6a207bf039baa8e901a80f383d46"],["/tags/Maven/index.html","08082f527aca46e612325360383fda96"],["/tags/MySQL/index.html","9c2f9cd99dadcd7b46565bb993131793"],["/tags/SpringBoot/index.html","755827221e44d85e2a460f5110cce130"],["/tags/SpringSecurity/index.html","119e43aab181ab0594b8b4597c441e2a"],["/tags/Swagger/index.html","db1d30c9facca0a35a9cd6d82b010935"],["/tags/emoji/index.html","2fe9ef9c50c513805f733723bbf6a146"],["/tags/hexo/index.html","fa807de3ed9308fba47af2e108d820e7"],["/tags/index.html","c321cfc2a5f4f0d4e424f4cade121e45"],["/tags/linux/index.html","960f8e99184ca0a917202e92eaa61810"],["/tags/判断/index.html","1f29c4a535d9dd3801a09c88a32125e5"],["/tags/图表/index.html","40b0e036d6fda3b02fd7d90ed40b04d6"],["/tags/排序/index.html","1f818cbc1060f2c51a2b5f742bd7bd2c"],["/tags/数据库设计/index.html","6c00e1310b4e9a8dc9c4e4d0ad9a7043"],["/tags/记录/index.html","c2bf4a6f3261c2b91c64b002d441bd8d"],["/tags/面向对象/index.html","7e3e25ca38c1b6df9960789bd76c48ab"]];
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
