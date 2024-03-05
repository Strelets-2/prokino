const init = () => {
  const trailersContainer = document.querySelector('.trailers__container');
  const trailersButtons = document.querySelectorAll('.trailers__button');
  // Создаем функцию для создания нового видео (блока ul с классом trailers__buttons)
  const createElement = () => {
    const activeButton = document.querySelector('.trailers__button--active');
    const activeButtonSrc = activeButton.getAttribute('data-src');
    const newVideo = document.createElement('ul');
    newVideo.classList.add('trailers__list');
    newVideo.innerHTML = `
  <li class="trailers__item">
    <div class="trailers__wrapper">
      <iframe class="trailers__video" src=${activeButtonSrc}
      title="YouTube video player"></iframe>
    </div>
  </li>
  `;
    trailersContainer.append(newVideo);
  };

  // Вызываем функцию для создания нового видео в первый раз
  createElement();

  // Перебираем массив с кнопками
  trailersButtons.forEach((item) => {
    // Добавляем событие на каждую кнопку
    item.addEventListener('click', () => {
      // По клику на кнопку опять перебираем массив кнопок
      trailersButtons.forEach((item) => {
        // Удаляем активный класс у всех кнопок
        item.classList.remove('trailers__button--active');
      });
      // Добавляем активный класс кнопке по которой кликнули
      item.classList.add('trailers__button--active');
      // Удаляем блок с видео, которое было загружено при загрузке страницы
      const trailersList = document.querySelector('.trailers__list');
      trailersList.remove();
      // Запускаем функцию для создания нового видео, которое соответствует нажатой кнопке
      createElement();
    });
  });
};

init();



