const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

function comprobar() {
    const entrada = document.getElementById("entrada").value;
    entrada = Number(entrada);

    const mensaje = document.getElementById("mensaje");

    if (entrada === numeroSecreto) {
        mensaje.textContent = "¡Correcto! El número era " + numeroSecreto;
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Incorrecto. Intenta otra vez. Intentos: " + intentos;
        mensaje.style.color = "red";
        intentos++;
    }
}
