
var menuToggle = document.querySelector('.main-nav__toggle');
var menuWrapper = document.querySelector('.main-nav__wrapper');

menuToggle.addEventListener('click', function(){
  menuWrapper.classList.toggle('main-nav__wrapper--opened');
  if (menuToggle.classList.contains('main-nav__toggle--closed')) {

    menuToggle.classList.remove('main-nav__toggle--closed');
    menuToggle.classList.add('main-nav__toggle--opened');

  } else if (menuToggle.classList.contains('main-nav__toggle--opened')) {
    menuToggle.classList.remove('main-nav__toggle--opened');
    menuToggle.classList.add('main-nav__toggle--closed');
  }
});

