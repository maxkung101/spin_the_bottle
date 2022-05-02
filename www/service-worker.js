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
self.addEventListener('install', (event) => {
    // prevents the waiting, meaning the service worker activates
    // as soon as it's finished installing
    // NOTE: don't use this if you don't want your sw to control pages
    // that were loaded with an older version
    self.skipWaiting();
  
    event.waitUntil((async () => {
      try {
        // self.cacheName and self.contentToCache are imported via a script
        const cache = await caches.open(self.cacheName);
        const total = self.contentToCache.length;
        let installed = 0;
  
        await Promise.all(self.contentToCache.map(async (url) => {
          let controller;
  
          try {
            controller = new AbortController();
            const { signal } = controller;
            // the cache option set to reload will force the browser to
            // request any of these resources via the network,
            // which avoids caching older files again
            const req = new Request(url, { cache: 'reload' });
            const res = await fetch(req, { signal });
  
            if (res && res.status === 200) {
              await cache.put(req, res.clone());
              installed += 1;
            } else {
              console.info(`unable to fetch ${url} (${res.status})`);
            }
          } catch (e) {
            console.info(`unable to fetch ${url}, ${e.message}`);
            // abort request in any case
            controller.abort();
          }
        }));
  
        if (installed === total) {
          console.info(`application successfully installed (${installed}/${total} files added in cache)`);
        } else {
          console.info(`application partially installed (${installed}/${total} files added in cache)`);
        }
      } catch (e) {
        console.error(`unable to install application, ${e.message}`);
      }
    })());
  });

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
      const cacheNames = await caches.keys();
  
      await Promise.all(cacheNames.map(async (cacheName) => {
        if (self.cacheName !== cacheName) {
          await caches.delete(cacheName);
        }
      }));
    })());
});

// this imported script has the newly generated cache name (self.cacheName)
// and a list of all the files on my bucket I want to be cached (self.contentToCache),
// and is automatically generated in Gitlab based on the tag version
self.importScripts('cache.js');

// the install event will be triggered if there's any update,
// a new cache will be created (see 1.) and the old one deleted (see 2.)

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
