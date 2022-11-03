var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: 'fade',
  speed: 3000,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
    fadeEffect: {
      crossFade: true
    },
  },
});

var swiper = new Swiper(".feedbackSwiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

var swiper = new Swiper( ".newsSwiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

var swiper = new Swiper( ".offerSwiper", {
  slidesPerView: 5,
  slidesPerGroup: 1,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

var swiper = new Swiper( ".browseSwiper", {
  slidesPerView: 4,
  slidesPerGroup: 1,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});