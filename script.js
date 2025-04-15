let deferredPrompt;
const installBtn = document.getElementById('installBtn');

// Show the button when the PWA is installable
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent default install prompt
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = 'block'; // Show install button
});

// When the user clicks the install button
installBtn.addEventListener('click', () => {
  installBtn.style.display = 'none'; // Hide button
  deferredPrompt.prompt(); // Show install prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('App installed');
    } else {
      console.log('User dismissed the install prompt');
    }
    deferredPrompt = null; // Reset deferred prompt
  });
});

// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker registered'))
    .catch(err => console.error('Service Worker registration failed:', err));
}
