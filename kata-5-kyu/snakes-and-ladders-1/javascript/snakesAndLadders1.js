//+ ====================================================================================================================
//+
//+ 5 kyu - Snakes and Ladders  [ ID: 587136ba2eefcb92a9000027 ] (snakes-and-ladders-1)
//+ URL: https://www.codewars.com/kata/587136ba2eefcb92a9000027
//+ Category: REFERENCE  |  Tags: DESIGN PATTERNS | GAMES | FUNDAMENTALS
//+
//+ ====================================================================================================================

class SnakesLadders {
  constructor() {
    this.p1 = new SnakesLadders.Player("Player 1")
    this.p2 = new SnakesLadders.Player("Player 2")
    this.gameOver = false
    this.p1.turn = true
    this.aP = this.p1
    this.board = {
      2: 38,
      7: 14,
      8: 31,
      15: 26,
      16: 6,
      21: 42,
      28: 84,
      36: 44,
      46: 25,
      49: 11,
      51: 67,
      62: 19,
      64: 60,
      71: 91,
      74: 53,
      78: 98,
      87: 94,
      89: 68,
      92: 88,
      95: 75,
      99: 80
    }
  }

  play(die1, die2) {
    if (this.gameOver) return "Game over!"
    this.totalRoll = die1 + die2
    this.dblRoll = die1 === die2
    if (this.p1.turn) {
      this.aP = this.p1
      this.nP = this.p2
    } else {
      this.aP = this.p2
      this.nP = this.p1
    }
    this.aP.turn = this.dblRoll
    this.nP.turn = !this.dblRoll
    this.dblRoll = false
    if (this.aP.position + this.totalRoll >= 100) {
      this.aP.position =
        this.board[100 - (this.aP.position + this.totalRoll - 100)] || 100 - (this.aP.position + this.totalRoll - 100)
      if (this.aP.position === 100) {
        this.gameOver = !this.gameOver
        return `${this.aP.name} Wins!`
      }
    } else {
      this.aP.position = this.board[this.aP.position + this.totalRoll] || this.aP.position + this.totalRoll
    }
    return `${this.aP.name} is on square ${this.aP.position}`
  }
}

SnakesLadders.Player = class Player {
  constructor(name) {
    this.name = name
    this.position = 0
    this.turn = false
  }
}

module.exports = { SnakesLadders }
