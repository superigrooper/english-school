/**
 * Принимает элемент, при клике на который плавно прокручивает страницу вверх.
 * Стандартное поведение элемента отменяет.
 * */
function smoothScrollTop(elem) {
  elem.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}
