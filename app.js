
let myLinks = ["www.1", "www.2", "www.3"]
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEL = document.querySelector("#ul-el")

inputBtn.addEventListener("click", function() {
    if (inputEl.value != "") {
        myLinks.push(inputEl.value)
        let listItem = ""
        for (let i=0; i < myLinks.length; i++) {
            listItem +=  `
            <li>
                <a href='${myLinks[i]}' target='_black'>${myLinks[i]}</a>
            </li> 
            `
        }
    ulEL.innerHTML = listItem
    inputEl.value = ""
    }
})


// https://youtu.be/jS4aFq5-91M?t=20795