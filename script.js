const lcdScreen = document.querySelector("#lcd-screen")
const allPrimaryButtons = document.querySelectorAll(".btn-primary")

allPrimaryButtons.forEach(button => {
    button.addEventListener('click', () => {
        lcdScreen.textContent = button.textContent
        console.log(button.textContent)
    })
})