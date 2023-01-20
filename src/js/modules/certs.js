
//  Swiper certs
const gap = 32;
const certsSwiper = new Swiper('.certs__swiper', {
  slidesPerView: 1,
  spaceBetween: gap,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: gap
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: gap
    },
  },
  navigation: {
    nextEl: '.certs__swiper-nav--next',
    prevEl: '.certs__swiper-nav--prev'
  }
});

// Full view
Fancybox.bind("#grouped-images img", {
  groupAll: true,
});
