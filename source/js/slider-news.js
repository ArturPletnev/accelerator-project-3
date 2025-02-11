import {
  Swiper
} from 'swiper';
import {
  Grid,
  Pagination
} from 'swiper/modules';

const initNewsSlider = () => {
  const sliderNewsEl = document.querySelector('.swiper-news');
  const swiperNews = new Swiper(sliderNewsEl, {
    modules: [Grid, Pagination],
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 20,
    loop: false,
    allowTouchMove: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        const totalSlides = this.slides.length;
        const activeIndex = this.activeIndex;

        let start = 0;
        let end = Math.min(4, totalSlides);

        if (totalSlides > 4) {
          if (activeIndex < 3) {
            start = 0;
            end = 4;
          } else if (activeIndex >= totalSlides - 1) {
            start = totalSlides - 4;
            end = totalSlides;
          } else {
            start = activeIndex - 2;
            end = activeIndex + 2;
            if (end > totalSlides) {
              end = totalSlides;
            }

          }

          if (start < 0) {
            start = 0;
            end = Math.min(4, totalSlides);
          }
        }

        const bulletIndex = index + 1;

        if (bulletIndex >= (start + 1) && bulletIndex <= end) {
          return `<button class="${className}" type="button" aria-label="Перейти на слайд ${bulletIndex}">${bulletIndex}</button>`;
        }

        return '';
      },
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      768: {
        spaceBetween: 30,
        slidesPerGroup: 4,
        slidesPerView: 4,
      },
      1440: {
        spaceBetween: 32,
        slidesPerGroup: 3,
        allowTouchMove: false
      }
    },
  });
  swiperNews.update();
};

export {
  initNewsSlider
};
