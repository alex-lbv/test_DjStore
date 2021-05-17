import {isEscEvent} from './util.js';

const tooltip = document.querySelector('.tooltip__content');
export const tooltipButtonOpen = document.querySelector('.tooltip__button');

const tooltipEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeTooltip();
  }
};

const clickHandler = (evt) => {
  if (evt.target !== tooltipButtonOpen.querySelector('use')) {
    evt.preventDefault();
    closeTooltip();
  }
};

export const openTooltip = () => {
  tooltip.classList.remove('hidden');
  document.addEventListener('click', clickHandler);
  document.addEventListener('keydown', tooltipEscKeydown);
};

export const closeTooltip = () => {
  tooltip.classList.add('hidden');
  document.removeEventListener('click', clickHandler);
  document.removeEventListener('keydown', tooltipEscKeydown);
};
