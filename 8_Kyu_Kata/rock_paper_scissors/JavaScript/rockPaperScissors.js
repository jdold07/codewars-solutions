// 8 kyu - Rock Paper Scissors!  [ ID: 5672a98bdbdd995fad00000f  (rock-paper-scissors) ]
// URL: https://www.codewars.com/kata/5672a98bdbdd995fad00000f
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const rps = (p1, p2) => {
  if (p1 == p2) return "Draw!"
  if (p1 == "scissors") {
    switch (p2) {
      case "rock":
        return "Player 2 won!"
      case "paper":
        return "Player 1 won!"
    }
  }
  if (p1 == "paper") {
    switch (p2) {
      case "scissors":
        return "Player 2 won!"
      case "rock":
        return "Player 1 won!"
    }
  }
  if (p1 == "rock") {
    switch (p2) {
      case "paper":
        return "Player 2 won!"
      case "scissors":
        return "Player 1 won!"
    }
  }
}
