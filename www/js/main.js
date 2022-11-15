import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';

const el = document.createElement('pwa-update');
document.body.appendChild(el);

if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('www/js/serviceWorker.js')
  }
