import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';


// ---------------------------------
function playVideo() {
  let iframe = document.getElementById('gym__video-iframe');
  let preview = document.querySelector('.gym__preview');
  let button = document.querySelector('.gym__button');
  iframe.style.display = 'block';
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&mute=1';
  preview.style.display = 'none';
  button.style.display = 'none';
}

window.addEventListener('DOMContentLoaded', () => {
  const videoLink = document.querySelector('.gym__link');
  videoLink.removeAttribute('href');
  let button = document.querySelector('.gym__button');
  button.addEventListener('click', playVideo);
  // Utils
  // ---------------------------------
  iosVhFix();
  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
