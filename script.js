const lcdScreen = document.querySelector("#lcd-screen")
const allPrimaryButtons = document.querySelectorAll(".btn-primary")
const equalButton = document.querySelector("#equal-button")
const resetButton = document.querySelector("#reset-button")
const allSecondaryButtons = document.querySelectorAll(".btn-secondary")

allPrimaryButtons.forEach(button => {
    button.addEventListener('click', () => {
        lcdScreen.textContent += button.textContent
    })
})

allSecondaryButtons.forEach(button => {
    button.addEventListener('click', () => {
        lcdScreen.textContent += button.value
    })
})

resetButton.addEventListener('click', () => {
    lcdScreen.textContent = ""
})

equalButton.addEventListener('click', () => {
    readScreen()
})

function readScreen() {
    const arr = lcdScreen.textContent.split(" ")
    let tempResult = 0

    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "*" || arr[i] === "/") {
            switch (arr[i]) {
                case "*":
                    tempResult += doMultiplicationOfAB(arr[i-1], arr[i+1])
                    arr[i-1] = 0
                    arr[i+1] = 0
                    break
            
                case "/":
                    tempResult += doDivisionOfAB(arr[i-1], arr[i+1])
                    arr[i-1] = 0
                    arr[i+1] = 0
                    break
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "+":
                tempResult += doAdditionOfAB(arr[i-1], arr[i+1])
                arr[i-1] = 0
                arr[i+1] = 0
                break
        
            case "-":
                tempResult += doSubstractionOfAB(arr[i-1], arr[i+1])
                arr[i-1] = 0
                arr[i+1] = 0
                break
        }
    }

    console.log(tempResult)
}


function doAdditionOfAB(a, b) {
    return parseFloat(a) + parseFloat(b)
}

function doSubstractionOfAB(a, b) {
    return parseFloat(a) - parseFloat(b)
}

function doMultiplicationOfAB(a, b) {
    return parseFloat(a) * parseFloat(b)
}

function doDivisionOfAB(a, b) {
    return parseFloat(a) / parseFloat(b)
}