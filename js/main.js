// ============== MOBILE MENU =====================
const menuBtn = document.querySelector('.menu-btn');
const menuMobileList = document.getElementById('mobile-list');
menuBtn.onclick = () => {
  menuMobileList.classList.toggle('menu-mobile-list-active');
}


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

const moreBtnList = document.querySelectorAll('.more-btn');
const imgList = document.querySelectorAll('.more-item-img');

for(let i = 0; i < imgList.length; i++){
  imgList[i].onmouseover = () =>{
    moreBtnList[i].style.top = '150px';
    moreBtnList[i].style.opacity = '1';
  }

  imgList[i].onmouseout = () =>{
    moreBtnList[i].style.top = '0';
    moreBtnList[i].style.opacity = '0';
  }
}


  
