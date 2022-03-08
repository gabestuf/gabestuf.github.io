
const desktopHeaderElement = document.querySelector(".desktop-header")

window.onscroll = () => {hideOnScroll()}

const hideOnScroll = () => {
    if (window.scrollY < 10) {
        if (desktopHeaderElement.classList.contains("closed-header")) {
            desktopHeaderElement.classList.remove("closed-header")
        }
    } else {
        desktopHeaderElement.classList.add("closed-header")
    }
  }

  desktopHeaderElement.onclick = () => {
      if (desktopHeaderElement.classList.contains("closed-header")) {
        desktopHeaderElement.classList.remove("closed-header")
      }
  }
