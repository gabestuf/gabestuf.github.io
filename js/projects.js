
const cardelements = document.querySelectorAll(".card")

const toggle10 = (num) => {
    return num == 0 ? 1 : 0

}



cardelements.forEach((card) => {
    for (child of card.children) {
        if (child.classList.contains('card-component') && !child.classList.contains('card-title')) {
            child.classList.add("hideElement")
        }
    }
})

const displayOpenCard = (cardid) => {
    const card = cardelements[cardid]
    card.classList.add('noHover')

    for (child of card.children) {
        if (child.classList.contains('card-component') && !child.classList.contains('card-title')) {
            child.classList.remove("hideElement")
        }
    }
}

const displayClosedCard = (cardid) => {
    const card = cardelements[cardid]
    card.classList.remove('noHover')
    for (child of card.children) {
        if (child.classList.contains('card-component') && !child.classList.contains('card-title')) {
            child.classList.add("hideElement")
        }
    }
}

const toggleCardOpen = (cardid, isOpen) => {
    if (isOpen == 0) {
        displayOpenCard(cardid)
        return 1
    }
    if (isOpen == 1) {
        displayClosedCard(cardid)
        return 0
    }
}

cardelements.forEach((card) => {

    card.onclick = () => {
        // toggle
        // card.dataset.cardopen = toggle10(card.dataset.cardopen)

        // if (card.dataset.cardopen == 0) { // Click on card again to close it
        //     displayClosedCard(card.dataset.cardid)
        //     console.log('card closed')
        // } else

        // no toggle :(
        card.dataset.cardopen = 1

        if (card.dataset.cardopen == 1) {
            displayOpenCard(card.dataset.cardid)
            //console.log('card opened')
        }
    }
})


