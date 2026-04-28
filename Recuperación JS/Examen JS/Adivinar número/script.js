const numeroSecreto = Math.floor(Math.random()*11);
const numeroIngresado = document.getElementById("data");
const validar = document.getElementById("validate");
const advertencia = document.getElementById("warning");
const ptsLabel = document.getElementById("pts-label");
const modal = document.getElementById("modal");
const ptsFinal = document.getElementById("pts");
let fallos = 0;

validar.addEventListener("click", function() {
    let valor = numeroIngresado.value;

    if (valor == "") {
        advertencia.textContent = "Introduce un número";
        return;
    }

    if (valor == numeroSecreto) {
        ptsFinal.textContent = "Número de fallos: " + fallos;
        modal.style.display = "flex";
    }
    else {
        fallos++;
        ptsLabel.textContent = fallos;

        if (valor < numeroSecreto) {
            advertencia.textContent = "El número es mayor al que has ingresado.";
        } else {
            advertencia.textContent = "El número es menor al que has ingresado.";
        }
    }
    numeroIngresado.value = "";
})