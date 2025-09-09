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
    },
    navigation: {
      nextEl: '[data-single-next]',
      prevEl: '[data-single-prev]',
      lockClass: 'swiper-nav__lock'
    },

    spaceBetween: 0,
    breakpoints: {
      /*480: {spaceBetween: 8},
      768: {spaceBetween: 12}*/
    }
  });

  const sliderReviews = new Swiper('[data-reviews-slider]', {
    speed: 600,
    grabCursor: true,
    watchSlidesProgress: true,
    preloadImages: false,
    watchOverflow: true,
    lazy: true,
    keyboard: {enabled: true},
    a11y: {
      enabled: true,
    },
    navigation: {
      nextEl: '[data-reviews-next]',
      prevEl: '[data-reviews-prev]',
      lockClass: 'swiper-nav__lock'
    },

    spaceBetween: 0,
    breakpoints: {
     /* 480: {spaceBetween: 8},
      768: {spaceBetween: 12}*/
    }
  });
})
