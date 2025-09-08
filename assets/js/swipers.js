'use strict'

document.addEventListener("DOMContentLoaded", () => {
  const slider = new Swiper('[data-single-slider]', {
    speed: 600,
    grabCursor: true,
    watchSlidesProgress: true,
    preloadImages: false,
    lazy: true,
    keyboard: {enabled: true},
    a11y: {
      enabled: true,
      //prevSlideMessage: 'Предыдущий слайд',
      //nextSlideMessage: 'Следующий слайд'
    },
    navigation: {
      nextEl: '[data-single-next]',
      prevEl: '[data-single-prev]',
      lockClass: 'swiper-nav__lock'
    },

    // немного «воздуха» между слайдами на маленьких экранах — если понадобится
    spaceBetween: 0,
    breakpoints: {
      480: {spaceBetween: 8},
      768: {spaceBetween: 12}
    }
  });
})
