import { toggleBurgerHandler } from './header-toggle';
import { navSubmenuHandler } from './nav-submenu';
import { initHeroSlider } from './slider-hero';
import { initializeModalHandler } from './modal';
import { initProgramsSlider } from './slider-programs';

toggleBurgerHandler(); // Открытие меню в Header
navSubmenuHandler(); // Открытие аккордионов в меню навигации
initHeroSlider(); // Слайдер в блоке Hero
initializeModalHandler(); // Модальное окно в блоке About
initProgramsSlider(); // Слайдер в блоке Programs
