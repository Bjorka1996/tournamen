// Mengambil Elemen yang Dibutuhkan
const slider = document.querySelector(".slider");
const list = document.querySelector(".list");
const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dots li");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let currentIndex = 0; // Indeks awal slider
let autoSlideInterval; // Variabel untuk menyimpan interval otomatis

// Fungsi untuk Memperbarui Slider
function updateSlider(index) {
  list.style.transform = `translateX(-${index * 100}%)`; // Geser slider
  dots.forEach((dot) => dot.classList.remove("active")); // Hapus kelas aktif dari semua dot
  dots[index].classList.add("active"); // Tambahkan kelas aktif pada dot yang sesuai
}

// Fungsi untuk Menampilkan Slide Berikutnya
function showNext() {
  currentIndex = (currentIndex + 1) % items.length;
  updateSlider(currentIndex);
}

// Fungsi untuk Menampilkan Slide Sebelumnya
function showPrev() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateSlider(currentIndex);
}

// Fungsi untuk Mengaktifkan Auto Slide
function startAutoSlide() {
  autoSlideInterval = setInterval(showNext, 3500); // Ganti slide setiap 3,5 detik
}

// Fungsi untuk Menghentikan Auto Slide
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Mengaktifkan Auto Slide Saat Halaman Dimuat
startAutoSlide();

// Menambahkan Event Listener pada Tombol Navigasi
nextBtn.addEventListener("click", () => {
  showNext();
  stopAutoSlide(); // Hentikan auto slide ketika user mengklik tombol
  startAutoSlide(); // Restart auto slide
});

prevBtn.addEventListener("click", () => {
  showPrev();
  stopAutoSlide(); // Hentikan auto slide ketika user mengklik tombol
  startAutoSlide(); // Restart auto slide
});

// Menambahkan Event Listener pada Dots Navigasi
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider(currentIndex);
    stopAutoSlide(); // Hentikan auto slide ketika user mengklik dot
    startAutoSlide(); // Restart auto slide
  });
});

// Mengaktifkan auto slide ulang ketika user berhenti berinteraksi dengan slider
slider.addEventListener("mouseover", stopAutoSlide);
slider.addEventListener("mouseout", startAutoSlide);

// Set dot pertama sebagai aktif
dots[currentIndex].classList.add("active");
