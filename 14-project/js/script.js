const texterea = document.querySelector('#texterea');
const remaining = document.querySelector('#textearea-remaining');
let maxChars = 250;

texterea.addEventListener('input', () => {
    const totalRemaining = maxChars - texterea.value.length;
    function color() {
        if (totalRemaining < maxChars * .2 && totalRemaining > maxChars * .1) {
            return 'yellow'
        }
        else if (totalRemaining < maxChars * .1) {
            return 'red'
        } else {
            return 'green'
        }
    }
    remaining.textContent = `${totalRemaining} کارکتر باقی مانده`
    remaining.style.color = color();

    if (totalRemaining === 0) {
        remaining.textContent = `${totalRemaining} مقدار مجاز تکمیل است`
    }
})