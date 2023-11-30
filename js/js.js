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

function crearNota(nota) {
    nt.push(nota);
    notas.innerHTML = '';
        nt.forEach(not => {
        notas.innerHTML += `<div class="muestra">
                                <p class="muestra">${not}</p>
                            </div>`;
        console.log(nota);
    });
}