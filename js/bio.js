
const hiddenElements = document.querySelectorAll(".opacity0")


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
            observer.unobserve(entry.target)
        }
    })
}, {
    threshold: .5
})

hiddenElements.forEach(element => {
    observer.observe(element)
})
