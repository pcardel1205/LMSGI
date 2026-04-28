var imagen = document.getElementById("slide");

var fotos = ["img1.jpg", "img2.jpg", "img3.jpg"];

var fotoactual = 0;

function mostrar() {

    // Cambiar la imagen del <img id="slide">
    imagen.src = fotos[fotoactual];

    // Pasar a la siguiente
    fotoactual++;

    // Si llega al final, vuelve a la primera
    if (fotoactual >= fotos.length) {
        fotoactual = 0;
    }

    // Repetir cada 2 segundos
    setTimeout(mostrar, 2000);
}

// Iniciar carrusel
mostrar();
