//Contact Page
const contactToHomeButtonElement = document.getElementById('contact-btn')

function main() {
    contactToHomeButtonElement.addEventListener('click', toHome)
}

function toHome() {
    window.location.href = 'index.html';
}

main()