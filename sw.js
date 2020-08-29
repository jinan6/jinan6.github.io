/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","302aa83cbcc5ae1ebd0a6d8ba1465e48"],["/Me/index.html","7ba5f53c2cb952771f28b64f305b8362"],["/about/index.html","dd94d2ac5c2e860c3870688eb363d461"],["/archives/2020/05/index.html","a05c89aad22d8fd4bddfe77c4f8fd28a"],["/archives/2020/05/page/2/index.html","037b983dbded0fe519387e677f43924f"],["/archives/2020/06/index.html","fefe8dec24b2e6c3a99f31013259a113"],["/archives/2020/06/page/2/index.html","23a66fce526fe73ba2bed413ffd5d264"],["/archives/2020/07/index.html","785732557295676c2b0a1077d06a3c18"],["/archives/2020/08/index.html","e99976dcbaf0074f217b21b0f7375673"],["/archives/2020/index.html","91f0686cb105e58541ca37aec8fd695c"],["/archives/2020/page/2/index.html","0a823692585501322caa2e24d4769d43"],["/archives/2020/page/3/index.html","1533453ffece45c8c8403c0066118e84"],["/archives/index.html","d362e08c05e7ffea998b00b0db642b50"],["/archives/page/2/index.html","d5277a303c596e55684cecfcfc78b585"],["/archives/page/3/index.html","48555ceae8766ba08c61b89c7334bcf9"],["/bangumis/index.html","fec1c6041a54caf10f840bbc6b7b4867"],["/board/index.html","d30d535aad126acd00e6dac734e76af4"],["/categories/Git/index.html","03db93989d8117b35963a3ca21616c55"],["/categories/Hexo/Butterfly/index.html","f5ab2ad09960e9a32b1df19d1c484d3c"],["/categories/Hexo/Next/index.html","d8487d1e265b007f956a81e4487983b9"],["/categories/Hexo/index.html","0ff71699de80bc61193f2703a0189e9c"],["/categories/Hexo/备份/index.html","940934c58e48c466bf86f610d53107bb"],["/categories/IDEA/index.html","eb2e2d142246880cf47004512eb4d509"],["/categories/Java/index.html","6687ff45c7c9dc097c897be1d21a98f4"],["/categories/Maven/index.html","69c9a92e068c3721e52364804335f65d"],["/categories/MySQL/index.html","3a8b4eec727d93d2b3fc24dd2301ccb6"],["/categories/MySQL/优化/index.html","a87c38910a0652b376c2d63e1038a739"],["/categories/MySQL/引擎/index.html","ede74a6c7e769d5f882d1b37480dc190"],["/categories/Mybatis/index.html","d37ca0fa89724c487275d302551c6579"],["/categories/Mybatis/记录/index.html","156517a6d1b68fa0fbf2e18af4016b1d"],["/categories/SpringBoot/SpringSecurity/index.html","8960f7f858651d3af5d1b5dc6bf690fa"],["/categories/SpringBoot/Swagger/index.html","995dc57aff0eadcd4c1e91d214b3f25d"],["/categories/SpringBoot/index.html","2b9a3f003fe1c00a6cc9d8d725d35b2c"],["/categories/Vue/index.html","e18a873cebc062090249622fb048afb6"],["/categories/ajax/index.html","d49f0f2feb0fddf94b31fc27db539cf7"],["/categories/emoji/index.html","c9ab2d2419105fd4c1dcc6318f4cf6ed"],["/categories/index.html","aa4a92a2376b473ed829deebb0bb9b3f"],["/categories/linux/index.html","5a8b63855cb05786e1b7669aebcbc4e5"],["/categories/数据库设计/index.html","7b040717c014bf51c1a1fca557dcbc7d"],["/categories/记录/index.html","a36349b0f4757ef5b9c3df12b650d021"],["/categories/面向对象/index.html","e8a9e02499f9a092e37a1a8859077516"],["/css/index.css","343947f70b54ef27315ce617e9dc31b1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","f6dfc164add430b96d799323efd097cd"],["/js/main.js","d95e6f39385c50c361e6383360ee3250"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","5b26f58076202394a66cde8b885f3225"],["/js/utils.js","e57c4c90806ca839dfe2b70b3cc6b6b8"],["/link/index.html","36a4dc24c3d12836916240892cd30e78"],["/live2dw/assets/model.2048/texture_00.png","ae34664ad879d043476c43d041b4aecd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","3d43ec3e38b8e8cdcedcbf8659910321"],["/page/2/index.html","cb88e5c3ad9f41fbdf256e7b84c7243d"],["/page/3/index.html","d9837756afcd379270c67916cec88024"],["/posts/1124952030/index.html","8a5c03001bb55efefd0abbff6ba5e927"],["/posts/13258/index.html","115691218d1307b0265feceb19112b08"],["/posts/1359691355/index.html","eb7982b10a586c0ff0b3fa2fa04e716a"],["/posts/14324/index.html","a4d7d8be56c7b33c624af58b7b3e11c8"],["/posts/14393/index.html","4f5c1e67e43498d3183bdc59da795038"],["/posts/1553907357/index.html","333414e18dac16a5e26892cdcd31cffd"],["/posts/1864766114/index.html","98d71269b31184bde11d2a5b4462bda4"],["/posts/2352548230/index.html","f4208474e97e9105a6b8564b4aab6cda"],["/posts/25396/image-20200515193027529.png","1dfa8c2ba2a3af4cbf70db66ad8cbcd9"],["/posts/25396/image-20200515193212898.png","0df8195d2fa50cb023d83a943a75e2b9"],["/posts/25396/image-20200515193240630.png","177e009c0429cb3a7254b1c7d682c2aa"],["/posts/25396/image-20200515193903771.png","aeb4fb7f9e44d5428b46db2ef5f58eb8"],["/posts/25396/image-20200515195209340.png","22978e93b749e7eebcc3cc63327c3c96"],["/posts/25396/image-20200515200355611.png","5caf04a888375ccd6a2ff2e8bfd908f0"],["/posts/25396/image-20200515201112827.png","ce6132975eea9a1128a4efa3513582dd"],["/posts/25396/image-20200516222500714.png","70a7e1e585bcc0d3a0966ba304c006ff"],["/posts/25396/image-20200517170054604.png","73e1c8306391defec040b07cc0569be1"],["/posts/25396/image-20200517170527296.png","fe7d7f953761eaed529889cfb2291268"],["/posts/25396/image-20200517170949578.png","a910ed84e3df25339a454fc298e784e3"],["/posts/25396/image-20200517171011384.png","09980fef34197bfb4c848a5b86f5baa4"],["/posts/25396/image-20200517171353373.png","40fa46a10da30d5bc6261b9f04a139ea"],["/posts/25396/image-20200517172727084.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517172730649.png","59a6fe00f1e83360225cb401f9a27138"],["/posts/25396/image-20200517173246459.png","cc6fdd185c05cbcd37fec0e852a611f6"],["/posts/25396/image-20200517174357885.png","28b1a5ed29591f10935c219a4fc5f282"],["/posts/25396/image-20200517174420239.png","e3494f720f9ff930ae6b13bf9ae42e9c"],["/posts/25396/image-20200517175435773.png","e544deb938716d4857cf2f62be5a8d34"],["/posts/25396/image-20200517175844957.png","c2cc7cff6d3557a4b0c88fc21b68e778"],["/posts/25396/image-20200517180546503.png","8ed3df0a1627da082e53d874b2485122"],["/posts/25396/image-20200521215626753.png","15342c03b327bb77eddb3816b648b5a0"],["/posts/25396/image-20200522124822493.png","e72575193d58cb0a325354a47aca5381"],["/posts/25396/image-20200522212021634.png","d0cefd4e019f433a4cc980e8165cb449"],["/posts/25396/index.html","de2c673f0744be77e64471f2755e2343"],["/posts/26259/index.html","c8636015d7046bfa99550094e9041f15"],["/posts/29333/index.html","57035160a11ee05b3b36b04980d842fc"],["/posts/3109851417/index.html","8f61d79791bd89098aa7acd03345ac47"],["/posts/3112011529/index.html","4c62d8af218c33a10f14c4be54d0f293"],["/posts/3120427724/index.html","adf037def361c3cda842d9578d27189e"],["/posts/3155752545/image-20200604155255484.png","cb09cc3688945161d5551a351f7ca824"],["/posts/3155752545/index.html","1cb18c8d55a5a6fadbc2c33566733185"],["/posts/31683/index.html","52a8682d9304e767fab9d513ed0d7596"],["/posts/3261239934/index.html","aac7e471cc3b7895a0063c659bbc596e"],["/posts/34782/index.html","62c8aee5bfcbc3771eb45e96a2f462f0"],["/posts/3661501281/index.html","314e5b5069f27137404c07cb2cef1de2"],["/posts/3700149003/index.html","dfb31b071fa40f2bf53279584ff70e17"],["/posts/3984882913/index.html","8481ae77e465547e5ec11fc4a32bce1b"],["/posts/41739/image-20200525194743301.png","3e1e9e22cc72305d7a71885996a99f3e"],["/posts/41739/image-20200525194905458.png","8d2a09b63c675cc633c979653a4a100e"],["/posts/41739/image-20200525195035039.png","e7318b93cac9719578ba39bebd579444"],["/posts/41739/image-20200525195113526.png","cd30d10151c984d8e8c60a8916522e6a"],["/posts/41739/image-20200525195141092.png","3bc1bf5b4d4f147cae614eed5e873a07"],["/posts/41739/image-20200525195257690.png","b768e2e882628840dbfb8b5dbeccc6af"],["/posts/41739/image-20200526095527277.png","b8eb6f65e585ab1524fb0b052c0e1916"],["/posts/41739/image-20200526101428664.png","3a1e5873e8932a3ac399b1cdda8b22a9"],["/posts/41739/image-20200526101532280.png","128d6ec7d72d31861c50ca5cf16063c9"],["/posts/41739/image-20200526101637132.png","6eeddcc05075deec6fbf3900f075741f"],["/posts/41739/image-20200526102133363.png","74ee6450821d9908b8b6c3592d452df1"],["/posts/41739/image-20200526103909262.png","d5f5f0426cf61ee59c449e1ad6474fe2"],["/posts/41739/image-20200526104513794.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104526805.png","3ed5855ff67ebad46fe86692554677a2"],["/posts/41739/image-20200526104759021.png","bcb4a45d1bdf7f10d88acf9497618d06"],["/posts/41739/image-20200526105146033.png","4b7e752ff2ab5deb9e227e526f0a5a1d"],["/posts/41739/image-20200526105325301.png","9438ecd08715fbb97481ec6e941167a5"],["/posts/41739/image-20200526105538621.png","fd6e4d7a4df4abf522548a3db4424a7d"],["/posts/41739/image-20200526110122986.png","ab3ad4b11caa1e63b1023356df8b1b94"],["/posts/41739/image-20200526110943364.png","0a74d3071743f10469f7d3515ba67a33"],["/posts/41739/image-20200526142911511.png","6ea294c5f1457cf1a1fb03ce0279dab9"],["/posts/41739/image-20200526154923596.png","1df86ad0b07c69385b3a9dd298a1c397"],["/posts/41739/image-20200526155002906.png","5ef9c86c75348bf000142a57119aff0b"],["/posts/41739/image-20200526155021754.png","787291b1ed33b376fe6ae13b2bef0178"],["/posts/41739/image-20200526155102089.png","67d74968316983b19ea67313ba12dab3"],["/posts/41739/image-20200526155116682.png","0e95b3f550c9a64a22f1c8a0283b82a1"],["/posts/41739/image-20200526155131075.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155136600.png","2514e1bf0159501c877972e35fefd855"],["/posts/41739/image-20200526155710071.png","f1d3fb40eac9fc2d34e726b675d25a8c"],["/posts/41739/image-20200526160938838.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526160941638.png","c416849fa03c5330bd14ebafe97ea1ff"],["/posts/41739/image-20200526161439575.png","8ce48af513e1c5f8493dd9af102d991e"],["/posts/41739/image-20200526161548429.png","8f03bfcdfd7658418bc1b2dd659decec"],["/posts/41739/index.html","08c4d179168612be9a6e3b6867a84868"],["/posts/47733/index.html","b5e1b916d1e78d9a0e22c77db4a38538"],["/posts/48141/index.html","b5b24a98ca5e7f371ffe273e5517c31e"],["/posts/49984/index.html","249df5a62790495066663062a4a14108"],["/posts/56512/index.html","ff58ee612ba38dce8a0f540e84cebcd1"],["/posts/59764/index.html","56aa62d768d255ade52faa03c04eeed4"],["/posts/704219325/index.html","16c863f78b00f5736010750e071c5e6e"],["/posts/709269996/index.html","b321ad53899eec27aa53224d10a74d10"],["/posts/961488241/index.html","e1835fb97b22069281d4e5675e6a2e7b"],["/shuoshuo/index.html","d24f39eaf8bfb4ad9ead80802eb6f608"],["/sw-register.js","24643b92b628970b0c31ed2cba6955f6"],["/tags/Butterfly/index.html","671c3dcd39aebdb558169854854e5b64"],["/tags/Git/index.html","a209fef463f27362ea09d91fee4ac3a5"],["/tags/IDEA/index.html","e64789def1f7c5e0482e7bc1a9f58bf3"],["/tags/Java/index.html","0f5997cbf44ecd5ca877a94d66d2c199"],["/tags/Maven/index.html","d7f6e9402b92548e4f6a6baac2b323e5"],["/tags/MySQL/index.html","b4a07d1f8b524ab4c6dac066ea403b5c"],["/tags/Mybatis/index.html","3a1f56f92ac07ddd7d250d87d2ccf5f2"],["/tags/SpringBoot/index.html","18dd8db6d4e9cff19a849acef96d3a93"],["/tags/SpringSecurity/index.html","6cc7dd14d43f447a745af59b754951b4"],["/tags/Swagger/index.html","105fa19485a2e8d0787f214dbacac4c7"],["/tags/emoji/index.html","734cd21b13eac3c6758d93f91637f651"],["/tags/hexo/index.html","fa10e2466262fc25fd13df1e00dfbc13"],["/tags/index.html","b327fc6f8edfd5b4e31bf31dd60a1d71"],["/tags/linux/index.html","922c9660626556a344ddf8feed0e6120"],["/tags/判断/index.html","4d31fe6d3742a550daf6645835e4c146"],["/tags/图表/index.html","c44a38953613a7e8b465b9232a10dfb2"],["/tags/排序/index.html","5d0f06a3e4600568c233311b5a443773"],["/tags/数据库设计/index.html","fb5fdca902eb0360adb222358f9306d4"],["/tags/记录/index.html","1a2b0e63f4d72a835136ab21f3c3faea"],["/tags/面向对象/index.html","83cd7e0f7218d79d3b14cb30935880a0"]];
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
