const hamburgerBtn = document.querySelector(".hero__header_hamburger");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".hero__nav");

let menuOpen = false;

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
