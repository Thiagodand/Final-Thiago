const APP_SHELL = [
    '/',
    'js/js.js',
    'css.css',
    'index.html',
]


self.addEventListener('install', (event)=>{
    
    const cache = caches.open('v1').then( cache => {
        cache.addAll( APP_SHELL)
    })

    event.waitUntil( cache);
})

self.addEventListener('fetch', evento => {
    const respuestaCache = caches.match( evento.request).then( res => {
        if (res ) {
            return res;
        } else {
            return fetch(evento.request).then( respuesta => {
                return respuesta;
            })
        }
    })
    evento.respondWith( respuestaCache  )
})

self.addEventListener('install', ()=>{
    console.log('SW: Instalado.');
})

self.addEventListener('activate', ()=>{
    console.log('SW: Activado');
})

self.addEventListener('fetch', evento => {
    const request = evento.request;
    const url = request.url;
    console.log(url);
})