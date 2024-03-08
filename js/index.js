const init = () => {
  const trailersContainer = document.querySelector('.trailers__container');
  const trailersButtons = document.querySelectorAll('.trailers__button');
  // Создаем функцию для создания нового видео (блока ul с классом trailers__list)
  const createElement = () => {
    const activeButton = document.querySelector('.trailers__button--active');
    const activeButtonSrc = activeButton.getAttribute('data-src');
    // Получаем из ссылки на видео (из data-src) последнюю часть адреса видео и присваиваем его переменной idVideo
    const idVideo = activeButtonSrc.match(/\/embed\/([^/\?]+)/)[1];


    const newVideo = document.createElement('ul');
    newVideo.classList.add('trailers__list');
    trailersContainer.append(newVideo);

    const trailersItem = document.createElement('li');
    trailersItem.classList.add('trailers__item');
    newVideo.append(trailersItem);

    const trailersWrapper = document.createElement('div');
    trailersWrapper.classList.add('trailers__wrapper');
    trailersItem.append(trailersWrapper);

    const trailersVideo = document.createElement('iframe');
    trailersVideo.classList.add('trailers__video');
    trailersVideo.setAttribute('src', activeButtonSrc);
    trailersVideo.setAttribute('title', 'YouTube video player');

    // Через свойство srcdoc записываем в iframe код стилизованного контента html, который будет заменять атрибут src ( Если для <iframe> заданы одновременно и src, и srcdoc, преференция будет отдана srcdoc, исключая запросы к внешним ресурсам)
    trailersVideo.srcdoc = `
    <style>
    /* Стилизуем блок с видео, т.к. это отдельное окно (как отдельная страница) со своим кодом (День 4, время 1:05:00) */
    * {
        padding: 0;
        margin: 0;
        overflow: hidden;
    }

    html,
    body {
        width: 100%;
        height: 100%;
    }

    img, svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    /* Делаем на самой картинке курсор по умолчанию */
    a {
      cursor: default;
    }

    /* Кнопка во iframe */
    #button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        width: 64px;
        height: 64px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    @media (max-width: 900px) {
        #button {
            width: 36px;
            height: 36px;
        }
    }
    </style>

    <!-- Ссылка на видео -->
<a href="https://www.youtube.com/embed/${idVideo}?autoplay=1">

 /* Картинка которая будет во iframe */
    <img src="https://img.youtube.com/vi/${idVideo}/maxresdefault.jpg">

     <!-- Кнопка во iframe на фильм-->
    <div id="button">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#FF3D00"/>
        <path d="M42.5 31.134C43.1667 31.5189 43.1667 32.4811 42.5 32.866L27.5 41.5263C26.8333 41.9112 26 41.4301 26 40.6603V23.3397C26 22.5699 26.8333 22.0888 27.5 22.4737L42.5 31.134Z" fill="white"/>
      </svg>
    </div>
</a>
    `;
    trailersWrapper.append(trailersVideo);
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

