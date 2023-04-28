// calculate bill
let tipInput = document.getElementById('tipInput')
let percentInput = document.getElementById('percentInput')
let personSpan = document.getElementById('person')
let totalPerson = 1
let totalPerPerson = document.getElementById('totalPerPerson')

const calculateBill = () => {
    tip = Number(tipInput.value)
    tipPercent = Number(percentInput.value)
    person = Number(personSpan.innerText)
    billPerPerson = (tip + (tip * (tipPercent/100))) / person
    totalPerPerson.innerText = '$' + billPerPerson.toFixed(2)
}
const personAdjust = (operator) => {
    if (operator == '+') {
        totalPerson += 1
    }
    else {
        if (totalPerson > 1) {
            totalPerson -= 1
        }
    }
    personSpan.innerText = totalPerson
    calculateBill()
}


// box-color
const timesClicked = {'red': 0, 'yellow': 0, 'blue': 0}
// grab that all box class in to array (actually called NodeListOf)
const boxs = document.querySelectorAll('.box')  
boxs.forEach(box => {
    box.onclick = () => {
        timesClicked[box.value] += 1
        box.innerText = timesClicked[box.value]
    }
})

const clearScoreBtn = document.getElementById('clearScore')
clearScoreBtn.onclick = () => {
    boxs.forEach(box => {
        box.innerHTML = 0
        timesClicked[box.value] = 0
    })
}


// rock paper scissors
let rpsState = document.getElementById('rps-state')
let rpsScore = 0
const rpsBtn = document.querySelectorAll('.rps-item')
rpsBtn.forEach(option => {
    option.onclick = () => {
        randomSelect = rockPaperScissors()
        result = winOrLoss(option.innerHTML, randomSelect)
        if (result == 'lose') {rpsScore-=1} 
        else if (result == 'win') (rpsScore+=1)
        rpsState.innerText = '[' + rpsScore + ' | ' + result + '] ' + option.innerHTML + ' : ' + randomSelect 
    }}
)

const rockPaperScissors = () => {
    arrays = ['rock', 'paper', 'scissors']
    randomSelect = Math.floor(Math.random() * 3)
    return arrays[randomSelect]
}

const winOrLoss = (human, random) => {
    if (human == random) {
        return 'tied'
    }
    else if (human == 'rock') {
        if (random == 'paper') {
            return 'lose'
        }
        else if (random == 'scissors') {
            return 'win'
        }
    }
    else if (human == 'paper') {
        if (random == 'rock') {
            return 'win'
        }
        else if (random == 'scissors') {
            return 'lose'
        }
    }
    else if (human == 'scissors') {
        if (random == 'rock') {
            return 'lose'
        }
        else if (random == 'paper') {
            return 'win'
        }
    }
}

const rpsResetScore = () => {
    rpsScore = 0
    rpsState.innerText = 'rock paper scissors'
}