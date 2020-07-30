/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0520c271b910091935d4a48372525e9e"],["/Me/index.html","6d35c0768acb7182520b826640579c6f"],["/about/index.html","89736c17a034c34ee84d823d9a2568b6"],["/archives/2020/05/index.html","d5e089b816e0682ae99fb3d7a3b7cefb"],["/archives/2020/05/page/2/index.html","0774bacf7a0d3afa1e02396733d5333b"],["/archives/2020/06/index.html","6694f2e5f20a41135ecd986ab8debe6d"],["/archives/2020/06/page/2/index.html","8b66915aa2eddf331c0a0aecebac08ea"],["/archives/2020/07/index.html","3de53e089e343054f07800a63b1d071a"],["/archives/2020/index.html","3fab5a8eb30822aeaa83d2777761cfd7"],["/archives/2020/page/2/index.html","fdb48cf27bee91e0030f62c792d3dac3"],["/archives/2020/page/3/index.html","7cda79730f3d05a7f4564abb91552389"],["/archives/index.html","a12bcb3f4c287ae341b00040816a07ca"],["/archives/page/2/index.html","5c10646115770f042a7e1d1af6415941"],["/archives/page/3/index.html","1b0039a0df47e9a322122edd96c4bd72"],["/board/index.html","a773d2919435844d0d43399314b8a33f"],["/categories/Git/index.html","7ef8100a624149539c1080d7a6c342fa"],["/categories/Hexo/Butterfly/index.html","224b8118864e2f6bb73735ac94cc9c73"],["/categories/Hexo/Next/index.html","32b397390f96f12c7ded1c5108b5536f"],["/categories/Hexo/index.html","364060b9a362d83f045b7d830175a5f9"],["/categories/Hexo/备份/index.html","3db2acfacb9a4fea6311c66dda69dd60"],["/categories/IDEA/index.html","8c05033ef8b51215ea596c6f677a6fa1"],["/categories/Maven/index.html","a3eb1d7533f8ea32d260c632009ace79"],["/categories/MySQL/index.html","3e9f3544efd36b78c629d3968f1a56cc"],["/categories/MySQL/优化/index.html","3884185e534a6edf8ab5e03c548babad"],["/categories/MySQL/引擎/index.html","f9b28501d2a1d49080aa53c3db8ac6fc"],["/categories/SpringBoot/SpringSecurity/index.html","5c705e20e397cac7eb128c8e0c34f98c"],["/categories/SpringBoot/Swagger/index.html","a567e20af51860fb17ef42fa2eaae8a9"],["/categories/SpringBoot/index.html","959c5ea9de4b8b53b6637a08a8ce11fd"],["/categories/Vue/index.html","ab47231545d4a737c1ad6b6cf539e2a7"],["/categories/ajax/index.html","04f3c62730b6f1cab1d2abd10151204e"],["/categories/emoji/index.html","62a2232f4846b44ca72846a85b64f20b"],["/categories/index.html","7f907609ffea6dac7fcbb369c6151bff"],["/categories/linux/index.html","609c6be87d2b3b473e167880a892f10a"],["/categories/数据库设计/index.html","cab164e8fbf3b4c379ac29e3bdeb734d"],["/categories/记录/index.html","e3310dc4f918f4a1dcfd9e0600184a55"],["/categories/面向对象/index.html","0b873e29e787637e498b3a9abcf9191b"],["/css/index.css","94bdb6d95a565154ac85d31eae781399"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","fd98e7d8f40d0354d17cb9635e8405be"],["/js/main.js","b382597891e958e71bb7c1099977ec66"],["/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/link/index.html","670a57d68c95b23facd2e191900a7bea"],["/live2dw/assets/model.2048/texture_00.png","ae34664ad879d043476c43d041b4aecd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","6f202d2d288fd4c73447bc4d198d39ce"],["/page/2/index.html","c96e5de2a756b3f51b4120b8ac4b8e2a"],["/page/3/index.html","3948f29516087b3d4e309288ffbc78cd"],["/page/4/index.html","b9404b9fd1a72be22ea6b5a506dab75e"],["/posts/1124952030/index.html","b0ea9d0a1c366c504cf9c2c5d730b12e"],["/posts/13258/index.html","37474bf2a7be856822dbde6bcc684380"],["/posts/1359691355/index.html","cd875d195e4bc419911516bf90559744"],["/posts/14324/index.html","f7bf6ae247b0b4c765cca8505908f8c4"],["/posts/14393/index.html","f8a5141c35b385120e626f4d7be13886"],["/posts/1553907357/index.html","fa6866ff4bb84d04433d774e3492081e"],["/posts/1864766114/index.html","19c9e0aefe1249e7cca79f86b7dfbfbd"],["/posts/2352548230/index.html","899c0ba10b1018b2fddef1bd984edfd8"],["/posts/25396/image-20200515193027529.png","1dfa8c2ba2a3af4cbf70db66ad8cbcd9"],["/posts/25396/image-20200515193212898.png","0df8195d2fa50cb023d83a943a75e2b9"],["/posts/25396/image-20200515193240630.png","177e009c0429cb3a7254b1c7d682c2aa"],["/posts/25396/image-20200515193903771.png","aeb4fb7f9e44d5428b46db2ef5f58eb8"],["/posts/25396/image-20200515195209340.png","22978e93b749e7eebcc3cc63327c3c96"],["/posts/25396/image-20200515200355611.png","5caf04a888375ccd6a2ff2e8bfd908f0"],["/posts/25396/image-20200515201112827.png","ce6132975eea9a1128a4efa3513582dd"],["/posts/25396/image-20200516222500714.png","70a7e1e585bcc0d3a0966ba304c006ff"],["/posts/25396/image-20200517170054604.png","73e1c8306391defec040b07cc0569be1"],["/posts/25396/image-20200517170527296.png","fe7d7f953761eaed529889cfb2291268"],["/posts/25396/image-20200517170949578.png","a910ed84e3df25339a454fc298e784e3"],["/posts/25396/image-20200517171011384.png","09980fef34197bfb4c848a5b86f5baa4"],["/posts/25396/image-20200517171353373.png","40fa46a10da30d5bc6261b9f04a139ea"],["/posts/25396/image-20200517172727084.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517172730649.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517173246459.png","cc6fdd185c05cbcd37fec0e852a611f6"],["/posts/25396/image-20200517174357885.png","28b1a5ed29591f10935c219a4fc5f282"],["/posts/25396/image-20200517174420239.png","e3494f720f9ff930ae6b13bf9ae42e9c"],["/posts/25396/image-20200517175435773.png","e544deb938716d4857cf2f62be5a8d34"],["/posts/25396/image-20200517175844957.png","c2cc7cff6d3557a4b0c88fc21b68e778"],["/posts/25396/image-20200517180546503.png","8ed3df0a1627da082e53d874b2485122"],["/posts/25396/image-20200521215626753.png","15342c03b327bb77eddb3816b648b5a0"],["/posts/25396/image-20200522124822493.png","e72575193d58cb0a325354a47aca5381"],["/posts/25396/image-20200522212021634.png","d0cefd4e019f433a4cc980e8165cb449"],["/posts/25396/index.html","e32f32ead8800df8e57b24d4fe28b6d9"],["/posts/26259/index.html","7d8edaf36eea810539f9f4892a874a56"],["/posts/29333/index.html","28a863f96c2b1828bc865d286bb30a8a"],["/posts/3112011529/index.html","14ba67d845f3b7165eb1bcc1b0370eda"],["/posts/3120427724/index.html","330ce8fb521f5af7a72bd0db761bd3cb"],["/posts/3155752545/image-20200604155255484.png","cb09cc3688945161d5551a351f7ca824"],["/posts/3155752545/index.html","ad0b8e85ceea2866ad534e882f0ae70d"],["/posts/31683/index.html","a347495d19b9d19fba9c6e5d0af5ca32"],["/posts/3261239934/index.html","2cf61255415238b54e597e681d602cec"],["/posts/34782/index.html","3ac2e6843c0e0decfe97d95df73e9df9"],["/posts/3661501281/index.html","5496b2472bfe2dd07ad31fc6a7165113"],["/posts/3984882913/index.html","73472b95e681a10e0b861c471d4f47ee"],["/posts/41739/image-20200525194743301.png","3e1e9e22cc72305d7a71885996a99f3e"],["/posts/41739/image-20200525194905458.png","8d2a09b63c675cc633c979653a4a100e"],["/posts/41739/image-20200525195035039.png","e7318b93cac9719578ba39bebd579444"],["/posts/41739/image-20200525195113526.png","cd30d10151c984d8e8c60a8916522e6a"],["/posts/41739/image-20200525195141092.png","3bc1bf5b4d4f147cae614eed5e873a07"],["/posts/41739/image-20200525195257690.png","b768e2e882628840dbfb8b5dbeccc6af"],["/posts/41739/image-20200526095527277.png","b8eb6f65e585ab1524fb0b052c0e1916"],["/posts/41739/image-20200526101428664.png","3a1e5873e8932a3ac399b1cdda8b22a9"],["/posts/41739/image-20200526101532280.png","128d6ec7d72d31861c50ca5cf16063c9"],["/posts/41739/image-20200526101637132.png","6eeddcc05075deec6fbf3900f075741f"],["/posts/41739/image-20200526102133363.png","74ee6450821d9908b8b6c3592d452df1"],["/posts/41739/image-20200526103909262.png","d5f5f0426cf61ee59c449e1ad6474fe2"],["/posts/41739/image-20200526104513794.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104526805.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104759021.png","bcb4a45d1bdf7f10d88acf9497618d06"],["/posts/41739/image-20200526105146033.png","4b7e752ff2ab5deb9e227e526f0a5a1d"],["/posts/41739/image-20200526105325301.png","9438ecd08715fbb97481ec6e941167a5"],["/posts/41739/image-20200526105538621.png","fd6e4d7a4df4abf522548a3db4424a7d"],["/posts/41739/image-20200526110122986.png","ab3ad4b11caa1e63b1023356df8b1b94"],["/posts/41739/image-20200526110943364.png","0a74d3071743f10469f7d3515ba67a33"],["/posts/41739/image-20200526142911511.png","6ea294c5f1457cf1a1fb03ce0279dab9"],["/posts/41739/image-20200526154923596.png","1df86ad0b07c69385b3a9dd298a1c397"],["/posts/41739/image-20200526155002906.png","5ef9c86c75348bf000142a57119aff0b"],["/posts/41739/image-20200526155021754.png","787291b1ed33b376fe6ae13b2bef0178"],["/posts/41739/image-20200526155102089.png","67d74968316983b19ea67313ba12dab3"],["/posts/41739/image-20200526155116682.png","0e95b3f550c9a64a22f1c8a0283b82a1"],["/posts/41739/image-20200526155131075.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155136600.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155710071.png","f1d3fb40eac9fc2d34e726b675d25a8c"],["/posts/41739/image-20200526160938838.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526160941638.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526161439575.png","8ce48af513e1c5f8493dd9af102d991e"],["/posts/41739/image-20200526161548429.png","8f03bfcdfd7658418bc1b2dd659decec"],["/posts/41739/index.html","2f79942291b523f15723ee60b4f7a368"],["/posts/47733/index.html","72245ea7443a876608de90f10303b323"],["/posts/48141/index.html","8ad67e01a5df55aabf3bd20cc5a9c5d5"],["/posts/49984/index.html","4de568611aadd136cb174d075c2ee536"],["/posts/56512/index.html","bcd7a028e2dec615c3b076d9f0365e8b"],["/posts/59764/index.html","2ad5b140bb5108c0fc41ab04a78adeeb"],["/posts/709269996/index.html","0c94026b56fbf16320c5ba05eaacfce0"],["/posts/961488241/index.html","bc9ab4ab2bf978e53a2315bdc74c6c77"],["/shuoshuo/index.html","83e37265ba8b735676c171d7a7921920"],["/sw-register.js","0be4f591b3a9d04c86918b14ec05d915"],["/tags/Butterfly/index.html","11201b6dc1a31f64fa018bd04d286654"],["/tags/Git/index.html","7ce39b083c041773c89ff64e2ee58dcd"],["/tags/IDEA/index.html","dc72bb2bb872666f166d5801789ab507"],["/tags/Maven/index.html","7348604952c1d173881f4c53a719dcaa"],["/tags/MySQL/index.html","77a98d31c5129026c7ac1b31696bf1e3"],["/tags/SpringBoot/index.html","35a0e8cb783635e2c0ed293be901a819"],["/tags/SpringSecurity/index.html","a37c1b5d066c6e65d4f5d2998e62b8c5"],["/tags/Swagger/index.html","0fd7a9e532636148455875f7b3632324"],["/tags/emoji/index.html","c1783328385b1ef2482474fdc2389dea"],["/tags/hexo/index.html","7931097910a5e5d1f9008e331b32cb6e"],["/tags/index.html","980df61e2b7aceb5a93ba4b81f3cee60"],["/tags/linux/index.html","7ab0aef899a47d5dddf631f72bb04043"],["/tags/判断/index.html","8049a048ddd76f296512fefb5ed48235"],["/tags/图表/index.html","512221cf9f6ae4d97a84b57547d2a137"],["/tags/排序/index.html","6a0b4bb9fa72e5361e5e581c63bddf4c"],["/tags/数据库设计/index.html","e65b066d42385ad56c8b79868046e501"],["/tags/记录/index.html","aa93181393a2d88dd01632bc563afd3e"],["/tags/面向对象/index.html","5011b427387a1155757c8b4f4dc6b9ac"]];
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
