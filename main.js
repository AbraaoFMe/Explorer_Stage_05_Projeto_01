// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function (e) {
    if (e.key == "Enter" && screen1.classList.contains('hide')) {
        handleResetClick(e)
    }
})

// Funções callback
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.getElementById('inputNumber')
    const value = Number(inputNumber.value)
    
    if(!value || value > 10 || value < 0) {
        alert("Insira um número entre 0 e 10!")
        return -1
    }

    if (value == randomNumber) {
        toggleScreen()

        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativa(s)`
    }

    inputNumber.value = ""
    xAttempts++

}

function handleResetClick() {
    toggleScreen()

    randomNumber = Math.round(Math.random() * 10)
    xAttempts = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}