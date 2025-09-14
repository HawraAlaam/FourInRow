//VARIABLE IS HERE
let board = document.querySelector(".board")
const disc = document.querySelector(".red")

let turn = 0

console.log(board)
//FUNCTION IS HERE

for (let i = 1; i <= 42; i++) {
  const cells = document.createElement("div")
  board.appendChild(cells)
  cells.classList.add("cells")
}

let element
//EVENTLISTENER IS HERE
for (let i = 0; i < board.length; i++) {
  element = board[i]
  console.log(board[i])
  element.addEventListener("click", () => {})
}
