const CACHE_NAME = 'xian-tu-v1';
const URLS = ['/', '/index.html', '/manifest.webmanifest', '/assets/images/cover.svg', '/assets/images/icon-512.svg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(URLS)));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
