const container = document.querySelector('#container');

window.onmousemove = function (e) {
    let x = e.clientX / 7;
    let y = e.clientY / 5;
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionY = y + 'px';
}
