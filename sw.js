const CACHE='thaipain-v8.7.1-hardfix';
const CORE=['./offline.html','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).catch(()=>{}));});
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys()){if(k!==CACHE)await caches.delete(k)}await self.clients.claim()})()));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  if(u.origin===location.origin && (u.pathname.endsWith('/app.html')||u.pathname.endsWith('/index.html')||u.pathname.endsWith('/human_back_clean.png')||u.pathname.endsWith('/manifest.webmanifest'))){
    e.respondWith(fetch(e.request,{cache:'no-store'}).catch(()=>caches.match(e.request)).then(r=>r||caches.match('./offline.html'))); return;
  }
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request).then(r=>r||caches.match('./offline.html'))));
});
