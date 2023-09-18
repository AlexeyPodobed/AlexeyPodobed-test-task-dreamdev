import {isTouch, isWindows, detectBrowser} from './detect-device';

export const CLASSES = {
  active: 'is-active',
  open: 'is-open',
  fixedOnScroll: 'is-fixed-on-scroll',
  hidden: 'is-hidden',
  overflowed: 'is-overflowed',
}

export const IS_TOUCH = isTouch();
export const BROWSER = detectBrowser();
export const IS_WINDOWS = isWindows();

export const DOM = {
  body: document.body,
  header: document.querySelector('.js-header'),
  burgerBtn: document.querySelector('.js-burger-btn'),
  burgerMenu: document.querySelector('.js-burger-menu'),
};

// export const BREAKPOINTS = {
//   lg: 992,
//   md: 1100,
//   m: 1023,
// };

// export const MAX_PHONE_SIZE = BREAKPOINTS.lg;

// let isPhone = false;

// if(IS_TOUCH && window.innerWidth < MAX_PHONE_SIZE &&  window.innerHeight < MAX_PHONE_SIZE ){
//  isPhone = true;
// };

// export const IS_PHONE = isPhone;