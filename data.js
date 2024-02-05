let menuElement = document.getElementById('container');
let topLine = document.querySelector('.line1')
let centerLine = document.querySelector('.line2')
let bottomLine = document.querySelector('.line3')
menuElement.addEventListener('click', ()=>
{
    topLine.classList.toggle('top');
    centerLine.classList.toggle('center');
    bottomLine.classList.toggle('bottom');
})