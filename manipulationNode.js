// /* document.createElement();
// document.createTextNode();
// node.appendChild();
// node.insertBefore();
// parentNode.removeChild();
// parentNode.replaceChild();
//  */

// // membuat paragraf baru
// const pBaru = document.createElement("p");
// const teksPBaru = document.createTextNode("Ini paragraf baru.");

// // simpan teks di dalam paragraf
// pBaru.appendChild(teksPBaru);

// // simpan paragraf di akhir section A
// const sectionA = document.getElementById("a");
// sectionA.appendChild(pBaru);
// ////////////////////////////////////////////////////////////////////////
// const wadahLi = document.createElement("li");
// const Liteks = document.createTextNode("Ini li baru.");
// wadahLi.appendChild(Liteks);

// const ul = document.querySelector("ul");
// const li = ul.querySelector("li:nth-child(2)");
// ul.insertBefore(wadahLi, li); // inserBefore(pengganti, yg diganti)
// ////////////////////////////////////////////////////////////////
// const p1Baru = sectionA.querySelector("p");
// sectionA.removeChild(p1Baru);
////////////////////////////////////////////////////////////////
const sectionB = document.getElementById("b");
const pygDiganti = sectionB.querySelector("p");
const wadahH2 = document.createElement("h2");
const h2teks = document.createTextNode("JDUDL H@");
wadahH2.appendChild(h2teks);
sectionB.replaceChild(wadahH2, pygDiganti);
