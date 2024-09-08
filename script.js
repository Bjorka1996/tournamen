let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

// Fungsi untuk menutup navbar
function closeNavbar() {
  menuicon.classList.remove("bx-x");
  navbar.classList.remove("active");
}

// Mengatur scroll untuk menandai tautan aktif
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*='" + id + "']").classList.add("active");
      });
    }
  });
};

// Mengatur klik pada ikon menu
menuicon.onclick = () => {
  menuicon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Menutup navbar ketika klik di luar
document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target) && !menuicon.contains(event.target) && navbar.classList.contains("active")) {
    closeNavbar();
  }
});
