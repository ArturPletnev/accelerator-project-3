const initializeModalHandler = () => {
  const modalNode = document.querySelector('.modal');
  const modalFormNode = document.querySelector('.modal__form');
  const modalButtonNode = document.querySelector('.about__button');
  const modalCloseButtonNode = document.querySelector('.modal__close-button');
  const selectNode = modalFormNode.querySelector('select');
  const toggleModal = (action) => () => modalNode.classList[action]('modal--open'); // Функции для переключения видимости модального окна
  const openModal = toggleModal('add');
  const closeModal = toggleModal('remove');
  const isListVisible = () => selectNode.classList.contains('select--open') || document.activeElement === selectNode;
  const toggleSelect = () => {
    selectNode.classList.remove('select--open');
  };
  modalButtonNode.addEventListener('click', openModal);
  modalCloseButtonNode.addEventListener('click', closeModal);
  modalNode.addEventListener('mousedown', (event) => { // Закрытие модального окна при клике за его пределами (в модальном окне)
    if (event.target === modalNode) {
      modalNode.addEventListener('mouseup', (upEvent) => {
        if (upEvent.target === modalNode) {
          closeModal();
        }
      }, { once: true }); // Параметр гарантирует, что обработчик будет удален после того, как он сработает один раз
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (modalNode.classList.contains('modal--open')) {
        closeModal();
      } else if (isListVisible()) {
        toggleSelect();
      }
    }
  });
};

export { initializeModalHandler };
