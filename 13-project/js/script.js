const open = document.querySelector('.img-box');
const close = document.querySelector('.menu-close');
const layer = document.querySelector('.layer1');

open.onclick = () => {
    layer.classList.add('check')
}

close.onclick = () => {
    layer.classList.remove('check')
}