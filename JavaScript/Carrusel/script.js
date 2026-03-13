const imagen = document.getElementById("imagen");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

btn1.addEventListener("click", () => {
  imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hruXGepIagh-oryu6q6r-3cJN6j3_Ycn_w&s";
});

btn2.addEventListener("click", () => {
  imagen.src = "https://images.ecestaticos.com/rkWse0IcmAVicq6Kx97NSiW1LHo=/0x0:2272x1699/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fad1%2F635%2F137%2Fad163513735b5af28ec3776882d25514.jpg";
});

btn3.addEventListener("click", () => {
  imagen.src = "https://www.lavanguardia.com/files/og_thumbnail/uploads/2023/02/22/63f5f62705093.jpeg";
});
