if (document.querySelector('.paid-schedule') && window.innerWidth < 991) {
    const accordeonTrigger = document.querySelectorAll('.accordeon-trigger');
    
    accordeonTrigger.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const parent = trigger.parentNode;
            const parents = document.querySelectorAll('.accordeon-item');
            const accordeonContent = parent.querySelector('.accordeon-content');

            if (parent.classList.contains('active')) {
                parent.classList.remove('active');
                accordeonContent.style.maxHeight = '0';
            } else {
                parents.forEach((item) =>{
                    const itemContent = item.querySelector('.accordeon-content');
                    item.classList.remove('active');
                    itemContent.style.maxHeight = '0';
                })
                parent.classList.toggle('active');
                accordeonContent.style.maxHeight = accordeonContent.scrollHeight + 'px';
            }

        })
    })
}