let precio = document.getElementById("precio");
let descuento = document.getElementById("descuento");
let btn = document.getElementById("btnCalcular");
let resultado = document.getElementById("resultado");

btn.addEventListener("click", function() {

    // Cálculo del precio final
    let precioFinal = precio.value - (precio.value * (descuento.value / 100));

    // Mostrar resultado
    resultado.textContent = precioFinal + " €";
});
