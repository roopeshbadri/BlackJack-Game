let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")
let message = ""
let player = {
    Name: "Roopesh",
    Chips: 145
}
//let randomNumber = Math.floor(Math.random()*10)
//console.log(randomNumber)
let playerEl = document.getElementById("player-el")
playerEl.textContent=player.Name+": $"+player.Chips
const startGame = () => {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard, secondCard)
    sum+=firstCard+secondCard
    playGame()
}
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    }
    if (randomNumber >10) {
        return 10
    }
    return randomNumber
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
        isAlive = false
    }
    messageEl.textContent=message
}
const newCard = () => {
    if (hasBlackJack === false && isAlive === true) {
    
        console.log("Drawing a new card")
        let newCardEl = getRandomCard()
        cards.push(newCardEl)
        sum += newCardEl
        playGame()
    }
}
