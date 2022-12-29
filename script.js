let menuBtn = document.querySelector('.js-menu-btn')
let menu = document.querySelector('.js-menu')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('visible')
})