// Seleccionamos los elementos
var contador = document.getElementById("contador");
var sumar = document.getElementById("sumar");
var restar = document.getElementById("restar");

// Guardamos el número actual
var numero = 0;

// Botón para sumar
sumar.onclick = function() {
  numero = numero + 1;
  contador.textContent = numero;
};

// Botón para restar
restar.onclick = function() {
  numero = numero - 1;
  contador.textContent = numero;
};
