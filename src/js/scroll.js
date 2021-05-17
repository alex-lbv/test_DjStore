const header = document.querySelector('.header');

let oldState = 0;

export const windowScroll = () => {
  const state = window.pageYOffset;
  const dY = state - oldState;

  if (window.innerWidth < 767) {
    (state > 64) ? header.classList.add('scrolled') : header.classList.remove('scrolled');
  } else {
    (state > 120) ? header.classList.add('scrolled') : header.classList.remove('scrolled');
  }

  (dY < 0) ? header.classList.add('sticky') : header.classList.remove('sticky');

  oldState = state;
};
