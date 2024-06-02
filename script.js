let container = document.querySelector(".container")
let numDivs = 0
let button = document.querySelector("button")
let gridSize = 16

button.addEventListener("click", () => {
    const divBoxes = document.querySelectorAll(".grid-boxes")
    divBoxes.forEach(div => div.remove())
    gridSize = parseInt(prompt("How big would you like each side to be?"))
    buildBox()
})

function buildBox() {
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
            box.style.backgroundColor = ("black") 
            box.style.opacity = `${opacity}%`
            opacity += 10 
        })
    })
}
buildBox()




