const toggleButtonElement = document.querySelector('.select');
const toggleButtonElementDark = document.querySelector('.select-dark');

const selectToggle = () => {
  toggleButtonElement.addEventListener('click', () => {
    toggleButtonElement.classList.toggle('select--open');
  });

  toggleButtonElementDark.addEventListener('click', () => {
    toggleButtonElementDark.classList.toggle('select-dark--open');
  });
};

export { selectToggle };
