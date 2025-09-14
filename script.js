//VARIABLE IS HERE
let board = document.querySelector(".board")
const disc = document.querySelector(".red")

let turn = 0

//FUNCTION IS HERE

for (let i = 1; i <= 42; i++) {
  const cells = document.createElement("div")
  board.appendChild(cells)
  cells.classList.add("cells")
}
let allCells = board.querySelectorAll(".cells")
const handleClick = (cell) => {
  cell.innerText = 1
}

//EVENTLISTENER IS HERE
allCells.forEach((cell)=>{
  cell.addEventListener("click" , () => handleClick(cell))
})

