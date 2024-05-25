self.addEventListener('fetch', function(event) {
    if (event.request.url.includes('ngrok-free.app')) {
        const newRequest = new Request(event.request, {
            headers: {
                ...event.request.headers,
                'ngrok-skip-browser-warning': 'true'
            }
        });
        event.respondWith(fetch(newRequest));
    } else {
        event.respondWith(fetch(event.request));
    }
});
