let firstcard = 10
let secondcard = 1
let sum = firstcard + secondcard
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")
let message = ""
const startGame = () => {
    cardsEl.textContent=cardsEl.textContent+" " + firstcard+ " "+secondcard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want a new card?"
    }
    else if (sum === 21) {
        message = "You've got blackjack!"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game!"
        isAlive - false
    }
    messageEl.textContent=message
}
const newCard = () => {
    console.log("Drawing a new card")
}
