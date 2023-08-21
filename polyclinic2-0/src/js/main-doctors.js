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
                }
            }
        }

        function hideCards() {
            showBtn.style.display = 'block';
            hideBtn.style.display = 'none';
            for(let i = 0; i<cards.length;i++) {
                if (i >= 9) {
                    cards[i].style.display = 'none';
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