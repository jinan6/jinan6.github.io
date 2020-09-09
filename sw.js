/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7a2551f246ca45f2d42503e25fd9ee8f"],["/Me/index.html","663563fbb3275165017202c867aefce5"],["/about/index.html","2407ba85bbb26950ddb5ee5813d4c429"],["/archives/2020/05/index.html","60a89880a3c501c17a291ca06e3f2e73"],["/archives/2020/05/page/2/index.html","bb8f654727e9f49fa3ffb00e76d9eed3"],["/archives/2020/06/index.html","febd64905add4b117606bb5730d6135a"],["/archives/2020/06/page/2/index.html","607bd0b49d67b733942cd9cf2b4a54a8"],["/archives/2020/07/index.html","e7b445c7c430eae659aeb55060955f5a"],["/archives/2020/08/index.html","28f7dfa64570b51b823e65b93a2f5b1a"],["/archives/2020/09/index.html","045a47492ce2b22839a0e69bb1c771f8"],["/archives/2020/index.html","e3b57998868a81764485f272e27642bb"],["/archives/2020/page/2/index.html","0b75c9c21c365941e3144d0fa205fa58"],["/archives/2020/page/3/index.html","26c193ad91538b6a4aadaa1f4ac61bfb"],["/archives/2020/page/4/index.html","99b2cde37934a9cd943bf061718a71f2"],["/archives/index.html","c335fe3ce6dca0ebed270ba6adb7df84"],["/archives/page/2/index.html","40a584a691d7902b12486803bac69544"],["/archives/page/3/index.html","40356fcf7a071b7c8a272ffa6595182e"],["/archives/page/4/index.html","94f27564be2087c14198da9d558063bd"],["/bangumis/index.html","ed3113284d6c4d93d000d295a2bbb9f7"],["/board/index.html","66da7982177ecd7cea50b35bdef6d09a"],["/categories/Git/index.html","1b758c461eea06d9a24d0ea42af59a4f"],["/categories/Hexo/Butterfly/index.html","1b020b03205a7d06ded13d01e252154d"],["/categories/Hexo/Next/index.html","45c49a154a773b8ef996d570c5b09b76"],["/categories/Hexo/index.html","ae10fcc55a2ee7f6bdf888669ae47945"],["/categories/Hexo/备份/index.html","471878d92bab77e6b86717138dc872b1"],["/categories/IDEA/index.html","76d91425b44a6afd169f1ee6a72b634e"],["/categories/Java/index.html","459be09e91cfe915fcec659be4ca2fe9"],["/categories/Maven/index.html","169dc56a592ca31fa480d538120ccdc0"],["/categories/MySQL/index.html","7e635eb20f9b4720b098e6f7282b4058"],["/categories/MySQL/优化/index.html","2f8ecdb2ea8f031d3a1aa78d4ceed1b8"],["/categories/MySQL/引擎/index.html","9a55fe6813a34d4324879e12b507f9f3"],["/categories/Mybatis/index.html","78615f8f2f5f6c7d8adbe42e8bb701f2"],["/categories/Mybatis/记录/index.html","f670a178cc9abd5f0695501103671327"],["/categories/SpringBoot/SpringSecurity/index.html","c0407b03b1b87da46bed0fdb53280ffa"],["/categories/SpringBoot/Swagger/index.html","3cf48a8d02d04412ac9799226d164d2b"],["/categories/SpringBoot/index.html","74e6df6adcdbbe3ff8f95076ceefc56e"],["/categories/Vue/index.html","be5422890f7c8b702f6634e2eebe13a8"],["/categories/ajax/index.html","fbbbfbb24c92f7f66dd9f8c7d760bb84"],["/categories/emoji/index.html","55523ae52c2f5feaa71da57c2a705782"],["/categories/index.html","e1f04c52efc9aa9b1ce684b74e7e3962"],["/categories/linux/index.html","3a867bcada770db8400c00fd0ffc6426"],["/categories/数据库设计/index.html","d67cbdb87faebc118f34c67bc8abc1e3"],["/categories/记录/index.html","8362b270ee1bf74a8275bc425799ebfc"],["/categories/面向对象/index.html","84c81e0416c7237839e52f5619f643c3"],["/css/index.css","8d93e8e3563506014f1de5a08e42ff4d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","36e402ef719d8a6bb1495dbd33da3b6e"],["/js/main.js","b6e408c9b509ce2b80cc5ce998b6502b"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","e8c48f0b23020d975a5e47371d30719f"],["/music/index.html","824a58574ef248747a59fc1b9c419ad6"],["/page/2/index.html","8ce5fe16ea07dc1c6f08b70d779d1737"],["/page/3/index.html","288afe788a6b78cbb405c3dc8b8a1533"],["/page/4/index.html","4d0e7a6e12f035ec3325f64da1cc784c"],["/posts/1124952030/index.html","60d5e25c11f8a9fcaadc0b56c7f15b9f"],["/posts/1321241776/index.html","08f4d4521c65b72d2d624e4b588c0ac2"],["/posts/13258/index.html","0a683df1fcdaa0d7bd253d7cd7c8041d"],["/posts/1359691355/index.html","1541c0ba6b62df7016b6ca72bfb44cae"],["/posts/14324/index.html","60649fa49c21a71e7076ee69af8f55e8"],["/posts/14393/index.html","996bcc02ccead1b0edd6ce2c92de51e0"],["/posts/1553907357/index.html","f5dce3ef795fcdd94d1af38a3a31a26b"],["/posts/1864766114/index.html","9e7fd23c64cd0a20fa3a7a1ea19b593c"],["/posts/2352548230/index.html","46d15f5c627647e59c22887c86e1f678"],["/posts/25396/image-20200515193027529.png","1dfa8c2ba2a3af4cbf70db66ad8cbcd9"],["/posts/25396/image-20200515193212898.png","0df8195d2fa50cb023d83a943a75e2b9"],["/posts/25396/image-20200515193240630.png","177e009c0429cb3a7254b1c7d682c2aa"],["/posts/25396/image-20200515193903771.png","aeb4fb7f9e44d5428b46db2ef5f58eb8"],["/posts/25396/image-20200515195209340.png","22978e93b749e7eebcc3cc63327c3c96"],["/posts/25396/image-20200515200355611.png","5caf04a888375ccd6a2ff2e8bfd908f0"],["/posts/25396/image-20200515201112827.png","ce6132975eea9a1128a4efa3513582dd"],["/posts/25396/image-20200516222500714.png","70a7e1e585bcc0d3a0966ba304c006ff"],["/posts/25396/image-20200517170054604.png","73e1c8306391defec040b07cc0569be1"],["/posts/25396/image-20200517170527296.png","fe7d7f953761eaed529889cfb2291268"],["/posts/25396/image-20200517170949578.png","a910ed84e3df25339a454fc298e784e3"],["/posts/25396/image-20200517171011384.png","09980fef34197bfb4c848a5b86f5baa4"],["/posts/25396/image-20200517171353373.png","40fa46a10da30d5bc6261b9f04a139ea"],["/posts/25396/image-20200517172727084.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517172730649.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517173246459.png","cc6fdd185c05cbcd37fec0e852a611f6"],["/posts/25396/image-20200517174357885.png","28b1a5ed29591f10935c219a4fc5f282"],["/posts/25396/image-20200517174420239.png","e3494f720f9ff930ae6b13bf9ae42e9c"],["/posts/25396/image-20200517175435773.png","e544deb938716d4857cf2f62be5a8d34"],["/posts/25396/image-20200517175844957.png","c2cc7cff6d3557a4b0c88fc21b68e778"],["/posts/25396/image-20200517180546503.png","8ed3df0a1627da082e53d874b2485122"],["/posts/25396/image-20200521215626753.png","15342c03b327bb77eddb3816b648b5a0"],["/posts/25396/image-20200522124822493.png","e72575193d58cb0a325354a47aca5381"],["/posts/25396/image-20200522212021634.png","d0cefd4e019f433a4cc980e8165cb449"],["/posts/25396/index.html","a9e11feea084718b7b33dd55dbd5f0c8"],["/posts/26259/index.html","abe3700d5192b0bb403c304cb49c4604"],["/posts/29333/index.html","c2618c148a815d32dda76bd955e55d8e"],["/posts/3109851417/index.html","0badb0bc0ba4aaff879897ce8353e23f"],["/posts/3112011529/index.html","0cffe72bf63e28fd8ccf7cb8b3fa3cdb"],["/posts/3120427724/index.html","3e0769ba470629d59fc708db9ebfa71b"],["/posts/3155752545/image-20200604155255484.png","cb09cc3688945161d5551a351f7ca824"],["/posts/3155752545/index.html","f14dd2cd049a75f6888ee3a08d760a5e"],["/posts/31683/index.html","80958a31b112bd092b5f3b222d21eedf"],["/posts/3261239934/index.html","c6f1a5c3f2f9e809c5d25ea5a746c5a7"],["/posts/34782/index.html","6354c12b185994b1cdc7daa6d43aa650"],["/posts/3661501281/index.html","49aed3a9e45549254a526fa0da515d2c"],["/posts/3700149003/index.html","a505e185ee253b6d970de2480eeeb331"],["/posts/3984882913/index.html","024cf9d3ef3ccfb93f43215f1929bd8f"],["/posts/41739/image-20200525194743301.png","3e1e9e22cc72305d7a71885996a99f3e"],["/posts/41739/image-20200525194905458.png","8d2a09b63c675cc633c979653a4a100e"],["/posts/41739/image-20200525195035039.png","e7318b93cac9719578ba39bebd579444"],["/posts/41739/image-20200525195113526.png","cd30d10151c984d8e8c60a8916522e6a"],["/posts/41739/image-20200525195141092.png","3bc1bf5b4d4f147cae614eed5e873a07"],["/posts/41739/image-20200525195257690.png","b768e2e882628840dbfb8b5dbeccc6af"],["/posts/41739/image-20200526095527277.png","b8eb6f65e585ab1524fb0b052c0e1916"],["/posts/41739/image-20200526101428664.png","3a1e5873e8932a3ac399b1cdda8b22a9"],["/posts/41739/image-20200526101532280.png","128d6ec7d72d31861c50ca5cf16063c9"],["/posts/41739/image-20200526101637132.png","6eeddcc05075deec6fbf3900f075741f"],["/posts/41739/image-20200526102133363.png","74ee6450821d9908b8b6c3592d452df1"],["/posts/41739/image-20200526103909262.png","d5f5f0426cf61ee59c449e1ad6474fe2"],["/posts/41739/image-20200526104513794.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104526805.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104759021.png","bcb4a45d1bdf7f10d88acf9497618d06"],["/posts/41739/image-20200526105146033.png","4b7e752ff2ab5deb9e227e526f0a5a1d"],["/posts/41739/image-20200526105325301.png","9438ecd08715fbb97481ec6e941167a5"],["/posts/41739/image-20200526105538621.png","fd6e4d7a4df4abf522548a3db4424a7d"],["/posts/41739/image-20200526110122986.png","ab3ad4b11caa1e63b1023356df8b1b94"],["/posts/41739/image-20200526110943364.png","0a74d3071743f10469f7d3515ba67a33"],["/posts/41739/image-20200526142911511.png","6ea294c5f1457cf1a1fb03ce0279dab9"],["/posts/41739/image-20200526154923596.png","1df86ad0b07c69385b3a9dd298a1c397"],["/posts/41739/image-20200526155002906.png","5ef9c86c75348bf000142a57119aff0b"],["/posts/41739/image-20200526155021754.png","787291b1ed33b376fe6ae13b2bef0178"],["/posts/41739/image-20200526155102089.png","67d74968316983b19ea67313ba12dab3"],["/posts/41739/image-20200526155116682.png","0e95b3f550c9a64a22f1c8a0283b82a1"],["/posts/41739/image-20200526155131075.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155136600.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155710071.png","f1d3fb40eac9fc2d34e726b675d25a8c"],["/posts/41739/image-20200526160938838.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526160941638.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526161439575.png","8ce48af513e1c5f8493dd9af102d991e"],["/posts/41739/image-20200526161548429.png","8f03bfcdfd7658418bc1b2dd659decec"],["/posts/41739/index.html","e09850df7cc5972b4435fddc9737733f"],["/posts/47733/index.html","8a31b747b7bbd4e74bf1a67e11927623"],["/posts/48141/index.html","0e465f3c8f0e724edf65d8e09f88081a"],["/posts/49984/index.html","fa9f78bf3b74d3b1374141961c583bc5"],["/posts/56512/index.html","b099c98a069ad9fbc5804b96c9f4ed73"],["/posts/59764/index.html","7d465e30654172c9dc39bf40650b3784"],["/posts/704219325/index.html","c3feb631e3b1f7bb94f4a0e9b283bbd0"],["/posts/709269996/index.html","71c38dd165fa582d04cad72c82fef218"],["/posts/961488241/index.html","fa889369bdc390efda36b43d7655f1be"],["/shuoshuo/index.html","0d43a3a3839695cde55d70aa999de2fd"],["/sw-register.js","e3e4cd43ca2b31f3ac425b115330f330"],["/tags/Butterfly/index.html","9020922c85f19d22d5f3c4c76742b2cd"],["/tags/Git/index.html","ada730f475c2af3cf0e7203a0d46b16d"],["/tags/IDEA/index.html","ab878f173ba35dd1cd0b5b6eb57993af"],["/tags/Java/index.html","71be26360adc5a7c9f4862250551a5a2"],["/tags/Maven/index.html","fd43de03778cfcdec9a0767dc2138604"],["/tags/MySQL/index.html","7ef16e13d3a2a15a0b99f94daeaf1aef"],["/tags/Mybatis/index.html","73c6626c1ce031b09a675b2a6073cbf8"],["/tags/SpringBoot/index.html","ee8c9798ee323a607b2011e62b1aaba6"],["/tags/SpringSecurity/index.html","5f2ab86436c8e501b2ea8f876e49a8c8"],["/tags/Swagger/index.html","4ddbb440a1c6438f2e3851509fe84a4d"],["/tags/emoji/index.html","d1644e439136cf990520235b63abba92"],["/tags/hexo/index.html","d0a27e543f804429d07cb09bde2daf64"],["/tags/index.html","59ba1a314ededc5a7374cc007127663a"],["/tags/linux/index.html","aa7b00373a1e898704d86852709f8377"],["/tags/判断/index.html","fd731fda1e8679cd76a4f709107bcaa8"],["/tags/图表/index.html","78d69fa4ae24cfd84fdda307bafda65a"],["/tags/排序/index.html","893a531712d361ec7b834c801467c5ae"],["/tags/数据库设计/index.html","6ff5795fa46e230cbd627bd52671f815"],["/tags/记录/index.html","9599fbd273890b044b0314d877f93f8c"],["/tags/面向对象/index.html","fe2ff9d24decfcfd16461e012359a025"]];
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
