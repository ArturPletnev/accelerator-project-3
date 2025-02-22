import { Swiper } from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

const initReviewsSlider = () => {
  const sliderReviewsEl = document.querySelector('.swiper-reviews');
  const swiperReviews = new Swiper(sliderReviewsEl, {
    modules: [Navigation, Scrollbar],
    loop: false,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 30,
    allowTouchMove: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      320: {
        slidesPerGroup: 1,
      },
      768: {
        slidesPerGroup: 1,
        scrollbar: {
          dragSize: 326,
        }
      },
      1440: {
        allowTouchMove: false,
        spaceBetween: 32,
        scrollbar: {
          dragSize: 394,
        },
      }
    },
  });
  swiperReviews.update();
};

export { initReviewsSlider };
