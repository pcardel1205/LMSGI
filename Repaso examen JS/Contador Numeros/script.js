let contador = document.getElementById("contador");
const botonSumar = document.getElementById("sumar");
const botonRestar = document.getElementById("restar");
const botonReset = document.getElementById("reset");

botonSumar.addEventListener('click', sumar);
botonRestar.addEventListener('click', restar);
botonReset.addEventListener('click', reset);
let valor = 0;

function sumar() {
    valor++;
    contador.textContent = valor;
}

function restar() {
    valor--;
    contador.textContent = valor;
}

function reset() {
    valor = 0;
    contador.textContent = valor;
}