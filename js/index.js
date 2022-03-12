
const mobileMenuElement = document.querySelector(".nav-wrapper")
const mobileMenuButtonElement = document.querySelector(".menu-button")
const contentElement = document.querySelector(".content-wrapper")
const aboutWrapperElement = document.querySelector(".about-wrapper")

window.onload = () => {
    mobileMenuElement.classList.add('hideElement');
    mobileMenuButtonElement.classList.add('color-light');
    contentElement.classList.remove('hideElement');
    autoShowDesktopHeader();
}

const toggleDisplayMenu = () => {
    if (mobileMenuElement.dataset.menuopen == 1) { // if mobileMenu is been closed
        mobileMenuElement.dataset.menuopen = 0;
        mobileMenuElement.classList.add('hideElement');
        contentElement.classList.remove('hideElement');
        mobileMenuButtonElement.classList.add('color-light');
        mobileMenuButtonElement.classList.remove('color-white');
        if (aboutWrapperElement){
            aboutWrapperElement.classList.remove('hideElement')
        }
    } else if (mobileMenuElement.dataset.menuopen == 0) { // mobile menu open
        mobileMenuElement.dataset.menuopen = 1;
        mobileMenuElement.classList.remove('hideElement');
        contentElement.classList.add('hideElement');
        mobileMenuButtonElement.classList.remove('color-light');
        mobileMenuButtonElement.classList.add('color-white');
        if (aboutWrapperElement){
            aboutWrapperElement.classList.add('hideElement')
        }
    }
}

