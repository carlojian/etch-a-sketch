let grid = 256

inputGridBtn = document.createElement("button")
inputGridBtn.textContent = "Hello World"
inputGridBtn.classList.add("input-grid-btn")
document.body.appendChild(inputGridBtn)

inputGridBtn.addEventListener("click", () =>{

    container.replaceChildren()

    let cellPerSide = Number(prompt("Enter Number from 1-100"));

    while(!Number.isInteger(cellPerSide) || cellPerSide < 0 || cellPerSide > 100){
        cellPerSide = Number(prompt("Please enter a valid integer from 1–100"))
    }

    let squaredCell = cellPerSide * cellPerSide;
    let cellSize = 800 / cellPerSide;

    createGrid(squaredCell, cellSize)

})




function createGrid(gridNumber, divHeight){
    for (let i = 0;i < gridNumber; i++){
        squareDiv = document.createElement("div")
        squareDiv.classList.add("square-div")
        squareDiv.style.height = divHeight + "px"
        squareDiv.style.width = divHeight + "px"
        container.appendChild(squareDiv)
    }
}

container.addEventListener("mouseover", (e) => {
    e.target.classList.add("changeColor")

})




createGrid(256, 50)