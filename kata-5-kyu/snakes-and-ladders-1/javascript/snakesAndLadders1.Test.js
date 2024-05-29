//+ ====================================================================================================================
//+
//+ 5 kyu - Snakes and Ladders  [ ID: 587136ba2eefcb92a9000027 ] (snakes-and-ladders-1)
//+ URL: https://www.codewars.com/kata/587136ba2eefcb92a9000027
//+ Category: REFERENCE  |  Tags: DESIGN PATTERNS | GAMES | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { SnakesLadders } = require("./snakesAndLadders1")

describe("Tests", () => {
  it("test", () => {
    function SnakesLadders2() {
      this._playerSquare = []
      this._playerSquare[0] = 0
      this._playerSquare[1] = 0
      this._player = 0
      this._won = false
      this._trap = [
        [2, 38],
        [7, 14],
        [8, 31],
        [15, 26],
        [21, 42],
        [28, 84],
        [36, 44],
        [51, 67],
        [71, 91],
        [78, 98],
        [87, 94],
        [16, 6],
        [46, 25],
        [49, 11],
        [62, 19],
        [64, 60],
        [74, 53],
        [89, 68],
        [92, 88],
        [95, 75],
        [99, 80]
      ]
    }

    SnakesLadders2.prototype.play = function (die1, die2) {
      if (this._won) {
        return "Game over!"
      }
      const roll = die1 + die2
      if (roll + this._playerSquare[this._player] <= 100) {
        this._playerSquare[this._player] += roll
        if (this._playerSquare[this._player] === 100) {
          this._won = true
          return "Player " + parseInt(this._player + 1) + " Wins!"
        }
      } else {
        this._playerSquare[this._player] = 100 - (this._playerSquare[this._player] + roll - 100)
      }
      for (let t = 0; t < this._trap.length; t++) {
        if (this._playerSquare[this._player] === this._trap[t][0]) {
          this._playerSquare[this._player] = this._trap[t][1]
        }
      }
      const message = "Player " + parseInt(this._player + 1) + " is on square " + parseInt(this._playerSquare[this._player])
      if (die1 != die2) {
        if (this._player === 0) {
          this._player = 1
        } else {
          this._player = 0
        }
      }
      return message
    }

    for (let i = 1; i < 6; i++) {
      let tgame = new SnakesLadders2()
      let game = new SnakesLadders()
      for (let games = 1; games < 51; games++) {
        const x = Math.floor(Math.random() * 6) + 1
        const y = Math.floor(Math.random() * 6) + 1
        const solution = tgame.play(x, y)
        assert.strictEqual(game.play(x, y), solution, "Should return: " + solution)
      }
    }
  })
})
