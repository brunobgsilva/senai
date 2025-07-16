function openOrCloseSection() {

}

document.querySelectorAll('.section')
    .forEach((section) => {
        section.querySelector('.section-title')
            .addEventListener('click', (e) => {
                const content = section.querySelector('.section-content');

                if (content.classList.contains('closed-section')) {
                    content.classList.remove('closed-section');
                } else {
                    content.classList.add('closed-section');
                }
        });
    });