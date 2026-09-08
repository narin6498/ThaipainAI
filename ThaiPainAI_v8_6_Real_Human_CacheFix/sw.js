const CACHE = 'thaipain-v8.7-clean';
const CORE = ['./','./index.html','./app.html?v=8.7-clean','./human_back_clean.png?v=8.7-clean','./offline.html','./icon-192.png','./icon-512.png'];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE).catch(()=>{})));
});

self.addEventListener('activate', event => {
  event.waitUntil((async()=>{
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin && (url.pathname.endsWith('/app.html') || url.pathname.endsWith('/index.html') || (url.pathname.endsWith('/human_back.png') || url.pathname.endsWith('/human_back_clean.png')))) {
    event.respondWith((async()=>{
      try {
        const fresh = await fetch(req, {cache:'no-store'});
        const cache = await caches.open(CACHE);
        cache.put(req, fresh.clone());
        return fresh;
      } catch (e) {
        return (await caches.match(req)) || (await caches.match('./offline.html'));
      }
    })());
    return;
  }
  event.respondWith(caches.match(req).then(cached => cached || fetch(req)));
});
