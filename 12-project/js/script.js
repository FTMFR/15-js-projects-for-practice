function imgSlider(link) {
    document.querySelector('.bmw').src = "img/" + link;
}

function changeBG(color) {
    const section = document.querySelector('.section');
    section.style.backgroundColor = color;
}