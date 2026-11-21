const CACHE_NAME = 'robocomp-cache-v0.9.8.2';
const ASSETS = ['./', './index.html', './manifest.json'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).catch(() => {}));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Always fetch version.json directly from network (never cache!)
  if (e.request.url.includes('version.json')) {
    e.respondWith(fetch(e.request, { cache: 'no-store' }));
    return;
  }
  // Network-first for HTML so updates apply immediately when approved
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
