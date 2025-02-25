const FormValidation = () => {
  const formNodes = document.querySelectorAll('.form-element');
  const VALID_PHONE_NUMBER_LENGTH = 11;
  const isValidPhoneNumber = (value) => value.replace(/\D/g, '').length === VALID_PHONE_NUMBER_LENGTH;
  const getErrorClass = (fieldNode) => `form-element--${fieldNode.closest('.form-element').classList.contains('form-element--dark') ? 'dark' : 'light'}-error`; // Функция возвращает класс ошибки в зависимости от темы формы
  const validateField = (fieldNode) => fieldNode.classList.contains('field--tel') ? isValidPhoneNumber(fieldNode.value) : !fieldNode.required || fieldNode.value || fieldNode.validity.valid; // Функция проверяет, является ли поле валидным
  const toggleErrorClass = (fieldNode, forceValidate = false) => { // Функция добавляет или удаляет класс ошибки для поля в зависимости от его валидности
    const isValid = !fieldNode.required || validateField(fieldNode);
    if (isValid || !forceValidate) { // Если поле валидно
      fieldNode.classList.remove(getErrorClass(fieldNode)); // Удаляем класс ошибки
    } else { // Если не валидно
      fieldNode.classList.add(getErrorClass(fieldNode)); // Добавляем класс ошибки
    }
    return isValid;
  };
  const handleSubmit = (formNode, fieldNodes) => (event) => { // Функция предотвращает отправку формы, если у любого поля есть ошибка
    if (!Array.from(fieldNodes).every((fieldNode) => toggleErrorClass(fieldNode, true))) {
      event.preventDefault();
      formNode.querySelector('.form-element--dark-error, .form-element--light-error')?.focus();
    }
  };
  const handleInvalid = (fieldNode, event) => { // Функция предотвращает отправку формы, если у поля телефона есть ошибка
    if (fieldNode.classList.contains('field--tel')) {
      event.preventDefault();
    }
    toggleErrorClass(fieldNode, true);
  };
  formNodes.forEach((formNode) => { // Проходим по каждой форме, добавляем обработчики для отправки формы, ввода поля и невалидного поля.
    const fieldNodes = formNode.querySelectorAll('.form-element__field');
    formNode.addEventListener('submit', handleSubmit(formNode, fieldNodes));
    fieldNodes.forEach((fieldNode) => {
      fieldNode.addEventListener('input', () => toggleErrorClass(fieldNode));
      fieldNode.addEventListener('invalid', (event) => handleInvalid(fieldNode, event));
    });
  });
};

export { FormValidation };
