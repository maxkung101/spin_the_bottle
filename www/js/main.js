if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(function (registration) {
            console.log('Registration successful, scope is:', registration.scope);
        })
        .catch(function (error) {
            console.log('Service worker registration failed, error:', error);
        });
} else {
    console.log('Service worker not supported');
}

// Let's register our serviceworker
navigator.serviceWorker.register('service-worker.js', {
    // The scope cannot be parent to the script url
    scope: './'
});
