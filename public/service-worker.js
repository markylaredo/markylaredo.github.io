/* eslint-disable no-restricted-globals */
const CACHE_NAME = "mark-anthony-portfolio-v1";
const OFFLINE_URL = "/offline.html";
const PRECACHE_URLS = [OFFLINE_URL];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fromCache(event.request)
      .then((cachedResponse) => {
        event.waitUntil(
          fetch(event.request)
            .then((networkResponse) =>
              updateCache(event.request, networkResponse.clone()),
            )
            .catch(() => undefined),
        );

        return cachedResponse;
      })
      .catch(() =>
        fetch(event.request)
          .then((networkResponse) => {
            event.waitUntil(updateCache(event.request, networkResponse.clone()));
            return networkResponse;
          })
          .catch(async () => {
            if (event.request.mode === "navigate") {
              const fallback = await caches.match(OFFLINE_URL);
              if (fallback) return fallback;
            }
            return new Response("Offline", {
              status: 503,
              statusText: "Offline",
            });
          }),
      ),
  );
});

function fromCache(request) {
  return caches.open(CACHE_NAME).then((cache) => {
    return cache.match(request).then((matching) => {
      if (!matching || matching.status === 404) {
        return Promise.reject(new Error("no-match"));
      }

      return matching;
    });
  });
}

function updateCache(request, response) {
  return caches.open(CACHE_NAME).then((cache) => cache.put(request, response));
}
