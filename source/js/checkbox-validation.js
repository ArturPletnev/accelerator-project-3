const CheckboxValidation = () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const form = document.querySelector('form');
  checkboxes.forEach((checkbox) => {
    const checkboxControl = checkbox.nextElementSibling;
    checkbox.addEventListener('invalid', (event) => {
      event.preventDefault();
      checkboxControl.classList.add('checkbox__input--error');
      checkbox.checked = false;
    });
    checkbox.addEventListener('change', () =>
      checkbox.checked && checkboxControl.classList.remove('checkbox__input--error')
    );
  });
  if (form) {
    form.addEventListener('submit', () => {
      checkboxes.forEach((checkbox) => {
        if (checkbox.validity.valid) {
          checkbox.nextElementSibling.classList.remove('checkbox__input--error');
        }
      });
    });
  }
};

export { CheckboxValidation };
