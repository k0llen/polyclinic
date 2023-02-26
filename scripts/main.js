const screenWidth = window.innerWidth;
// Header searchform opening
if (document.querySelector('.header')){
    const headerBot = document.querySelector('.header__nav-bot');
    const btn = document.querySelector('.header__searchform-button');
    

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

    if(screenWidth <= 978) {
        document.querySelectorAll('.header__nav-item-more').forEach((item) => {
            item.addEventListener('click', () => {
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
                };
            });
        });
    };
}

// Doctors show blocks

if (document.querySelector('.doctors')) {
    const btnShow = document.querySelector('.doctors__btn-show');
    const btnHide = document.querySelector('.doctors__btn-hide');
    const docList = document.querySelector('.doctors__list');

    btnHide.addEventListener('click', () =>{
        docList.classList.toggle('show');
    });

    btnShow.addEventListener('click', () =>{
        docList.classList.toggle('show');
    });
}


// Shedule filters


if (document.querySelector('.schedule-dropdown')){

    document.querySelectorAll('.schedule-dropdown').forEach(function (dropDownWrapper) {
        const dropDownBtn = dropDownWrapper.querySelector('.schedule-dropdown__button');
        const dropDownList = dropDownWrapper.querySelector('.schedule-dropdown__list');
        const dropDownListItems = dropDownList.querySelectorAll('.schedule-dropdown__list-item');
        const dropDownInput = dropDownWrapper.querySelector('.schedule-dropdown__input-hidden');
        dropDownBtn.addEventListener('click', function (e) {
            if (this.classList.contains('schedule-dropdown__button--active')) {
                this.classList.remove('schedule-dropdown__button--active');
                dropDownList.classList.remove('schedule-dropdown__list--visible');
            } else {
            dropDownList.classList.toggle('schedule-dropdown__list--visible');
            this.classList.add('schedule-dropdown__button--active');	
            }
        });
        
        dropDownListItems.forEach(function (listItem) {
            listItem.addEventListener('click', function (e) {
                e.stopPropagation();
                dropDownBtn.innerText = this.innerText;
                dropDownBtn.focus();
                dropDownInput.value = this.dataset.value;
                dropDownList.classList.remove('schedule-dropdown__list--visible');
                dropDownBtn.classList.remove('schedule-dropdown__button--active');
            });
        });


        const hideDropdownBtn = document.querySelector('.schedule__dropdown-btn-close');
        const showDropdownBtn = document.querySelector('.schedule__dropdown-btn-open');
        const formWrapper = document.querySelector('.schedule__form-wrapper')   
        
        
        document.addEventListener('click', function (e) {
            if (e.target !== dropDownBtn) {
                dropDownBtn.classList.remove('schedule-dropdown__button--active');
                dropDownList.classList.remove('schedule-dropdown__list--visible');
            }
        });
    
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Tab' || e.key === 'Escape') {
                dropDownBtn.classList.remove('schedule-dropdown__button--active');
                dropDownList.classList.remove('schedule-dropdown__list--visible');
                formWrapper.classList.remove('schedule__dropdown--active');
            }
        });

        // burger dropdown
        
        showDropdownBtn.addEventListener('click', () => {
            formWrapper.classList.add('schedule__dropdown--active');
        });
        
        hideDropdownBtn.addEventListener('click', () => {
            formWrapper.classList.remove('schedule__dropdown--active');
        });

    });
}



if (document.querySelector('.call__side-sticky')) {
    if(screenWidth >= 1010){
        var sticky = new Sticky('.call__side');
    }
}


if (document.querySelector('#phone')) {
    jQuery(function($){
        $("#phone").mask("+7 (999) 999-99-99");
    });
}

if (document.querySelector('#calendar')) {
    let calendar = new AirDatepicker('#calendar', {
        position: 'bottom right',
    });
}
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


if (screenWidth <= 978){
    const trigger = document.querySelectorAll('.paid__block-title');
    const accordeonItem = document.querySelector('accordeon__item');
    trigger.forEach((item) => { 
        item.addEventListener('click', function(e) {
            if (item.classList.contains('accordeon-item--active')) {
                item.classList.remove('accordeon-item--active');
            } else {
                trigger.forEach((child) => {
                    child.classList.remove('accordeon-item--active');
                })
                item.classList.add('accordeon-item--active');
            };
        });
    });
}


if (screenWidth <= 660) {
    const showBtn = document.querySelectorAll('.show__more-btn');
    const hideBtn = document.querySelectorAll('.hide__more-btn');
    
    document.querySelectorAll('.paid__block-prices-card').forEach((element) => {
        showBtn.forEach((element) =>{
            element.addEventListener('click', () => {
                element.parentNode.classList.add('show');
            });
        });
        hideBtn.forEach((element) =>{
            element.addEventListener('click', () => {
                element.parentNode.classList.remove('show');
            });
        });
    });
}


// Faq page accordeon


if(document.querySelector('.faq')) {
    const trigger = document.querySelectorAll('.faq__accordeon-item-title');

    trigger.forEach((item) => { 
        item.addEventListener('click', function(e) {
            if (item.parentNode.classList.contains('faq__accordeon-item--active')) {
                item.parentNode.classList.remove('faq__accordeon-item--active');
            } else {
                trigger.forEach((child) => {
                    child.parentNode.classList.remove('faq__accordeon-item--active');
                })
                item.parentNode.classList.add('faq__accordeon-item--active');
            };
        });
    });
}

if(document.querySelector('.prepare')) {
    const trigger = document.querySelectorAll('.prepare__accordeon-item-title');

    trigger.forEach((item) => { 
        item.addEventListener('click', function(e) {
            if (item.parentNode.classList.contains('prepare__accordeon-item--active')) {
                item.parentNode.classList.remove('prepare__accordeon-item--active');
            } else {
                trigger.forEach((child) => {
                    child.parentNode.classList.remove('prepare__accordeon-item--active');
                })
                item.parentNode.classList.add('prepare__accordeon-item--active');
            };
        });
    });
}

if (document.querySelector('.area__accordeon')){
    const trigger = document.querySelectorAll('.accordeon__item-title');

    trigger.forEach((item) => { 
        item.addEventListener('click', function(e) {
            if (item.parentNode.classList.contains('area__accordeon-item--active')) {
                item.parentNode.classList.remove('area__accordeon-item--active');
            } else {
                trigger.forEach((child) => {
                    child.parentNode.classList.remove('area__accordeon-item--active');
                })
                item.parentNode.classList.add('area__accordeon-item--active');
            };
        });
    });
}