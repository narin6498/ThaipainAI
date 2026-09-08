const CACHE='thaipain-v8.8-mobile-recovery';
const FALLBACK='./offline.html';
self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(c=>c.addAll([FALLBACK])).catch(()=>{}));
});
self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  if(event.request.mode==='navigate'){
    event.respondWith(
      fetch(event.request,{cache:'no-store'}).catch(()=>caches.match(FALLBACK))
    );
    return;
  }
  event.respondWith(
    fetch(event.request).then(resp=>{
      if(resp && resp.ok && new URL(event.request.url).origin===location.origin){
        const copy=resp.clone();
        caches.open(CACHE).then(c=>c.put(event.request,copy)).catch(()=>{});
      }
      return resp;
    }).catch(()=>caches.match(event.request))
  );
});
