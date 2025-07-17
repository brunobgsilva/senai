function openOrCloseSection() {

}

document.querySelectorAll('.section')
    .forEach((section) => {
        section.querySelector('.section-title')
            .addEventListener('click', (e) => {
                const content = section.querySelector('.section-content');

                if (content.style.display == 'none') {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }

                // if (content.style.maxHeight) {
                //     content.style.maxHeight = null;
                // } else {
                //     content.style.maxHeight = '1000px';
                // }

        });
    });