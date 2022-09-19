const hamburgerBtn = document.querySelector(".hero__header_hamburger");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".hero__nav");
const videoBtn = document.querySelector(".video__btn");
const videoClip = document.querySelector(".video__clip");
const closeVideo = document.querySelector(".video__clip_text");

const coporateHr = document.querySelector(
  ".services__container__corporate_learnMore"
);
const workplace = document.querySelector(
  ".services__container__workplace_learnMore"
);
const performance = document.querySelector(
  ".services__container__performance_learnMore"
);
const aboutPageOverlay = document.querySelector(".aboutPage__modal_overlay");
const aboutPageOverlayText = document.querySelector(
  ".aboutPage__modal_overlay_text"
);
const aboutPageModal = document.querySelector(".aboutPage__modal");
const coporateModal = document.querySelector(".aboutPage__modal_corporate");
const workplaceModal = document.querySelector(".aboutPage__modal_workplace");
const performanceModal = document.querySelector(
  ".aboutPage__modal_performance"
);

let menuOpen = false;
let modalOpen = false;

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

    setTimeout(fade, 330);

    function fade() {
      mobileMenu.classList.add("hidden-mob");
      mobileMenu.classList.remove("fade-out");
    }
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

// Adding scrollable carousel feature in testimonial section
$(".testimonials__box_container").flickity({
  // options
  cellAlign: "center",
  wrapAround: true,
  freeScroll: true, //makes carousel scrollable
  autoPlay: true, //makes carousel scroll automatically
});

//closing modal function
const closeModal = () => {
  aboutPageModal.classList.remove("fade-in");
  coporateModal.classList.remove("fade-in");
  workplaceModal.classList.remove("fade-in");
  performanceModal.classList.remove("fade-in");
  aboutPageModal.classList.add("fade-out");
  coporateModal.classList.add("fade-out");
  workplaceModal.classList.add("fade-out");
  performanceModal.classList.add("fade-out");
  modalOpen = false;
};

coporateHr.addEventListener("click", () => {
  if (!modalOpen) {
    aboutPageModal.classList.remove("hidden-dt");
    aboutPageModal.classList.remove("hidden-mob");
    aboutPageModal.classList.remove("fade-out");
    aboutPageModal.classList.add("fade-in");
    coporateModal.classList.remove("hidden-dt");
    coporateModal.classList.remove("hidden-mob");
    coporateModal.classList.remove("fade-out");
    coporateModal.classList.add("fade-in");
    workplaceModal.classList.add("fade-out");
    workplaceModal.classList.remove("fade-in");
    performanceModal.classList.remove("fade-in");
    performanceModal.classList.add("fade-out");
    modalOpen = true;
  } else {
    closeModal();
  }
});

workplace.addEventListener("click", () => {
  if (!modalOpen) {
    aboutPageModal.classList.remove("hidden-dt");
    aboutPageModal.classList.remove("hidden-mob");
    aboutPageModal.classList.remove("fade-out");
    aboutPageModal.classList.add("fade-in");
    workplaceModal.classList.remove("hidden-dt");
    workplaceModal.classList.remove("hidden-mob");
    workplaceModal.classList.remove("fade-out");
    workplaceModal.classList.add("fade-in");
    coporateModal.classList.remove("fade-in");
    coporateModal.classList.add("fade-out");
    performanceModal.classList.remove("fade-in");
    performanceModal.classList.add("fade-out");
    modalOpen = true;
  } else {
    closeModal();
  }
});

performance.addEventListener("click", () => {
  if (!modalOpen) {
    aboutPageModal.classList.remove("hidden-dt");
    aboutPageModal.classList.remove("hidden-mob");
    aboutPageModal.classList.remove("fade-out");
    aboutPageModal.classList.add("fade-in");
    performanceModal.classList.remove("hidden-dt");
    performanceModal.classList.remove("hidden-mob");
    performanceModal.classList.remove("fade-out");
    performanceModal.classList.add("fade-in");
    coporateModal.classList.remove("fade-in");
    coporateModal.classList.add("fade-out");
    workplaceModal.classList.remove("fade-in");
    workplaceModal.classList.add("fade-out");
    modalOpen = true;
  } else {
    closeModal();
  }
});

aboutPageOverlay.addEventListener("click", closeModal);

aboutPageOverlayText.addEventListener("click", closeModal);
