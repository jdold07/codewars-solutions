//+ ====================================================================================================================
//+
//+ 5 kyu - Did I Finish my Sudoku?  [ ID: 53db96041f1a7d32dc0004d2 ] (did-i-finish-my-sudoku)
//+ URL: https://www.codewars.com/kata/53db96041f1a7d32dc0004d2
//+ Category: GAMES  |  Tags: MATHEMATICS | PUZZLES | GAMES | GAME SOLVERS
//+
//+ ====================================================================================================================

function doneOrNot(board) {
  const rowRes = board.every(
    (rowV) => new Set(rowV).size === 9 && rowV.reduce((a, c) => a + c) === 45
  )

  const cols = []
  for (let col = 0; col < board.length; col++) {
    const column = []
    for (const row of board) {
      column.push(row[col])
    }
    cols.push(column)
  }
  const colRes = cols.every(
    (colV) => new Set(colV).size === 9 && colV.reduce((a, c) => a + c) === 45
  )

  const squares = []
  for (let row = 0; row < board.length; row += 3) {
    for (let col = 0; col < board.length; col += 3) {
      const square = []
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          square.push(board[row + i][col + j])
        }
      }
      squares.push(square)
    }
  }
  const squareRes = squares.every(
    (squareV) => new Set(squareV).size === 9 && squareV.reduce((a, c) => a + c) === 45
  )

  return rowRes && colRes && squareRes ? "Finished!" : "Try again!"
}

module.exports = { doneOrNot }
