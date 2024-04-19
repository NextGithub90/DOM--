const card = document.querySelectorAll(".card");
const close = document.querySelectorAll(".close");
// close.forEach((element, i) => {
//   element.addEventListener("click", function () {
//     card[i].style.display = "none";
//   });
// });
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function () {
//     card[i].style.display = "none";
//   });
// }\

// k3de 2
/* close.forEach((element, i) => {
  element.addEventListener("click", function () {
    console.log(close); // Baris ini tetap sama untuk keperluan logging
    element.parentElement.style.display = "none"; // Akses elemen induk dengan benar
  });
});
 */

const container = document.querySelector(".container");
container.addEventListener("click", function (i) {
  if ((i.target.className = "close")) {
    i.target.parentElement.style.display = "none";
  }
});
