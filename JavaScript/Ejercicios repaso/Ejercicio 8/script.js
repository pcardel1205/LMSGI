// Seleccionamos los elementos
var entrada = document.getElementById("tarea");
var boton = document.getElementById("agregar");
var lista = document.getElementById("lista");

// Función para crear una tarea
function agregarTarea(texto) {
  // Crear el <li>
  var li = document.createElement("li");

  // Crear la casilla (checkbox)
  var check = document.createElement("input");
  check.type = "checkbox";

  // Crear el texto de la tarea
  var span = document.createElement("span");
  span.textContent = texto + " ";

  // Crear el botón de borrar
  var btnBorrar = document.createElement("button");
  btnBorrar.textContent = "X";

  // Añadir todo al <li>
  li.appendChild(check);
  li.appendChild(span);
  li.appendChild(btnBorrar);

  // Añadir el <li> a la lista
  lista.appendChild(li);

  // Evento para marcar como completada
  check.onclick = function() {
    li.classList.toggle("hecho");
  };

  // Evento para borrar
  btnBorrar.onclick = function() {
    li.remove();
  };
}

// Evento del botón "Agregar"
boton.onclick = function() {
  var texto = entrada.value;

  if (texto !== "") {
    agregarTarea(texto);
    entrada.value = "";
  }
};
