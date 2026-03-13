// Seleccionamos el párrafo y el botón
var mensaje = document.getElementById("mensaje");
var boton = document.getElementById("toggle");

// Cuando se hace clic en el botón...
boton.onclick = function () {
    // Si el mensaje está visible, lo ocultamos
    if (mensaje.style.display === "none") {
        mensaje.style.display = "block";
    } else {
        // Si está visible, lo ocultamos
        mensaje.style.display = "none";
    }
};
