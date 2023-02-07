// Header searchform opening

const headerBot = document.querySelector('.header__nav-bot');
const btn = document.querySelector('.header__searchform-button');
const screenWidth = window.screen.width

btn.addEventListener('click', () => {
    if(screenWidth >= 1024){
        headerBot.classList.toggle('header__searchform-form--active');
    } else {
        headerBot.classList.toggle('header__searchform-form-burger--active');
    }
});


// Burger menu 

const body = document.querySelector('body');
const burgerBtn = document.querySelector('.header__burger');
const headerWrapper = document.querySelector('.header__wrapper');

burgerBtn.addEventListener('click', function (){
    headerWrapper.classList.toggle('header__nav--active');
    body.classList.toggle('body-noscroll');
});


