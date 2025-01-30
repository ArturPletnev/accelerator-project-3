const toggleBurgerHandler = () => {
  const navEl = document.querySelector('.nav');
  const navToggleEl = document.querySelector('.header__toggle');
  const overlay = Object.assign(document.createElement('div'), { className: 'page__overlay' });
  const toggleNav = (isOpen) => {
    navEl.classList.toggle('nav--opened', isOpen);
    navToggleEl.classList.toggle('header__toggle--opened', isOpen);
    if (isOpen) {
      overlay.style.display = 'block';
      document.body.appendChild(overlay);
      document.addEventListener('keydown', handleEscKey);
    } else {
      overlay.remove();
      document.removeEventListener('keydown', handleEscKey);
    }
  };
  const handleClickOutside = (event) => {
    if (!navEl.contains(event.target) && !navToggleEl.contains(event.target)) {
      toggleNav(false);
      document.removeEventListener('click', handleClickOutside);
    }
  };
  function handleEscKey (event) { // Function declaration для "поднятия" и нет ошибок.
    if (event.key === 'Escape') {
      toggleNav(false);
      document.removeEventListener('click', handleClickOutside);
    }
  }
  navToggleEl.addEventListener('click', () => {
    const isOpen = !navEl.classList.contains('nav--opened');
    toggleNav(isOpen);
    document[isOpen ? 'addEventListener' : 'removeEventListener']('click', handleClickOutside);
  });
};

export { toggleBurgerHandler };
