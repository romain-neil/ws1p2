const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
    "/ws1p2/",
    "/ws1p2/index.html",
    "/ws1p2/style.css",
    "/ws1p2/app.js",
    "/ws1p2/coffee1.jpg",
    "/ws1p2/coffee2.jpg",
    "/ws1p2/coffee3.jpg",
    "/ws1p2/coffee4.jpg",
    "/ws1p2/coffee5.jpg",
    "/ws1p2/coffee6.jpg",
    "/ws1p2/coffee7.jpg",
    "/ws1p2/coffee8.jpg",
    "/ws1p2/coffee9.jpg",
]
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})