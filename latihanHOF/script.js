// ambil semua elemen video
let videos = Array.from(document.querySelectorAll("[data-duration]"));
// pilih hanya yg 'JAVASCRIPT LANJUTAN'
let jsLAnjut = videos
  .filter((vid) => vid.textContent.includes("JAVASCRIPT LANJUTAN"))

  // ambil surasi masing2 video
  .map(function (item) {
    let items = item.getAttribute("data-duration");
    return items;
  })
  // ubah durasi menjadi int, ubah menit menjadi detik
  .map((detik) => {
    let menit = detik.split(":").map((pars) => parseFloat(pars));
    return menit[0] * 60 + menit[1];
  })
  // jumblahkan semua detik
  .reduce((a, b) => a + b, 0);
// ubah formatnya menjadi jam menit detik
let jam = Math.round(jsLAnjut / 3600);
jsLAnjut -= jam * 3600;
let menit = Math.floor(jsLAnjut / 60);
let detik = jsLAnjut - menit * 60;
// simpan di dom
let hasilDurasi = document.querySelector("li:nthchild()");
console.log(detik);
