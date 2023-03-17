const contactForm = document.querySelector('.contact-form')

contactForm.addEventListener('submit', e => onContactFormSubmit(e))

const onContactFormSubmit = async (e) => {
    e.preventDefault()
    const msgTitle = e.target[0].value
    const msgBody = e.target[1].value
    const msgContact = e.target[2].value

    const response = await fetch("https://gabestuf@gmail.com/emailMe/contactGabe", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            msgTitle: msgTitle,
            msgBody: msgBody,
            msgContact: msgContact
        }),
    })
    const resJSON = await response.json()

    alert(resJSON.message)
    if (resJSON.status === "SUCCESS") {
        e.target[0].value = ""
        e.target[1].value = ""
        e.target[2].value = ""
    }
}




