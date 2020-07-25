/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b13e99e1d6dd578c9965387c1fced66f"],["/Me/index.html","79eaff3a3c54053580646d9f0931cff3"],["/about/index.html","b4f54161fbda040bf51315f4d4139449"],["/archives/2020/05/index.html","617422799b9227f885085caad7ed9a7e"],["/archives/2020/05/page/2/index.html","f27431d8c19d5e36c18cbd270ce1bb04"],["/archives/2020/06/index.html","b813ecf2106a83c10e6b8d54987c9499"],["/archives/2020/06/page/2/index.html","7a4aca823586c3b65dd1b94270800285"],["/archives/2020/index.html","d529798d83a69f40e7cd5980b2a245bd"],["/archives/2020/page/2/index.html","19e78d6c62fe2deea601afb7e5b9f82e"],["/archives/2020/page/3/index.html","17d17b887007765180197d7033b923c7"],["/archives/index.html","466a65596ccc01fcae7247be9ea58541"],["/archives/page/2/index.html","aa9df047995e18ac20448d10e1571319"],["/archives/page/3/index.html","d078686108ec27566bf91329096303a5"],["/bangumis/index.html","e9781335644de88136a7ee110ee798fd"],["/board/index.html","d5b11a94bdc1ff0b08a8af3c545f0e46"],["/categories/Git/index.html","0e28eaa197cf90ff772b9ed774557317"],["/categories/Hexo/Butterfly/index.html","c2e60a853a5e6d015692e5f40eccac55"],["/categories/Hexo/Next/index.html","03e2e42673cbeb04f25fcb5c836ead77"],["/categories/Hexo/index.html","1acc3337e0274b388bb41b9a6cfdb739"],["/categories/Hexo/备份/index.html","ae4806c365384596389d509063d31410"],["/categories/IDEA/index.html","20560e70310c53cea9160cb66e4e3fbd"],["/categories/Maven/index.html","774a084bfa79a124755a5d043bf6c781"],["/categories/MySQL/index.html","7a9fd2aec92a1e1ec9c12a7b138ed567"],["/categories/MySQL/优化/index.html","8ecb9bbfd55aa038d118270a0c5a980f"],["/categories/MySQL/引擎/index.html","eb01506139c37bf976b9557a26d68d1f"],["/categories/SpringBoot/SpringSecurity/index.html","7a3a55fbf89f62aef7a819defa6e33fa"],["/categories/SpringBoot/Swagger/index.html","ae14faefdc65f19559ad9fc9463eaa2e"],["/categories/SpringBoot/index.html","17de4428a2343630d39611e92c15aae2"],["/categories/Vue/index.html","d463a30b5ef30af9884f9d75c81ebee2"],["/categories/ajax/index.html","988a6ef63bb959c14aa2fa87b7188bc7"],["/categories/emoji/index.html","a077cdd92082ec9c0ac00f4be0557830"],["/categories/index.html","5671daf67e253e5a7576fbb0893f81b7"],["/categories/linux/index.html","adfff8731215a5c41c62d6f7d21ae49d"],["/categories/数据库设计/index.html","7e97bf542ef9e0a5032719328c244673"],["/categories/记录/index.html","4418d04a6a48b6213f80c92914740095"],["/categories/面向对象/index.html","adddd62f38399cd83c5b1ca0a59c5950"],["/css/index.css","5fd834c03cafa4e0ac610630dba23e67"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.png","c9656983e0141c4d2301d6a217961667"],["/img/avatar.png","a1548b3252b0e3c47adcfd56d98bfb69"],["/img/favicon-16x16-next.png","efc289a0f524cbeae804e301feeb56cd"],["/img/favicon-32x32-next.png","efc289a0f524cbeae804e301feeb56cd"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wechatpay.png","bfa7e10082cdfbf206c5127311f2a40c"],["/index.html","a199f7cc10e9122929b642ec7477dbc0"],["/js/main.js","b382597891e958e71bb7c1099977ec66"],["/js/music.js","78b406ec883d52229a2ec4d6311bc115"],["/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/link/index.html","50e765f74a6db92aa6bde177b5355b0e"],["/live2d-widget/README.html","40084855aa2d27f51196c97a1e94e288"],["/live2d-widget/autoload.js","8ba3104684304b821e2a4c9a5124e513"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","b4cca0f4f012c977db26f0f7efa6df73"],["/live2d-widget/waifu.css","1d73612a779f1f03a163d41a45cee87b"],["/music/index.html","67b3284432620d1e2314129e881917ef"],["/page/2/index.html","97bd67f4bb5a7dd58439b8705eac898e"],["/page/3/index.html","a1e77cc222fc386db26c1889f84385a7"],["/page/4/index.html","550bd8f8b91c563123dab5bdd5ee7b06"],["/posts/13258/index.html","61800d2f2f208d85b28b3f89dc8fb7c0"],["/posts/1359691355/index.html","835983a21540769ebd8792f13642061b"],["/posts/14324/index.html","de1af9002d60faf043715e4f129ee577"],["/posts/14393/index.html","250f772e397828e8b2a58cc65dd050d0"],["/posts/1553907357/index.html","7d63fdd2b40e18d86c8a4c7130ae3965"],["/posts/1864766114/index.html","e5a4933e865292b28b8a9b400bd89266"],["/posts/2352548230/index.html","1c2190dcb42f2f1c8d9411f81267b49e"],["/posts/25396/image-20200515193027529.png","1dfa8c2ba2a3af4cbf70db66ad8cbcd9"],["/posts/25396/image-20200515193212898.png","0df8195d2fa50cb023d83a943a75e2b9"],["/posts/25396/image-20200515193240630.png","177e009c0429cb3a7254b1c7d682c2aa"],["/posts/25396/image-20200515193903771.png","aeb4fb7f9e44d5428b46db2ef5f58eb8"],["/posts/25396/image-20200515195209340.png","22978e93b749e7eebcc3cc63327c3c96"],["/posts/25396/image-20200515200355611.png","5caf04a888375ccd6a2ff2e8bfd908f0"],["/posts/25396/image-20200515201112827.png","ce6132975eea9a1128a4efa3513582dd"],["/posts/25396/image-20200516222500714.png","70a7e1e585bcc0d3a0966ba304c006ff"],["/posts/25396/image-20200517170054604.png","73e1c8306391defec040b07cc0569be1"],["/posts/25396/image-20200517170527296.png","fe7d7f953761eaed529889cfb2291268"],["/posts/25396/image-20200517170949578.png","a910ed84e3df25339a454fc298e784e3"],["/posts/25396/image-20200517171011384.png","09980fef34197bfb4c848a5b86f5baa4"],["/posts/25396/image-20200517171353373.png","40fa46a10da30d5bc6261b9f04a139ea"],["/posts/25396/image-20200517172727084.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517172730649.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517173246459.png","cc6fdd185c05cbcd37fec0e852a611f6"],["/posts/25396/image-20200517174357885.png","28b1a5ed29591f10935c219a4fc5f282"],["/posts/25396/image-20200517174420239.png","e3494f720f9ff930ae6b13bf9ae42e9c"],["/posts/25396/image-20200517175435773.png","e544deb938716d4857cf2f62be5a8d34"],["/posts/25396/image-20200517175844957.png","c2cc7cff6d3557a4b0c88fc21b68e778"],["/posts/25396/image-20200517180546503.png","8ed3df0a1627da082e53d874b2485122"],["/posts/25396/image-20200521215626753.png","15342c03b327bb77eddb3816b648b5a0"],["/posts/25396/image-20200522124822493.png","e72575193d58cb0a325354a47aca5381"],["/posts/25396/image-20200522212021634.png","d0cefd4e019f433a4cc980e8165cb449"],["/posts/25396/index.html","157dd901672b135412c36ac5b4b20eb3"],["/posts/26259/index.html","7ec240e1541117e32459a1b08d7c3a0b"],["/posts/29333/index.html","5c41fc832436cac81bf35e28a0932fe6"],["/posts/3112011529/index.html","5fc7509bb9fadd4ed268a5bd9e24583c"],["/posts/3120427724/index.html","b70f2ac58c0530cc137911a9fdddee3f"],["/posts/3155752545/image-20200604155255484.png","cb09cc3688945161d5551a351f7ca824"],["/posts/3155752545/index.html","e98d48254513186dc2a418c39bde0367"],["/posts/31683/index.html","785bfe67a2d154b362a6b36ad37d2518"],["/posts/3261239934/index.html","98e0b4c5100a4c6625360c9b6eb2b940"],["/posts/34782/index.html","5dce86e1878563f848ec50792fb3fc02"],["/posts/3661501281/index.html","77d30506361f03248c4dbf857e083aa9"],["/posts/3984882913/index.html","2f9541bdd91031246b9be5000ed21d5d"],["/posts/41739/image-20200525194743301.png","3e1e9e22cc72305d7a71885996a99f3e"],["/posts/41739/image-20200525194905458.png","8d2a09b63c675cc633c979653a4a100e"],["/posts/41739/image-20200525195035039.png","e7318b93cac9719578ba39bebd579444"],["/posts/41739/image-20200525195113526.png","cd30d10151c984d8e8c60a8916522e6a"],["/posts/41739/image-20200525195141092.png","3bc1bf5b4d4f147cae614eed5e873a07"],["/posts/41739/image-20200525195257690.png","b768e2e882628840dbfb8b5dbeccc6af"],["/posts/41739/image-20200526095527277.png","b8eb6f65e585ab1524fb0b052c0e1916"],["/posts/41739/image-20200526101428664.png","3a1e5873e8932a3ac399b1cdda8b22a9"],["/posts/41739/image-20200526101532280.png","128d6ec7d72d31861c50ca5cf16063c9"],["/posts/41739/image-20200526101637132.png","6eeddcc05075deec6fbf3900f075741f"],["/posts/41739/image-20200526102133363.png","74ee6450821d9908b8b6c3592d452df1"],["/posts/41739/image-20200526103909262.png","d5f5f0426cf61ee59c449e1ad6474fe2"],["/posts/41739/image-20200526104513794.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104526805.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104759021.png","bcb4a45d1bdf7f10d88acf9497618d06"],["/posts/41739/image-20200526105146033.png","4b7e752ff2ab5deb9e227e526f0a5a1d"],["/posts/41739/image-20200526105325301.png","9438ecd08715fbb97481ec6e941167a5"],["/posts/41739/image-20200526105538621.png","fd6e4d7a4df4abf522548a3db4424a7d"],["/posts/41739/image-20200526110122986.png","ab3ad4b11caa1e63b1023356df8b1b94"],["/posts/41739/image-20200526110943364.png","0a74d3071743f10469f7d3515ba67a33"],["/posts/41739/image-20200526142911511.png","6ea294c5f1457cf1a1fb03ce0279dab9"],["/posts/41739/image-20200526154923596.png","1df86ad0b07c69385b3a9dd298a1c397"],["/posts/41739/image-20200526155002906.png","5ef9c86c75348bf000142a57119aff0b"],["/posts/41739/image-20200526155021754.png","787291b1ed33b376fe6ae13b2bef0178"],["/posts/41739/image-20200526155102089.png","67d74968316983b19ea67313ba12dab3"],["/posts/41739/image-20200526155116682.png","0e95b3f550c9a64a22f1c8a0283b82a1"],["/posts/41739/image-20200526155131075.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155136600.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155710071.png","f1d3fb40eac9fc2d34e726b675d25a8c"],["/posts/41739/image-20200526160938838.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526160941638.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526161439575.png","8ce48af513e1c5f8493dd9af102d991e"],["/posts/41739/image-20200526161548429.png","8f03bfcdfd7658418bc1b2dd659decec"],["/posts/41739/index.html","cf9e2b8e9bbbcbc0550e6c39cffdfaba"],["/posts/47733/index.html","5d056d1de58ea5256f6991552f83230c"],["/posts/48141/index.html","6cecf9c5bc06f8f4d813646678d8c543"],["/posts/49984/index.html","3beadae65cbcdb9d17f87e60ae3693d2"],["/posts/56512/index.html","3efba590e5641faabecaaf80b08241b8"],["/posts/59764/index.html","dcecc1940c95d7b1898654cd1c45a7ce"],["/posts/709269996/index.html","6156a18922b6f359438b3296f9dcfb3a"],["/posts/961488241/index.html","e26f1c4e33987393d453045b49e38500"],["/shuoshuo/index.html","5823cad5b915f92800f00fcff3d7e170"],["/sw-register.js","c02e705940c29423239336a068589f2f"],["/tags/Butterfly/index.html","09f3bc68e6769282e4f58d15a3c26ce5"],["/tags/Git/index.html","b1c27991eea286a35bab719d737d5a18"],["/tags/IDEA/index.html","27ac792355ac159f5e5bcce3e75a794a"],["/tags/Maven/index.html","d429cc7d2b0897f970b7bb51d4388d3a"],["/tags/MySQL/index.html","e195fe483f417a8ba38202615925c89a"],["/tags/SpringBoot/index.html","6047b4aabff085270801e1841cdedea5"],["/tags/SpringSecurity/index.html","1d4cf78c72801961788ae84f6091a2c5"],["/tags/Swagger/index.html","8c980505053821e1c4c836483bcffd4b"],["/tags/emoji/index.html","433317ef5a17e1dedaca2f1b2db0b4f2"],["/tags/hexo/index.html","bcebf783eac7d81dce2f24c6e9ee078d"],["/tags/index.html","83608133e88649ccf361ff1d757c8bc8"],["/tags/linux/index.html","70919bb4adf89c8ef9ff71739051a219"],["/tags/判断/index.html","c0fc59ade448bb255d7e4eaeccfc4fee"],["/tags/图表/index.html","9db4f6d9cd72984dec090c3a26cd06e5"],["/tags/排序/index.html","b39ca65223ee29885cecce1a79c3dcf4"],["/tags/数据库设计/index.html","84f10d149c9fe7d0a71a38c21e0681be"],["/tags/记录/index.html","5c3a77f8f519b88ca0e5b27c99fd60cb"],["/tags/面向对象/index.html","07b6f96fbaadf846e2ad9e02fc7e3858"]];
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
