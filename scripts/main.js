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


// burger menu accordeon 


 document.querySelectorAll('.header__nav-item-more').forEach((item) => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        document.querySelectorAll('.header__nav-more-list-w').forEach((element) => {
            element.classList.remove('header__nav-more-list-w-hover');
        });
        if (item.classList.contains('burger__accordeon-item--active')) {
            item.classList.remove('burger__accordeon-item--active');
        } else {
            document.querySelectorAll('.header__nav-item-more').forEach((child) => {
                child.classList.remove('burger__accordeon-item--active');
            })
            item.classList.add('burger__accordeon-item--active');
        }
    });
 });

