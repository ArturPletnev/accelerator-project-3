import { Swiper } from 'swiper';
import { Grid, Pagination } from 'swiper/modules';

const initNewsSlider = () => {
  const sliderNewsEl = document.querySelector('.swiper-news');

  // Инициализация Swiper
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
        const totalSlides = this.slides.length; // Общее количество слайдов
        const activeIndex = this.activeIndex;

        let start = 0;
        let end = Math.min(totalSlides, 4); // Показать 4 кнопки по умолчанию

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
        } else {
          end = totalSlides; // Если less than 4 slides, показываем все
        }

        // Проверка индекса и создание кнопки пагинации
        if (index >= start && index < end) {
          const button = document.createElement('button');
          button.classList.add(className);
          button.type = 'button';
          button.ariaLabel = `Перейти на слайд ${index + 1}`;
          button.textContent = index + 1;

          button.addEventListener('click', () => {
            this.slideTo(index);
          });

          if (index === activeIndex) {
            button.classList.add('swiper-pagination-bullet-active');
          }

          return button.outerHTML;
        }

        return ''; // Если index не в пределах start и end
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
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      768: {
        spaceBetween: 30,
        slidesPerGroup: 1,
        slidesPerView: 4,
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
