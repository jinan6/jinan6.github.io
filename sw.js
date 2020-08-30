/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a6226981d969c4f1297246561e890036"],["/Me/index.html","0460425285a6e8692fbbc53b4091a4a4"],["/about/index.html","042cd5e1097e4e0dc3af6d1168e0caad"],["/archives/2020/05/index.html","a1dd64f0239bc05a608a49b002e81876"],["/archives/2020/05/page/2/index.html","8ce78b587018cf64ca64659085cc4270"],["/archives/2020/06/index.html","f21c6a8faa28d9ef00c7776f467c8571"],["/archives/2020/06/page/2/index.html","9e434fbd69fa2a94e024d3cea21d7489"],["/archives/2020/07/index.html","08998186cdec9580bbba6da756047cbf"],["/archives/2020/08/index.html","d0be150582aef14020b1282c431cbfa1"],["/archives/2020/index.html","d0094d8af01788cc99e064ab0272dfdf"],["/archives/2020/page/2/index.html","45ae837f7590be050ae89d33d3424f63"],["/archives/2020/page/3/index.html","5738420aa113dc577a69a4b191d017d2"],["/archives/index.html","fdda6f6e6971c624a5d12575a1e60d01"],["/archives/page/2/index.html","8e9e9544b111835158f1b58c7be0d3e8"],["/archives/page/3/index.html","da7951d5b7f8d729febda2a90facebbe"],["/bangumis/index.html","9cc8b84713c093f78c4b6425c7d14788"],["/board/index.html","97feb5b2895afdbfcdbccab3fc46a32a"],["/categories/Git/index.html","8e766f0f041def1999d473e95ffbfb1e"],["/categories/Hexo/Butterfly/index.html","9f335d1feea65613b5c909349c440879"],["/categories/Hexo/Next/index.html","d011a419e6f7fc70f3703d789dfbf0d3"],["/categories/Hexo/index.html","678a7af3181cd83c1bf57c240c8efd30"],["/categories/Hexo/备份/index.html","9ee9142e46bcb08ed534152f7f1e1ee0"],["/categories/IDEA/index.html","7c6d2fc421d5d2a40785022727b6ca74"],["/categories/Java/index.html","e0568df75043c6285f4ba126be62b9fe"],["/categories/Maven/index.html","642b29e875e27cde37304a8324c744cd"],["/categories/MySQL/index.html","53f55b023edcc3ec17ec0e2bc2f2dcbf"],["/categories/MySQL/优化/index.html","0d2ede1163fd82646d2655ac34c6fe7b"],["/categories/MySQL/引擎/index.html","10343238b0d0d1aa7e30fcbc19301745"],["/categories/Mybatis/index.html","a64c2dfcacdb08153ce932dd3954a99b"],["/categories/Mybatis/记录/index.html","df52c333a2306a921783cce6ec668ae0"],["/categories/SpringBoot/SpringSecurity/index.html","f894f6d4be67f0084243ee3054029f04"],["/categories/SpringBoot/Swagger/index.html","c2d787d421647bdbe49590a68423a642"],["/categories/SpringBoot/index.html","30601159b76020d4e8d1ce07451d5334"],["/categories/Vue/index.html","e89fa6794e5bcac981d68388f3813e16"],["/categories/ajax/index.html","0f1e5b8f2b6d54d9f215e0ded49eb3d7"],["/categories/emoji/index.html","07aac5f7ae4ef0526c4c337465235daa"],["/categories/index.html","865b37b0bbe0675319bc7e98b5d96f58"],["/categories/linux/index.html","6bc1225b0154575881166e4b59e718e4"],["/categories/数据库设计/index.html","4e102ef4e0e7fc38bc4b39494fde8175"],["/categories/记录/index.html","b3db9c3c13025b2f4176cc677e3be15f"],["/categories/面向对象/index.html","3ddff9afa61815c156b7070d2262e06e"],["/css/index.css","9a5c5b5308d5ff6ecf511224289995fc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","cc07d5f16a4e072e1fc197ebf2f94d14"],["/js/main.js","ee7c3f864d6cb173ab6ce30eeebe80fd"],["/js/search/algolia.js","0027070eeffefdbf6f485c049070a43c"],["/js/search/local-search.js","371a0c7478aa74fd10ee5be34b2bcf59"],["/js/third-party/ClickShowText.js","f66854e27a08e7c5ca9f2c479fdeff3f"],["/js/third-party/activate-power-mode.js","6f588d15a5b7f1ebeca1c3578a5d3f6c"],["/js/third-party/canvas-nest.js","625f8a24478f1fe5c5bb4a89c4b82bce"],["/js/third-party/canvas-ribbon.js","8f2d884a863da4da823f16797ca8d941"],["/js/third-party/click_heart.js","ab9c59d47b40dc21c50e8907ce24790c"],["/js/third-party/fireworks.js","9eff589921aa2eadfb1e1023eef8f873"],["/js/third-party/piao.js","fd0ae3b2e1416f2cdb2e4371587225f3"],["/js/tw_cn.js","8617ed879b851646ed922127a655a812"],["/js/utils.js","07d927007f964a5e5c4183a4bd4517de"],["/link/index.html","43c8df088eea8fdc9fc3ded6dc148370"],["/live2dw/assets/model.2048/texture_00.png","ae34664ad879d043476c43d041b4aecd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","003016e0f1a17ffd274522873d1d08ae"],["/page/2/index.html","08afaf884e6240d4c78ad1d494c86784"],["/page/3/index.html","4c7e3c0f77ca9a3631c469f37edd21df"],["/posts/1124952030/index.html","384e9c8a360f9b217c1847ca8f1c3fb7"],["/posts/13258/index.html","5981a848762367551ee360ff00cce352"],["/posts/1359691355/index.html","9cebdd3b59b64715ac70ee546c90dc63"],["/posts/14324/index.html","d254e709912ec7a2791e0f82b716db95"],["/posts/14393/index.html","5d6a18238e55f336918fef4d45976b45"],["/posts/1553907357/index.html","0a390b9700d929ab4e4878a5baee947d"],["/posts/1864766114/index.html","798225911c0c711e13cb8c0a4b328fea"],["/posts/2352548230/index.html","aced2b560e39f6529c99d280ff132b04"],["/posts/25396/image-20200515193027529.png","1dfa8c2ba2a3af4cbf70db66ad8cbcd9"],["/posts/25396/image-20200515193212898.png","0df8195d2fa50cb023d83a943a75e2b9"],["/posts/25396/image-20200515193240630.png","177e009c0429cb3a7254b1c7d682c2aa"],["/posts/25396/image-20200515193903771.png","aeb4fb7f9e44d5428b46db2ef5f58eb8"],["/posts/25396/image-20200515195209340.png","22978e93b749e7eebcc3cc63327c3c96"],["/posts/25396/image-20200515200355611.png","5caf04a888375ccd6a2ff2e8bfd908f0"],["/posts/25396/image-20200515201112827.png","ce6132975eea9a1128a4efa3513582dd"],["/posts/25396/image-20200516222500714.png","70a7e1e585bcc0d3a0966ba304c006ff"],["/posts/25396/image-20200517170054604.png","73e1c8306391defec040b07cc0569be1"],["/posts/25396/image-20200517170527296.png","fe7d7f953761eaed529889cfb2291268"],["/posts/25396/image-20200517170949578.png","a910ed84e3df25339a454fc298e784e3"],["/posts/25396/image-20200517171011384.png","09980fef34197bfb4c848a5b86f5baa4"],["/posts/25396/image-20200517171353373.png","40fa46a10da30d5bc6261b9f04a139ea"],["/posts/25396/image-20200517172727084.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517172730649.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517173246459.png","cc6fdd185c05cbcd37fec0e852a611f6"],["/posts/25396/image-20200517174357885.png","28b1a5ed29591f10935c219a4fc5f282"],["/posts/25396/image-20200517174420239.png","e3494f720f9ff930ae6b13bf9ae42e9c"],["/posts/25396/image-20200517175435773.png","e544deb938716d4857cf2f62be5a8d34"],["/posts/25396/image-20200517175844957.png","c2cc7cff6d3557a4b0c88fc21b68e778"],["/posts/25396/image-20200517180546503.png","8ed3df0a1627da082e53d874b2485122"],["/posts/25396/image-20200521215626753.png","15342c03b327bb77eddb3816b648b5a0"],["/posts/25396/image-20200522124822493.png","e72575193d58cb0a325354a47aca5381"],["/posts/25396/image-20200522212021634.png","d0cefd4e019f433a4cc980e8165cb449"],["/posts/25396/index.html","56f0084edf1ccc7f4ca30dcbc2132e3a"],["/posts/26259/index.html","1fcf6d4378570ddae954b498d4192f74"],["/posts/29333/index.html","9e542855b06df604da74a888514d1eaa"],["/posts/3109851417/index.html","3a952886b3551087469f8f64a6babd50"],["/posts/3112011529/index.html","69aa90e8a326d4cbe10aebd2103a9afb"],["/posts/3120427724/index.html","0937fcb60d95eb0d30af50ec266b7a66"],["/posts/3155752545/image-20200604155255484.png","cb09cc3688945161d5551a351f7ca824"],["/posts/3155752545/index.html","449359949f5140e3064616112955d168"],["/posts/31683/index.html","be2e9221bcbb983231f10cd188569111"],["/posts/3261239934/index.html","c534abaed6851d025325597d3e2af60f"],["/posts/34782/index.html","71a0d247a21e3a94518b1c6b0db0eb64"],["/posts/3661501281/index.html","2dda6df17eb7db3aa6d7bd011c3c0324"],["/posts/3700149003/index.html","d990197090b8884b71c44a7831b8b309"],["/posts/3984882913/index.html","012e0ee36695b6a3244d6e1cb5deba2f"],["/posts/41739/image-20200525194743301.png","3e1e9e22cc72305d7a71885996a99f3e"],["/posts/41739/image-20200525194905458.png","8d2a09b63c675cc633c979653a4a100e"],["/posts/41739/image-20200525195035039.png","e7318b93cac9719578ba39bebd579444"],["/posts/41739/image-20200525195113526.png","cd30d10151c984d8e8c60a8916522e6a"],["/posts/41739/image-20200525195141092.png","3bc1bf5b4d4f147cae614eed5e873a07"],["/posts/41739/image-20200525195257690.png","b768e2e882628840dbfb8b5dbeccc6af"],["/posts/41739/image-20200526095527277.png","b8eb6f65e585ab1524fb0b052c0e1916"],["/posts/41739/image-20200526101428664.png","3a1e5873e8932a3ac399b1cdda8b22a9"],["/posts/41739/image-20200526101532280.png","128d6ec7d72d31861c50ca5cf16063c9"],["/posts/41739/image-20200526101637132.png","6eeddcc05075deec6fbf3900f075741f"],["/posts/41739/image-20200526102133363.png","74ee6450821d9908b8b6c3592d452df1"],["/posts/41739/image-20200526103909262.png","d5f5f0426cf61ee59c449e1ad6474fe2"],["/posts/41739/image-20200526104513794.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104526805.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104759021.png","bcb4a45d1bdf7f10d88acf9497618d06"],["/posts/41739/image-20200526105146033.png","4b7e752ff2ab5deb9e227e526f0a5a1d"],["/posts/41739/image-20200526105325301.png","9438ecd08715fbb97481ec6e941167a5"],["/posts/41739/image-20200526105538621.png","fd6e4d7a4df4abf522548a3db4424a7d"],["/posts/41739/image-20200526110122986.png","ab3ad4b11caa1e63b1023356df8b1b94"],["/posts/41739/image-20200526110943364.png","0a74d3071743f10469f7d3515ba67a33"],["/posts/41739/image-20200526142911511.png","6ea294c5f1457cf1a1fb03ce0279dab9"],["/posts/41739/image-20200526154923596.png","1df86ad0b07c69385b3a9dd298a1c397"],["/posts/41739/image-20200526155002906.png","5ef9c86c75348bf000142a57119aff0b"],["/posts/41739/image-20200526155021754.png","787291b1ed33b376fe6ae13b2bef0178"],["/posts/41739/image-20200526155102089.png","67d74968316983b19ea67313ba12dab3"],["/posts/41739/image-20200526155116682.png","0e95b3f550c9a64a22f1c8a0283b82a1"],["/posts/41739/image-20200526155131075.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155136600.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155710071.png","f1d3fb40eac9fc2d34e726b675d25a8c"],["/posts/41739/image-20200526160938838.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526160941638.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526161439575.png","8ce48af513e1c5f8493dd9af102d991e"],["/posts/41739/image-20200526161548429.png","8f03bfcdfd7658418bc1b2dd659decec"],["/posts/41739/index.html","b7cdcae97a48c4dd882ff0e7439fcba8"],["/posts/47733/index.html","8f6bab85816d64bf8849d527df8d3855"],["/posts/48141/index.html","c00e4efacf6e721517c648a036579f09"],["/posts/49984/index.html","560854a4776c9e0518d5d25ef770783b"],["/posts/56512/index.html","db9f303917c686de72eff76c7d3e5cea"],["/posts/59764/index.html","d82f83b444f7e76ed6e58ff56f479222"],["/posts/704219325/index.html","d3cfd1c21c580222e331de1f9d9740c8"],["/posts/709269996/index.html","bdd7971ab8e13093da15a0a0a542ab3f"],["/posts/961488241/index.html","dc2eec5d5f8cbceadf396b35c729aa88"],["/shuoshuo/index.html","9c662bb7b680cd4cec0caf4dda6626ba"],["/sw-register.js","2955254cc342d7c9fd05bb29c4e54271"],["/tags/Butterfly/index.html","81f7f821775944aa1037e4b0d6ffeb07"],["/tags/Git/index.html","979eab73d26c458b135f34719b60c0b5"],["/tags/IDEA/index.html","1adf1e787ec77fc7bbc8685f8316470e"],["/tags/Java/index.html","cd9841f6627600100dac1835a2810894"],["/tags/Maven/index.html","61baffcb09d3d877bac1c38b198b77cb"],["/tags/MySQL/index.html","0a1e004a17c7ecae439fd8cbf8eefe46"],["/tags/Mybatis/index.html","2f639a04c63f5131fdde0a9b88a87c4a"],["/tags/SpringBoot/index.html","fd68e52039899634678f2163671a3dc8"],["/tags/SpringSecurity/index.html","29a7b4f104c9d3e015363375703dced1"],["/tags/Swagger/index.html","9711b993559bc706c84e7eb5e1a6dbcc"],["/tags/emoji/index.html","bbc3c368210cf5917fd1eb8b563d9724"],["/tags/hexo/index.html","90521b633366c4bd7ff07c7a1e966f35"],["/tags/index.html","0d0e11c90b8130068396aaec9a1e4034"],["/tags/linux/index.html","20e15b5623aecfade15478b16896c8a3"],["/tags/判断/index.html","9ab4ca04e68c03da0dde631ac7b58905"],["/tags/图表/index.html","23a9c43c4146a076a050ef24a1ac7f55"],["/tags/排序/index.html","ebd05687f1627986abe94935cc032b7d"],["/tags/数据库设计/index.html","6436a8d45bd2da9eae52c9d559b8348b"],["/tags/记录/index.html","6702259f637188bc79a49d4b16f7a52a"],["/tags/面向对象/index.html","46f612527b681dc7a63832fe8d717e63"]];
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
