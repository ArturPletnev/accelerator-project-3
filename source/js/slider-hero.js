import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const initHeroSlider = () => {
  const sliderHeroEl = document.querySelector('.swiper-hero');
  const swiperHero = new Swiper(sliderHeroEl, {
    loop: true,
    autoHeight: true,
    allowTouchMove: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className}" type="button" aria-label="Перейти на слайд ${index + 1}">`;
      },
    },
    breakpoints: {
      1440: {
        allowTouchMove: false,
      }
    },
    on: {
      slideChangeTransitionStart: function () {
        const pagination = this.pagination.el;
        pagination.classList.add('swiper-pagination--hidden');
        this.slides.forEach((slide) => {
          const descrNode = slide.querySelector('.hero-card__descr');
          if (descrNode) {
            descrNode.style.opacity = '0';
            descrNode.style.transition = 'opacity 0.3s ease';
          }
        });
      },
      slideChangeTransitionEnd: function () {
        const pagination = this.pagination.el;
        pagination.classList.remove('swiper-pagination--hidden');
        const activeSlide = this.slides[this.activeIndex];
        const activeDescr = activeSlide.querySelector('.hero-card__descr');
        if (activeDescr) {
          activeDescr.style.opacity = '1';
          activeDescr.style.transition = 'opacity 0.3s ease';
        }
      },
    },
  });
  swiperHero.update();
};

export { initHeroSlider };
