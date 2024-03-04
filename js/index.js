const init = () => {
    const trailersContainer = document.querySelector('.trailers__container');
    const trailersButtons = document.querySelectorAll('.trailers__button');

    trailersButtons.forEach((item) => {
        item.addEventListener('click', () => {
            trailersButtons.forEach((item) => {
                item.classList.remove('trailers__button--active');
            });
            item.classList.add('trailers__button--active');
        });
    });
};

init();


