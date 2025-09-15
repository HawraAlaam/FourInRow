//VARIABLE IS HERE
let board = document.querySelector(".board")
let turn = 0
let playerTurn = "red"
//FUNCTION IS HERE

for (let i = 1; i <= 42; i++) {
  const cells = document.createElement("div")
  board.appendChild(cells)
  cells.classList.add("cells")
}

let allCells = board.querySelectorAll(".cells")

const handleClick = (cell) => {
  if (cell.style.backgroundColor === "") {
    cell.style.backgroundColor = playerTurn
    if (playerTurn === "red") {
      playerTurn = "yellow"
    } else {
      playerTurn = "red"
    }
  }
}

//EVENTLISTENER IS HERE
allCells.forEach((cell) => {
  cell.addEventListener("click", () => handleClick(cell))
})
