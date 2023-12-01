var btn = document.querySelector('#btn-guardar');
var text = document.querySelector('#texto');
var notas = document.querySelector('#notas');
var nt = [];
var actualizarLista=[];


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
        nt[index] = nuevaNota;
        actualizarLista();
    }
}

function eliminarNota(index) {
    const confirmacion = confirm("¿Está seguro de eliminar esta nota?");
    if (confirmacion) {
        nt.splice(index, 1);
        actualizarLista();
    }
}

function crearNota(nota) {
    nt.push(nota);
    notas.innerHTML = '';
        nt.forEach((not,index) => {
        notas.innerHTML += `<div class="caja">
                                <p class="text">${not}</p>
                                <button class="btn1" onclick="modificarNota(${index})">Modificar</button>
                                <button class="btn2" onclick="eliminarNota(${index})">Eliminar</button>
                            </div>`;
        console.log(nota);
        
    });
    actualizarLista();
}
