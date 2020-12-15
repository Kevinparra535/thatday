const VERSION = "stellar_v1";

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  // Get
  if (request.method !== "GET") {
    return;
  }

  // buscar en caché
  event.respondWith(cacheResponse(request));

  // Actualizar cache
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    "/",
    "/index.html",
    "/routes/design.html",
    "/src/css/index.css",
    "/src/img/",
    "/src/js/",
    "/index.js",
  ]);
}

async function cacheResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}
