if (document.querySelector('.similar')) {
    const similarListWrapper = document.querySelector('.similar-list');
    const mainCard = document.querySelector('.doctor-card');
    //draw one card
    function drawDoctor(wrapper, content) {
        wrapper.insertAdjacentHTML('beforeend', content);
    };

    //drawing doctors db
    function drawDoctors(db, wrapper) {
        for (let key in db) {
            if (db[key].type === mainCard.dataset.value && db[key].name.toLowerCase() !== mainCard.querySelector('.name').innerText.toLowerCase()) {
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
            const items = document.querySelectorAll('.schedule__card');
            if (items.length >= 6) {
                break
            }
        }
    };

    //Drawing on load
    window.onload = () =>{
        drawDoctors(doctorsDB, similarListWrapper);
    }
}