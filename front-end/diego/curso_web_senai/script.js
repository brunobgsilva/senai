
// handle accordion menus
document.querySelectorAll('.section')
    .forEach((section) => {
        section.querySelector('.section-title')
            .addEventListener('click', (e) => {
                const content = section.querySelector('.section-content');

                if (!content.style.display) {
                    content.style.display = 'block';
                } else {
                    content.style.display = '';
                }

                // make transition work
                if (!content.style.maxHeight) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = '';
                }

                e.target.classList.toggle('active-section');

        });
    });
    
let previousScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    const header = document.querySelector('.header');
    const headerBottom = header.offsetTop + header.offsetHeight;

    const footer = document.querySelector('.footer');

    if (previousScrollPos >= currentScrollPos ||currentScrollPos < headerBottom + 50) {
        header.style.top = '0';
    } else {
        header.style.top = '-3rem';
    }

    // if (currentScrollPos >= previousScrollPos) {
    //     header.style.top = '-3rem';
    //     footer.style.bottom = '0';
    // } else {
    //     header.style.top = '0';
    //     footer.style.bottom = '-3rem';
    // }

    previousScrollPos = currentScrollPos;

}


