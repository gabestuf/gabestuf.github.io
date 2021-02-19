const buttonElement = document.getElementById('btn')
const homeButtonElement = document.getElementById('home-btn')
const counterElement = document.getElementById('counter-btn')

var counter = 0;

function workpls() {
    counterElement.innerText = 0;
    buttonElement.addEventListener('click', updateNumber)
    homeButtonElement.addEventListener('click', homePage)
}

function updateNumber() {
    counter += 1;
    counterElement.innerText = counter;
}

function homePage() {
    window.location.href = 'index.html';
}

workpls()