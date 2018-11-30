const log = console.log
const title = document.querySelector('.title');
log(title);
const text = document.querySelector('.text');
const button = document.querySelector('#l2');

button.addEventListener('click', () => {
    log(title.value);
    log(text.value);
})