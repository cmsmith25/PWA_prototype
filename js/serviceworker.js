//Import Firebase libraries using importScripts
importScripts(
    "https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging-compat.js"
);

//Initialize Firebase in the service worker
firebase.initializeApp({
    apiKey: "AIzaSyBulQh1WO6uPgVh7VEsoyxJxCY7CbzEd_M",
  authDomain: "comiclibrary-897a3.firebaseapp.com",
  projectId: "comiclibrary-897a3",
  storageBucket: "comiclibrary-897a3.firebasestorage.app",
  messagingSenderId: "522379735254",
  appId: "1:522379735254:web:c153862dbdc543ba621977",
  measurementId: "G-BW1N3Z1MBK"
});    



const CACHE_NAME = "task-manager-v1";


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
    "/js/comic.js",
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


self.addEventListener("install", (event) => {
    console.log("Service Worker: Installing...");
    event.waitUntil(
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
    if(event.request.method === "GET") {
        //Only handle GET requests
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                return (
                    cachedResponse ||
                    fetch(event.request)
                    .then((networkResponse) => {
                        return caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, networkResponse.clone());
                            return networkResponse;
                        });
                    })
                    .catch((error) => {
                        console.error("Network fetch failed:", error);
                    })
                );
            })
        );
        }
    });

    //Listen for messages from ui.js
    self.addEventListener("message", (event) => {
        if(event.data && event.data.type === "FCM_TOKEN") {
            constfcmToken = event.data.token;
            console.log("Received FCM token in service worker:", fcmToken);
        }
    });

    //Display notification for background messages
    self.addEventListener("push", (event) => {
        if(event.data) {
            const payload = event.data.json();
            const { title, body, icon } = payload.notification;
            const options = {
                body,
                icon: icon || "/img/icons/icon-192x192.png",
            };
        }
    });