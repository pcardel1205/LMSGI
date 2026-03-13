// Seleccionamos el párrafo y el botón
var texto = document.getElementById("texto");
var boton = document.getElementById("btn");

// Cuando se hace clic en el botón...
boton.addEventListener("click", function () {
    texto.textContent = "Texto cambiado con JavaScript";
});
