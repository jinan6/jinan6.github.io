/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","85a584d8751102b95204080cd11f8360"],["/Me/index.html","3bd87e8258b7c73b388d6f0c074ac2d7"],["/about/index.html","99fccb4f9c452912b3c070cede3d9f24"],["/archives/2020/05/index.html","239e65ae2e683c7e01e095abf2c9695e"],["/archives/2020/05/page/2/index.html","4c8c1aec05d7e8071c25944de5746859"],["/archives/2020/06/index.html","a54bfaf3c2b95f59c14e96cee12df592"],["/archives/2020/06/page/2/index.html","6a6a4d4e9316a76d319943165c4b339f"],["/archives/2020/07/index.html","389d02e755fee4a5617196f7cad22c06"],["/archives/2020/08/index.html","83d850307464eee5c20b30a73593828b"],["/archives/2020/index.html","d04b54215b4d67086e847aa20b9d61df"],["/archives/2020/page/2/index.html","19fbc9b89e61401f14fad295653396e8"],["/archives/2020/page/3/index.html","df76f36a416a1f9233faf259305022e8"],["/archives/index.html","66dafece82a307b07bd4ded9cf64e323"],["/archives/page/2/index.html","4eae0ba26cc9d8b2941e8deba44adf62"],["/archives/page/3/index.html","35c28db221eb5deb8d96d7f053be8d78"],["/board/index.html","6337c76b04161d4c4097f1b749417272"],["/categories/Git/index.html","af8937512e2c27162a49b740ef6c7686"],["/categories/Hexo/Butterfly/index.html","6bfba7032cb87d4041a1f1774cdfbd1f"],["/categories/Hexo/Next/index.html","3621e0620a87e7def0c66d9514e48829"],["/categories/Hexo/index.html","69d24c19371bb1ee5ccb4428e23f97b9"],["/categories/Hexo/备份/index.html","d65ed799f2c417aea6b8a6997ed03235"],["/categories/IDEA/index.html","d6ac05977d27fed6c092a811cf6ddf9b"],["/categories/Java/index.html","e69529abe7080af57c8b3ebd301a6320"],["/categories/Maven/index.html","5e8bdf275897b250efc900e1f5ce8aaa"],["/categories/MySQL/index.html","c2dba5d192e13c06025641ba27dc7fae"],["/categories/MySQL/优化/index.html","db7b1c08f158010606383f5e2808b983"],["/categories/MySQL/引擎/index.html","c256034cc8e899591402c09bf6c9416f"],["/categories/SpringBoot/SpringSecurity/index.html","4fe21d7f6721cbf4e647af345aa8f1e2"],["/categories/SpringBoot/Swagger/index.html","c79effd97e0252260e400528a9c0b7b2"],["/categories/SpringBoot/index.html","b2734b5791a80f64fd9ee5ce5de2c867"],["/categories/Vue/index.html","e7264ab3bdb2920102203ee97848ea72"],["/categories/ajax/index.html","05cf0a5d8161206b4ee0b6507cd13616"],["/categories/emoji/index.html","af65be9c04ca950383f873a3671f486b"],["/categories/index.html","b3edffa689f0857b4a71d892d0594c3c"],["/categories/linux/index.html","4cdb0cb239b98ee4ae28884c3e38b4d6"],["/categories/数据库设计/index.html","1b5b017454143d087676f23215a99487"],["/categories/记录/index.html","591d4589d0b160876ee628a57cf0a344"],["/categories/面向对象/index.html","678afdff05d46cff2ed46ca16961c584"],["/css/index.css","bb2e2073de2b3decaa611236a6a3a565"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c21d05691e15ea557a7f51eb493a7348"],["/js/calendar.js","ca01ff03932bcf76b7183caebdd72ee1"],["/js/languages.js","edc0ec6b454f9dcbf2b1e967f5d4b771"],["/js/main.js","edc1c85651cad22a5b2a6412e885be80"],["/js/search/algolia.js","0027070eeffefdbf6f485c049070a43c"],["/js/search/local-search.js","371a0c7478aa74fd10ee5be34b2bcf59"],["/js/third-party/ClickShowText.js","f66854e27a08e7c5ca9f2c479fdeff3f"],["/js/third-party/activate-power-mode.js","6f588d15a5b7f1ebeca1c3578a5d3f6c"],["/js/third-party/canvas-nest.js","1cb48fb0ef3a385189b87c27a87c8ed5"],["/js/third-party/canvas-ribbon.js","8f2d884a863da4da823f16797ca8d941"],["/js/third-party/click_heart.js","ab9c59d47b40dc21c50e8907ce24790c"],["/js/third-party/fireworks.js","9eff589921aa2eadfb1e1023eef8f873"],["/js/third-party/piao.js","fd0ae3b2e1416f2cdb2e4371587225f3"],["/js/tw_cn.js","a8388d08fab77630babdd2884b1258ad"],["/js/utils.js","646838d059c2ef35377e843812f52bf1"],["/link/index.html","d7280fee332a4f82ddb7c83525e111e3"],["/music/index.html","1aebdbb34a47e682d81bcbb4d4bff072"],["/page/2/index.html","413884a1fb8030c7c1820705c3158739"],["/page/3/index.html","9031306f9663a56a286df283793b3af8"],["/posts/1124952030/index.html","0a173a61c553733205f6b92e4cab84e9"],["/posts/13258/index.html","8c6248e7bcb677024c367bd66ee98a77"],["/posts/1359691355/index.html","a3bea1e0755e2254db8cd4407d519d66"],["/posts/14324/index.html","6c28f7fadb06452812cad87ee0966fb5"],["/posts/14393/index.html","e9a7e8016747a3edbcc577d2e98f7f9a"],["/posts/1553907357/index.html","92d24ec7c859209ebeb15381700d06d3"],["/posts/1864766114/index.html","c7aeed929aef6b11957fd865c8656448"],["/posts/2352548230/index.html","701abb85655005810826c826ba78a472"],["/posts/25396/image-20200515193027529.png","1dfa8c2ba2a3af4cbf70db66ad8cbcd9"],["/posts/25396/image-20200515193212898.png","0df8195d2fa50cb023d83a943a75e2b9"],["/posts/25396/image-20200515193240630.png","177e009c0429cb3a7254b1c7d682c2aa"],["/posts/25396/image-20200515193903771.png","aeb4fb7f9e44d5428b46db2ef5f58eb8"],["/posts/25396/image-20200515195209340.png","22978e93b749e7eebcc3cc63327c3c96"],["/posts/25396/image-20200515200355611.png","5caf04a888375ccd6a2ff2e8bfd908f0"],["/posts/25396/image-20200515201112827.png","ce6132975eea9a1128a4efa3513582dd"],["/posts/25396/image-20200516222500714.png","70a7e1e585bcc0d3a0966ba304c006ff"],["/posts/25396/image-20200517170054604.png","73e1c8306391defec040b07cc0569be1"],["/posts/25396/image-20200517170527296.png","fe7d7f953761eaed529889cfb2291268"],["/posts/25396/image-20200517170949578.png","a910ed84e3df25339a454fc298e784e3"],["/posts/25396/image-20200517171011384.png","09980fef34197bfb4c848a5b86f5baa4"],["/posts/25396/image-20200517171353373.png","40fa46a10da30d5bc6261b9f04a139ea"],["/posts/25396/image-20200517172727084.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517172730649.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517173246459.png","cc6fdd185c05cbcd37fec0e852a611f6"],["/posts/25396/image-20200517174357885.png","28b1a5ed29591f10935c219a4fc5f282"],["/posts/25396/image-20200517174420239.png","e3494f720f9ff930ae6b13bf9ae42e9c"],["/posts/25396/image-20200517175435773.png","e544deb938716d4857cf2f62be5a8d34"],["/posts/25396/image-20200517175844957.png","c2cc7cff6d3557a4b0c88fc21b68e778"],["/posts/25396/image-20200517180546503.png","8ed3df0a1627da082e53d874b2485122"],["/posts/25396/image-20200521215626753.png","15342c03b327bb77eddb3816b648b5a0"],["/posts/25396/image-20200522124822493.png","e72575193d58cb0a325354a47aca5381"],["/posts/25396/image-20200522212021634.png","d0cefd4e019f433a4cc980e8165cb449"],["/posts/25396/index.html","6877d7593c5fcc3b6f493577ae3be64d"],["/posts/26259/index.html","fe030c26edbb22a5058b4a0eabe2df6f"],["/posts/29333/index.html","8d200a737a16612db03c79b9a280db49"],["/posts/3109851417/index.html","95c605e0dadab13b10d455c113cb7daf"],["/posts/3112011529/index.html","38a0685b82b7c890f6b0fe996c87271f"],["/posts/3120427724/index.html","8f20126e18f933b851746d7fe59a0569"],["/posts/3155752545/image-20200604155255484.png","cb09cc3688945161d5551a351f7ca824"],["/posts/3155752545/index.html","8d474441791a67c1fffd8e102996360f"],["/posts/31683/index.html","f70c799c82cdb82358ca097a1913dd15"],["/posts/3261239934/index.html","efa46fccc5db895bcad447fccbbd3ea0"],["/posts/34782/index.html","1120818122a02d4cd6dd4af5eaa31ba2"],["/posts/3661501281/index.html","4a576726bf4a2173ea327a121f14eb95"],["/posts/3700149003/index.html","ef1d57316739acd29719a9d76aeb51d2"],["/posts/3984882913/index.html","fc325cda27e213e8b1d84e099eba537a"],["/posts/41739/image-20200525194743301.png","3e1e9e22cc72305d7a71885996a99f3e"],["/posts/41739/image-20200525194905458.png","8d2a09b63c675cc633c979653a4a100e"],["/posts/41739/image-20200525195035039.png","e7318b93cac9719578ba39bebd579444"],["/posts/41739/image-20200525195113526.png","cd30d10151c984d8e8c60a8916522e6a"],["/posts/41739/image-20200525195141092.png","3bc1bf5b4d4f147cae614eed5e873a07"],["/posts/41739/image-20200525195257690.png","b768e2e882628840dbfb8b5dbeccc6af"],["/posts/41739/image-20200526095527277.png","b8eb6f65e585ab1524fb0b052c0e1916"],["/posts/41739/image-20200526101428664.png","3a1e5873e8932a3ac399b1cdda8b22a9"],["/posts/41739/image-20200526101532280.png","128d6ec7d72d31861c50ca5cf16063c9"],["/posts/41739/image-20200526101637132.png","6eeddcc05075deec6fbf3900f075741f"],["/posts/41739/image-20200526102133363.png","74ee6450821d9908b8b6c3592d452df1"],["/posts/41739/image-20200526103909262.png","d5f5f0426cf61ee59c449e1ad6474fe2"],["/posts/41739/image-20200526104513794.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104526805.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104759021.png","bcb4a45d1bdf7f10d88acf9497618d06"],["/posts/41739/image-20200526105146033.png","4b7e752ff2ab5deb9e227e526f0a5a1d"],["/posts/41739/image-20200526105325301.png","9438ecd08715fbb97481ec6e941167a5"],["/posts/41739/image-20200526105538621.png","fd6e4d7a4df4abf522548a3db4424a7d"],["/posts/41739/image-20200526110122986.png","ab3ad4b11caa1e63b1023356df8b1b94"],["/posts/41739/image-20200526110943364.png","0a74d3071743f10469f7d3515ba67a33"],["/posts/41739/image-20200526142911511.png","6ea294c5f1457cf1a1fb03ce0279dab9"],["/posts/41739/image-20200526154923596.png","1df86ad0b07c69385b3a9dd298a1c397"],["/posts/41739/image-20200526155002906.png","5ef9c86c75348bf000142a57119aff0b"],["/posts/41739/image-20200526155021754.png","787291b1ed33b376fe6ae13b2bef0178"],["/posts/41739/image-20200526155102089.png","67d74968316983b19ea67313ba12dab3"],["/posts/41739/image-20200526155116682.png","0e95b3f550c9a64a22f1c8a0283b82a1"],["/posts/41739/image-20200526155131075.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155136600.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155710071.png","f1d3fb40eac9fc2d34e726b675d25a8c"],["/posts/41739/image-20200526160938838.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526160941638.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526161439575.png","8ce48af513e1c5f8493dd9af102d991e"],["/posts/41739/image-20200526161548429.png","8f03bfcdfd7658418bc1b2dd659decec"],["/posts/41739/index.html","ed749b025abe862c6d753286c7043eb1"],["/posts/47733/index.html","5a727c89ed247a12c21579876cd5f2af"],["/posts/48141/index.html","d46d77990d130433d788133e782fe672"],["/posts/49984/index.html","be1a5e1aba315a2beb321353ef59f1d7"],["/posts/56512/index.html","0c5a41c56eee3c5f515e84a57b69514f"],["/posts/59764/index.html","e67987b5a54da719901d310dab4af49e"],["/posts/709269996/index.html","97b3b92291825b61b86d850c05cc499a"],["/posts/961488241/index.html","3e5871afd8fdf31d3240b13ee1cb2d7e"],["/shuoshuo/index.html","b857e063190633b44b256db8147ee968"],["/sw-register.js","ac1dfa262253e78fdfa729552fe245d1"],["/tags/Butterfly/index.html","fdccad86dd45a5be32241d6ea3029349"],["/tags/Git/index.html","bf0ff9bbc55b826561988b0e46e4efab"],["/tags/IDEA/index.html","6e5d0d087fc33ee1becb0a622ecdd868"],["/tags/Java/index.html","3e2699d967a2f9a16379c1929f5a1547"],["/tags/Maven/index.html","290081f629c429287fdc01658279ce59"],["/tags/MySQL/index.html","4547f0f0f9b821a13ac80155f421a64c"],["/tags/SpringBoot/index.html","fda9621d84356cc4d172f9a8ba25a3ad"],["/tags/SpringSecurity/index.html","e87a73ac8c08e534e5cb88cec22d8a20"],["/tags/Swagger/index.html","af6f0cf303b9280e1503f0d7145d0685"],["/tags/emoji/index.html","a3de718b06cbf63a38a77351c28dfce9"],["/tags/hexo/index.html","bf1de8c36542966cfa1f627f0918caa9"],["/tags/index.html","00e5227d481525cb2aa97ba36de88744"],["/tags/linux/index.html","ea57dcf7213cc1f8dba2a23bae0acbf7"],["/tags/判断/index.html","6d66ddd459fc61adb1b07051a20d57a1"],["/tags/图表/index.html","359365b7490520a66dd40d1873e32a4a"],["/tags/排序/index.html","9160f099ddac9461f559f2cb4577a954"],["/tags/数据库设计/index.html","9902ad2c9e44bed03153e24cbbe698d2"],["/tags/记录/index.html","b6926badb0e33fcd1f020935680afce9"],["/tags/面向对象/index.html","5830e30dd23327abbedd4e7fdff3b40d"]];
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
