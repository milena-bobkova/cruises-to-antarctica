'use strict';
var pageHeaderNav = document.querySelector('nav');
var pageHeaderMenu = pageHeaderNav.querySelectorAll('.page-header__item');
console.log(pageHeaderMenu);
var pageHeaderToggle = document.querySelector('.page-header__toggle');

pageHeaderNav.classList.remove('page-header__navigation--nojs');

pageHeaderToggle.addEventListener('click', function () {
  if (pageHeaderNav) {
    if (pageHeaderNav.classList.contains('page-header__navigation--closed')) {
      pageHeaderNav.classList.remove('page-header__navigation--closed');
      pageHeaderNav.classList.add('page-header__navigation--opened');
    } else {
      pageHeaderNav.classList.add('page-header__navigation--closed');
      pageHeaderNav.classList.remove('page-header__navigation--opened');
    }
  } else {
    alert('Такого элемента нет на странице!')
  }
});
