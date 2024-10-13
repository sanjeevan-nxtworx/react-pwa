console.warn("sw file is loaded");

let cacheData = "react-pwa";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/bundle.js",
        "/index.html",
        "/",
        "/Api",
        "localhost",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((res) => {
        if (res) {
          return res;
        }
        let requestUrl = event.request.clone();
        fetch(requestUrl);
      })
    );
  }
});
