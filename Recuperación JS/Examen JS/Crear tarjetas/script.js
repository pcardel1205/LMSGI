const formulario = document.getElementById("formulario");
const contenedor = document.getElementById("contenedor");

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const imagen = document.getElementById("imagen").value;

    if (nombre == "" || precio == "" || imagen == "") {
        alert("Rellena todos los campos.");
    }

    const tarjeta = document.createElement("div");
    tarjeta.setAttribute("class", "tarjeta");

    const img = document.createElement("img");
    img.setAttribute("src", imagen);

    const p = document.createElement("p");
    p.textContent = precio + "€";

    const titulo = document.createElement("h3");
    titulo.textContent = nombre;

    const boton = document.createElement("button");
    //boton.setAttribute("class", "eliminar");
    boton.classList.add("eliminar");
    boton.textContent = "Eliminar";

    boton.addEventListener("click", function() {
        contenedor.removeChild(tarjeta);
    })

    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(p);
    tarjeta.appendChild(boton);

    contenedor.appendChild(tarjeta);

    formulario.reset();
});
