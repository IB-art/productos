// 1. Находим элементы на странице
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

// 2. Вешаем обработчик на клик по бургеру
burger.addEventListener('click', () => {
  // Переключаем класс "active" у бургера и у меню
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});
