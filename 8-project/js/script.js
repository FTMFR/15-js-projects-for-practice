const password = document.getElementById('password');
const toggle = document.getElementsByClassName('toggle')[0];

function showHide() {
    if (password.type === "password") {
        password.setAttribute('type', 'text');
        toggle.classList.add('hide');
    } else {
        password.setAttribute('type', 'password');
        toggle.classList.remove('hide');
    }
}