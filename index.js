// Black Jack
// - Goal is to get as close to 21 without going over (still in the game)
// - Better t0 land a 21 (ace 11, king 10)
// - If you go over 21 you lose
let player = {
    name: "Adam",
    chips: 1500
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": R " + player.chips

//Ace can be 1 or 11
// King, Queen, Jack are 10
function getRandomCard(){
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if (randomNumber > 10){
        return 10
    }
    else if (randomNumber === 1){
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame()
{
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

   sumEl.textContent = "Sum: " + sum
   if(sum <= 20){
     message = "Do you want to draw a new card?"
 }
 else if(sum === 21){
    message = "You've got Black Jack!"
    hasBlackJack = true
 }
 else {
   message = "You're out of the game!"
   isAlive = false
}
    messageEl.textContent = message
}

function newCard(){
    
    if(isAlive === true && hasBlackJack === false){
    let drawnCard = getRandomCard()
    sum = sum + drawnCard
    cards.push(drawnCard)
    renderGame()
    } else if (isAlive === true && hasBlackJack === true) {
        isAlive = false
        hasBlackJack = false
    }
    else
    {
      isAlive = false 
    }
}