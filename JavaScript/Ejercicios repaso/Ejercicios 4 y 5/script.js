// Seleccionamos los elementos necesarios
var lista = document.getElementById("lista");
var boton = document.getElementById("agregar");
var entrada = document.getElementById("entrada");

// Función para crear un <li> con su botón de borrar
function crearElemento(texto) {
    // Crear el <li>
    var nuevo = document.createElement("li");
    nuevo.textContent = texto + " ";

    // Crear el botón de borrar
    var btnBorrar = document.createElement("button");
    btnBorrar.textContent = "X";
    btnBorrar.className = "borrar";

    // Añadir el botón al <li>
    nuevo.appendChild(btnBorrar);

    // Añadir el <li> a la lista
    lista.appendChild(nuevo)

    // Evento para borrar el elemento
    btnBorrar.onclick = function () {
        var li = this.parentElement;
        li.remove();
    };
}

// Cuando se hace clic en "Agregar"
boton.onclick = function () {
    var texto = entrada.value;

    // Evitar añadir elementos vacíos
    if (texto !== "") {
        crearElemento(texto);
        entrada.value = ""; // limpiar el cuadro de texto
    }
};
