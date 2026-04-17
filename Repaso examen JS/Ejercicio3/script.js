const parrafo = document.getElementById("mensaje");
const boton = document.getElementById("toggle");

boton.addEventListener('click', cambiarEstilo);

function cambiarEstilo() {
    if (parrafo.style.display == 'none') {
        parrafo.style.display = 'block';
    } else {
        parrafo.style.display = 'none';
    }
}