let firstcard = 10
let secondcard = 1
let sum = firstcard + secondcard
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")
let message = ""
let cards= [firstcard,secondcard]
const startGame = () => {
    playGame()
}
const playGame = () => {
    cardsEl.textContent="Cards: "
    for (let cardCount = 0; cardCount < cards.length; cardCount++){
        console.log(cards[cardCount])
        cardsEl.textContent += cards[cardCount] + " "
    }
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
    let newCardEl = 8
    cards.push(newCardEl)
    sum += newCardEl
    startGame()
}
