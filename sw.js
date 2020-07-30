/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0b681b216964a934d7f86902f7a38557"],["/Me/index.html","ae674342a8756e69cd34cfeb043a67c3"],["/about/index.html","2fe7979d344c8a39ea89ba0af0cc7d18"],["/archives/2020/05/index.html","567552effd433511bd6305f413d8d9d7"],["/archives/2020/05/page/2/index.html","26e22ebb1ab448294a6ff8be3461efc4"],["/archives/2020/06/index.html","051bcc8c653ff1c46d2ad8489e771900"],["/archives/2020/06/page/2/index.html","bb1b5e423d7c1da11e6d4743e04d5159"],["/archives/2020/07/index.html","e94295e58d56129eca440f69290455c7"],["/archives/2020/index.html","19282865d33d51b526b3ec0accf854b6"],["/archives/2020/page/2/index.html","ebfdcfdbec4ccc4b1ab1a0429ca8c4ea"],["/archives/2020/page/3/index.html","7c9284ca0e3c416c0e75f872bcaeadd6"],["/archives/index.html","ebbdab6ab71023494172613f33377e18"],["/archives/page/2/index.html","f7bdd8b9060f818eb68db9196f98bae9"],["/archives/page/3/index.html","efab397fb59656c7f47b197bf3b79164"],["/board/index.html","efec607ad0b67abc87e40e3e304ed249"],["/categories/Git/index.html","7bbdf5489045b4a4ffb43d25e3d57283"],["/categories/Hexo/Butterfly/index.html","9f68e10253064c53526a74d5bbabbdaa"],["/categories/Hexo/Next/index.html","853b3f76e94f779d994035cffea03e16"],["/categories/Hexo/index.html","1255c38b741a1211b8fc6f282fb661b0"],["/categories/Hexo/备份/index.html","f389adef8ac6ec23c657fab77c10eb90"],["/categories/IDEA/index.html","18c65ef29210cbd1e4f5df239ea9fc86"],["/categories/Maven/index.html","9f604143ee6a98fef911804aeddde543"],["/categories/MySQL/index.html","5c2c3adbea4f4b7fecdb49753885afdc"],["/categories/MySQL/优化/index.html","4a5742f8d42ead4be5ce7ad0e611f9e0"],["/categories/MySQL/引擎/index.html","49fb3868d8391b82093866427a974c84"],["/categories/SpringBoot/SpringSecurity/index.html","2efbd703bea9809a4afb4891ce1b2855"],["/categories/SpringBoot/Swagger/index.html","d87264edaec30c20909e1700f013e50e"],["/categories/SpringBoot/index.html","1b14d65cf3ed4e0af5c37e00b64905de"],["/categories/Vue/index.html","fff614cabf0feb2972f4b738c6f1693a"],["/categories/ajax/index.html","2ab36a5ab1666b857f447f06090e597b"],["/categories/emoji/index.html","9ebd623078c778641440046fe697a5e4"],["/categories/index.html","2593be420d3616bed37140549670863e"],["/categories/linux/index.html","20a0f33f71c40a275a6728006e732ab4"],["/categories/数据库设计/index.html","321b6f619431a29bda31067a06e34681"],["/categories/记录/index.html","846f9f5ad82556dc63802432c3ad0988"],["/categories/面向对象/index.html","a13eec82234f146a13e9c9c12de1ae4d"],["/css/index.css","94bdb6d95a565154ac85d31eae781399"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","bb5aec3cc0b04d0cf8d53c50c2dbe82e"],["/js/main.js","93f896da422f60a01877bfc22af3cb7a"],["/js/search/algolia.js","abe3b44001d9a025182917740708187c"],["/js/search/local-search.js","c2214edec977430f63225991604b79c4"],["/js/third-party/ClickShowText.js","f66854e27a08e7c5ca9f2c479fdeff3f"],["/js/third-party/activate-power-mode.js","6f588d15a5b7f1ebeca1c3578a5d3f6c"],["/js/third-party/canvas-nest.js","1cb48fb0ef3a385189b87c27a87c8ed5"],["/js/third-party/canvas-ribbon.js","8f2d884a863da4da823f16797ca8d941"],["/js/third-party/click_heart.js","ab9c59d47b40dc21c50e8907ce24790c"],["/js/third-party/fireworks.js","9eff589921aa2eadfb1e1023eef8f873"],["/js/third-party/piao.js","fd0ae3b2e1416f2cdb2e4371587225f3"],["/js/tw_cn.js","eae7af9b8da0ff4a8712154a71b5a806"],["/js/utils.js","6c0901991ec8d8a7a81beb32da47a42c"],["/link/index.html","258a639afcabb1e215f91aede1111740"],["/live2dw/assets/model.2048/texture_00.png","ae34664ad879d043476c43d041b4aecd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","6f60aac7dbd560c20b2bba248478a7be"],["/page/2/index.html","766220d8f6946f4bc0de3d9217f7c8d7"],["/page/3/index.html","2950155168ddad3a3d652dbf2f52c615"],["/page/4/index.html","600a9dfba193266b94224acd9de2d0c0"],["/posts/1124952030/index.html","2a949697f8609bc902bf79be4c177668"],["/posts/13258/index.html","c27fd35e3a53802670aa25b78168c003"],["/posts/1359691355/index.html","88c3f4e3f5b5f9564fe62c011c3bf158"],["/posts/14324/index.html","8d3c085373b7dc107c34d5c4b1f7f73b"],["/posts/14393/index.html","2b0d05d639f01835f62d22d5440b21a7"],["/posts/1553907357/index.html","dcaf2a991f3d7cdc0628d59ef1252250"],["/posts/1864766114/index.html","ef7f18b67c6fca4519bcd0bbb0ce8ef9"],["/posts/2352548230/index.html","a803c87ede7c83b7ed4748ec1527f54a"],["/posts/25396/image-20200515193027529.png","1dfa8c2ba2a3af4cbf70db66ad8cbcd9"],["/posts/25396/image-20200515193212898.png","0df8195d2fa50cb023d83a943a75e2b9"],["/posts/25396/image-20200515193240630.png","177e009c0429cb3a7254b1c7d682c2aa"],["/posts/25396/image-20200515193903771.png","aeb4fb7f9e44d5428b46db2ef5f58eb8"],["/posts/25396/image-20200515195209340.png","22978e93b749e7eebcc3cc63327c3c96"],["/posts/25396/image-20200515200355611.png","5caf04a888375ccd6a2ff2e8bfd908f0"],["/posts/25396/image-20200515201112827.png","ce6132975eea9a1128a4efa3513582dd"],["/posts/25396/image-20200516222500714.png","70a7e1e585bcc0d3a0966ba304c006ff"],["/posts/25396/image-20200517170054604.png","73e1c8306391defec040b07cc0569be1"],["/posts/25396/image-20200517170527296.png","fe7d7f953761eaed529889cfb2291268"],["/posts/25396/image-20200517170949578.png","a910ed84e3df25339a454fc298e784e3"],["/posts/25396/image-20200517171011384.png","09980fef34197bfb4c848a5b86f5baa4"],["/posts/25396/image-20200517171353373.png","40fa46a10da30d5bc6261b9f04a139ea"],["/posts/25396/image-20200517172727084.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517172730649.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517173246459.png","cc6fdd185c05cbcd37fec0e852a611f6"],["/posts/25396/image-20200517174357885.png","28b1a5ed29591f10935c219a4fc5f282"],["/posts/25396/image-20200517174420239.png","e3494f720f9ff930ae6b13bf9ae42e9c"],["/posts/25396/image-20200517175435773.png","e544deb938716d4857cf2f62be5a8d34"],["/posts/25396/image-20200517175844957.png","c2cc7cff6d3557a4b0c88fc21b68e778"],["/posts/25396/image-20200517180546503.png","8ed3df0a1627da082e53d874b2485122"],["/posts/25396/image-20200521215626753.png","15342c03b327bb77eddb3816b648b5a0"],["/posts/25396/image-20200522124822493.png","e72575193d58cb0a325354a47aca5381"],["/posts/25396/image-20200522212021634.png","d0cefd4e019f433a4cc980e8165cb449"],["/posts/25396/index.html","ca391f6b5d13205b99dbac623cca892d"],["/posts/26259/index.html","ff354d80736dd7bf0d7f04a60e6acf3d"],["/posts/29333/index.html","7235c1983fb77eed8c452028bc7b0e26"],["/posts/3112011529/index.html","761e50c4eb609e2c90e5a2428e40f73b"],["/posts/3120427724/index.html","a62a4ef4e4a6b405d5c043516419a804"],["/posts/3155752545/image-20200604155255484.png","cb09cc3688945161d5551a351f7ca824"],["/posts/3155752545/index.html","9bcf5b0d060b43dc380ef32150da0049"],["/posts/31683/index.html","f1f4e0f8c6960bddeb37661d9ab06a80"],["/posts/3261239934/index.html","581ffeff686cb83cfb7b09ed6625e1b7"],["/posts/34782/index.html","98f3163d0108c0aa706d752d8d6f4612"],["/posts/3661501281/index.html","d4e3b88d96f2f9e80fba0a9c32a5f07b"],["/posts/3984882913/index.html","667c9ebc332b576e004698981efce612"],["/posts/41739/image-20200525194743301.png","3e1e9e22cc72305d7a71885996a99f3e"],["/posts/41739/image-20200525194905458.png","8d2a09b63c675cc633c979653a4a100e"],["/posts/41739/image-20200525195035039.png","e7318b93cac9719578ba39bebd579444"],["/posts/41739/image-20200525195113526.png","cd30d10151c984d8e8c60a8916522e6a"],["/posts/41739/image-20200525195141092.png","3bc1bf5b4d4f147cae614eed5e873a07"],["/posts/41739/image-20200525195257690.png","b768e2e882628840dbfb8b5dbeccc6af"],["/posts/41739/image-20200526095527277.png","b8eb6f65e585ab1524fb0b052c0e1916"],["/posts/41739/image-20200526101428664.png","3a1e5873e8932a3ac399b1cdda8b22a9"],["/posts/41739/image-20200526101532280.png","128d6ec7d72d31861c50ca5cf16063c9"],["/posts/41739/image-20200526101637132.png","6eeddcc05075deec6fbf3900f075741f"],["/posts/41739/image-20200526102133363.png","74ee6450821d9908b8b6c3592d452df1"],["/posts/41739/image-20200526103909262.png","d5f5f0426cf61ee59c449e1ad6474fe2"],["/posts/41739/image-20200526104513794.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104526805.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104759021.png","bcb4a45d1bdf7f10d88acf9497618d06"],["/posts/41739/image-20200526105146033.png","4b7e752ff2ab5deb9e227e526f0a5a1d"],["/posts/41739/image-20200526105325301.png","9438ecd08715fbb97481ec6e941167a5"],["/posts/41739/image-20200526105538621.png","fd6e4d7a4df4abf522548a3db4424a7d"],["/posts/41739/image-20200526110122986.png","ab3ad4b11caa1e63b1023356df8b1b94"],["/posts/41739/image-20200526110943364.png","0a74d3071743f10469f7d3515ba67a33"],["/posts/41739/image-20200526142911511.png","6ea294c5f1457cf1a1fb03ce0279dab9"],["/posts/41739/image-20200526154923596.png","1df86ad0b07c69385b3a9dd298a1c397"],["/posts/41739/image-20200526155002906.png","5ef9c86c75348bf000142a57119aff0b"],["/posts/41739/image-20200526155021754.png","787291b1ed33b376fe6ae13b2bef0178"],["/posts/41739/image-20200526155102089.png","67d74968316983b19ea67313ba12dab3"],["/posts/41739/image-20200526155116682.png","0e95b3f550c9a64a22f1c8a0283b82a1"],["/posts/41739/image-20200526155131075.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155136600.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155710071.png","f1d3fb40eac9fc2d34e726b675d25a8c"],["/posts/41739/image-20200526160938838.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526160941638.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526161439575.png","8ce48af513e1c5f8493dd9af102d991e"],["/posts/41739/image-20200526161548429.png","8f03bfcdfd7658418bc1b2dd659decec"],["/posts/41739/index.html","3a1809dc18d42d9689834e5f8d13f52d"],["/posts/47733/index.html","bcc2568efc0ac6e965f0aaa6e71e3ac0"],["/posts/48141/index.html","84135ecea36312846601252c08a2c4b2"],["/posts/49984/index.html","15b0da6ccfec65dac41c2d364974aeab"],["/posts/56512/index.html","f64d46babaa65ba88ab220bacc7190cd"],["/posts/59764/index.html","195e8c5c7b346824c33aff9b0d7c0277"],["/posts/709269996/index.html","e98e6553981f8d8ea476e89320d82735"],["/posts/961488241/index.html","fbe14513d8effcefdd0220af1aad18b3"],["/shuoshuo/index.html","5b530c33b0ab854752593e438d728ccf"],["/sw-register.js","717d68a92888d604e5f54d3f7f3d78ca"],["/tags/Butterfly/index.html","eb407dda1edc1ded29a6957d219b0fd4"],["/tags/Git/index.html","98a1ed342cc1cb19b86413b63c3f54d2"],["/tags/IDEA/index.html","2b7fb1dc182a5234fd0cf750d959fbba"],["/tags/Maven/index.html","be02aa0e6c4d43d8b1d14c28accede05"],["/tags/MySQL/index.html","28ce758a8bcf718c75f57018017cb006"],["/tags/SpringBoot/index.html","468b93619f222af4c4f952719179ca86"],["/tags/SpringSecurity/index.html","1b6997a6180f0f125177cfe8e0a76f4e"],["/tags/Swagger/index.html","db8e46fe9659f617b2b32cf6c28626e7"],["/tags/emoji/index.html","b1c8edf5ad917c304a1b3d4b3742ec6f"],["/tags/hexo/index.html","12eca2f2ab99415721b2ac6c556c2d9a"],["/tags/index.html","43c2bf0483afa6d280e79ef6404c8970"],["/tags/linux/index.html","f613702db88cd4f53c46fe9682f3c9fc"],["/tags/判断/index.html","b7dc7cf956c6d65f02d1b318b1c51a2a"],["/tags/图表/index.html","d3f8cf306a81f2f26b96777500369a27"],["/tags/排序/index.html","0db697c0e000f362f958a09a5a1cc114"],["/tags/数据库设计/index.html","a87896aa6bf9948e8a0222761e74fbef"],["/tags/记录/index.html","3e1d9c440a45f059ef8454b8000317f4"],["/tags/面向对象/index.html","9ac7600485407784e53e5605c9cd834d"]];
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
