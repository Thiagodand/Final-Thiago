# Final-Thiago
### Diario Personal :blue_book:

<p>
Las paginas que contiene el proyecto:
</p>

- index.html
- css.css
- js.js
- sw.js
- cache.js

#index.html
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css.css">
    <title>Diario</title>
    <script src="/js/js.js" defer></script>
</head>
<body>
    <header class="header">
        <h1 class="titulo">Diario personal</h1>
    </header>
    <main class="main">
        <div class="input-not">
            <input class="nota" id="texto"  type="text">
            <button class="btn" id="btn-guardar">Guardar</button>
        </div>
    <div class="muestra" id="notas">
    </div>
    </main>

</body>
</html>`


```
#Js.js

```javascript
var btn = document.querySelector('#btn-guardar');
var text = document.querySelector('#texto');
var notas = document.querySelector('#notas');
var nt = [];


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/sw.js");
}
btn.addEventListener('click', () => {
    var nota = text.value;
    if (nota !== "") {
        crearNota(nota);
    }
});

function modificarNota(index) {
    const nuevaNota = prompt("Modifique su nota:", notas[index]);
    if (nuevaNota !== null) {
        notas[index] = nuevaNota;
        actualizarLista();
    }
}

function eliminarNota(index) {
    const confirmacion = confirm("¿Está seguro de eliminar esta nota?");
    if (confirmacion) {
        notas.splice(index, 1);
        actualizarLista();
    }
}

function crearNota(nota) {
    nt.push(nota);
    notas.innerHTML = '';
        nt.forEach((not,index) => {
        notas.innerHTML += `<div class="caja">
                                <button class="btn" onclick="modificarNota(${index})">Modificar</button>
                                <button class="btn" onclick="eliminarNota(${index})">Eliminar</button>
                                <p class="text">${not}</p>
                            </div>`;
        console.log(nota);
    });
}
actualizarLista();
```

#sw.js
```javascript
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
```
#Cache.js
```javascript
caches.open('cache-v1').then( ( cache) => {
    cache.addAll([
        '../index.html',

    ])
})
```
#Css.css
```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.header{
    margin-left: 2rem;
    width: 95%;
}
.main{
    margin-left: 2rem;
    width: 95%;
}
.titulo{
    background-color: rgb(224, 130, 14);
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
}

.input-not{
    background-color: rgb(224, 130, 14);
    padding-top: 2rem;

    padding-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
.nota{
    width: 40rem;
    margin: 0 auto;
    margin-bottom: 1em;
    height: 5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
}
.btn{
    margin-top: 1rem;
    background-color: rgb(0, 131, 88);
    width: 10rem;
    height: 2rem;
    margin: 0 auto;
    font-size: 1rem;
    border-radius: 0.5rem;
}
.muestra{
    background-color: black;
    text-align: center;
    align-items: center;
    margin: 0 auto;
}
.caja{
    background-color: rgb(39, 86, 127);
    padding: 1rem 0rem 1rem 0rem;
}
.text{
    margin: 0 auto;
    font-size: 1.5rem;
    width: 40rem;
    border-radius: 0.5rem;
    background-color: aliceblue;
}

@media(max-width: 780px){
    .header{
        width: 95%;
    }
    .main{
        width: 95%;
    }
    .nota{
        width: 85%;
    }
    .text{
        width: 85%;
    }

}
```
