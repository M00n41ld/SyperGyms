import '../vendor/swiper';

const Swiper = window.Swiper;

(() => new Swiper('.slider-container', {
  loop: true,

  navigation: {
    nextEl: '.trainers__next',
    prevEl: '.trainers__prev',
  },
  maxBackfaceHiddenSlides: 0,
  breakpoints: {

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    1300: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
    },
  },
}))();

(() => new Swiper('.swiper-reviews', {
  direction: 'horizontal',
  loop: false,

  navigation: {
    nextEl: '.reviews__next',
    prevEl: '.reviews__prev ',
  },

  slidesPerView: 1,
}))();
