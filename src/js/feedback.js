if (document.querySelector('.feedback')) {
    // drawing messages list
    function drawMessage(db, content) {
        const appealHidden = document.querySelector('.appeal-hidden');

        appealHidden.insertAdjacentHTML('beforeend', content);
    }

    function drawMessagesHistory(db) {
        for (let key in db) {
            const contentHtml = `<div class="appeal-hidden-item">
            <div class="theme">
            ${db[key].theme}
            </div>
            <div class="date">
            ${db[key].date}
            </div>
            <div class="answer">
            <span>Ответ поликлиники: </span>${db[key].answer}
            </div>
            </div>`;
            drawMessage(db, contentHtml)
        }
    }
    window.onload = () => {
        drawMessagesHistory(messagesDB);
    }

    // messages list opening

    const trigger = document.querySelector('.appeal-trigger');

    trigger.addEventListener('click', (e) =>{
        const hiddenList = trigger.parentNode.querySelector('.appeal-hidden');
        if (trigger.classList.contains('active')) {
            hiddenList.style.maxHeight = '0';
            trigger.classList.remove('active')
        } else {
            hiddenList.style.maxHeight = '300px';
            trigger.classList.add('active')
        }

    })
}