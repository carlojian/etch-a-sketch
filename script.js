let grid = 256
const container = document.getElementById("container")

function createGrid(gridNumber){
    for (let i = 0;i < gridNumber; i++){
        console.log(i + 1)
        squareDiv = document.createElement("div")
        squareDiv.classList.add("square-div")
        squareDiv.style.height = "50px"
        squareDiv.style.width = "50px"
        container.appendChild(squareDiv)
    }
}

container.addEventListener("mouseover", (e) => {
    e.target.classList.add("changeColor")

})



createGrid(grid)