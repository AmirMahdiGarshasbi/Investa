const menuEls = document.querySelectorAll('.menu-item');

menuEls.forEach(menuEl => {
    menuEl.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        menuEl.classList.add('active');
    })
})