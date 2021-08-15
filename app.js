// Variables
const cont = document.querySelector('.cont')
const imageCont = document.querySelectorAll('.img-cont')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const cirCon = document.querySelector('.count')

// Add circle foreach image
imageCont.forEach(el => {
    cirCon.innerHTML += `
        <div class="cir"></div>
    `
})
// wrap all circles in var
const cir = document.querySelectorAll('.cir')
cir[0].classList.add('active')
// num for show the active image
let num = 0

// remove active class from all images and circles and add to the active one
function switchActive() {
    imageCont.forEach(el => el.classList.remove('active'))
    imageCont[num].classList.add('active')
    cir.forEach(el => el.classList.remove('active'))
    cir[num].classList.add('active')
}
// add event listener to left button
left.addEventListener('click', () => {
    num--
    console.log(num)
    if (num <= 0) {
        num = imageCont.length - 1
    }
    switchActive()
})

// add event listener to right button
right.addEventListener('click', () => {
    num++
    if (num >= imageCont.length) {
        num = 0
    }
    switchActive()
})