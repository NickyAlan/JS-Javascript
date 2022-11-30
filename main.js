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

//https://youtu.be/jS4aFq5-91M?t=5206