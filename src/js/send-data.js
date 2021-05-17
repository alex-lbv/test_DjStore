import {closePopup} from './popup.js';

const URL_POST = 'http://jsonplaceholder.typicode.com/posts';

const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: data,
  });

  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
  }

  return await response.json();
};

export const sendCallBackForm = () => {
  const form = document.querySelector('.popup__form');

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(form);

    sendData(URL_POST, formData)
      .then(() => {
        form.reset();
        closePopup()
      })
      .catch((err) => console.log(err));
  })
};
