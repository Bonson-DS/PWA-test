self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
    self.skipWaiting(); // Immediately activate the service worker
  });
  
  self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
  });
   