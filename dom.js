// DOM Selection
// document.getElementsById() -> element
// const judul = document.getElementById("judul");
// judul.style.color = "blue";
// judul.innerHTML = "<marquee>Hello world</marquee>";

//document.getElementsByTagName() ->

/* let p = document.getElementsByTagName("p");
p[0].style.color = "blue";
p[1].style.backgroundColor = "#ffebcd";

// atau
for (let i = 0; i < p.length; i++) {
  p[i].style.border = "2px solid black";
}
 */

// document.getElementsByClassName() -> htmlColeetion
// let cn = document.getElementsByClassName("halo");
// cn[0].style.backgroundColor = "grey";

// query selector -> 1element
// const li2 = document.querySelector("p");
// li2.style.color = "red";
// li2.style.backgroundColor = "black";

// query selector all -> 1element
const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].innerHTML = "halo";
}
