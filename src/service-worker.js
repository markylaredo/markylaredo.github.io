// // This is the service worker with the Cache-first network

// const CACHE = "pwabuilder-precache";
// const precacheFiles = [
//   /* Add an array of files to precache for your app */
// ];

// self.addEventListener("install", function(event) {
//   console.log("[CUSTOM SERVICE WORKER] Install Event processing");

//   console.log("[CUSTOM SERVICE WORKER] Skip waiting on install");
//   self.skipWaiting();

//   event.waitUntil(
//     caches.open(CACHE).then(function(cache) {
//       console.log("[CUSTOM SERVICE WORKER] Caching pages during install");
//       return cache.addAll(precacheFiles);
//     })
//   );
// });

// // Allow sw to control of current page
// self.addEventListener("activate", function(event) {
//   console.log("[CUSTOM SERVICE WORKER] Claiming clients for current page");
//   event.waitUntil(self.clients.claim());
// });

// // If any fetch fails, it will look for the request in the cache and serve it from there first
// self.addEventListener("fetch", function(event) {
//   if (event.request.method !== "GET") return;

//   event.respondWith(
//     fromCache(event.request).then(
//       function(response) {
//         // The response was found in the cache so we responde with it and update the entry

//         // This is where we call the server to get the newest version of the
//         // file to use the next time we show view
//         event.waitUntil(
//           fetch(event.request).then(function(response) {
//             return updateCache(event.request, response);
//           })
//         );

//         return response;
//       },
//       function() {
//         // The response was not found in the cache so we look for it on the server
//         return fetch(event.request)
//           .then(function(response) {
//             // If request was success, add or update it in the cache
//             event.waitUntil(updateCache(event.request, response.clone()));

//             return response;
//           })
//           .catch(function(error) {
//             console.log(
//               "[CUSTOM SERVICE WORKER] Network request failed and no cache." + error
//             );
//           });
//       }
//     )
//   );
// });

// function fromCache(request) {
//   // Check to see if you have it in the cache
//   // Return response
//   // If not in the cache, then return
//   return caches.open(CACHE).then(function(cache) {
//     return cache.match(request).then(function(matching) {
//       if (!matching || matching.status === 404) {
//         return Promise.reject("no-match");
//       }

//       return matching;
//     });
//   });
// }

// function updateCache(request, response) {
//   return caches.open(CACHE).then(function(cache) {
//     return cache.put(request, response);
//   });
// }




// This is the "Offline copy of pages" service worker

const CACHE = "pwabuilder-offline";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "index.html";
const offlineFallbackPage = "index.html";

// Install stage sets up the index page (home page) in the cache and opens a new cache
self.addEventListener("install", function (event) {
  console.log("[CUSTOM SERVICE WORKER] Install Event processing");

  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      console.log("[CUSTOM SERVICE WORKER] Cached offline page during install");

      if (offlineFallbackPage === "index.html") {
        return cache.add(new Response("TODO: Update the value of the offlineFallbackPage constant in the serviceworker."));
      }

      return cache.add(offlineFallbackPage);
    })
  );
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
    .then(function (response) {
      console.log("[CUSTOM SERVICE WORKER] add page to offline cache: " + response.url);

      // If request was success, add or update it in the cache
      event.waitUntil(updateCache(event.request, response.clone()));

      return response;
    })
    .catch(function (error) {
      console.log("[CUSTOM SERVICE WORKER] Network request Failed. Serving content from cache: " + error);
      return fromCache(event.request);
    })
  );
});

function fromCache(request) {
  // Check to see if you have it in the cache
  // Return response
  // If not in the cache, then return error page
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (!matching || matching.status === 404) {
        return Promise.reject("no-match");
      }

      return matching;
    });
  });
}

function updateCache(request, response) {
  return caches.open(CACHE).then(function (cache) {
    return cache.put(request, response);
  });
}