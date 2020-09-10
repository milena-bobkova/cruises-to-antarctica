'use strict';
var pageHeaderNav = document.querySelector('nav');
var pageHeaderMenu = pageHeaderNav.querySelector('ul');
var pageHeaderItems = pageHeaderMenu.querySelectorAll('li');
var pageHeaderToggle = document.querySelector('.page-header__toggle');

pageHeaderNav.classList.remove('page-header__navigation--nojs');

pageHeaderToggle.addEventListener('click', function () {
  if (pageHeaderItems.length === 0) {
    console.log('Такого элемента нет на странице!')
  } else {
    if (pageHeaderNav.classList.contains('page-header__navigation--closed')) {
      pageHeaderNav.classList.remove('page-header__navigation--closed');
      pageHeaderNav.classList.add('page-header__navigation--opened');
    } else {
      pageHeaderNav.classList.add('page-header__navigation--closed');
      pageHeaderNav.classList.remove('page-header__navigation--opened');
    }
  }
});
