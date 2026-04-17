const entrada = document.getElementById("entrada");
const listatareas = document.getElementById("listatareas");
const añadir = document.getElementById("añadir");

añadir.addEventListener('click' , añadirTarea);

function añadirTarea() {

    const tarea = document.createElement("li");
    tarea.textContent = entrada.value;

    const completada = document.createElement("entrada");
    completada.type = "checkbox";
    listatareas.appendChild(tarea);
    tarea.appendChild(completada);

    completada.addEventListener("click", cambiarClase);
    function cambiarClase() {
    this.parentElement.classList.toggle('miclase');
}
}