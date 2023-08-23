if (document.querySelector('.paid')) {
    const accordeonBody = document.querySelectorAll('.accordeon');

    accordeonBody.forEach((body) => {
        const trigger = body.querySelector('.h3');
        const accordeonContent = body.querySelector('.accordeon-content')
        trigger.addEventListener('click', () => {
            if (body.classList.contains('active')) {
                body.classList.remove('active');
            } else {
                accordeonBody.forEach((item) => {
                    item.classList.remove('active');
                })
                body.classList.toggle('active');
            }
        })
    })

    if (window.innerWidth < 760) {
        function showOrHideCards() {
            const blockCostBlocks = document.querySelectorAll('.block_top-block');
            
            blockCostBlocks.forEach((block) => {

                const showBtn = block.querySelector('.btn-show');
                const hideBtn = block.querySelector('.btn-hide');
                const blockCards = block.querySelectorAll('.accordeon-content-card');
                
                for (let i = 0; i < blockCards.length; i++) {
                    if (blockCards.length > 5 && i > 5) {
                        blockCards[i].style.display = 'none';
                        hideBtn.style.display = 'none';
                        showBtn.style.display = 'block';
                    }
                }


                showBtn.addEventListener('click', () => {
                    blockCards.forEach((card) =>{
                        card.style.display = 'block';
                    })
                    hideBtn.style.display = 'block';
                    showBtn.style.display = 'none';
                })

                hideBtn.addEventListener('click', () =>{
                    for (let i = 0; i<blockCards.length; i++) {
                        if (i > 6) {
                            blockCards[i].style.display = 'none';
                        }
                    }
                    showBtn.style.display = 'block';
                    hideBtn.style.display = 'none';
                });
                
            })
        }

        window.onload = () => {
            showOrHideCards();
        }

    }
}