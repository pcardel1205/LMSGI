const input = document.getElementById("tareaInput");
const botonAgregar = document.getElementById("agregarBtn");
const lista = document.getElementById("listaTareas");

botonAgregar.addEventListener('click', agregarTarea);

function agregarTarea() {
    const tarea = input.value;
    const liTarea = document.createElement('li');

    liTarea.textContent = tarea;

    const botonBorrar = document.createElement('button');
    botonBorrar.textContent = "X";

    botonBorrar.addEventListener ('click' , function borrar() {
        liTarea.remove();
    });
    
    liTarea.appendChild(botonBorrar);
    lista.appendChild(liTarea);
    input.value = "";

}

