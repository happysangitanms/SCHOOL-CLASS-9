// Minimal service worker — required for "Add to Home Screen" / Install button to appear.
const CACHE_NAME = 'evidya-cache-v1';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

// A basic fetch handler is required by Chrome's installability check.
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
