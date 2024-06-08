let container = document.querySelector(".container")
let numDivs = 0
let changeSizeButton = document.querySelector("#change-size-button")
let clearButton = document.querySelector("#clear-button")
let gridSize = 16
let color = ""
let colorButton = document.querySelectorAll(".colors > button")

changeSizeButton.addEventListener("click", () => {
    gridSize = parseInt(prompt("How big would you like each side to be?"))
    buildBox()
})
clearButton.addEventListener("click", () => {
    confirm("Are you sure you want to clear the board?") ? buildBox() : null; 
})
colorButton.forEach(button => {
    button.addEventListener("click", () => {
    color = button.id
})})

function buildBox() {
    const divBoxes = document.querySelectorAll(".grid-boxes")
    divBoxes.forEach(div => div.remove())
    let numDivs = 0;
    while (numDivs < gridSize*gridSize) {
        const div = document.createElement("div");
        div.style.height = `${500 / gridSize}px`
        div.style.width = `${500 / gridSize}px`
        container.appendChild(div);
        div.classList.add("grid-boxes")
        numDivs++
    }
    addEventListenerToBoxes()
}
function addEventListenerToBoxes() {
    let gridBoxes = document.querySelectorAll(".grid-boxes")
    gridBoxes.forEach(box => {
        let opacity = 0
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = color 
            opacity += 15 
            box.style.opacity = `${opacity}%`
        })
    })
}

buildBox()




