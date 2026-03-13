// Seleccionamos la caja y el botón
var caja = document.getElementById("caja");
var boton = document.getElementById("color");

// Cuando se hace clic en el botón...
boton.onclick = function () {
    // Cambiamos el fondo y el color del texto
    caja.style.backgroundColor = "blue";
    caja.style.color = "white";
};
