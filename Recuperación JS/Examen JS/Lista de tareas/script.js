const contenedor = document.getElementById ("taskContainer");
const input = document.getElementById("taskInput");
const agregarBoton = document.getElementById("addBtn");
const lista = document.getElementById("taskList");

agregarBoton.addEventListener("click", agregarTarea)
function agregarTarea() {
  const tarea = input.value;
    const liTarea = document.createElement("li");

    liTarea.textContent = tarea;

    lista.appendChild(liTarea);
    input.value = "";
}
  


