'use strict';
var pageHeaderNav = document.querySelector('.page-header__navigation');
var pageHeaderToggle = document.querySelector('.page-header__toggle');

pageHeaderNav.classList.remove('page-header__navigation--nojs');

pageHeaderToggle.addEventListener('click', function () {
  if (pageHeaderNav.classList.contains('page-header__navigation--closed')) {
    pageHeaderNav.classList.remove('page-header__navigation--closed');
    pageHeaderNav.classList.add('page-header__navigation--opened');
  } else {
    pageHeaderNav.classList.add('page-header__navigation--closed');
    pageHeaderNav.classList.remove('page-header__navigation--opened');
  }
});
