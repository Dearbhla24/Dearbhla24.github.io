const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  '/', // Your main page
  '/index.html',
  '/style.css',
  '/script.js',
  '/ask.html',
  '/numbers.html',
  '/kit.html',
  '/service-worker.js',
  '/IMG_8254.jpeg',
  '/IMG_8255.jpeg',
  '/manifest.json',
  '/First aid.jpeg',
  '/icons/placeholder-icon-192x192.png',
  '/icons/placeholder-icon-512x512.png',
  '/download.html'
];

// Install the service worker and cache the app's assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercept network requests and serve cached resources
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Serve cached response if available, or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Update the service worker and remove old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
