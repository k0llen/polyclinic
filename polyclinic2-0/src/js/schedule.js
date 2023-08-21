if (document.querySelector('.schedule')) {
    const scheduleListWrapper = document.querySelector('.schedule__list');
    
    //draw one card
    function drawDoctor(wrapper, content) {
        wrapper.insertAdjacentHTML('beforeend', content);
    };

    //drawing doctors db
    function drawDoctors(db, wrapper) {
        for (let key in db) {
            const cardHTML = `<a href="${db[key].link}" class="schedule__card card card_white">
            <div class="pic-block">
                <img src="${db[key].img}" alt="${db[key].name}">
            </div>
            <div class="about">
                <div class="name">${db[key].name}</div>
                <div class="spec">${db[key].spec}</div>
            </div>
            </a>`;
            drawDoctor(wrapper, cardHTML);
        }
    };

    //Drawing on load
    window.onload = () =>{
        drawDoctors(doctorsDB, scheduleListWrapper);
    }


    // dropdowns
    const dropdownBtn = document.querySelectorAll('.dropdown__button');
    //dropdowns opening
    dropdownBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (btn.classList.contains('active')) {
                btn.classList.remove('active');
            } else {
                dropdownBtn.forEach((item) => {
                    item.classList.remove('active');
                })
                btn.classList.toggle('active');
            }
        })


        // dropdowns value + text
        const dropdownItem = btn.parentNode.querySelectorAll('.dropdown__item');
        const hiddenInput = btn.parentNode.querySelector('.dropdown__input-hidden');
        
        dropdownItem.forEach((item) => {
            item.addEventListener('click', (e)=>{
                btn.innerText = item.innerText;
                hiddenInput.value = item.dataset.value;
                btn.classList.remove('active');
            })
        })
    })

    // closing dropdowns by clicking all over window
    window.addEventListener('click', (e) => {
        if (!e.target.classList.contains('dropdown') && !e.target.closest('.dropdown')) {
            dropdownBtn.forEach((btn) => {
                btn.classList.remove('active');
            })
        }
    })

    //filters burger opening
    const filtersTrigger = document.querySelector('.filters-trigger');
    const filtersWrapper = document.querySelector('.filters');

    filtersTrigger.addEventListener('click', ()=>{
        filtersWrapper.classList.toggle('active');
    })

    window.addEventListener('click', (e)=>{
        if (!filtersWrapper.contains(e.target)) {
            filtersWrapper.classList.remove('active');
        }
    })
}