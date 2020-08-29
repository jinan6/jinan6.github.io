/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","695f9202a247e99bf28959daa41186a9"],["/Me/index.html","6d493b9dc003f91972f1026db034c32c"],["/about/index.html","88122f9ce177bb2003b1bd1d47b2d0b3"],["/archives/2020/05/index.html","0a63832c95840c17cdb2b75f77b5dade"],["/archives/2020/05/page/2/index.html","00f398b0c5d0cea0f05ec036755f51e4"],["/archives/2020/06/index.html","c943bef5addc3d306c500130a8d1c133"],["/archives/2020/06/page/2/index.html","11071d0454c7d27462fb4dd76d68a4e8"],["/archives/2020/07/index.html","03c1793e8f8dec17a30194906b96e07a"],["/archives/2020/08/index.html","5bf91258ba4dacc5502a6bdc05968c6d"],["/archives/2020/index.html","11e9a7d894469abc381b044412a9381b"],["/archives/2020/page/2/index.html","8a97baae0e4d3659cef9083f70316be6"],["/archives/2020/page/3/index.html","18f15212400b8b3a97e905a8ed794ccf"],["/archives/index.html","cd80f1ca267ac072d03d4d4a60d9d037"],["/archives/page/2/index.html","e9bb2ba546e8a40cf6872787b9fd3ac5"],["/archives/page/3/index.html","0de12f49b2efb870e9428c544ad9b5cb"],["/bangumis/index.html","a2db9b99a3bdc5f57d84c305df97311d"],["/board/index.html","a6b36a2b2460171542bfda623ebc459f"],["/categories/Git/index.html","29508c0ac086837f24626dafbabe786c"],["/categories/Hexo/Butterfly/index.html","00c539cf01d429a9021bd1d05222f05c"],["/categories/Hexo/Next/index.html","9036e956be19bd4da884398afb3ee919"],["/categories/Hexo/index.html","914f296629c584695d7b45b50341690d"],["/categories/Hexo/备份/index.html","3577e6b1ebdc4232b3c2af7558196ef2"],["/categories/IDEA/index.html","1fc82c7a40858defce9dae709ef85289"],["/categories/Java/index.html","5e3e05286fcd4ce89b31ae3fe45d9610"],["/categories/Maven/index.html","e9694905430ff165a08a901e476d5630"],["/categories/MySQL/index.html","47351c7287104a5ddb899bbf161d130a"],["/categories/MySQL/优化/index.html","cd900546a7e353bb14b50feeb3e94309"],["/categories/MySQL/引擎/index.html","ed554c9fcfa52acc15d1dcad2b5bdb6a"],["/categories/Mybatis/index.html","7d420443be2754c30b0a07f51bd445d2"],["/categories/Mybatis/记录/index.html","9f75c2c7f909513a1f7ff05264b38082"],["/categories/SpringBoot/SpringSecurity/index.html","03c3d6ab8e7b3df47876c586b679f960"],["/categories/SpringBoot/Swagger/index.html","99226bde405c8a43c1a5a54ebb2a492e"],["/categories/SpringBoot/index.html","7eb487b6a7c37f8204fed2675b59cf21"],["/categories/Vue/index.html","465787c79fe38cc4eab9372e233c5d62"],["/categories/ajax/index.html","e4fb43338625f5055730eab2a90a0f41"],["/categories/emoji/index.html","9e32afabf7b37cc3597d7bbe851e45ad"],["/categories/index.html","1afb2d861285bdbfc52358e170a7de49"],["/categories/linux/index.html","aee7e6f433cd6bf1ec69ae44b7538f0d"],["/categories/数据库设计/index.html","77f9abfd2d6e0d65ace152f94c510e26"],["/categories/记录/index.html","0eceafae40ac20df4518a9e77bb56b66"],["/categories/面向对象/index.html","6c18aa07f6eb47bf425068529501f83a"],["/css/index.css","9a5c5b5308d5ff6ecf511224289995fc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","39374f7ba91c54dfd9badb6dd931c399"],["/js/main.js","83086cbc797c743e17a9c592e6d36dd7"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","5b26f58076202394a66cde8b885f3225"],["/js/utils.js","b04af39def288f877195692f094bafd6"],["/link/index.html","97eb5960de385aa3bbabf334d8fcefb0"],["/live2dw/assets/model.2048/texture_00.png","ae34664ad879d043476c43d041b4aecd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","1ffd1155fff1ccd1dd03fce75bc26557"],["/page/2/index.html","c34e813b81fd929cebbfa869662110dc"],["/page/3/index.html","ab471f219e7b5606dab64d37d584db1d"],["/posts/1124952030/index.html","de649e0d41d1308f125eb5371e4bcb20"],["/posts/13258/index.html","307bb8b1bf656beb328b9cbc907789c8"],["/posts/1359691355/index.html","25f146ac5ef03e815fdeeab6f4f266b0"],["/posts/14324/index.html","fd764e6357f217f6405c5c3e58631265"],["/posts/14393/index.html","726ccc41a60575c75f61f3542a2c772e"],["/posts/1553907357/index.html","51464bdb3b3155107fa7f37c62e1ec08"],["/posts/1864766114/index.html","dd3e1beef5e00ea0d4d83323c0f89de8"],["/posts/2352548230/index.html","7d4bb89059858e46b45e4624b6345174"],["/posts/25396/image-20200515193027529.png","1dfa8c2ba2a3af4cbf70db66ad8cbcd9"],["/posts/25396/image-20200515193212898.png","0df8195d2fa50cb023d83a943a75e2b9"],["/posts/25396/image-20200515193240630.png","177e009c0429cb3a7254b1c7d682c2aa"],["/posts/25396/image-20200515193903771.png","aeb4fb7f9e44d5428b46db2ef5f58eb8"],["/posts/25396/image-20200515195209340.png","22978e93b749e7eebcc3cc63327c3c96"],["/posts/25396/image-20200515200355611.png","5caf04a888375ccd6a2ff2e8bfd908f0"],["/posts/25396/image-20200515201112827.png","ce6132975eea9a1128a4efa3513582dd"],["/posts/25396/image-20200516222500714.png","70a7e1e585bcc0d3a0966ba304c006ff"],["/posts/25396/image-20200517170054604.png","73e1c8306391defec040b07cc0569be1"],["/posts/25396/image-20200517170527296.png","fe7d7f953761eaed529889cfb2291268"],["/posts/25396/image-20200517170949578.png","a910ed84e3df25339a454fc298e784e3"],["/posts/25396/image-20200517171011384.png","09980fef34197bfb4c848a5b86f5baa4"],["/posts/25396/image-20200517171353373.png","40fa46a10da30d5bc6261b9f04a139ea"],["/posts/25396/image-20200517172727084.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517172730649.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517173246459.png","cc6fdd185c05cbcd37fec0e852a611f6"],["/posts/25396/image-20200517174357885.png","28b1a5ed29591f10935c219a4fc5f282"],["/posts/25396/image-20200517174420239.png","e3494f720f9ff930ae6b13bf9ae42e9c"],["/posts/25396/image-20200517175435773.png","e544deb938716d4857cf2f62be5a8d34"],["/posts/25396/image-20200517175844957.png","c2cc7cff6d3557a4b0c88fc21b68e778"],["/posts/25396/image-20200517180546503.png","8ed3df0a1627da082e53d874b2485122"],["/posts/25396/image-20200521215626753.png","15342c03b327bb77eddb3816b648b5a0"],["/posts/25396/image-20200522124822493.png","e72575193d58cb0a325354a47aca5381"],["/posts/25396/image-20200522212021634.png","d0cefd4e019f433a4cc980e8165cb449"],["/posts/25396/index.html","ac35aa9b0010856315cb98b5d9242b8c"],["/posts/26259/index.html","48857fe2a3e6dd87ff6357fb78ee1774"],["/posts/29333/index.html","7f0699ece969ca0273155e8fe9320a3f"],["/posts/3109851417/index.html","f6d7703edd6675e22c31ec98b604da32"],["/posts/3112011529/index.html","daf6455d7cb1b567db845b96bb7ddc78"],["/posts/3120427724/index.html","6aa6105803684b5fb4d4edbf250c16fa"],["/posts/3155752545/image-20200604155255484.png","cb09cc3688945161d5551a351f7ca824"],["/posts/3155752545/index.html","bc18a79f47988d54d63e91f845e88f66"],["/posts/31683/index.html","9400195c68417434889ee694165aa01a"],["/posts/3261239934/index.html","47d40ece69a25bd51019110dd5d33997"],["/posts/34782/index.html","72ad47d69d589980665a1a725ed90d41"],["/posts/3661501281/index.html","4ff121e0ced21174bd50c5a57d32173d"],["/posts/3700149003/index.html","a04ae0095bc3258b9bea2e6bbbd90365"],["/posts/3984882913/index.html","7d793731c309047fccb1f63149549639"],["/posts/41739/image-20200525194743301.png","3e1e9e22cc72305d7a71885996a99f3e"],["/posts/41739/image-20200525194905458.png","8d2a09b63c675cc633c979653a4a100e"],["/posts/41739/image-20200525195035039.png","e7318b93cac9719578ba39bebd579444"],["/posts/41739/image-20200525195113526.png","cd30d10151c984d8e8c60a8916522e6a"],["/posts/41739/image-20200525195141092.png","3bc1bf5b4d4f147cae614eed5e873a07"],["/posts/41739/image-20200525195257690.png","b768e2e882628840dbfb8b5dbeccc6af"],["/posts/41739/image-20200526095527277.png","b8eb6f65e585ab1524fb0b052c0e1916"],["/posts/41739/image-20200526101428664.png","3a1e5873e8932a3ac399b1cdda8b22a9"],["/posts/41739/image-20200526101532280.png","128d6ec7d72d31861c50ca5cf16063c9"],["/posts/41739/image-20200526101637132.png","6eeddcc05075deec6fbf3900f075741f"],["/posts/41739/image-20200526102133363.png","74ee6450821d9908b8b6c3592d452df1"],["/posts/41739/image-20200526103909262.png","d5f5f0426cf61ee59c449e1ad6474fe2"],["/posts/41739/image-20200526104513794.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104526805.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104759021.png","bcb4a45d1bdf7f10d88acf9497618d06"],["/posts/41739/image-20200526105146033.png","4b7e752ff2ab5deb9e227e526f0a5a1d"],["/posts/41739/image-20200526105325301.png","9438ecd08715fbb97481ec6e941167a5"],["/posts/41739/image-20200526105538621.png","fd6e4d7a4df4abf522548a3db4424a7d"],["/posts/41739/image-20200526110122986.png","ab3ad4b11caa1e63b1023356df8b1b94"],["/posts/41739/image-20200526110943364.png","0a74d3071743f10469f7d3515ba67a33"],["/posts/41739/image-20200526142911511.png","6ea294c5f1457cf1a1fb03ce0279dab9"],["/posts/41739/image-20200526154923596.png","1df86ad0b07c69385b3a9dd298a1c397"],["/posts/41739/image-20200526155002906.png","5ef9c86c75348bf000142a57119aff0b"],["/posts/41739/image-20200526155021754.png","787291b1ed33b376fe6ae13b2bef0178"],["/posts/41739/image-20200526155102089.png","67d74968316983b19ea67313ba12dab3"],["/posts/41739/image-20200526155116682.png","0e95b3f550c9a64a22f1c8a0283b82a1"],["/posts/41739/image-20200526155131075.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155136600.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155710071.png","f1d3fb40eac9fc2d34e726b675d25a8c"],["/posts/41739/image-20200526160938838.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526160941638.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526161439575.png","8ce48af513e1c5f8493dd9af102d991e"],["/posts/41739/image-20200526161548429.png","8f03bfcdfd7658418bc1b2dd659decec"],["/posts/41739/index.html","e57014c52750eca02dfbbc0f1aa0c247"],["/posts/47733/index.html","43f2a4c4c49993793893f01d074e5899"],["/posts/48141/index.html","67609b4656d730ccaee7bdcb68171314"],["/posts/49984/index.html","dcbe90f5c440a495ab254c4ffc594607"],["/posts/56512/index.html","5b20953d6492a544f010a73f2c95753c"],["/posts/59764/index.html","2a1c6af0642c41a03fd5655c3936fe3d"],["/posts/704219325/index.html","8f4e6913d74417bfddf4ff6140675f4c"],["/posts/709269996/index.html","7e4da74684d01d2c64898924cf792a8e"],["/posts/961488241/index.html","f0ea28ccc887cb213f5da9434dcb2e7b"],["/shuoshuo/index.html","7fe96f358f7f5c1a8128d01bd901a40c"],["/sw-register.js","66b170874944bdb0bd95bca8e294677e"],["/tags/Butterfly/index.html","07d6b019158a3a6da9918115d2dbad58"],["/tags/Git/index.html","1ec996f136718b75388d19739770091e"],["/tags/IDEA/index.html","a9829106844dbbd1207db2c0fec84259"],["/tags/Java/index.html","58f3c9858df6b0616771fc12a1a19918"],["/tags/Maven/index.html","742671b37b630878d07a9604bd893b84"],["/tags/MySQL/index.html","51f02e51e4c10b11927537ad922ade90"],["/tags/Mybatis/index.html","6bd94d1b7844de218d0166dbd4d1605e"],["/tags/SpringBoot/index.html","61f827151a523c4256d3a49662e307c9"],["/tags/SpringSecurity/index.html","0f8a89f39858918c836af7bd2c045766"],["/tags/Swagger/index.html","06f85b6fb4222b9164695866959dd038"],["/tags/emoji/index.html","de0452f9c04225b6df03552ced6e4957"],["/tags/hexo/index.html","0c730c21d0fe1e21e327fb9a5d2ba343"],["/tags/index.html","60da8edadd9aaba7a54f42a94cec06e0"],["/tags/linux/index.html","acc5f87fc376eadcc902f8a18ab4ff71"],["/tags/判断/index.html","105fc8e58b852064717415982c8178ac"],["/tags/图表/index.html","5a65ff8f40cbed2aeda49b63d9bc75cb"],["/tags/排序/index.html","00f9c792ba5ba2f512f2177642acd4a1"],["/tags/数据库设计/index.html","ae7a9ac7a60bb0f4d6abd3df7de6212c"],["/tags/记录/index.html","ce11bc751b8999a0253700fb1366d5f3"],["/tags/面向对象/index.html","4cb66dacd582b306dfb7c69eb6991b7d"]];
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
