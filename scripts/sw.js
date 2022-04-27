var cacheName = 'PWA Project';
var filesToCache = [
  '../',
  '../index.html',
  './main.js',
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
  "https://unpkg.com/leaflet@1.4.0/dist/leaflet.css",
  'https://unpkg.com/leaflet@1.4.0/dist/leaflet.js'


];

// install worker
self.addEventListener("install", installEvent => {
  installEvent.waitUntil( // wait untill my parameter is resolved
    caches.open(cacheName).then(cache => {
      console.log("Caching shell assets.");
      cache.addAll(filesToCache)
    })
  )
})

// activate event (reainstallation)
self.addEventListener("activate", activateEvent => {
  console.log("Service Worker activated.")
})

// fetch event
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})