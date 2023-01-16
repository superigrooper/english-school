const gap = 32;
const certsSwiper = new Swiper('.certs__swiper', {
  // loop: true,
  slidesPerView: 3,
  spaceBetween: gap,
  navigation: {
    nextEl: '.certs__swiper-nav--next',
    prevEl: '.certs__swiper-nav--prev'
  }
});

Fancybox.bind("#grouped-images img", {
  groupAll: true,
});
