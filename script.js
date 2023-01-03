let menuBtn = document.querySelector('.js-menu-btn')
let menu = document.querySelector('.js-menu')
let links = document.querySelectorAll('.js-menu-link')
let img = document.querySelector('.js-img')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('visible')
})

function handleClickEvents(e){
    let flowerName = e.target.innerText.toLowerCase()
    flowerName = flowerName.replace(/\s+/g, '')
    img.style.backgroundImage = `url(./photos/${flowerName}.jpg)`
    menu.classList.remove('visible')
}

links.forEach(link => {
    link.addEventListener('click', handleClickEvents)
})