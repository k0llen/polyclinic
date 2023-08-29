if (window.innerWidth > 990) {
    const headerLinkTriggers = document.querySelectorAll('.header__nav-link_callback-trigger');
    const headerLinkModal = document.querySelectorAll('.header__link-modal');

    headerLinkTriggers.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            headerLinkTriggers.forEach((trigger) => {
                trigger.parentNode.classList.remove('active');
            })
            headerLinkModal.forEach((modal) => {
                modal.classList.remove('active');
            })
            for (let i = 0; i < headerLinkModal.length; i++) {
                if (headerLinkModal[i].dataset.value === btn.parentNode.dataset.value) {
                    headerLinkModal[i].classList.add('active');
                }
            }
            btn.parentNode.classList.add('active');
        })
    })

    window.addEventListener('click', (e) => {
        if (!e.target.classList.contains('header__nav-link_callback') && !e.target.classList.contains('header__link-modal') && !e.target.closest('.header__nav-link_callback')) {
            headerLinkTriggers.forEach((item) => {
                item.parentNode.classList.remove('active');
            })
            headerLinkModal.forEach((child) => {
                child.classList.remove('active');
            })
        }
    })

    // searchform
    const searchformOpenBtn = document.querySelector('.header__button-search');
    const searchform = document.querySelector('.header-searchform');
    const resultsModal = document.querySelector('.form-results');
    const searchformBtn = searchform.querySelector('.form-input-search-button');
    const searchformForm = document.querySelector('#header-searchform-input');

    searchformOpenBtn.addEventListener('click', () => {
        searchform.classList.toggle('active');
    })

    searchformBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (searchformForm.value.slice() !== '') {
            resultsModal.classList.remove('--error');
            resultsModal.classList.add('--result');
        } else {
            resultsModal.classList.remove('--result');
            resultsModal.classList.add('--error');
        }
    })

    searchformForm.addEventListener('click', (e)=>{
        resultsModal.classList.add('active');
    })

    searchformForm.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (searchformForm.value.length - 1 < 1) {
                resultsModal.classList.remove('--result');
                resultsModal.classList.add('--error');
            }
        } else {
            resultsModal.classList.add('--result');
            resultsModal.classList.remove('--error');
        }
    })



    window.addEventListener('click', (e) => {
        if (!searchform.contains(e.target) && !searchformOpenBtn.contains(e.target) && !resultsModal.contains(e.target)) {
            searchform.classList.remove('active');
            searchformForm.value = '';
            resultsModal.classList.remove('active');
            resultsModal.classList.remove('--result');
            resultsModal.classList.add('--error');
        }
    })
}

if (window.innerWidth < 991) {
    // burger
    const burger = document.querySelector('.burger');
    const navWrapper = document.querySelector('.header__right');
    const body = document.querySelector('.body');

    burger.addEventListener('click', (e) => {
        if (navWrapper.classList.contains('burger--active')){
            navWrapper.classList.remove('burger--active');
            body.classList.remove('lock');
            searchform.classList.remove('--burger-searchform-active');
            resultsModal.classList.remove('--burger-result-active');
            resultsModal.classList.remove('--burger-error-active');
            resultsModal.classList.remove('active');
            searchformForm.value = '';
        } else {
            navWrapper.classList.add('burger--active');
            body.classList.add('lock');
        }
    })


    // burger searchform
    const searchformOpenBtn = document.querySelector('.header__button-search');
    const searchform = document.querySelector('.header-searchform');
    const resultsModal = document.querySelector('.form-results');
    const searchformBtn = searchform.querySelector('.form-input-search-button');
    const searchformBtnClear = searchform.querySelector('.form-input-search-button-clear');
    const searchformBtnBack = searchform.querySelector('.form-input-search-button-back');
    const searchformForm = document.querySelector('#header-searchform-input');

    searchformOpenBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        searchform.classList.toggle('--burger-searchform-active');
        resultsModal.classList.add('active');
    })

    searchformBtnBack.addEventListener('click', (e)=>{
        e.preventDefault();
        searchform.classList.remove('--burger-searchform-active');
        resultsModal.classList.remove('active');
        resultsModal.classList.remove('--burger-result-active');
        resultsModal.classList.remove('--burger-error-active');
        searchformForm.value = '';
    })

    searchformForm.addEventListener('keydown', (e)=>{
        if (e.key === 'Backspace') {
            if (searchformForm.value.length - 1 < 1) {
                searchformBtnClear.classList.remove('active');
                resultsModal.classList.remove('--burger-result-active');
                resultsModal.classList.add('--burger-error-active');
            } else {
                searchformBtnClear.classList.add('active');
            }
        } else {
            searchformBtnClear.classList.add('active');
            resultsModal.classList.add('--burger-result-active');
            resultsModal.classList.remove('--burger-error-active');
        }
    })

    searchformBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        if (searchformForm.value.slice() !== '') {
            resultsModal.classList.remove('--burger-error-active');
            resultsModal.classList.add('--burger-result-active');
        } else {
            resultsModal.classList.add('--burger-error-active');
            resultsModal.classList.remove('--burger-result-active');
        }
    })

    searchformBtnClear.addEventListener('click', (e)=>{
        e.preventDefault();
        searchformForm.value = '';
        resultsModal.classList.remove('--burger-result-active');
        resultsModal.classList.add('--burger-error-active');
        searchformBtnClear.classList.remove('active');
    })


    if (window.innerWidth <= 760) {
        //burger accordeon
        const accordeonTriggers = document.querySelectorAll('.header__nav-link_callback-trigger');


        accordeonTriggers.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const parent = btn.closest('.header__nav-link_callback');
                const hiddenList = parent.querySelector('.header__nav-link_hidden');
                if (parent.classList.contains('active')) {
                    parent.classList.remove('active');
                    hiddenList.style.maxHeight = '0px';
                } else {
                    accordeonTriggers.forEach((item) => {
                        item.parentNode.classList.remove('active');
                        item.closest('.header__nav-link_callback').querySelector('.header__nav-link_hidden').style.maxHeight = '0px';
                    })
                    parent.classList.toggle('active');
                    hiddenList.style.maxHeight = hiddenList.scrollHeight + 'px';
                }
            })
        })

        window.addEventListener('click', (e) => {
            if (!e.target.classList.contains('header__nav-link_callback') && !e.target.parentNode.classList.contains('header__nav-link_callback')) {
                accordeonTriggers.forEach((item) => {
                    const parent = item.closest('.header__nav-link_callback');
                    const hiddenList = parent.querySelector('.header__nav-link_hidden');

                    parent.classList.remove('active');
                    hiddenList.style.maxHeight = '0px';
                })
            }
        })
    }


}