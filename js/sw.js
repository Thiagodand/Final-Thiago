
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