// counter
let countNum = document.getElementById("counter")
let save_ = document.getElementById("previous-counter")
let count = 0

function countUp() {
    count += 1
    countNum.innerText = count
}

function countDown() {
    if (count > 0) {
        count -= 1
        countNum.innerText = count   
    }
}

function save() {
    let countStr = " " + count + " - "
    save_.innerText += countStr
    count = 0
    countNum.innerText = 0
}

function refresh() {
    count = 0
    countNum.innerText = 0
    save_.innerText = "Previous Counter : "
}


// calculator

let num1 = 6
let num2 = 4
let ans = document.getElementById("ans")
let operator = document.getElementById("operate")
document.getElementById("num1").innerText = num1
document.getElementById("num2").innerText = num2

function add() {
    operator.innerText = "+"
    ans.innerText = num1 + num2
}

function subtract() {
    operator.innerText = "-"
    ans.innerText = num1 - num2
}

function divide() {
    operator.innerText = "/"
    ans.innerText = num1 / num2
}

function multiply() {
    operator.innerText = "x"
    ans.innerText = num1 * num2
}


// blackjack 
let cards = [getRandomCard(), getRandomCard()]
let sum = cards[0] + cards[1]
let hasBlackjack = false
let isAlive = true
let massage = ""
let message_el = document.getElementById("message-el")
let sum_el = document.querySelector("#sum-el") // more dynamic
let cardEl = document.querySelector("#card-el") 
let player = {
    name:"kris", 
    money:0
}
let playerEl = document.querySelector("#player-el")
playerEl.textContent =  player.name + " : " +  player.money + "$"


function startGame() {
    renderGame()
}

function renderGame() {
    if (sum < 21) {
        massage = "Do you want to draw a new card ?"
        message_el.textContent = massage
        sum_el.textContent = "Sum : " + sum
        
        cardEl.textContent = "Cards : "
        for (let i=0; i < cards.length; i+=1) {
            cardEl.textContent += cards[i] + " "
        }
    }
    else if (sum === 21) {
        massage = "Whooo! You've got Blackjack :)"
        hasBlackjack = true
        message_el.textContent = massage
        sum_el.textContent = "Sum : " + sum
        player.money += 10
        playerEl.textContent = "total money : " + player.money + "$"
        
        cardEl.textContent = "Cards : "
        for (let i=0; i < cards.length; i+=1) {
            cardEl.textContent += cards[i] + " "
        }
    }
    else {
        massage = "You're out of the game :("
        isAlive = false
        message_el.textContent = massage
        sum_el.textContent = "Sum : " + sum
        player.money -= 5
        playerEl.textContent = "total money : " + player.money + "$"

        cardEl.textContent = "Cards : "
        for (let i=0; i < cards.length; i+=1) {
            cardEl.textContent += cards[i] + " "
        }
    }
}

function newCard() {
    if (isAlive && !hasBlackjack && massage != "") {
        cards.push(getRandomCard()) // .append
        sum = 0
        for (let i=0; i<cards.length; i+=1) {
            sum += cards[i]
        }
        renderGame()
    }
}

function getRandomCard() {
    // random integer number [1,13]
    return Math.ceil(Math.random()*13) 
}


let largeCountry = [
    "china",
    "USA",
    "india",
    "indonesia",
    "pakistan",
    "russia",
    "monaco",
    "tuvalu"
]

largeCountry.unshift("first Index") // like push
largeCountry.shift() // remove first index , pop