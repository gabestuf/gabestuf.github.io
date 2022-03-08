



const cardWrapperElement = document.querySelector(".card-wrapper")
const desktopHeaderElement = document.querySelector(".desktop-header")

cardWrapperElement.onscroll = () => {hideOnScroll()}

const hideOnScroll = () => {
    if (cardWrapperElement.scrollTop < 10) {
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
