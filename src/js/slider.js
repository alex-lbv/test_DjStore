const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slider__item');
const slidesPreview = slider.querySelectorAll('.slider__preview');
export const buttonNext = slider.querySelector('#next');
export const buttonPrev = slider.querySelector('#prev');

let currentSlide = 0;
let currentSlidePreview = 0;

const goToSlide = (n) => {
  slides[currentSlide].className = 'slider__item';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slider__item slider__item--active';
};

let nextSlidesPreview = 0;

const goToSlidePreview = (n) => {
  slidesPreview[currentSlidePreview].className = 'slider__preview';
  currentSlidePreview = (n + slidesPreview.length) % slidesPreview.length;
  slidesPreview[currentSlidePreview].className = 'slider__preview slider__preview--active';

  nextSlidesPreview = slidesPreview[currentSlidePreview + 1];

  if (nextSlidesPreview === undefined) {
    nextSlidesPreview = slidesPreview[0];
    nextSlidesPreview.className = 'slider__preview slider__preview--next';
  } else {
    nextSlidesPreview.className = 'slider__preview slider__preview--next';
  }

  if (buttonPrev.disabled) {
    buttonPrev.removeAttribute('disabled');
  }
};

export const prevSlide = () => {
  goToSlide(currentSlide - 1);
  nextSlidesPreview.className = 'slider__preview';
  goToSlidePreview(currentSlidePreview - 1);
};

export const nextSlide = () => {
  goToSlide(currentSlide + 1);
  goToSlidePreview(currentSlidePreview + 1);
};
