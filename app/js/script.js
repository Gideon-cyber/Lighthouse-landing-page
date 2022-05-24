const hamburgerBtn = document.querySelector(".hero__header_hamburger");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".hero__nav");
const videoBtn = document.querySelector(".video__btn");
const videoClip = document.querySelector(".video__clip");
const closeVideo = document.querySelector(".video__clip_text");

let menuOpen = false;

// Functionality for hamburger button on mobile
hamburgerBtn.addEventListener("click", function () {
  if (!menuOpen) {
    hamburgerBtn.classList.add("open");
    overlay.classList.remove("hidden-mob");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
    mobileMenu.classList.remove("hidden-mob");
    mobileMenu.classList.remove("fade-out");
    mobileMenu.classList.add("fade-in");
    menuOpen = true;
  } else {
    hamburgerBtn.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
    mobileMenu.classList.remove("fade-in");
    mobileMenu.classList.add("fade-out");
    menuOpen = false;
  }
});

overlay.addEventListener("click", function () {
  hamburgerBtn.classList.remove("open");
  overlay.classList.remove("fade-in");
  overlay.classList.add("fade-out");
  mobileMenu.classList.remove("fade-in");
  mobileMenu.classList.add("fade-out");
  menuOpen = false;
});

// Functionality for video button
videoBtn.addEventListener("click", () => {
  videoBtn.classList.add("active");
  videoClip.classList.add("active");
});

closeVideo.addEventListener("click", () => {
  videoBtn.classList.remove("active");
  videoClip.classList.remove("active");
});

// Adding scrollable carousel feature in works section
$(".works__main-carousel").flickity({
  // options
  cellAlign: "left",
  wrapAround: true,
  freeScroll: true, //makes carousel scrollable
  autoPlay: true, //makes carousel scroll automatically
});
