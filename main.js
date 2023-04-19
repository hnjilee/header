'use strict';

const toggleBtn = document.querySelector('.header__toggle');
const menu = document.querySelector('.header__menu');
const links = document.querySelector('.header__links');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('header__menu--exposed');
  links.classList.toggle('header__links--exposed');
});
