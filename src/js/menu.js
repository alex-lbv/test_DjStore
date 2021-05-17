const menu = document.querySelector('.header__container');
export const menuButton = document.querySelector('.header__button-menu');

export const openMenu = () => {
  menu.classList.toggle('opened');
  menuButton.classList.toggle('opened')
  document.body.classList.toggle('overflow-hidden')
};

const closeMenu = () => {
  menu.classList.remove('opened');
};


