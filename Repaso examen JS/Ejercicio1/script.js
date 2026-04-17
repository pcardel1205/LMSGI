const boton = document.getElementById("btn");
const parrafo = document.getElementById("texto");

boton.addEventListener('click', cambiarTexto);

function cambiarTexto() {
    parrafo.textContent = 'Texto cambiado con JavaScript';
}