/**
 * Принимает массив ссылок навигации и при клике на любую
 * плавно переходит к нужному разделу, убирает навигацию и возвращает бургер
 * в исходное состояние.
 * */
function smoothScrollToSection(navItems) {
  const header = document.querySelector('.header');
  const offsetHeaderHeight = header.offsetHeight;
  console.log(offsetHeaderHeight);
  // Получаем все элементы навигации (ссылки), проходим циклом
  navItems.forEach(link => {

    // На каждую ссылку вешаем слушатель события 'клик'
    link.addEventListener('click', (e) => {

      // Удаляем активные классы у бургера, навигации и body
      removeCalsses(500);

      // Отменяем стандартное поведение ссылки
      e.preventDefault();

      // Делаем отступ от верха страницы на высоту хедера
      document.querySelector('html')
        .style
        .scrollPaddingTop = `${offsetHeaderHeight}px`;

      // Получаем id из атрибута href
      const id = link.getAttribute('href');

      // У элемента с этим id вызываем метод scrollIntoView()
      document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
    });
  });
}
