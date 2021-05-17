import {openTooltip, tooltipButtonOpen} from './tooltip.js';
import {menuButton, openMenu} from './menu.js';
import {windowScroll} from './scroll.js';
import {buttonNext, buttonPrev, nextSlide, prevSlide} from './slider.js';
import {callbackButton, closeButtonPopup, closePopup, openPopup, popupBackground} from './popup.js';
import {sendCallBackForm} from './send-data.js';

tooltipButtonOpen.addEventListener('click', openTooltip);
menuButton.addEventListener('click', openMenu);
window.addEventListener('scroll', windowScroll);
buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);
callbackButton.addEventListener('click', openPopup);
closeButtonPopup.addEventListener('click', closePopup);
popupBackground.addEventListener('click', closePopup);

sendCallBackForm();
