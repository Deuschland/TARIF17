const CACHE_NAME = 'tarif-cache';
const FILES_TO_CACHE = [
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-256.png',
  '/icon-384.png',
  '/icon-512.png',
  '/css/all.min.css',
  '/webfonts/fa-solid-900.woff2',
  '/webfonts/fa-solid-900.woff',
  '/webfonts/fa-regular-400.woff2',
  '/webfonts/fa-regular-400.woff'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => key !== CACHE_NAME && caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request)
        .then(networkResponse => {
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
            if (!cachedResponse || !responsesAreSame(cachedResponse, networkResponse)) {
              notifyClientsAboutUpdate();
            }
          });
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});

function responsesAreSame(res1, res2) {
  return res1 && res2 && res1.status === res2.status && res1.type === res2.type;
}

function notifyClientsAboutUpdate() {
  self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clients => {
    clients.forEach(client => {
      client.postMessage({ type: 'NEW_VERSION_AVAILABLE' });
    });
  });
}
