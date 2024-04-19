//pilcom
function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

//rules
function getHasil(comp, player) {
  if (player == comp) return "SERI!!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH!" : "MENANG!";
}

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pKomputer = getPilihanComputer();
//   const pPlayer = pGajah.className;
//   const hasil = getHasil(pKomputer, pPlayer);
//   const imgComp = document.querySelector(".img-komputer");
//   imgComp.setAttribute("src", "img/" + pKomputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
//   console.log(imgComp);
// });

const imgAll = document.querySelectorAll("li img");
for (let i = 0; i < imgAll.length; i++) {
  imgAll[i].addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = imgAll[i].className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    const imgComp = document.querySelector(".img-komputer");
    const info = document.querySelector(".info");
    imgComp.setAttribute("src", "img/" + pilihanComputer + ".png");
    info.innerHTML = hasil;
  });
}
