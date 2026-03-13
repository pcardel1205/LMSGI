// Seleccionamos la lista y el botón
var lista = document.getElementById("lista");
var boton = document.getElementById("agregar");

// Cuando se hace clic en el botón...
boton.onclick = function() {
  // Creamos un nuevo <li>
  var nuevo = document.createElement("li");

  // Le ponemos el texto
  nuevo.textContent = "Nuevo elemento";

  // Lo añadimos a la lista
  lista.appendChild(nuevo);
};
