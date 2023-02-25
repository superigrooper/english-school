const body = document.querySelector('body');
const header = document.querySelector('.header');
const nav = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');
burgerHandler();

const logo = document.querySelector('.header__logo');
smoothScrollTop(logo);

const navILinks = document.querySelectorAll('.header__nav-link');
smoothScrollToSection(navILinks, nav, 'header__nav--active');

function burgerHandler() {
  burger.addEventListener('click', () => {
    if (nav.classList.contains('header__nav--active')) {
      removeCalsses(500);
    }
    else {
      nav.classList.add('header__nav--block');
      setTimeout(() => {
        nav.classList.add('header__nav--active');
        burger.classList.add('header__burger--active');
        body.classList.add('stop-scroll');
      }, 100);
    }
  });
}

function removeCalsses(time) {
  nav.classList.remove('header__nav--active');
  burger.classList.remove('header__burger--active');
  body.classList.remove('stop-scroll');
  setTimeout(() => {
    nav.classList.remove('header__nav--block');
  }, time);
}
