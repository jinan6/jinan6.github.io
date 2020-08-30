/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d4e1864062eeb8a6948eaec655131434"],["/Me/index.html","19f4ace236acedcc825c79b2b228c576"],["/about/index.html","7e4a2433cf09de6008439800b25e4512"],["/archives/2020/05/index.html","fbe2441247ecddac6e5b924892f6ef20"],["/archives/2020/05/page/2/index.html","eec25e40be7881f13c5508018a91e6f0"],["/archives/2020/06/index.html","9de82a412a80fc0dd210f52d08e3d9bc"],["/archives/2020/06/page/2/index.html","da61b342829ad5ca52a1a88e18b07656"],["/archives/2020/07/index.html","97339f4d4e3544d52589e530d32ff59f"],["/archives/2020/08/index.html","d9a73a86ed64e538025c9379986ab8f3"],["/archives/2020/index.html","5d9516987015969659fd5822eb2a00d3"],["/archives/2020/page/2/index.html","d4128644b050a095c9c8bf73244c1a23"],["/archives/2020/page/3/index.html","8d675f2c4f59a006d455fa5a667013b5"],["/archives/index.html","cce1954a57681db03041774492a12aea"],["/archives/page/2/index.html","9e136c62e20e6971b722e3fae4e5919d"],["/archives/page/3/index.html","ca46aea3d627d391736c199d06a52646"],["/bangumis/index.html","8bcf47b1f43b81e669a2a1764f8e587c"],["/board/index.html","269518e8b402839932dff95cc1fc23ac"],["/categories/Git/index.html","0c1d1fc5c780e4b55bd87f442d5926e8"],["/categories/Hexo/Butterfly/index.html","4f4f65ec1eb1bc33ea237321b53b2f88"],["/categories/Hexo/Next/index.html","aada8edd7b5a7a947f3764c5b5b4dc8b"],["/categories/Hexo/index.html","28e626173228e555ef512d0816e7644b"],["/categories/Hexo/备份/index.html","b15ab915cd0dd0eda2cf3df9eab30140"],["/categories/IDEA/index.html","9c8e4588065473a6854e22cfed1bd886"],["/categories/Java/index.html","5ead4ce7673029cfbf4c03a102ff2d02"],["/categories/Maven/index.html","e3db377b4df71e2b02d33526d2491586"],["/categories/MySQL/index.html","a97a2a881b9b2e28b7c8ddc8c955662a"],["/categories/MySQL/优化/index.html","0e9d46111b7c18e5a5b2c07f3dec229a"],["/categories/MySQL/引擎/index.html","5563a0bbeae60ce5f8c3acc80a1238d0"],["/categories/Mybatis/index.html","e3c964103901a5192cd5e0aa9cd9dd7c"],["/categories/Mybatis/记录/index.html","6261a4cb49f07fc2f1de6659a97e0e7b"],["/categories/SpringBoot/SpringSecurity/index.html","487a038b1770d97eabe5f6765cc2d9e1"],["/categories/SpringBoot/Swagger/index.html","d1245ccec703d8d375a5eab40a681600"],["/categories/SpringBoot/index.html","d65b21beeadd799401ffb49dfdf985de"],["/categories/Vue/index.html","02357b99c5120f01abc1009c951a3ce9"],["/categories/ajax/index.html","53ebcd07da54e0746a414a20b74aa562"],["/categories/emoji/index.html","ecbd6493ff72082b89ea6f4c67d4264d"],["/categories/index.html","dd6430aad79b823ae89e70ade56eba8a"],["/categories/linux/index.html","5b1a9f471f3928337fa2748839cc224a"],["/categories/数据库设计/index.html","985b0d2a51e06c881f6035e5a0cf2001"],["/categories/记录/index.html","78bf64929f7cb1b1d136851191489787"],["/categories/面向对象/index.html","6872be3c1e2388159166c614b7a5de34"],["/css/index.css","9a5c5b5308d5ff6ecf511224289995fc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","cf96c0cb4bf10c551e44a507cadc0945"],["/js/main.js","ee7c3f864d6cb173ab6ce30eeebe80fd"],["/js/search/algolia.js","0027070eeffefdbf6f485c049070a43c"],["/js/search/local-search.js","371a0c7478aa74fd10ee5be34b2bcf59"],["/js/third-party/ClickShowText.js","f66854e27a08e7c5ca9f2c479fdeff3f"],["/js/third-party/activate-power-mode.js","6f588d15a5b7f1ebeca1c3578a5d3f6c"],["/js/third-party/canvas-nest.js","625f8a24478f1fe5c5bb4a89c4b82bce"],["/js/third-party/canvas-ribbon.js","8f2d884a863da4da823f16797ca8d941"],["/js/third-party/click_heart.js","ab9c59d47b40dc21c50e8907ce24790c"],["/js/third-party/fireworks.js","9eff589921aa2eadfb1e1023eef8f873"],["/js/third-party/piao.js","fd0ae3b2e1416f2cdb2e4371587225f3"],["/js/tw_cn.js","8617ed879b851646ed922127a655a812"],["/js/utils.js","07d927007f964a5e5c4183a4bd4517de"],["/link/index.html","5e22c666ff822e9feec59237ae5792f1"],["/live2dw/assets/model.2048/texture_00.png","ae34664ad879d043476c43d041b4aecd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","2756699b9caf9e397fe1def2f7b4e8ad"],["/page/2/index.html","6a8732e272a3363cde13fe3fb3dfaef3"],["/page/3/index.html","ed1c44d6642a644fc72dc8e063b0095b"],["/posts/1124952030/index.html","3870f32e8d35e55dfa806a7558aefafe"],["/posts/13258/index.html","93e01c3ab3c51c2246534f1458a67d63"],["/posts/1359691355/index.html","59cd8cf7e4b1850f667ecfeec6b89055"],["/posts/14324/index.html","04fa4a68472b01a028a52e3b681cfa5c"],["/posts/14393/index.html","c7f091668a57ee984a6f1b311d8a966f"],["/posts/1553907357/index.html","6746b3f8220deb097efef0a610a70ea6"],["/posts/1864766114/index.html","e115f5201dc9760ed288804a9a06590d"],["/posts/2352548230/index.html","5b2a414781b06463e215f2814ae2bc8e"],["/posts/25396/image-20200515193027529.png","1dfa8c2ba2a3af4cbf70db66ad8cbcd9"],["/posts/25396/image-20200515193212898.png","0df8195d2fa50cb023d83a943a75e2b9"],["/posts/25396/image-20200515193240630.png","177e009c0429cb3a7254b1c7d682c2aa"],["/posts/25396/image-20200515193903771.png","aeb4fb7f9e44d5428b46db2ef5f58eb8"],["/posts/25396/image-20200515195209340.png","22978e93b749e7eebcc3cc63327c3c96"],["/posts/25396/image-20200515200355611.png","5caf04a888375ccd6a2ff2e8bfd908f0"],["/posts/25396/image-20200515201112827.png","ce6132975eea9a1128a4efa3513582dd"],["/posts/25396/image-20200516222500714.png","70a7e1e585bcc0d3a0966ba304c006ff"],["/posts/25396/image-20200517170054604.png","73e1c8306391defec040b07cc0569be1"],["/posts/25396/image-20200517170527296.png","fe7d7f953761eaed529889cfb2291268"],["/posts/25396/image-20200517170949578.png","a910ed84e3df25339a454fc298e784e3"],["/posts/25396/image-20200517171011384.png","09980fef34197bfb4c848a5b86f5baa4"],["/posts/25396/image-20200517171353373.png","40fa46a10da30d5bc6261b9f04a139ea"],["/posts/25396/image-20200517172727084.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517172730649.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517173246459.png","cc6fdd185c05cbcd37fec0e852a611f6"],["/posts/25396/image-20200517174357885.png","28b1a5ed29591f10935c219a4fc5f282"],["/posts/25396/image-20200517174420239.png","e3494f720f9ff930ae6b13bf9ae42e9c"],["/posts/25396/image-20200517175435773.png","e544deb938716d4857cf2f62be5a8d34"],["/posts/25396/image-20200517175844957.png","c2cc7cff6d3557a4b0c88fc21b68e778"],["/posts/25396/image-20200517180546503.png","8ed3df0a1627da082e53d874b2485122"],["/posts/25396/image-20200521215626753.png","15342c03b327bb77eddb3816b648b5a0"],["/posts/25396/image-20200522124822493.png","e72575193d58cb0a325354a47aca5381"],["/posts/25396/image-20200522212021634.png","d0cefd4e019f433a4cc980e8165cb449"],["/posts/25396/index.html","240f547a7f22204b72e05086935ad6f4"],["/posts/26259/index.html","f4540391392ae9aea4e4552e854547e2"],["/posts/29333/index.html","7d37f28294dc57ca80aa6bc8555937f5"],["/posts/3109851417/index.html","df2665efb2773334c06d5413cacbb3a8"],["/posts/3112011529/index.html","0b25bb6bf83defe48eb7aa9a0a29cea1"],["/posts/3120427724/index.html","b4ba2d94af36ccd2c7df935d447d71d3"],["/posts/3155752545/image-20200604155255484.png","cb09cc3688945161d5551a351f7ca824"],["/posts/3155752545/index.html","d1a0ce68ce1072b1d7f6b6472fe96474"],["/posts/31683/index.html","4040e89d13b5a95ace9fb5a8c5ceef98"],["/posts/3261239934/index.html","d578b423c43ada0f4f9124ecdc8972b2"],["/posts/34782/index.html","b65bd7362c8c4e9eb79ab11b28993564"],["/posts/3661501281/index.html","9e2de7864ba988ae123eb2344cf46920"],["/posts/3700149003/index.html","825316835a6ab3ba57c27881c9069fbc"],["/posts/3984882913/index.html","ffe864ffc7254a6830d2342b540892cc"],["/posts/41739/image-20200525194743301.png","3e1e9e22cc72305d7a71885996a99f3e"],["/posts/41739/image-20200525194905458.png","8d2a09b63c675cc633c979653a4a100e"],["/posts/41739/image-20200525195035039.png","e7318b93cac9719578ba39bebd579444"],["/posts/41739/image-20200525195113526.png","cd30d10151c984d8e8c60a8916522e6a"],["/posts/41739/image-20200525195141092.png","3bc1bf5b4d4f147cae614eed5e873a07"],["/posts/41739/image-20200525195257690.png","b768e2e882628840dbfb8b5dbeccc6af"],["/posts/41739/image-20200526095527277.png","b8eb6f65e585ab1524fb0b052c0e1916"],["/posts/41739/image-20200526101428664.png","3a1e5873e8932a3ac399b1cdda8b22a9"],["/posts/41739/image-20200526101532280.png","128d6ec7d72d31861c50ca5cf16063c9"],["/posts/41739/image-20200526101637132.png","6eeddcc05075deec6fbf3900f075741f"],["/posts/41739/image-20200526102133363.png","74ee6450821d9908b8b6c3592d452df1"],["/posts/41739/image-20200526103909262.png","d5f5f0426cf61ee59c449e1ad6474fe2"],["/posts/41739/image-20200526104513794.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104526805.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104759021.png","bcb4a45d1bdf7f10d88acf9497618d06"],["/posts/41739/image-20200526105146033.png","4b7e752ff2ab5deb9e227e526f0a5a1d"],["/posts/41739/image-20200526105325301.png","9438ecd08715fbb97481ec6e941167a5"],["/posts/41739/image-20200526105538621.png","fd6e4d7a4df4abf522548a3db4424a7d"],["/posts/41739/image-20200526110122986.png","ab3ad4b11caa1e63b1023356df8b1b94"],["/posts/41739/image-20200526110943364.png","0a74d3071743f10469f7d3515ba67a33"],["/posts/41739/image-20200526142911511.png","6ea294c5f1457cf1a1fb03ce0279dab9"],["/posts/41739/image-20200526154923596.png","1df86ad0b07c69385b3a9dd298a1c397"],["/posts/41739/image-20200526155002906.png","5ef9c86c75348bf000142a57119aff0b"],["/posts/41739/image-20200526155021754.png","787291b1ed33b376fe6ae13b2bef0178"],["/posts/41739/image-20200526155102089.png","67d74968316983b19ea67313ba12dab3"],["/posts/41739/image-20200526155116682.png","0e95b3f550c9a64a22f1c8a0283b82a1"],["/posts/41739/image-20200526155131075.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155136600.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155710071.png","f1d3fb40eac9fc2d34e726b675d25a8c"],["/posts/41739/image-20200526160938838.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526160941638.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526161439575.png","8ce48af513e1c5f8493dd9af102d991e"],["/posts/41739/image-20200526161548429.png","8f03bfcdfd7658418bc1b2dd659decec"],["/posts/41739/index.html","d24e0880e59d07110f6375b69efda251"],["/posts/47733/index.html","f4cae7aab6c99d48332b49a9f702087c"],["/posts/48141/index.html","9103658f559c96fc6b3292dec818657c"],["/posts/49984/index.html","08a1c90e7f975398d983caa3d5088c57"],["/posts/56512/index.html","1e5b89fee890e85f439d4630237c4c95"],["/posts/59764/index.html","ba796d67830b6fda3aad5a60773acffe"],["/posts/704219325/index.html","34da6edf6b9d102a7462860460ffee88"],["/posts/709269996/index.html","49fb9ae67ec64ba969b2534d94bcd61d"],["/posts/961488241/index.html","14bf116ba561ea0bd8aeaba3ef986c3e"],["/shuoshuo/index.html","19d64b8dca0a1a3e904cafa324fb4aef"],["/sw-register.js","390186d6e1dded6cbb6e30c6c1500109"],["/tags/Butterfly/index.html","d510ba80025843c82e624c16dfea4094"],["/tags/Git/index.html","7bce583c9500e69ead153d268fd0134e"],["/tags/IDEA/index.html","2155bb850a95fe740169b0a85923cf25"],["/tags/Java/index.html","4e61059575a1f52991384aa6b3ddfff4"],["/tags/Maven/index.html","2772108a26cafb3fb0768ccc72cbd743"],["/tags/MySQL/index.html","175f8f40cbd15245957dfe8013e406ee"],["/tags/Mybatis/index.html","c956795a0a001e5edef95c360e88c7e4"],["/tags/SpringBoot/index.html","d79664a5af9ca496045ccd772aa83d47"],["/tags/SpringSecurity/index.html","293662448af681382ebb38bf4179c72b"],["/tags/Swagger/index.html","068700042c503f675e56511c052a5db9"],["/tags/emoji/index.html","889314ccf4837c6cf78d2b475f56a5a9"],["/tags/hexo/index.html","08de9a2f2fd9cbde646fda2372831485"],["/tags/index.html","8d9f31c6ce7cc232f4679a265383a06a"],["/tags/linux/index.html","45604c5cbf68c65ffc6a8d8ac2c1fb4e"],["/tags/判断/index.html","6d3830b1989dbb0b710fa073f38fd9c3"],["/tags/图表/index.html","11ca5356d982a144a3582c096871b0d6"],["/tags/排序/index.html","47831b71c4ab17edca76173797c7f717"],["/tags/数据库设计/index.html","30172739e59c459570c1a4b1e531f304"],["/tags/记录/index.html","3701ae4486617bf05e21740165b505f5"],["/tags/面向对象/index.html","8dd9b88c6dfa967a94a02c512d3e41bf"]];
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
