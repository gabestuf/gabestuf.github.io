
const desktopHeaderElement = document.querySelector(".desktop-header")
const hamburgerElement = document.querySelector(".hamburger")

const cardWrapperElement = document.querySelector(".card-wrapper")

cardWrapperElement.onscroll = () => { hideOnScroll() }

const hideOnScroll = () => {
  if (cardWrapperElement.scrollTop == 0) {
    autoShowDesktopHeader();
  } else {
    if (hamburgerElement.dataset.manualopen == 0) {
      autoHideDesktopHeader();
    }
  }
}


const autoHideDesktopHeader = () => {
  desktopHeaderElement.classList.add("closed-header")
}
const hideDesktopHeader = () => {
  desktopHeaderElement.classList.add("closed-header")
  hamburgerElement.dataset.manualopen = 0
}

const autoShowDesktopHeader = () => {
  if (desktopHeaderElement.classList.contains("closed-header")) {
    desktopHeaderElement.classList.remove("closed-header")
  }
}
const showDesktopHeader = () => {
  if (desktopHeaderElement.classList.contains("closed-header")) {
    desktopHeaderElement.classList.remove("closed-header")
    hamburgerElement.dataset.manualopen = 1
  }
}