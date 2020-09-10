'use strict';
var pageHeaderNav = document.querySelector('nav');
var pageHeaderToggle = document.querySelector('.page-header__toggle');

pageHeaderNav.classList.remove('page-header__navigation--nojs');

var isEmpty = function (obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
}

var trueNav = isEmpty(pageHeaderNav);

var closeMenu = function () {
  pageHeaderNav.classList.add('page-header__navigation--closed');
  pageHeaderNav.classList.remove('page-header__navigation--opened');
  document.body.classList.remove('page-header__fix');
}

var openMenu = function () {
  pageHeaderNav.classList.remove('page-header__navigation--closed');
  pageHeaderNav.classList.add('page-header__navigation--opened');
  document.body.classList.add('page-header__fix');
}

var toggleClickHandler = function () {
  if (trueNav === true) {
    if (pageHeaderNav.classList.contains('page-header__navigation--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  } else {
    alert('Объект не существует');
  }
}

pageHeaderToggle.addEventListener('click', toggleClickHandler);

var menuItems = pageHeaderNav.querySelectorAll('.page-header__link');

menuItems.forEach(function (item) {
  item.addEventListener('click', function () {
    closeMenu();
  });
});
