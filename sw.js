/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0c6bd5c25dce7636f8c4d6236b143487"],["/Me/index.html","4e724cf237f14fc202360dc867c8104d"],["/about/index.html","520b25eb488500b7f2f570c02e9f4b71"],["/archives/2020/05/index.html","50d65e9e2ff1b2e4cde3a641be64c159"],["/archives/2020/05/page/2/index.html","64de9037344b3e2754676337b5f93bca"],["/archives/2020/06/index.html","b280fa9ec7965ea769b94a2265db93a6"],["/archives/2020/06/page/2/index.html","1880ecbc7c9500bf61e75286c4d6cc52"],["/archives/2020/index.html","4c6488a3bed3277e071f635614f3303d"],["/archives/2020/page/2/index.html","c661758e9645d4fc4bb99ae5152be860"],["/archives/2020/page/3/index.html","290bd79c1b9c52d850263fcc1d674f46"],["/archives/index.html","6f1a213f1fc8e35e70bc29e7b763e10c"],["/archives/page/2/index.html","18e9a3a8b81037fb5e6f56609a0bf71d"],["/archives/page/3/index.html","2d695338e17fef2212781a49fda9cd54"],["/bangumis/index.html","9d92b7820e0b196a41a9f8778fd90f1b"],["/board/index.html","593e3ff18fec92c2f5198f069abf8af1"],["/categories/Git/index.html","3177438e46fdc65bb1e8b27f2fa811b6"],["/categories/Hexo/Butterfly/index.html","acb45c29b6efd94f649c6162a2e92d6d"],["/categories/Hexo/Next/index.html","d33cb316890841e6e6a6159facc43b5a"],["/categories/Hexo/index.html","5f6d17594f042347306e268256a633d9"],["/categories/Hexo/备份/index.html","1eb8292d49a39d56b760314f0d15f688"],["/categories/IDEA/index.html","d2d3485cd646e8ba09e941adfcc0ae69"],["/categories/Maven/index.html","3d4220058f466ed1b2d86a658d491e23"],["/categories/MySQL/index.html","a062d961138bda98e5e00e48e78b7681"],["/categories/MySQL/优化/index.html","ada36408b775dc8cf07825e919a93cd7"],["/categories/MySQL/引擎/index.html","1ad4d4dc6f1d9aa1db933af87d5f3086"],["/categories/SpringBoot/SpringSecurity/index.html","7eb3c99e660b7024c615b2cfd10b7fb2"],["/categories/SpringBoot/Swagger/index.html","40eaa7b7e0d63e368996ae7ccd8734ce"],["/categories/SpringBoot/index.html","c555e4158083e076ab5fadfec13a8231"],["/categories/Vue/index.html","98048b3fc621c120b22d56931113b367"],["/categories/ajax/index.html","0d4619d94682b35a8a8beec980eccd9a"],["/categories/emoji/index.html","c8ade2eef7b2847cd4da80c669026c39"],["/categories/index.html","71061a9ddda583abdf60d3bee6013b22"],["/categories/linux/index.html","ee9ecb2bfab00cbcba730aa68231044c"],["/categories/数据库设计/index.html","21b9f616524565eeb2fd3cb779e182df"],["/categories/记录/index.html","fd35df1d18318a55a3b74b349bd23941"],["/categories/面向对象/index.html","2887863b737acc3fe07bcd09d2c22624"],["/css/index.css","5fd834c03cafa4e0ac610630dba23e67"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.png","c9656983e0141c4d2301d6a217961667"],["/img/avatar.png","a1548b3252b0e3c47adcfd56d98bfb69"],["/img/favicon-16x16-next.png","efc289a0f524cbeae804e301feeb56cd"],["/img/favicon-32x32-next.png","efc289a0f524cbeae804e301feeb56cd"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wechatpay.png","bfa7e10082cdfbf206c5127311f2a40c"],["/index.html","882368b5c96cb856c27fe8193729e52b"],["/js/main.js","b382597891e958e71bb7c1099977ec66"],["/js/music.js","78b406ec883d52229a2ec4d6311bc115"],["/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/link/index.html","ba55ee4c5ca820196740f25d31a1c5d0"],["/live2d-widget/README.html","40084855aa2d27f51196c97a1e94e288"],["/live2d-widget/autoload.js","571c24635fd1c65c23eba18cd36b95d2"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","461b411964bae6f2eed70ea22a09676a"],["/live2d-widget/waifu.css","1d73612a779f1f03a163d41a45cee87b"],["/music/index.html","dbb2361ba891fc38fc956a7737b56513"],["/page/2/index.html","8dca8d61cc0cf56822ee477e66e6e10f"],["/page/3/index.html","b02062cb319f44916111708e031edfbc"],["/page/4/index.html","d8962d4cd2ef586d5a043c6326050a11"],["/posts/13258/index.html","7b8134a07c013402dfa8704363d8b1b0"],["/posts/1359691355/index.html","03f70c1ebb6fbebb5d4f9a32e09b17ee"],["/posts/14324/index.html","99f61b7f35d69c709c97d68709e7c747"],["/posts/14393/index.html","cd9c40142ee56bb61de1a54c3a03ded1"],["/posts/1553907357/index.html","6b505cedda369d550485185fd056d617"],["/posts/1864766114/index.html","8d52aeed02b2af4eb7f3746f0016c4cc"],["/posts/2352548230/index.html","3993556f9aad20b742352d06e916b5bc"],["/posts/25396/image-20200515193027529.png","1dfa8c2ba2a3af4cbf70db66ad8cbcd9"],["/posts/25396/image-20200515193212898.png","0df8195d2fa50cb023d83a943a75e2b9"],["/posts/25396/image-20200515193240630.png","177e009c0429cb3a7254b1c7d682c2aa"],["/posts/25396/image-20200515193903771.png","aeb4fb7f9e44d5428b46db2ef5f58eb8"],["/posts/25396/image-20200515195209340.png","22978e93b749e7eebcc3cc63327c3c96"],["/posts/25396/image-20200515200355611.png","5caf04a888375ccd6a2ff2e8bfd908f0"],["/posts/25396/image-20200515201112827.png","ce6132975eea9a1128a4efa3513582dd"],["/posts/25396/image-20200516222500714.png","70a7e1e585bcc0d3a0966ba304c006ff"],["/posts/25396/image-20200517170054604.png","73e1c8306391defec040b07cc0569be1"],["/posts/25396/image-20200517170527296.png","fe7d7f953761eaed529889cfb2291268"],["/posts/25396/image-20200517170949578.png","a910ed84e3df25339a454fc298e784e3"],["/posts/25396/image-20200517171011384.png","09980fef34197bfb4c848a5b86f5baa4"],["/posts/25396/image-20200517171353373.png","40fa46a10da30d5bc6261b9f04a139ea"],["/posts/25396/image-20200517172727084.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517172730649.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517173246459.png","cc6fdd185c05cbcd37fec0e852a611f6"],["/posts/25396/image-20200517174357885.png","28b1a5ed29591f10935c219a4fc5f282"],["/posts/25396/image-20200517174420239.png","e3494f720f9ff930ae6b13bf9ae42e9c"],["/posts/25396/image-20200517175435773.png","e544deb938716d4857cf2f62be5a8d34"],["/posts/25396/image-20200517175844957.png","c2cc7cff6d3557a4b0c88fc21b68e778"],["/posts/25396/image-20200517180546503.png","8ed3df0a1627da082e53d874b2485122"],["/posts/25396/image-20200521215626753.png","15342c03b327bb77eddb3816b648b5a0"],["/posts/25396/image-20200522124822493.png","e72575193d58cb0a325354a47aca5381"],["/posts/25396/image-20200522212021634.png","d0cefd4e019f433a4cc980e8165cb449"],["/posts/25396/index.html","db8ab534c812dc81c6fe082dc64b562d"],["/posts/26259/index.html","9d689337912f0b57d6406aee0529ed98"],["/posts/29333/index.html","81ac57a299d509b2b35b92ed6485c101"],["/posts/3112011529/index.html","1aeb1f7198562f5715642e9a97855eff"],["/posts/3120427724/index.html","ec6e27820a8cec913c6525904e6d1f14"],["/posts/3155752545/image-20200604155255484.png","cb09cc3688945161d5551a351f7ca824"],["/posts/3155752545/index.html","90d000a508ccd4ec7a07e437b6c174ae"],["/posts/31683/index.html","89578e6c329bd9fbc89b757b52f88d60"],["/posts/3261239934/index.html","3da724fc9484e6f2305e7113ccff4b71"],["/posts/34782/index.html","7da3ebc9fe6751bc7c88a35a9978a38b"],["/posts/3661501281/index.html","bb026b3e6457c24bcfa6368c763f3cbf"],["/posts/3984882913/index.html","6365baa345e55da2d8ce4ddda5bcb2e2"],["/posts/41739/image-20200525194743301.png","3e1e9e22cc72305d7a71885996a99f3e"],["/posts/41739/image-20200525194905458.png","8d2a09b63c675cc633c979653a4a100e"],["/posts/41739/image-20200525195035039.png","e7318b93cac9719578ba39bebd579444"],["/posts/41739/image-20200525195113526.png","cd30d10151c984d8e8c60a8916522e6a"],["/posts/41739/image-20200525195141092.png","3bc1bf5b4d4f147cae614eed5e873a07"],["/posts/41739/image-20200525195257690.png","b768e2e882628840dbfb8b5dbeccc6af"],["/posts/41739/image-20200526095527277.png","b8eb6f65e585ab1524fb0b052c0e1916"],["/posts/41739/image-20200526101428664.png","3a1e5873e8932a3ac399b1cdda8b22a9"],["/posts/41739/image-20200526101532280.png","128d6ec7d72d31861c50ca5cf16063c9"],["/posts/41739/image-20200526101637132.png","6eeddcc05075deec6fbf3900f075741f"],["/posts/41739/image-20200526102133363.png","74ee6450821d9908b8b6c3592d452df1"],["/posts/41739/image-20200526103909262.png","d5f5f0426cf61ee59c449e1ad6474fe2"],["/posts/41739/image-20200526104513794.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104526805.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104759021.png","bcb4a45d1bdf7f10d88acf9497618d06"],["/posts/41739/image-20200526105146033.png","4b7e752ff2ab5deb9e227e526f0a5a1d"],["/posts/41739/image-20200526105325301.png","9438ecd08715fbb97481ec6e941167a5"],["/posts/41739/image-20200526105538621.png","fd6e4d7a4df4abf522548a3db4424a7d"],["/posts/41739/image-20200526110122986.png","ab3ad4b11caa1e63b1023356df8b1b94"],["/posts/41739/image-20200526110943364.png","0a74d3071743f10469f7d3515ba67a33"],["/posts/41739/image-20200526142911511.png","6ea294c5f1457cf1a1fb03ce0279dab9"],["/posts/41739/image-20200526154923596.png","1df86ad0b07c69385b3a9dd298a1c397"],["/posts/41739/image-20200526155002906.png","5ef9c86c75348bf000142a57119aff0b"],["/posts/41739/image-20200526155021754.png","787291b1ed33b376fe6ae13b2bef0178"],["/posts/41739/image-20200526155102089.png","67d74968316983b19ea67313ba12dab3"],["/posts/41739/image-20200526155116682.png","0e95b3f550c9a64a22f1c8a0283b82a1"],["/posts/41739/image-20200526155131075.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155136600.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155710071.png","f1d3fb40eac9fc2d34e726b675d25a8c"],["/posts/41739/image-20200526160938838.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526160941638.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526161439575.png","8ce48af513e1c5f8493dd9af102d991e"],["/posts/41739/image-20200526161548429.png","8f03bfcdfd7658418bc1b2dd659decec"],["/posts/41739/index.html","7aa8ec61fb72d26fa750035ff4e32c6d"],["/posts/47733/index.html","31e4601ab2db189567752b0d252a256c"],["/posts/48141/index.html","667a6f78cf9f3e9af6ae4080713daeb8"],["/posts/49984/index.html","94c26aaacf67b13a1db0241296a3e25d"],["/posts/56512/index.html","a8aa24fb4162901b4fd78e1883af43ce"],["/posts/59764/index.html","da27e06aa66a8737fdac429df11eee23"],["/posts/709269996/index.html","b429b8abc0f68a896a1ad6d1448ded4b"],["/posts/961488241/index.html","7e15b9fe6c4dbd0001d83925f78822f6"],["/shuoshuo/index.html","1fbc7b6280b25cc969d930b0fa0e0d42"],["/sw-register.js","961d5a54ea6860ab778b5b8bb7a43048"],["/tags/Butterfly/index.html","bb27e30089a68d424518fc98d095b6df"],["/tags/Git/index.html","41ec8cf40110753651646d5b479af6da"],["/tags/IDEA/index.html","0f0abf9e3ab2de4ec06062925ad06883"],["/tags/Maven/index.html","e42864511cb50b659156a1b68b11fef4"],["/tags/MySQL/index.html","892cb54733eb4324df6cf74399ecaf99"],["/tags/SpringBoot/index.html","aac81f24e81cce7a75ba17bb3602d1a6"],["/tags/SpringSecurity/index.html","39bf451bd4470cf18f87928e9639e041"],["/tags/Swagger/index.html","8e666f08a74502fdf7f89f8a079d53d7"],["/tags/emoji/index.html","5c25418e5654aff43cb715e4499c3dbc"],["/tags/hexo/index.html","34c35180f6923ce2ad2a9a5311483974"],["/tags/index.html","1653a75032599e32ba80a2cffb0d7ffb"],["/tags/linux/index.html","0ffee9f82dd567377bab5bae1f07e52d"],["/tags/判断/index.html","c10548b817fcb74cdb75f85bbd553ee4"],["/tags/图表/index.html","1fb9635eaa3e929b1f15aa75905902d5"],["/tags/排序/index.html","56db96e4872ba78447c85eed5f97e695"],["/tags/数据库设计/index.html","c72ad7e4b7f077a8e7f9189bf3f3c243"],["/tags/记录/index.html","2a08cdd7a0b17712c8ca5632b4099ae0"],["/tags/面向对象/index.html","0255f346cd83c83e3c04f3f6c65c4925"]];
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
