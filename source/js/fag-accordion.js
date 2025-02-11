const accordionHandler = () => {
  const OPENED_ACCORDION_INDEX = 2;
  const accordionNodes = document.querySelectorAll('.accordion');
  accordionNodes.forEach((accordionNode, index) => {
    const controlNode = accordionNode.querySelector('.accordion__control');
    const contentNode = accordionNode.querySelector('.accordion p');
    const toggleAccordion = (open) => {
      accordionNode.classList.toggle('accordion--open', open);
      controlNode.setAttribute('aria-expanded', open.toString());
      contentNode.setAttribute('aria-hidden', (!open).toString());
      contentNode.style.maxHeight = open ? `${contentNode.scrollHeight}px` : null;
    };
    if (index === OPENED_ACCORDION_INDEX) {
      toggleAccordion(true);
    }
    accordionNode.addEventListener('click', () =>
      toggleAccordion(!accordionNode.classList.contains('accordion--open'))
    );
  });
};

export { accordionHandler };
