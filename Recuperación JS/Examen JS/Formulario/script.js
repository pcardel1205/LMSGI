const contenedor = document.getElementById("formContainer");
const nombreInput = document.getElementById("nombre");
const profesionInput = document.getElementById("profesion");
const descripcionInput = document.getElementById("descripcion");
const boton = document.getElementById("crearBtn");
const cartas = document.getElementById("cardsContainer");

boton.addEventListener ("click", añadirTarjeta);

function añadirTarjeta(){
    const nombre = nombreInput.value;
    const profesion = profesionInput.value;
    const descripcion = descripcionInput.value;

    if (nombre == "" || profesion == "" || descripcion == "") {
        alert("Rellene todos los campos.");
        return;
    }

    const tarjeta = document.createElement("div");
    tarjeta.setAttribute ("class", "card");

    const titulo = document.createElement("h3");
    titulo.textContent = nombre;

    const parrafo1 = document.createElement("p");
    parrafo1.textContent = profesion;

    const parrafo2 = document.createElement("p");
    parrafo2.textContent = descripcion;

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(parrafo1);
    tarjeta.appendChild(parrafo2);

    cartas.appendChild(tarjeta);

    nombreInput.value = "";
    profesionInput.value = "";
    descripcionInput.value = "";
}