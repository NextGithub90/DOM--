// const container = document.querySelector(".container");
// const jumbo = document.querySelector(".jumbo");
// const thumbs = document.querySelectorAll(".thumb");

// container.addEventListener("click", function (e) {
//   if (e.target.className == "thumb") {
//     jumbo.src = e.target.src;
//   }
//   jumbo.classList.add("fade"); //
//   setTimeout(function () {
//     jumbo.classList.remove("fade");
//   }, 500);
//   thumbs.forEach(function (thumb) {
//     if (thumb.classList.contains("active")) {
//       thumb.classList.remove("active");
//     }
//   });
//   e.target.classList.add("active");
// });

// const thumbs = document.querySelectorAll(".thumb");
// const jumbo = document.querySelector(".jumbo");
// thumbs.forEach(function (img) {
//   img.addEventListener("click", function () {
//     const imgAtribute = img.getAttribute("src");
//     jumbo.setAttribute("src", imgAtribute);
//     jumbo.classList.add("fade");
//     setTimeout(function () {
//       jumbo.classList.remove("fade");
//     }, 500);

//     thumbs.forEach(function (thumb) {
//       img.classList.add("active");
//       thumb.classList.remove("active");
//       // console.log(thumb);
//       // console.log(img);
//     });
//   });
// });

// const thumbs = document.querySelectorAll(".thumb");
// const jumbo = document.querySelector(".jumbo");

// thumbs.forEach(function (thumb) {
//   thumb.addEventListener("click", function () {
//     const imgAtribute = thumb.getAttribute("src");
//     jumbo.setAttribute("src", imgAtribute);

//     // Memperbaiki setTimeout dengan menambahkan event listener "transitionend"
//     jumbo.classList.add("fade");
//     jumbo.addEventListener("transitionend", function () {
//       jumbo.classList.remove("fade");
//     });

// thumbs.forEach(function (thumb) {
//   thumb.classList.remove("active");
// });
// thumb.classList.add("active");
//   });
// });

const thumbs = document.querySelectorAll(".thumb");
const jumbo = document.querySelector(".jumbo");
thumbs.forEach(function (thumb) {
  thumb.addEventListener("click", function () {
    // let imgAt = thumb.getAttribute("src");
    // jumbo.setAttribute("src", imgAt);
    jumbo.src = thumb.src;
    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);
    thumbs.forEach(function (ac) {
      thumb.classList.add("active");
      ac.classList.remove("active");
      // ac.classList.remove("active");
    });
  });
});
