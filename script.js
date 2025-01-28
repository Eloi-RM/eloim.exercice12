const lcdScreen = document.querySelector("#lcd-screen")
const allPrimaryButtons = document.querySelectorAll(".btn-primary")
const plusButton = document.querySelector("#plus-button")
const equalButton = document.querySelector("#equal-button")
const resetButton = document.querySelector("#reset-button")

let equation

allPrimaryButtons.forEach(button => {
    button.addEventListener('click', () => {
        lcdScreen.textContent += button.textContent
    })
})  

plusButton.addEventListener('click', ()=> {
    lcdScreen.textContent += " " + "+" + " "
})

resetButton.addEventListener('click', () => {
    lcdScreen.textContent = ""
})

equalButton.addEventListener('click', () => {
    readScreen()
})

function readScreen() {
    const arr = lcdScreen.textContent.split(" ")

    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "+") {
            console.log(doSumOfAB(parseFloat(arr[i-1]), parseFloat(arr[i+1])))
        }
    }
}


function doSumOfAB(a, b) {
    return a + b
}