document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });

  const btnTopo = document.getElementById("btnTopo");
  window.addEventListener("scroll", function () {
    btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
  });
  btnTopo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  ScrollReveal().reveal('.galeria-fixa .item', {
    dellay: 100,
    iterval: 100,
    distace: '20px',
    origin:'bottom',
    duration: 800
  });
});