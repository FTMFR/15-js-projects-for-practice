const imgBox = document.querySelectorAll('.img-box');
imgBox.forEach(popup => popup.addEventListener('click', function() {
    popup.classList.toggle('active')
}))
