
const desktopHeaderElement = document.querySelector(".desktop-header")
const hamburgerElement = document.querySelector(".hamburger")


window.onscroll = () => { hideOnScroll() }

const hideOnScroll = () => {
  if (window.scrollY == 0) {
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
