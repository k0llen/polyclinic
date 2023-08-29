if(document.querySelector('.results-page')) {
    const searchformForm = document.querySelector('#results-searchform-input');
    const searchform = document.querySelector('.results-page-searchform');
    const searchformClear = searchform.querySelector('.form-input-search-button-clear');
    const searchformSearch = searchform.querySelector('.form-input-search-button');
    const results = document.querySelector('.results-page-results');

    searchformSearch.addEventListener('click', (e) => {
        e.preventDefault();
        if (searchformForm.value.slice() !== '') {
            searchformClear.classList.add('active');
            results.classList.remove('--error');
            results.classList.add('--result');
        } else {
            searchformClear.classList.remove('active');
            results.classList.remove('--result');
            results.classList.add('--error');
        }
    })


    searchformForm.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (searchformForm.value.length - 1 < 1) {
                results.classList.remove('--result');
                results.classList.add('--error');
                searchformClear.classList.remove('active');
            }
        } else {
            results.classList.add('--result');
            results.classList.remove('--error');
            searchformClear.classList.add('active');
        }
    })
    searchformClear.addEventListener('click', (e)=>{
        e.preventDefault();
        searchformForm.value = '';
        results.classList.remove('--result');
        results.classList.add('--error');
        searchformClear.classList.remove('active');
    })
}