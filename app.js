self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("film-cache").then(cache => {
      return cache.addAll([
        "html.html",
        "app.json",
        "style.css",        // si tu en as un
        "js.js",
        "films.json",
        "ppl.jpg",         // ton icône
        // ajoute ici tes images de film, par ex :
        "sary/Ben 10 (Ben Ten) -  - Serie S1,S2,S3 .jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
