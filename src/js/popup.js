import {isEscEvent} from './util.js';

const popup = document.querySelector('.popup');
export const closeButtonPopup = document.querySelector('.popup__close');
export const callbackButton = document.querySelector('#callback');
export const popupBackground = document.querySelector('.popup__bg');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

export const openPopup = () => {
  popup.classList.add('opened');
  document.body.classList.add('overflow-hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
};

export const closePopup = () => {
  popup.classList.remove('opened');
  document.body.classList.remove('overflow-hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
};
