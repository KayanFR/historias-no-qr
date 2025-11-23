// service-worker.js — básico para cache offline (PWA)
const CACHE_NAME = 'historiasnoqr-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/placeholder-image.jpg',
  '/placeholder-audio.mp3',
  '/content/places.json',
  '/content/languages.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

