const cacheName = "app-v1";
const filesToCache = [
  "/",
  "/index.html",
  "/styles/style.css",
  "/scripts/script.js",
  "/assents/personagens/Ativo 1.png",
  "/assents/personagens/Ativo 6.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
