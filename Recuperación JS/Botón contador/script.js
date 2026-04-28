let numero = document.getElementById("contador");
const botonSumar = document.getElementById("sumar");
const botonRestar = document.getElementById("restar");
const botonReiniciar = document.getElementById("reset");

botonSumar.addEventListener("click", sumar);
botonRestar.addEventListener("click", restar);
botonReiniciar.addEventListener("click", reiniciar);
let valor = 0; 

function sumar() {
    valor++;
    numero.textContent = valor;
}

function restar() {
    valor--;
    numero.textContent = valor;
}

function reiniciar() {
    valor = 0;
    numero.textContent = valor;
}

