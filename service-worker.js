const CACHE_NAME = 'tarif-cache';
const FILES_TO_CACHE = [
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './css/all.min.css',
  './webfonts/fa-solid-900.woff2',
  './webfonts/fa-solid-900.woff',
  './webfonts/fa-regular-400.woff2',
  './webfonts/fa-regular-400.woff'
];

// Встановлення SW і кешування ресурсів
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// Активація SW і очищення старого кешу
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Обробка запитів
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Є в кеші — віддаємо одразу
        return cachedResponse;
      }
      // Немає в кеші — пробуємо з мережі
      return fetch(event.request)
        .then(networkResponse => {
          // Якщо успішно — додаємо в кеш
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          // Якщо немає інтернету і немає в кеші — нічого не робимо
          return;
        });
    })
  );
});
