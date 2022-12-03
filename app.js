let myLinks = []
const inputBtn = document.querySelector("#input-btn")
const ulEL = document.querySelector("#ul-el")
const inputEl = document.querySelector("#input-el")
const deleteBtn = document.querySelector("#delete-btn")
const saveTab = document.querySelector('#save-tab')

const linksFromLocalStorage = JSON.parse( localStorage.getItem("myLinks") )
if (linksFromLocalStorage) { // if have storage
    myLinks = linksFromLocalStorage
}

renderLinks()

inputBtn.addEventListener("click", function() {
    if (inputEl.value != "" && !myLinks.includes(inputEl.value)) {
        myLinks.push(inputEl.value)
        localStorage.setItem("myLinks", JSON.stringify(myLinks)) // save string to storage
        myLinks = JSON.parse(localStorage.getItem("myLinks")) // get back to array
        renderLinks()
    }
})

function renderLinks() {
    let listItem = ""
    for (let i=0; i < myLinks.length; i++) {
        listItem +=  `
        <li>
            <a href='${myLinks[i]}' target='_black'>${myLinks[i]}</a>
        </li> 
        `
    }
    ulEL.innerHTML = listItem
    inputEl.value = "" // clear input field
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    ulEL.innerHTML = ""
    myLinks = []
})

saveTab.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (!myLinks.includes(tabs[0].url)) {
            myLinks.push(tabs[0].url)
            localStorage.setItem("myLinks", JSON.stringify(myLinks))
            myLinks = JSON.parse(localStorage.getItem("myLinks"))
            renderLinks()
        }
    })
})