const navBtn = document.querySelector(".nav-btn");
const mainMenu = document.querySelector(".main-menu");
const navBar = document.querySelector(".navbar");

navBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
  navBtn.classList.toggle("active");
  mainMenu.classList.toggle("active");
});
//swiper
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centeredSlides: true,
  fade: "true",
  grabCursor: "true",
  autoplay: {
    delay: 2000, // Delay 3 detik
    disableOnInteraction: false, // Tetap autoplay setelah interaksi manual
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// Event listener untuk mengubah warna latar belakang kartu
swiper.on("slideChange", function () {
  // Menghapus kelas 'active' dari semua kartu
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.classList.remove("active");
  });

  // Menambahkan kelas 'active' pada kartu yang aktif
  const activeIndex = swiper.realIndex; // Mengambil indeks slide yang aktif
  const activeCard = cards[activeIndex];
  if (activeCard) {
    activeCard.classList.add("active");
  }
});

// Inisialisasi untuk menambahkan kelas 'active' pada slide pertama
swiper.on("init", function () {
  const activeCard = swiper.slides[swiper.activeIndex];
  if (activeCard) {
    activeCard.classList.add("active");
  }
});
const bullets = document.querySelectorAll(".swiper-pagination-bullet");
bullets.forEach((bullet) => {
  bullet.style.backgroundColor = "#b8e801"; // Uji untuk melihat apakah ini berfungsi
});
// Inisialisasi Swiper
swiper.init();
//timline
// VARIABLES
const elH = document.querySelectorAll(".timeline li > div");

// START
window.addEventListener("load", init);

function init() {
  setEqualHeights(elH);
}

// SET EQUAL HEIGHTS
function setEqualHeights(el) {
  let counter = 0;
  for (let i = 0; i < el.length; i++) {
    const singleHeight = el[i].offsetHeight;

    if (counter < singleHeight) {
      counter = singleHeight;
    }
  }

  for (let i = 0; i < el.length; i++) {
    el[i].style.height = `${counter}px`;
  }
}
