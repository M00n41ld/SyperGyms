// Получаем все кнопки табов
const tabButtons = document.querySelectorAll('[data-tab-button]');

// Получаем все списки табов
const tabLists = document.querySelectorAll('.membership__list');

// По умолчанию отображаем список для первого таба
tabButtons[0].classList.add('membership__button--active');
tabLists[0].classList.add('active');

// Добавляем обработчик клика на каждую кнопку
tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Деактивируем все кнопки табов
    tabButtons.forEach((btn) => {
      btn.classList.remove('membership__button--active');
    });

    // Скрываем все списки табов
    tabLists.forEach((list) => {
      list.classList.remove('active');
    });

    // Активируем выбранный таб
    button.classList.add('membership__button--active');
    tabLists[index].classList.add('active');
  });
});
