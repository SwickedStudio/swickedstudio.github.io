"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","20cd5a4aa179ad91e70f99548337de89"],["/static/css/main.e2f14b7a.css","59822aacca2175da9b8f109540afe210"],["/static/js/main.9bc7cb6d.js","ec5b317579829c2bebe3cb73809958f0"],["/static/media/banner.4e033f44.jpg","4e033f4467bf494e4b76543332a38d4f"],["/static/media/banner.64bc7f9b.jpg","64bc7f9b214a2a0215717002c53b3679"],["/static/media/hero_image.f338a4f6.jpg","f338a4f62efacd326ae748e9b310e335"],["/static/media/raleway-bold.5375b0f3.ttf","5375b0f30895383053e1151a6bb82fa8"],["/static/media/raleway-bold.6bdeff53.eot","6bdeff533dc9a7ea3b34f46c032dc6db"],["/static/media/raleway-bold.e281a93c.woff","e281a93c72fccedb49bb3f7f45982042"],["/static/media/raleway-bold.e57f8f92.svg","e57f8f92042144ef70aa738d596395c8"],["/static/media/raleway-regular.0418a063.woff","0418a063ed98123cc8e3f778799c1a73"],["/static/media/raleway-regular.8ac0b05e.svg","8ac0b05ec83939d0d176ab26a1e212a3"],["/static/media/raleway-regular.a62772dd.ttf","a62772dd5a9c962aa954228c18a10566"],["/static/media/raleway-regular.ed9f68d6.eot","ed9f68d69bf88a57dffd1aba9574056a"],["/static/media/raleway-semibold.266eba44.svg","266eba442f79bec1f1d953e2308248c7"],["/static/media/raleway-semibold.331af167.eot","331af1678c0852fccaec4c85940541fa"],["/static/media/raleway-semibold.590bfbe8.woff","590bfbe8f9f1cf6139f60fd16c4a77a0"],["/static/media/raleway-semibold.98b7f539.ttf","98b7f5396bbb24f94c780c3fc9c338de"],["/static/media/thumbnail.95603f25.jpg","95603f25c9177a3394fd334e2cf0f9d4"],["/static/media/thumbnail.ab837a69.jpg","ab837a694af4b21ae9f070964b198cac"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});