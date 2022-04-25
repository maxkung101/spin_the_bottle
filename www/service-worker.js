// Listen for install event, set callback
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
    'index.html',
    'mobilehome.html',
    'css/style.css',
    'js/app.js',
    'js/ngStorage.js',
    'js/script.js',
    'img/loading_disabled.jpg',
    'img/loading-stable.png',
    'img/loading.gif',
    'img/fidget-disabled.png',
    'img/fidget-spinning.gif',
    'img/fidget-stable.png',
    'img/bottle-disabled.png',
    'img/bottle-stable.png',
    'img/leekspin_disabled.jpg',
    'img/leekspin.jpg',
    'img/mariowalking.gif',
    'img/mikuspinning.gif',
    'img/nes-mario_disabled.jpg',
    'img/nes-mario.jpg',
    'img/nyan-cat_disabled.jpg',
    'img/nyan-cat-stable.jpg',
    'img/nyan-cat.gif',
    'img/nyan-pikachu.gif',
    'img/pikachu_disabled.jpg',
    'img/pikachu.jpg',
    'img/sonic-disabled.png',
    'img/sonic-running.gif',
    'img/sonic-stable.png',
    'img/spinning-bottle.gif'/*,
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
    'https://use.fontawesome.com/releases/v5.6.3/css/all.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
    'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js'*/
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', function(event) {
    console.log('[Service Worker] Install');
    event.waitUntil(
        caches.open(PRECACHE)
            .then(function (cache) {
                console.log('Opened cache');
                // Magic is here. Look the  mode: 'no-cors' part.
                cache.addAll(PRECACHE_URLS.map(function (urlToPrefetch) {
                    return new Request(urlToPrefetch, { mode: 'no-cors' });
                })).then(function () {
                    console.log('All resources have been fetched and cached.');
                });
            })
    );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', function(event) {
    console.log('[Service Worker] Activate');
    const currentCaches = [PRECACHE, RUNTIME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
        }).then(cachesToDelete => {
            return Promise.all(cachesToDelete.map(cacheToDelete => {
                return caches.delete(cacheToDelete);
            }));
        }).then(() => self.clients.claim())
    );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', function(event) {
    console.log('[Service Worker] Fetch');
    // Skip cross-origin requests, like those for Google Analytics.
    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
            caches.match(event.request).then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return caches.open(RUNTIME).then(cache => {
                    return fetch(event.request).then(response => {
                        // Put a copy of the response in the runtime cache.
                        return cache.put(event.request, response.clone()).then(() => {
                            return response;
                        });
                    });
                });
            })
        );
    }
});
