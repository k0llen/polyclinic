if (document.querySelector('.main_doctors')) {
    if (window.innerWidth < 551) {
        const showBtn = document.querySelector('.main_doctors-list-button_show');
        const hideBtn = document.querySelector('.main_doctors-list-button_hide');
        const cards = document.querySelectorAll('.main_doctors-item');

        function showCards() {
            showBtn.style.display = 'none';
            hideBtn.style.display = 'block';
            for (let i = 0; i < cards.length; i++) {
                if (i >= 9) {
                    cards[i].style.display = 'flex';
                    cards[i].style.maxHeight = cards[i].scrollHeight + 'px';
                    cards[i].style.minHeight = '40px';
                    cards[i].style.overflow = 'visible';
                    cards[i].style.visibility = 'visible';
                }
            }
        }

        function hideCards() {
            showBtn.style.display = 'block';
            hideBtn.style.display = 'none';
            for(let i = 0; i<cards.length;i++) {
                if (i >= 9) {
                    cards[i].style.display = 'none';
                    cards[i].style.maxHeight= '0';
                    cards[i].style.minHeight = '0';
                    cards[i].style.overflow = 'hidden';
                    cards[i].style.visibility = 'hidden';
                }
            }
        }

        showBtn.addEventListener('click', () => {
            showCards();
        });

        hideBtn.addEventListener('click', () => {
            hideCards();
        });

        window.onload = () => {
            hideCards();
        }
    }
}