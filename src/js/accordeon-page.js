if (document.querySelector('.accordeon-page')) {
    const accordeonItems = document.querySelectorAll('.accordeon-item');
    const accordeonContentList = document.querySelectorAll('.accordeon-content');

    accordeonItems.forEach((item) => {
        const trigger = item.querySelector('.accordeon-item-trigger');
        const content = item.querySelector('.accordeon-item-content');

        trigger.addEventListener('click', () => {
            if(item.classList.contains('active')) {
                item.classList.remove('active');
                content.style.maxHeight = '0';
            } else {
                accordeonItems.forEach((wrapper) =>{
                    const contentChild = wrapper.querySelector('.accordeon-item-content');
                    wrapper.classList.remove('active');
                    contentChild.style.maxHeight = '0';
                })
                item.classList.toggle('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        })
    })
}