// const p3 = document.querySelector(".p3");
// function clickYa() {
//   p3.style.color = "red";

//   //   p3.style.color = "red";
// }
// p3.style.backgroundColor;

// p3.innerHTML = "haloooo";
const p4 = document.querySelector("#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("ul");
  const li = ul.querySelector("li:nth-child(3)");
  const wadahLi = document.createElement("li");
  const Liteks = document.createTextNode("Ini li baru.");
  wadahLi.appendChild(Liteks);
  ul.appendChild(wadahLi);
});
