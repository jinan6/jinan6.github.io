/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2b0b8c0efadacefc7533ebfb3176c8b2"],["/Me/index.html","7ab3c7055dc11bed871856e61a944f99"],["/about/index.html","f04c0b2d50270125faeb9c911e1d5582"],["/archives/2020/05/index.html","f0438bc1976792eb57ede7fd9a8e8dd2"],["/archives/2020/05/page/2/index.html","0fc681ddde1d2b4864796e225668dc41"],["/archives/2020/06/index.html","743a1ce988c2ebaeb12c46dc3b5da5c8"],["/archives/2020/06/page/2/index.html","35cda778a62ca4c5ac9830b97758cd6d"],["/archives/2020/index.html","a59865e93801de504dcbe8e7a2c76e29"],["/archives/2020/page/2/index.html","a17bee2332cd7c4066741329ddd99fdc"],["/archives/2020/page/3/index.html","a797de66aa9120186ea3ae9712479317"],["/archives/index.html","357f02cf8ffbfbf51df0c2ac690a7ca3"],["/archives/page/2/index.html","64b9a20f0a4787db20ba11dcf2c2f389"],["/archives/page/3/index.html","a144c14d3ad7d9f7d92abdfb65f19d6a"],["/board/index.html","fc9c76e3b08b58ddfa5413a64d6fe6ec"],["/categories/Git/index.html","20f162a09b33cb6d3b52b9fb589536bd"],["/categories/Hexo/Butterfly/index.html","7d4b9c87f1e3299d91d8d8983fa42b98"],["/categories/Hexo/Next/index.html","83ffbdab12e701697de52f1196f28aa0"],["/categories/Hexo/index.html","2a7f8d83a461c5a511c727dfe30e49cc"],["/categories/Hexo/备份/index.html","1fe17b6ec067ef495c44aab28e7dce45"],["/categories/IDEA/index.html","da2280aed5f06882ea64f9bee05d86e8"],["/categories/Maven/index.html","1acffe42f39ce4ea60207ca129d83e8d"],["/categories/MySQL/index.html","3658c5596b241035703fcf298bfa07ac"],["/categories/MySQL/优化/index.html","44362b956399a28033604bfe42c1cf1a"],["/categories/MySQL/引擎/index.html","667bf7391a403e4384001833325b0b75"],["/categories/SpringBoot/SpringSecurity/index.html","9e86c5950d20ec76da62f0d2c5332ed6"],["/categories/SpringBoot/Swagger/index.html","7f72e0ab8a8929cc1baf815f0c8bd205"],["/categories/SpringBoot/index.html","dcf9b360892f093ebfe95134128db4d2"],["/categories/Vue/index.html","fa2c211d8c879aefe4e65aacf462eb61"],["/categories/ajax/index.html","b4c082179340cbf19db20a3a852d3c31"],["/categories/emoji/index.html","cd9053501221c51259a0f1cbad5fd45d"],["/categories/index.html","5f7c3b39bd41b230dcac944db71900b8"],["/categories/linux/index.html","b0345816607cf799b0ca9fa967c15fad"],["/categories/数据库设计/index.html","6c1769daafdf6885f44fda9898d60130"],["/categories/记录/index.html","a0550f5d80f88df56a17cf96a0ea70d0"],["/categories/面向对象/index.html","5762689f63f9b342fa06fc837eabed71"],["/css/index.css","4ad82aff241c8792fbb8f04ec659375f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.png","c9656983e0141c4d2301d6a217961667"],["/img/avatar.png","a1548b3252b0e3c47adcfd56d98bfb69"],["/img/favicon-16x16-next.png","efc289a0f524cbeae804e301feeb56cd"],["/img/favicon-32x32-next.png","efc289a0f524cbeae804e301feeb56cd"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wechatpay.png","bfa7e10082cdfbf206c5127311f2a40c"],["/index.html","c6280be0118ca19a96c0828263e4031c"],["/js/main.js","b382597891e958e71bb7c1099977ec66"],["/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/link/index.html","d6c8fd9cf029b545efbc2dd702e94a93"],["/live2d-widget/README.html","40084855aa2d27f51196c97a1e94e288"],["/live2d-widget/autoload.js","571c24635fd1c65c23eba18cd36b95d2"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","461b411964bae6f2eed70ea22a09676a"],["/live2d-widget/waifu.css","1d73612a779f1f03a163d41a45cee87b"],["/music/index.html","98757655eb1d0d0a04e050c7206c17dc"],["/page/2/index.html","be7aacb43066a70b61da4fbe911ad2e7"],["/page/3/index.html","8eeaa7942fea5b989ed99e9dc758f9e1"],["/page/4/index.html","c433fb85702c423ff821ea7daa662f74"],["/posts/13258/index.html","2f5ad92d51f122e67f8bb8ef461e9e77"],["/posts/1359691355/index.html","00958f7e6ae38baee6825fde6e91fdeb"],["/posts/14324/index.html","e49de3c75a52abbe824bd72e74633201"],["/posts/14393/index.html","513ff4bb3fbad9a807eaf8eb428f5e50"],["/posts/1553907357/index.html","d98aad6cd479f27805a9eb2324537804"],["/posts/1864766114/index.html","e82659c636e7eb49b677de5b263f4165"],["/posts/2352548230/index.html","bf20cc68c33d3b74e14bd06ef0237d64"],["/posts/25396/image-20200515193027529.png","1dfa8c2ba2a3af4cbf70db66ad8cbcd9"],["/posts/25396/image-20200515193212898.png","0df8195d2fa50cb023d83a943a75e2b9"],["/posts/25396/image-20200515193240630.png","177e009c0429cb3a7254b1c7d682c2aa"],["/posts/25396/image-20200515193903771.png","aeb4fb7f9e44d5428b46db2ef5f58eb8"],["/posts/25396/image-20200515195209340.png","22978e93b749e7eebcc3cc63327c3c96"],["/posts/25396/image-20200515200355611.png","5caf04a888375ccd6a2ff2e8bfd908f0"],["/posts/25396/image-20200515201112827.png","ce6132975eea9a1128a4efa3513582dd"],["/posts/25396/image-20200516222500714.png","70a7e1e585bcc0d3a0966ba304c006ff"],["/posts/25396/image-20200517170054604.png","73e1c8306391defec040b07cc0569be1"],["/posts/25396/image-20200517170527296.png","fe7d7f953761eaed529889cfb2291268"],["/posts/25396/image-20200517170949578.png","a910ed84e3df25339a454fc298e784e3"],["/posts/25396/image-20200517171011384.png","09980fef34197bfb4c848a5b86f5baa4"],["/posts/25396/image-20200517171353373.png","40fa46a10da30d5bc6261b9f04a139ea"],["/posts/25396/image-20200517172727084.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517172730649.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517173246459.png","cc6fdd185c05cbcd37fec0e852a611f6"],["/posts/25396/image-20200517174357885.png","28b1a5ed29591f10935c219a4fc5f282"],["/posts/25396/image-20200517174420239.png","e3494f720f9ff930ae6b13bf9ae42e9c"],["/posts/25396/image-20200517175435773.png","e544deb938716d4857cf2f62be5a8d34"],["/posts/25396/image-20200517175844957.png","c2cc7cff6d3557a4b0c88fc21b68e778"],["/posts/25396/image-20200517180546503.png","8ed3df0a1627da082e53d874b2485122"],["/posts/25396/image-20200521215626753.png","15342c03b327bb77eddb3816b648b5a0"],["/posts/25396/image-20200522124822493.png","e72575193d58cb0a325354a47aca5381"],["/posts/25396/image-20200522212021634.png","d0cefd4e019f433a4cc980e8165cb449"],["/posts/25396/index.html","39d7e9a7e6ebfe398672ddf04e5666d3"],["/posts/26259/index.html","7a0882769ec22e34071c654377fedf6f"],["/posts/29333/index.html","c7adcd53e81cd57602abd1fe96ac0642"],["/posts/3112011529/index.html","04289cf84fc3d784a66cbe38850ca231"],["/posts/3120427724/index.html","f5636a4248fa28f9f3e110e4a031cc0c"],["/posts/3155752545/image-20200604155255484.png","cb09cc3688945161d5551a351f7ca824"],["/posts/3155752545/index.html","9802361688c4a61f8c381c2db017b6d4"],["/posts/31683/index.html","1647231865422b1807982ee05d541bd9"],["/posts/3261239934/index.html","b088730c433387520f33b69cf5ca1a3f"],["/posts/34782/index.html","9c826a37a861f997d18450854ffaa769"],["/posts/3661501281/index.html","429550e23778cbc762652c17dec6bb2d"],["/posts/3984882913/index.html","158eecfe434c3a5d89f2e26aefa17154"],["/posts/41739/image-20200525194743301.png","3e1e9e22cc72305d7a71885996a99f3e"],["/posts/41739/image-20200525194905458.png","8d2a09b63c675cc633c979653a4a100e"],["/posts/41739/image-20200525195035039.png","e7318b93cac9719578ba39bebd579444"],["/posts/41739/image-20200525195113526.png","cd30d10151c984d8e8c60a8916522e6a"],["/posts/41739/image-20200525195141092.png","3bc1bf5b4d4f147cae614eed5e873a07"],["/posts/41739/image-20200525195257690.png","b768e2e882628840dbfb8b5dbeccc6af"],["/posts/41739/image-20200526095527277.png","b8eb6f65e585ab1524fb0b052c0e1916"],["/posts/41739/image-20200526101428664.png","3a1e5873e8932a3ac399b1cdda8b22a9"],["/posts/41739/image-20200526101532280.png","128d6ec7d72d31861c50ca5cf16063c9"],["/posts/41739/image-20200526101637132.png","6eeddcc05075deec6fbf3900f075741f"],["/posts/41739/image-20200526102133363.png","74ee6450821d9908b8b6c3592d452df1"],["/posts/41739/image-20200526103909262.png","d5f5f0426cf61ee59c449e1ad6474fe2"],["/posts/41739/image-20200526104513794.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104526805.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104759021.png","bcb4a45d1bdf7f10d88acf9497618d06"],["/posts/41739/image-20200526105146033.png","4b7e752ff2ab5deb9e227e526f0a5a1d"],["/posts/41739/image-20200526105325301.png","9438ecd08715fbb97481ec6e941167a5"],["/posts/41739/image-20200526105538621.png","fd6e4d7a4df4abf522548a3db4424a7d"],["/posts/41739/image-20200526110122986.png","ab3ad4b11caa1e63b1023356df8b1b94"],["/posts/41739/image-20200526110943364.png","0a74d3071743f10469f7d3515ba67a33"],["/posts/41739/image-20200526142911511.png","6ea294c5f1457cf1a1fb03ce0279dab9"],["/posts/41739/image-20200526154923596.png","1df86ad0b07c69385b3a9dd298a1c397"],["/posts/41739/image-20200526155002906.png","5ef9c86c75348bf000142a57119aff0b"],["/posts/41739/image-20200526155021754.png","787291b1ed33b376fe6ae13b2bef0178"],["/posts/41739/image-20200526155102089.png","67d74968316983b19ea67313ba12dab3"],["/posts/41739/image-20200526155116682.png","0e95b3f550c9a64a22f1c8a0283b82a1"],["/posts/41739/image-20200526155131075.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155136600.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155710071.png","f1d3fb40eac9fc2d34e726b675d25a8c"],["/posts/41739/image-20200526160938838.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526160941638.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526161439575.png","8ce48af513e1c5f8493dd9af102d991e"],["/posts/41739/image-20200526161548429.png","8f03bfcdfd7658418bc1b2dd659decec"],["/posts/41739/index.html","5da8609639a15a037e3ffdb76648ec3e"],["/posts/47733/index.html","247d018ac7f162a9e44538260d8375d3"],["/posts/48141/index.html","5beb6a3f9dbf81ebc87d7c60a3b3bed5"],["/posts/49984/index.html","53c7775ab1f0f5519ed595ad44f9bb97"],["/posts/56512/index.html","df12cc2b3eedb0996ddbc2303fd65b3a"],["/posts/59764/index.html","67d262f920d5b1bc2960e6100e6a203b"],["/posts/709269996/index.html","c2c713474b3038c317d959e98767d821"],["/posts/961488241/index.html","84511fd319712bec8f919a1d5a80094d"],["/shuoshuo/index.html","f0f4284543033f51c82d45e59a1c8243"],["/sw-register.js","d0e92f802d693cd7d2bf171a300ffe41"],["/tags/Butterfly/index.html","c90600dba5e1e3f0d487f510ce942412"],["/tags/Git/index.html","9fe003aec5b7fddf76868f41e75e763f"],["/tags/IDEA/index.html","2148240931af3a213b7b8cfbc5a99e14"],["/tags/Maven/index.html","56cd308ad584f063e1709d23c7cc04ab"],["/tags/MySQL/index.html","4552b96285b2e92c8d42819d74d5c3bc"],["/tags/SpringBoot/index.html","4eb10968058516f49236e6454a01aa48"],["/tags/SpringSecurity/index.html","343ef6870c601cbd6bcc6b8942083826"],["/tags/Swagger/index.html","3cbcb9228a1b58ba9517af77a8c05e57"],["/tags/emoji/index.html","ee95e40be03de0c92d9745e3b0dc8b22"],["/tags/hexo/index.html","8ca51c9f7b2d54415fddbb609949273a"],["/tags/index.html","a40600e6fa32f73b830931bd8c9afec0"],["/tags/linux/index.html","53804788af1339038fa72f4b574f967e"],["/tags/判断/index.html","2fa420a7a4db1b24007f592f8677e781"],["/tags/图表/index.html","453e92cf6ed59dc16aa95beb3cfc5e11"],["/tags/排序/index.html","9ad05ebaf8d33674b6c77f2012b0cdef"],["/tags/数据库设计/index.html","5074d2979ae4f21df61ae01859c60e56"],["/tags/记录/index.html","f98b86b95d996e2f8910ada8926e9632"],["/tags/面向对象/index.html","597e4c8f57b9de1dc258bd9c7b290f45"]];
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
