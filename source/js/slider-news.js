import { Swiper } from 'swiper';
import { Grid, Pagination } from 'swiper/modules';

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
        let end = 4; // Показать 4 кнопки по умолчанию

        // Логика отображения кнопок
        if (totalSlides > 4) {
          if (activeIndex <= 2) {
            start = 0;
            end = 4; // Слайды 1, 2, 3, 4
          } else if (activeIndex >= totalSlides - 2) {
            start = totalSlides - 4; // Последние 4 слайда
            end = totalSlides;
          } else {
            start = activeIndex - 2; // Смещение для центральной кнопки
            end = activeIndex + 2; // Обеспечить показывание одного следующего слайда
          }
        }

        // Проверка индекса и создание кнопки пагинации
        if (index >= start && index < end) {
          const button = document.createElement('button');
          button.classList.add(className);
          button.type = 'button';
          button.ariaLabel = `Перейти на слайд ${index + 1}`;
          button.textContent = index + 1;

          if (index === activeIndex) {
            button.classList.add('swiper-pagination-bullet-active');
          }

          button.addEventListener('click', () => {
            this.slideTo(index);
          });

          return button.outerHTML;
        }

        return '';
      },
    },
    on: {
      slideChange: function () {
        // Обновляем пагинацию при изменении слайда
        this.pagination.render();
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        spaceBetween: 30,
        slidesPerGroup: 1,
        slidesPerView: 1,
      },
      1440: {
        spaceBetween: 32,
        slidesPerGroup: 1,
        allowTouchMove: false,
      },
    },
  });

  swiperNews.update();
};

export { initNewsSlider };
