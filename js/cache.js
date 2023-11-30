caches.open('cache-v1').then( ( cache) => {
    cache.addAll([
        '../index.html',

    ])
    
})