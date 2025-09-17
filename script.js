//VARIABLE IS HERE
let board = document.querySelector(".board")
let gameStatus = document.querySelector("h2")
let playAgain = document.querySelector(".reset")

let turn = 0
let playerTurn = "#FF6FFF"
let playerName = "Pink"
let pinkChoices = []
let mintChoices = []
gameOver = false

//wining array from https://github.com/kubowania/connect-four/blob/master/app.js
const winningArrays = [
  [0, 1, 2, 3],
  [41, 40, 39, 38],
  [7, 8, 9, 10],
  [34, 33, 32, 31],
  [14, 15, 16, 17],
  [27, 26, 25, 24],
  [21, 22, 23, 24],
  [20, 19, 18, 17],
  [28, 29, 30, 31],
  [13, 12, 11, 10],
  [35, 36, 37, 38],
  [6, 5, 4, 3],
  [0, 7, 14, 21],
  [41, 34, 27, 20],
  [1, 8, 15, 22],
  [40, 33, 26, 19],
  [2, 9, 16, 23],
  [39, 32, 25, 18],
  [3, 10, 17, 24],
  [38, 31, 24, 17],
  [4, 11, 18, 25],
  [37, 30, 23, 16],
  [5, 12, 19, 26],
  [36, 29, 22, 15],
  [6, 13, 20, 27],
  [35, 28, 21, 14],
  [0, 8, 16, 24],
  [41, 33, 25, 17],
  [7, 15, 23, 31],
  [34, 26, 18, 10],
  [14, 22, 30, 38],
  [27, 19, 11, 3],
  [35, 29, 23, 17],
  [6, 12, 18, 24],
  [28, 22, 16, 10],
  [13, 19, 25, 31],
  [21, 15, 9, 3],
  [20, 26, 32, 38],
  [36, 30, 24, 18],
  [5, 11, 17, 23],
  [37, 31, 25, 19],
  [4, 10, 16, 22],
  [2, 10, 18, 26],
  [39, 31, 23, 15],
  [1, 9, 17, 25],
  [40, 32, 24, 16],
  [9, 17, 25, 33],
  [8, 16, 24, 32],
  [11, 17, 23, 29],
  [12, 18, 24, 30],
  [1, 2, 3, 4],
  [5, 4, 3, 2],
  [8, 9, 10, 11],
  [12, 11, 10, 9],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [36, 37, 38, 39],
  [40, 39, 38, 37],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
]

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

const checkForWin = () => {
  let choices
  if (playerTurn === "#FF6FFF") {
    choices = pinkChoices
  } else {
    choices = mintChoices
  }
  let inARow
  for (let i = 0; i < winningArrays.length; i++) {
    let combo = winningArrays[i]
    inARow = 0
    for (let j = 0; j < combo.length; j++) {
      if (choices.includes(combo[j])) {
        inARow++

        if (inARow === 4) {
          gameStatus.innerText = `${playerName} WINS!`
          gameOver = true
          playAgain.style.visibility = "visible"
        }
      }
    }
    if (turn === 42 && !gameOver) {
      gameStatus.innerText = "DRAW!"
      gameOver = true
      playAgain.style.visibility = "visible"
    }
  }
}

const handleClick = (cell) => {
  turn++
  const index = parseInt(cell.id)
  const col = index % 7

  for (let row = 5; row >= 0; row--) {
    const i = row * 7 + col
    const currentCell = allCells[i]

    if (currentCell.style.backgroundColor === "") {
      currentCell.style.backgroundColor = playerTurn
      if (playerTurn === "#FF6FFF") {
        pinkChoices.push(i)
        pinkChoices.sort()
        console.log(pinkChoices)

        checkForWin()
        playerName = "Mint"
        playerTurn = "#6FFF9E"
      } else {
        mintChoices.push(i)
        mintChoices.sort()
        console.log(mintChoices)

        checkForWin()
        playerName = "Pink"
        playerTurn = "#FF6FFF"
      }
      if (!gameOver) {
        gameStatus.innerText = `${playerName}'s Turn!`
      }
      return currentCell
    }
  }
}

//EVENTLISTENER IS HERE
allCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerText === "" && !gameOver) {
      handleClick(cell)
    }
  })
})

playAgain.addEventListener("click", () => {
  turn = 0
  playerTurn = "#FF6FFF"
  pinkChoices = []
  mintChoices = []
  gameOver = false

  allCells.forEach((cell) => {
    cell.style.backgroundColor = ""
  })

  gameStatus.innerText = `${playerName}'s Turn!`
  playAgain.style.visibility = "hidden"
})
