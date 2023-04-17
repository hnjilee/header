'use strict';

const toggleBtn = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--exposed');
  links.classList.toggle('links--exposed');
});
