import { toggleBurgerHandler } from './header-toggle';
import { navSubmenuHandler } from './nav-submenu';
import { initHeroSlider } from './slider-hero';
import { initializeModalHandler } from './modal';
import { initProgramsSlider } from './slider-programs';
import { initNewsSlider } from './slider-news';
import { accordionHandler } from './fag-accordion';
import { initReviewsSlider } from './slider-reviews';
import { selectToggle } from './select';
import { FormValidation } from './form-validation';
import { CheckboxValidation } from './checkbox-validation';

toggleBurgerHandler(); // Открытие меню в Header
navSubmenuHandler(); // Открытие аккордионов в меню навигации
initHeroSlider(); // Слайдер в блоке Hero
initializeModalHandler(); // Модальное окно в блоке About
initProgramsSlider(); // Слайдер в блоке Programs
initNewsSlider(); // Слайдер в блоке News
accordionHandler(); // Открытие-закрытие аккордеонов в блоке Fag
initReviewsSlider(); // Слайдер в блоке Reviews
selectToggle (); // Поворот стрелки в Select
FormValidation(); // Валидация формы
CheckboxValidation(); // Валидация чекбоксов
