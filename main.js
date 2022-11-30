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