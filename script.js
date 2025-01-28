const lcdScreen = document.querySelector("#lcd-screen")
const allPrimaryButtons = document.querySelectorAll(".btn-primary")
const plusButton = document.querySelector("#plus-button")

allPrimaryButtons.forEach(button => {
    button.addEventListener('click', () => {
        lcdScreen.textContent += button.textContent
    })
})

plusButton.addEventListener('click', ()=> {
    lcdScreen.textContent += " " + "+" + " "
})