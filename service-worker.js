const CACHE_NAME = "budgetpro-v3";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./logo-192.png",
  "./logo-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // HTML must always check Netlify first. The old service worker used a
  // cache-first strategy, which could keep an outdated index.html after a
  // deployment and make code changes appear not to take effect.
  if (event.request.mode === "navigate" ||
      url.pathname.endsWith("/index.html") ||
      url.pathname.endsWith(".html")) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => caches.match(event.request).then(cached => cached || caches.match("./")))
    );
    return;
  }

  // Static assets use cache-first for fast/offline loading, with a network
  // fallback when they are not cached yet.
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === "opaque") return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match("./"));
    })
  );
});
