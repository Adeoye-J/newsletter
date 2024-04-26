const newsletter = document.getElementById("newsletter-container")

const notification = document.getElementById("success-notification-container")


const viewSuccessMessage = () => {
    notification.classList.add("show-notification")
    newsletter.classList.add("hide-newsletter")
}

const viewNewsLetter = () => {
    notification.classList.remove("show-notification")
    newsletter.classList.remove("hide-newsletter")
}