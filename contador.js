let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0  

function increment() {
    count += 1
    countEl.textContent = count + " pessoas"
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = "0 pessoas" 
    count = 0 
}
