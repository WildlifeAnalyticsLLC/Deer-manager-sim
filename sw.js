/* Deer Manager Sim v11.3: network-first HTML, offline fallback, preserve localStorage. */
const CACHE_NAME='deer-manager-sim-v11.3';
const APP_FILES=['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./version.json'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(names=>Promise.all(names.filter(name=>name.startsWith('deer-manager-sim-')&&name!==CACHE_NAME).map(name=>caches.delete(name)))).then(()=>self.clients.claim()))});
self.addEventListener('message',event=>{if(event.data&&event.data.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{
 const request=event.request;if(request.method!=='GET')return;
 const url=new URL(request.url);if(url.origin!==self.location.origin)return;
 if(url.pathname.endsWith('/version.json')){event.respondWith(fetch(request,{cache:'no-store'}).catch(()=>caches.match('./version.json')));return}
 if(request.mode==='navigate'||url.pathname.endsWith('/index.html')){
  event.respondWith(fetch(request,{cache:'no-store'}).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put('./index.html',copy))}return response}).catch(()=>caches.match('./index.html').then(r=>r||Response.error())));return;
 }
 event.respondWith(caches.match(request).then(cached=>cached||fetch(request)));
});