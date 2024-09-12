document.addEventListener("DOMContentLoaded", () => {
  let menuicon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");
  let sections = document.querySelectorAll("section");
  let navlinks = document.querySelectorAll("header nav a");

  // Fungsi untuk menutup navbar
  function closeNavbar() {
    menuicon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }

  // Fungsi untuk membuka/menutup navbar
  function toggleNavbar() {
    menuicon.classList.toggle("bx-x"); // Toggle kelas bx-x untuk membuat animasi
    navbar.classList.toggle("active");
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
          if (document.querySelector("header nav a[href*='" + id + "']")) {
            document.querySelector("header nav a[href*='" + id + "']").classList.add("active");
          }
        });
      }
    });
  };

  // Mengatur klik pada ikon menu
  menuicon.onclick = toggleNavbar;

  // Menutup navbar ketika klik di luar
  document.addEventListener("click", (event) => {
    if (!navbar.contains(event.target) && !menuicon.contains(event.target) && navbar.classList.contains("active")) {
      closeNavbar();
    }
  });

  // Menutup navbar saat link navigasi diklik (untuk mode mobile)
  navlinks.forEach((link) => {
    link.addEventListener("click", closeNavbar);
  });
});
