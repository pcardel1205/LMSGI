const input = document.getElementById("tareaInput");
const agregarTarea = document.getElementById("agregarBtn");
const lista = document.getElementById("listaTareas");

agregarTarea.addEventListener("click", agregarElemento);

function agregarElemento() {
    const texto = input.value;
    const liTarea = document.createElement("li");
    liTarea.textContent = texto;

    lista.appendChild(liTarea);

    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "X";

    botonBorrar.addEventListener("click", function borrar() {
        liTarea.remove();
    });
    
    liTarea.appendChild(botonBorrar);
}
