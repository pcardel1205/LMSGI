const entrada = document.getElementById("nombre");
const boton = document.getElementById("boton");

boton.addEventListener('click', validar);

function validar() {
    if (entrada.value == "") {
        alert("El campo nombre no puede estar vacío");
    }
}