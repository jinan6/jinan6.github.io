/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","21e8d02aab64441bae5343a3a10c289e"],["/Me/index.html","64fc9decf4658eeb726b0bd7a9859b98"],["/about/index.html","7ff11cb41d3d630149c6a27b0d824019"],["/archives/2020/05/index.html","1ff031352c24b3a7489972549481140d"],["/archives/2020/05/page/2/index.html","1190b397e5c6f5be7ef33650b0ccba0b"],["/archives/2020/06/index.html","eff9d34c8a377725a76eeba90ee8d62d"],["/archives/2020/06/page/2/index.html","600f398759798ee227145c6061fa9664"],["/archives/2020/index.html","d17efe42cbc9b0693df8891588d635a2"],["/archives/2020/page/2/index.html","5b71a5063abf2f5ebc23b2057e17631f"],["/archives/2020/page/3/index.html","33a53798a98d11ba4c5d95ef34d587a0"],["/archives/index.html","7b082ae48c18dc777d4e2979e0e2844d"],["/archives/page/2/index.html","af775727f56b51806f9af7ec998ab894"],["/archives/page/3/index.html","e224837097930bae411260bcae2b71ab"],["/bangumis/index.html","6a455592e32d5f5c102e8500022f7750"],["/board/index.html","9e9d81abc14dc2b3314ab2800755c66d"],["/categories/Git/index.html","1dada99b7c0ede44780bcb3337e26953"],["/categories/Hexo/Butterfly/index.html","105489f153db2186e02549439f122e45"],["/categories/Hexo/Next/index.html","1f7ad1a17e08985cd052541c7ebc1060"],["/categories/Hexo/index.html","c8bcd9d15553c0d9116ffcf2e3838670"],["/categories/Hexo/备份/index.html","5661c335d8ce5603e195ea01965a5494"],["/categories/IDEA/index.html","e0229e1091126e6aacce6cdc94d901f7"],["/categories/Maven/index.html","60abd3c1aec9bb32b0a1be9583ecf79b"],["/categories/MySQL/index.html","8158ce2be4a3c4d3cd734d7c3f726fd2"],["/categories/MySQL/优化/index.html","0e0c52e592e0222b5aab3986025ad0fb"],["/categories/MySQL/引擎/index.html","6efd24e0a78129d4fe431119ba656bad"],["/categories/SpringBoot/SpringSecurity/index.html","e982f1a92955b63b378a9f6210ebf730"],["/categories/SpringBoot/Swagger/index.html","f04153bd927afaec8c26389a9e1266a6"],["/categories/SpringBoot/index.html","1f2949a5b9712c845c17d64ea702181b"],["/categories/Vue/index.html","5d2ddb9269c5b126aebd2b598fc3a5ea"],["/categories/ajax/index.html","42d666861238fc134ed285df8dcf9265"],["/categories/emoji/index.html","5c77d4613ba20307b682fc170cab1440"],["/categories/index.html","8c3ea0dc2916c3a4266ab1823cbd98f9"],["/categories/linux/index.html","768f8ac3c6c0041897e23b708b6b559e"],["/categories/数据库设计/index.html","3108578eb0adcd9a81c9586a80449b43"],["/categories/记录/index.html","cfe8d3d56ccf4af402f84e8b79d09acb"],["/categories/面向对象/index.html","686639f9cc9e61f7cd4f5507896b95f7"],["/css/index.css","5fd834c03cafa4e0ac610630dba23e67"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.png","c9656983e0141c4d2301d6a217961667"],["/img/avatar.png","a1548b3252b0e3c47adcfd56d98bfb69"],["/img/favicon-16x16-next.png","efc289a0f524cbeae804e301feeb56cd"],["/img/favicon-32x32-next.png","efc289a0f524cbeae804e301feeb56cd"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wechatpay.png","bfa7e10082cdfbf206c5127311f2a40c"],["/index.html","4f31881e8ff7fd72add58f614d0b1bf7"],["/js/main.js","b382597891e958e71bb7c1099977ec66"],["/js/music.js","78b406ec883d52229a2ec4d6311bc115"],["/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/link/index.html","1c91559d8d5373371a572eb9c661cff8"],["/live2d-widget/README.html","40084855aa2d27f51196c97a1e94e288"],["/live2d-widget/autoload.js","571c24635fd1c65c23eba18cd36b95d2"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","461b411964bae6f2eed70ea22a09676a"],["/live2d-widget/waifu.css","1d73612a779f1f03a163d41a45cee87b"],["/music/index.html","e43a0ef33d00a0e8a46a1df33e0d2a0d"],["/page/2/index.html","63e5c3804ecee672f0fde814d9980de0"],["/page/3/index.html","3b18c66b7ceba3891a155bc471b66849"],["/page/4/index.html","4f878e3656437c1df8a01a0eee4aaa3a"],["/posts/13258/index.html","7b8134a07c013402dfa8704363d8b1b0"],["/posts/1359691355/index.html","03f70c1ebb6fbebb5d4f9a32e09b17ee"],["/posts/14324/index.html","99f61b7f35d69c709c97d68709e7c747"],["/posts/14393/index.html","cd9c40142ee56bb61de1a54c3a03ded1"],["/posts/1553907357/index.html","6b505cedda369d550485185fd056d617"],["/posts/1864766114/index.html","8d52aeed02b2af4eb7f3746f0016c4cc"],["/posts/2352548230/index.html","3993556f9aad20b742352d06e916b5bc"],["/posts/25396/image-20200515193027529.png","1dfa8c2ba2a3af4cbf70db66ad8cbcd9"],["/posts/25396/image-20200515193212898.png","0df8195d2fa50cb023d83a943a75e2b9"],["/posts/25396/image-20200515193240630.png","177e009c0429cb3a7254b1c7d682c2aa"],["/posts/25396/image-20200515193903771.png","aeb4fb7f9e44d5428b46db2ef5f58eb8"],["/posts/25396/image-20200515195209340.png","22978e93b749e7eebcc3cc63327c3c96"],["/posts/25396/image-20200515200355611.png","5caf04a888375ccd6a2ff2e8bfd908f0"],["/posts/25396/image-20200515201112827.png","ce6132975eea9a1128a4efa3513582dd"],["/posts/25396/image-20200516222500714.png","70a7e1e585bcc0d3a0966ba304c006ff"],["/posts/25396/image-20200517170054604.png","73e1c8306391defec040b07cc0569be1"],["/posts/25396/image-20200517170527296.png","fe7d7f953761eaed529889cfb2291268"],["/posts/25396/image-20200517170949578.png","a910ed84e3df25339a454fc298e784e3"],["/posts/25396/image-20200517171011384.png","09980fef34197bfb4c848a5b86f5baa4"],["/posts/25396/image-20200517171353373.png","40fa46a10da30d5bc6261b9f04a139ea"],["/posts/25396/image-20200517172727084.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517172730649.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517173246459.png","cc6fdd185c05cbcd37fec0e852a611f6"],["/posts/25396/image-20200517174357885.png","28b1a5ed29591f10935c219a4fc5f282"],["/posts/25396/image-20200517174420239.png","e3494f720f9ff930ae6b13bf9ae42e9c"],["/posts/25396/image-20200517175435773.png","e544deb938716d4857cf2f62be5a8d34"],["/posts/25396/image-20200517175844957.png","c2cc7cff6d3557a4b0c88fc21b68e778"],["/posts/25396/image-20200517180546503.png","8ed3df0a1627da082e53d874b2485122"],["/posts/25396/image-20200521215626753.png","15342c03b327bb77eddb3816b648b5a0"],["/posts/25396/image-20200522124822493.png","e72575193d58cb0a325354a47aca5381"],["/posts/25396/image-20200522212021634.png","d0cefd4e019f433a4cc980e8165cb449"],["/posts/25396/index.html","9316f901c687b6fc5a9191dcdb5e8a38"],["/posts/26259/index.html","bddf2885c755d1fa3ef88e8c64cb379b"],["/posts/29333/index.html","81ac57a299d509b2b35b92ed6485c101"],["/posts/3112011529/index.html","1aeb1f7198562f5715642e9a97855eff"],["/posts/3120427724/index.html","ec6e27820a8cec913c6525904e6d1f14"],["/posts/3155752545/image-20200604155255484.png","cb09cc3688945161d5551a351f7ca824"],["/posts/3155752545/index.html","90d000a508ccd4ec7a07e437b6c174ae"],["/posts/31683/index.html","c8fe4bc083a813c88c3fc47da7908a60"],["/posts/3261239934/index.html","3da724fc9484e6f2305e7113ccff4b71"],["/posts/34782/index.html","7da3ebc9fe6751bc7c88a35a9978a38b"],["/posts/3661501281/index.html","bb026b3e6457c24bcfa6368c763f3cbf"],["/posts/3984882913/index.html","6365baa345e55da2d8ce4ddda5bcb2e2"],["/posts/41739/image-20200525194743301.png","3e1e9e22cc72305d7a71885996a99f3e"],["/posts/41739/image-20200525194905458.png","8d2a09b63c675cc633c979653a4a100e"],["/posts/41739/image-20200525195035039.png","e7318b93cac9719578ba39bebd579444"],["/posts/41739/image-20200525195113526.png","cd30d10151c984d8e8c60a8916522e6a"],["/posts/41739/image-20200525195141092.png","3bc1bf5b4d4f147cae614eed5e873a07"],["/posts/41739/image-20200525195257690.png","b768e2e882628840dbfb8b5dbeccc6af"],["/posts/41739/image-20200526095527277.png","b8eb6f65e585ab1524fb0b052c0e1916"],["/posts/41739/image-20200526101428664.png","3a1e5873e8932a3ac399b1cdda8b22a9"],["/posts/41739/image-20200526101532280.png","128d6ec7d72d31861c50ca5cf16063c9"],["/posts/41739/image-20200526101637132.png","6eeddcc05075deec6fbf3900f075741f"],["/posts/41739/image-20200526102133363.png","74ee6450821d9908b8b6c3592d452df1"],["/posts/41739/image-20200526103909262.png","d5f5f0426cf61ee59c449e1ad6474fe2"],["/posts/41739/image-20200526104513794.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104526805.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104759021.png","bcb4a45d1bdf7f10d88acf9497618d06"],["/posts/41739/image-20200526105146033.png","4b7e752ff2ab5deb9e227e526f0a5a1d"],["/posts/41739/image-20200526105325301.png","9438ecd08715fbb97481ec6e941167a5"],["/posts/41739/image-20200526105538621.png","fd6e4d7a4df4abf522548a3db4424a7d"],["/posts/41739/image-20200526110122986.png","ab3ad4b11caa1e63b1023356df8b1b94"],["/posts/41739/image-20200526110943364.png","0a74d3071743f10469f7d3515ba67a33"],["/posts/41739/image-20200526142911511.png","6ea294c5f1457cf1a1fb03ce0279dab9"],["/posts/41739/image-20200526154923596.png","1df86ad0b07c69385b3a9dd298a1c397"],["/posts/41739/image-20200526155002906.png","5ef9c86c75348bf000142a57119aff0b"],["/posts/41739/image-20200526155021754.png","787291b1ed33b376fe6ae13b2bef0178"],["/posts/41739/image-20200526155102089.png","67d74968316983b19ea67313ba12dab3"],["/posts/41739/image-20200526155116682.png","0e95b3f550c9a64a22f1c8a0283b82a1"],["/posts/41739/image-20200526155131075.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155136600.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155710071.png","f1d3fb40eac9fc2d34e726b675d25a8c"],["/posts/41739/image-20200526160938838.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526160941638.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526161439575.png","8ce48af513e1c5f8493dd9af102d991e"],["/posts/41739/image-20200526161548429.png","8f03bfcdfd7658418bc1b2dd659decec"],["/posts/41739/index.html","7aa8ec61fb72d26fa750035ff4e32c6d"],["/posts/47733/index.html","100087d014f42fa3732b29c2a379971d"],["/posts/48141/index.html","368c35001ba94a140e2a1854ec8f23d8"],["/posts/49984/index.html","94c26aaacf67b13a1db0241296a3e25d"],["/posts/56512/index.html","a8aa24fb4162901b4fd78e1883af43ce"],["/posts/59764/index.html","da27e06aa66a8737fdac429df11eee23"],["/posts/709269996/index.html","b429b8abc0f68a896a1ad6d1448ded4b"],["/posts/961488241/index.html","1ac319c114af0dea1b08c19ed30be1f2"],["/shuoshuo/index.html","97d07b4007c612813047f81d4ada20a6"],["/sw-register.js","70bb7b8f34f46ab55b1d06f74ff94160"],["/tags/Butterfly/index.html","1fc4a79861d4fe857fadbd09024ac7fe"],["/tags/Git/index.html","a6708fd0133850d854f515391247edf1"],["/tags/IDEA/index.html","50f9cbd09c1ae2e9807af5f7c8d1c630"],["/tags/Maven/index.html","af6e40a3790d68d263ef3c68dde4b684"],["/tags/MySQL/index.html","a756f22b6061755f8f1b55317289d721"],["/tags/SpringBoot/index.html","750b000c86ec698642fa3acbee24f0bf"],["/tags/SpringSecurity/index.html","5203353302000d40ab8910d99572ff9b"],["/tags/Swagger/index.html","e9fd816d976c214de0d2fbe064c62553"],["/tags/emoji/index.html","51427adc70669b42fb315ef0526514df"],["/tags/hexo/index.html","c46d606693fa7b8038fb99972ef823dd"],["/tags/index.html","563878a6ebd6051dc1ec2af0690c3f2f"],["/tags/linux/index.html","baa8a30a7f725468a2c8be771af7fee4"],["/tags/判断/index.html","5f348d66615fb9c6a4f352497d225240"],["/tags/图表/index.html","81e880dad246b5c1812f5adacff02bf1"],["/tags/排序/index.html","1522a58bd457c84c0e92ff36d3512390"],["/tags/数据库设计/index.html","d9378089d6aab7e0e1530953b4394103"],["/tags/记录/index.html","c0c3e12e7ffe4aecf067e6ea7abb76f8"],["/tags/面向对象/index.html","ec4db6b2852fc71298e9a2ea027f970c"]];
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
