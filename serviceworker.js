const CACHE_NAME = "task-manager";


const ASSETS_TO_CACHE = [
    "/",
    "/index.html",
    "/pages/avengers.html",
    "/pages/batman.html",
    "/pages/captain.html",
    "/pages/library.html",
    "/pages/newcoms.html",
    "/pages/spiderman.html",
    "/pages/strange.html",
    "/pages/suggest.html",
    "/css/materialize.min.css",
    "/js/materialize.min.js",
    "/js/ui.js",
    "/img/avengers.jpg",
    "/img/batman.jpg",
    "/img/captain.jpg",
    "/img/cicon.jpg",
    "/img/collage.jpg",
    "/img/collage2.jpg",
    "/img/comicicon.png",
    "/img/flash.jpg",
    "/img/ironman.jpg",
    "/img/spiderman.jpg",
    "/img/strange.jpg",

];


self.addEventListener("install", (Event) => {
    console.log("Service Worker: Installing...");
    Event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Service worker: caching files");
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});


self.addEventListener("activate", (event) => {
    console.log("Service Worker: Activating...");
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if(cache !== CACHE_NAME) {
                        console.log("service worker: Deleting old Cache");
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});


self.addEventListener("fetch", (event) => {
    console.log("Service worker: Fetching...", event.request.url);
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});