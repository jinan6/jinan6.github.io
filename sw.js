/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","86c8b58051276e71d64c8e9d38d8541b"],["/Me/index.html","641b9cb87d2b62057dac087eaca05941"],["/about/index.html","6159cbf4951d87236a64c2a20310c8a1"],["/archives/2020/05/index.html","e127daff6a2580387971fffadc7cd604"],["/archives/2020/05/page/2/index.html","66b94ab3d42107b1fba0d72ce37a6baf"],["/archives/2020/06/index.html","bd0c6787cd458069cdea20ca9a0a8af9"],["/archives/2020/06/page/2/index.html","188b0c6766b3a360d7a84b417578f3af"],["/archives/2020/index.html","58809fbe415f63afac9b3604d3a16672"],["/archives/2020/page/2/index.html","a5b8fe2336cfeadb55152f6d326abd9b"],["/archives/2020/page/3/index.html","aead362cf25c32b72b6256a34434e87e"],["/archives/index.html","2d5979793834801fb9b4622a0ab9ddd1"],["/archives/page/2/index.html","79fefa2d3fc4f720b8831b680cb4ef31"],["/archives/page/3/index.html","b6b9b1f2a6a6959aebfb93d07446a926"],["/board/index.html","9fcd35cb8ab9d06be7c772cdb843a649"],["/categories/Git/index.html","1f2e1a5f11029ecd0267ee1a53e246b3"],["/categories/Hexo/Butterfly/index.html","fa79f9edeb54d9cf2307e1945cab1f97"],["/categories/Hexo/Next/index.html","65a812a82f41851e1e574ab5ebbc5a48"],["/categories/Hexo/index.html","8ab4f836dcfb67a33917d50620bd2ef7"],["/categories/Hexo/备份/index.html","105b4b8332efb2040602466af0ea14c5"],["/categories/IDEA/index.html","f6fbb18de8b911d2614e351b49781799"],["/categories/Maven/index.html","4b22e89f1ad717055117dcc98ae6ce8f"],["/categories/MySQL/index.html","8f9a4cbd07d7492092c2369238c73879"],["/categories/MySQL/优化/index.html","8238df1e7e0a86e2e998f753ba1450df"],["/categories/MySQL/引擎/index.html","73a7796c59051cccc32b4cfc00579e67"],["/categories/SpringBoot/SpringSecurity/index.html","1409ff755ed33d96c2b2ff176a9cad61"],["/categories/SpringBoot/Swagger/index.html","f49982a1d7cd2fb5bb02acc4d95c23c6"],["/categories/SpringBoot/index.html","8873d5dc305da347afa405f415ab58a5"],["/categories/Vue/index.html","8bddd50a97c4c8de38292a22ba6905d6"],["/categories/ajax/index.html","b65166722c5fd629b211f5de39a056d9"],["/categories/emoji/index.html","10e9ccabf8f1c99d03bfc86ae0019a22"],["/categories/index.html","c82a806bbf640c6071b7b3010c59cfa1"],["/categories/linux/index.html","63cfa8a3ad4fc6316667d8274a34107d"],["/categories/数据库设计/index.html","e6e502e967f7789c7a9024161e7998d7"],["/categories/记录/index.html","c9ff830fbe8274d2f18e795e46446d5f"],["/categories/面向对象/index.html","771bca85929627b7c2b0bacda224e707"],["/css/index.css","4ad82aff241c8792fbb8f04ec659375f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.png","c9656983e0141c4d2301d6a217961667"],["/img/avatar.png","a1548b3252b0e3c47adcfd56d98bfb69"],["/img/favicon-16x16-next.png","efc289a0f524cbeae804e301feeb56cd"],["/img/favicon-32x32-next.png","efc289a0f524cbeae804e301feeb56cd"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wechatpay.png","bfa7e10082cdfbf206c5127311f2a40c"],["/index.html","0dc7cdca13709db31882617bb7272f2d"],["/js/main.js","b382597891e958e71bb7c1099977ec66"],["/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/link/index.html","78a1e6febba5795a416c2364459ec18d"],["/music/index.html","b094ba8cfde7fb5b7b825b7316ada416"],["/page/2/index.html","18ed372d6b47e3fdeae95a9ba46355fb"],["/page/3/index.html","3a48bd62aa7891fbff7c920b6b76d2f5"],["/page/4/index.html","88a1e171fd5e3948c79d7ebfcfd2d4e4"],["/posts/13258/index.html","cb99ab63ce3cc3c7f49374369b241ace"],["/posts/1359691355/index.html","28c13d5e05953d7045a87fef8f5f5bbe"],["/posts/14324/index.html","dbf95aea379775ce1bac6dbc8ba6fc12"],["/posts/14393/index.html","d38e66147351739bfb9aa06a8a46ae23"],["/posts/1553907357/index.html","ad56e265ea1497e133a9b1e144166e66"],["/posts/1864766114/index.html","009fc271e640a9dee7dabba1d192b92c"],["/posts/2352548230/index.html","8028a2d44b7b2dd0dd1cd49f36a2c238"],["/posts/25396/image-20200515193027529.png","1dfa8c2ba2a3af4cbf70db66ad8cbcd9"],["/posts/25396/image-20200515193212898.png","0df8195d2fa50cb023d83a943a75e2b9"],["/posts/25396/image-20200515193240630.png","177e009c0429cb3a7254b1c7d682c2aa"],["/posts/25396/image-20200515193903771.png","aeb4fb7f9e44d5428b46db2ef5f58eb8"],["/posts/25396/image-20200515195209340.png","22978e93b749e7eebcc3cc63327c3c96"],["/posts/25396/image-20200515200355611.png","5caf04a888375ccd6a2ff2e8bfd908f0"],["/posts/25396/image-20200515201112827.png","ce6132975eea9a1128a4efa3513582dd"],["/posts/25396/image-20200516222500714.png","70a7e1e585bcc0d3a0966ba304c006ff"],["/posts/25396/image-20200517170054604.png","73e1c8306391defec040b07cc0569be1"],["/posts/25396/image-20200517170527296.png","fe7d7f953761eaed529889cfb2291268"],["/posts/25396/image-20200517170949578.png","a910ed84e3df25339a454fc298e784e3"],["/posts/25396/image-20200517171011384.png","09980fef34197bfb4c848a5b86f5baa4"],["/posts/25396/image-20200517171353373.png","40fa46a10da30d5bc6261b9f04a139ea"],["/posts/25396/image-20200517172727084.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517172730649.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517173246459.png","cc6fdd185c05cbcd37fec0e852a611f6"],["/posts/25396/image-20200517174357885.png","28b1a5ed29591f10935c219a4fc5f282"],["/posts/25396/image-20200517174420239.png","e3494f720f9ff930ae6b13bf9ae42e9c"],["/posts/25396/image-20200517175435773.png","e544deb938716d4857cf2f62be5a8d34"],["/posts/25396/image-20200517175844957.png","c2cc7cff6d3557a4b0c88fc21b68e778"],["/posts/25396/image-20200517180546503.png","8ed3df0a1627da082e53d874b2485122"],["/posts/25396/image-20200521215626753.png","15342c03b327bb77eddb3816b648b5a0"],["/posts/25396/image-20200522124822493.png","e72575193d58cb0a325354a47aca5381"],["/posts/25396/image-20200522212021634.png","d0cefd4e019f433a4cc980e8165cb449"],["/posts/25396/index.html","25cbcfde43b7e863657e475f4a6c4ea8"],["/posts/26259/index.html","39a10e482bc2c0417aa22e81d861f8a5"],["/posts/29333/index.html","1c45b1908c182b9350eebce24559e8ca"],["/posts/3112011529/index.html","4125d44e4c75283a97f4e30dabb6a3ee"],["/posts/3120427724/index.html","2f1f15887b6bde68019a94b79f2762e8"],["/posts/3155752545/image-20200604155255484.png","cb09cc3688945161d5551a351f7ca824"],["/posts/3155752545/index.html","581f12ad32a6ed6d71ed2c2e37e1d119"],["/posts/31683/index.html","fc5367f77f67d936f7fd1aafea03a71e"],["/posts/3261239934/index.html","f2271633efc172d62476c73d0c486784"],["/posts/34782/index.html","d2c40e8487e14ae51f4edd52a5147e09"],["/posts/3661501281/index.html","420b7217e0db8c9351bc44956fba6024"],["/posts/3984882913/index.html","362c42b5fddcbf1972906c8526a0ce1c"],["/posts/41739/image-20200525194743301.png","3e1e9e22cc72305d7a71885996a99f3e"],["/posts/41739/image-20200525194905458.png","8d2a09b63c675cc633c979653a4a100e"],["/posts/41739/image-20200525195035039.png","e7318b93cac9719578ba39bebd579444"],["/posts/41739/image-20200525195113526.png","cd30d10151c984d8e8c60a8916522e6a"],["/posts/41739/image-20200525195141092.png","3bc1bf5b4d4f147cae614eed5e873a07"],["/posts/41739/image-20200525195257690.png","b768e2e882628840dbfb8b5dbeccc6af"],["/posts/41739/image-20200526095527277.png","b8eb6f65e585ab1524fb0b052c0e1916"],["/posts/41739/image-20200526101428664.png","3a1e5873e8932a3ac399b1cdda8b22a9"],["/posts/41739/image-20200526101532280.png","128d6ec7d72d31861c50ca5cf16063c9"],["/posts/41739/image-20200526101637132.png","6eeddcc05075deec6fbf3900f075741f"],["/posts/41739/image-20200526102133363.png","74ee6450821d9908b8b6c3592d452df1"],["/posts/41739/image-20200526103909262.png","d5f5f0426cf61ee59c449e1ad6474fe2"],["/posts/41739/image-20200526104513794.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104526805.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104759021.png","bcb4a45d1bdf7f10d88acf9497618d06"],["/posts/41739/image-20200526105146033.png","4b7e752ff2ab5deb9e227e526f0a5a1d"],["/posts/41739/image-20200526105325301.png","9438ecd08715fbb97481ec6e941167a5"],["/posts/41739/image-20200526105538621.png","fd6e4d7a4df4abf522548a3db4424a7d"],["/posts/41739/image-20200526110122986.png","ab3ad4b11caa1e63b1023356df8b1b94"],["/posts/41739/image-20200526110943364.png","0a74d3071743f10469f7d3515ba67a33"],["/posts/41739/image-20200526142911511.png","6ea294c5f1457cf1a1fb03ce0279dab9"],["/posts/41739/image-20200526154923596.png","1df86ad0b07c69385b3a9dd298a1c397"],["/posts/41739/image-20200526155002906.png","5ef9c86c75348bf000142a57119aff0b"],["/posts/41739/image-20200526155021754.png","787291b1ed33b376fe6ae13b2bef0178"],["/posts/41739/image-20200526155102089.png","67d74968316983b19ea67313ba12dab3"],["/posts/41739/image-20200526155116682.png","0e95b3f550c9a64a22f1c8a0283b82a1"],["/posts/41739/image-20200526155131075.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155136600.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155710071.png","f1d3fb40eac9fc2d34e726b675d25a8c"],["/posts/41739/image-20200526160938838.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526160941638.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526161439575.png","8ce48af513e1c5f8493dd9af102d991e"],["/posts/41739/image-20200526161548429.png","8f03bfcdfd7658418bc1b2dd659decec"],["/posts/41739/index.html","71618244c13182e35c78f66360f0a2cc"],["/posts/47733/index.html","fe54d79e8326b23ac368b5bb46d7c712"],["/posts/48141/index.html","8dd1559b4283bdec28288120cd7fac2c"],["/posts/49984/index.html","635d7b98b1068c61de59e483ce5739c3"],["/posts/56512/index.html","dca8c7d66bf0796eac2402b2ec77e3eb"],["/posts/59764/index.html","1efb8cf58d312696d9db2b5feab82f97"],["/posts/709269996/index.html","0318b99a4274d0a63dda124e34e94989"],["/posts/961488241/index.html","cd9fde8bf4676ee402a4d9f20408fdf0"],["/shuoshuo/index.html","62ed8069632a044c2f0005cad42f6455"],["/sw-register.js","ee062464e2b870facf9667d0818ca623"],["/tags/Butterfly/index.html","a755f5b7ec0c74acaebe3c169b6fd54a"],["/tags/Git/index.html","2853320fa1ad6e5853057fa5f24b1522"],["/tags/IDEA/index.html","4abd3034c49ab5e797b3c66d92666e5d"],["/tags/Maven/index.html","847fdc252d0bdf880b63011a66ab3f70"],["/tags/MySQL/index.html","0ea1c864146cc192ae4cc414b645098e"],["/tags/SpringBoot/index.html","b7565997876a48d300f9c9cd27f062e7"],["/tags/SpringSecurity/index.html","bfe8af44b109c6e8e9be92e45bdf6fe0"],["/tags/Swagger/index.html","0abe90b95a358c43b6499f5fff0dde6f"],["/tags/emoji/index.html","453bd33982d99fa1b8142e36d991f95e"],["/tags/hexo/index.html","a90239d90808842a45011f582cb3aa7a"],["/tags/index.html","14fd5be6314c32bf8885fa38a8a82c37"],["/tags/linux/index.html","21c6d906cc904ab4ed33765fa3072b73"],["/tags/判断/index.html","b28e01a5777a07ca75b07f203f321ed1"],["/tags/图表/index.html","04499fcd7fa4d675360fdcaae2e86acf"],["/tags/排序/index.html","0028d5bd7c5a7454d35e36324ee9ccf4"],["/tags/数据库设计/index.html","9efc7857f51c5a10e8e17357e5fcc1b1"],["/tags/记录/index.html","3ce9bfb67bda11edb65a76ff08af6c08"],["/tags/面向对象/index.html","d0d456b3e37713fa858928213a7cb8fd"]];
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
