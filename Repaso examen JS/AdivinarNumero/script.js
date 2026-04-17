const botonAdivinar = document.getElementById("adivinar");
const entrada = document.getElementById("entrada");
const resultado = document.getElementById("resultado");
const numeroSecreto = Math.floor(Math.random()*11);
let nIntentos = 0;
botonAdivinar.addEventListener('click', adivinar);

function adivinar() {
    nIntentos++;
    if (numeroSecreto == entrada.value){
        resultado.textContent = "¡Has ganado! Número de intentos: " + nIntentos;
    } else if (numeroSecreto > entrada.value) {
        resultado.textContent = "El número secreto es mayor que el que has introducido.";
    } else if (numeroSecreto < entrada.value) {
        resultado.textContent = "El número secreto es menor que el que has introducido.";
    }
}