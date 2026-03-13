// Seleccionamos todos los botones con la clase "borrar"
var botones = document.getElementsByClassName("borrar");

// Recorremos los botones
for (var i = 0; i < botones.length; i++) {
  botones[i].onclick = function() {
    // "this" es el botón que se ha pulsado
    var li = this.parentElement; // el <li> donde está el botón
    li.remove(); // eliminamos ese <li>
  };
}
