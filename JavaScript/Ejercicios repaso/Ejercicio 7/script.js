// Seleccionamos el formulario, el input y el mensaje de error
var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var error = document.getElementById("error");

// Cuando se envía el formulario...
formulario.addEventListener("submit", function(evento) {

  // Evitamos que el formulario se envíe
  evento.preventDefault();

  // Si el campo está vacío, mostramos el error
  if (nombre.value === "") {
    error.style.display = "block";
  } else {
    // Si tiene texto, ocultamos el error
    error.style.display = "none";
  }
});
