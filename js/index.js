const init = () => {
  const trailersContainer = document.querySelector('.trailers__container');
  const trailersButtons = document.querySelectorAll('.trailers__button')

  // Вешаем на кнопки слушатель событий
  trailersButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      trailersButtons.forEach(tBtn => {
        if (tBtn === btn) {
          tBtn.classList.add('trailers__button--active')
        } else {
          tBtn.classList.remove('trailers__button--active')
        }
      })
    })
  });
};

init();
