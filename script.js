//VARIABLE IS HERE
let board = document.querySelector(".board")
let turn = 0
let playerTurn = "red"

//FUNCTION IS HERE
for (let rows = 0; rows < 6; rows++) {
  for (let cols = 0; cols < 7; cols++) {
    const cells = document.createElement("div")
    board.appendChild(cells)
    cells.classList.add("cells")
  }
}

let allCells = board.querySelectorAll(".cells")
allCells.forEach((div, index) => {
  div.id = index
})

const handleClick = (cell) => {
  const index = parseInt(cell.id)
  const col = index % 7

  for (let row = 5; row >= 0; row--) {
    const i = row * 7 + col
    const currentCell = allCells[i]

    if (currentCell.style.backgroundColor === "") {
      currentCell.style.backgroundColor = playerTurn
      if (playerTurn === "red"){
        playerTurn = "yellow"
      }else{
        playerTurn = "red"
      }
      return currentCell
    }
  }
  return null
}

//EVENTLISTENER IS HERE
allCells.forEach((cell) => {
  cell.addEventListener("click", () => handleClick(cell))
})
