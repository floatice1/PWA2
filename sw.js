const CACHE_NAME = "my-pwa-cache-1";
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/manifest.json',
    '/script.js',
    '/col-script.js',
    '/images/icon-256.png',
    '/images/icon-512.png'
]

self.addEventListener('install', (event) => {
    console.log('Service Worker: installing...')
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Service Worker: Cache opened:', CACHE_NAME);
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: activating...');
    event.waitUntill(self.clients.claim())
})

self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetching', event.request.url);
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            if (response) {
                console.log('Service Worker: Found in cache', event.request.url);
                return response;
            }

            console.log('Service Worker: Not found in cache, fetching from network', event.request.url);
            return fetch(event.request)
        })
    )
})