// Basic service worker for Unbroken Ecosystems PWA
const CACHE = 'unbroken-v1';
const ASSETS = [
  '/Unbroken-Ecosystem/',
  '/Unbroken-Ecosystem/index.html',
  '/Unbroken-Ecosystem/reelroom.html',
  '/Unbroken-Ecosystem/manifest.json',
  '/Unbroken-Ecosystem/style.css'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
