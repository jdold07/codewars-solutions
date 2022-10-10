//+ ====================================================================================================================
//+
//+ 8 kyu - Rock Paper Scissors!  [ ID: 5672a98bdbdd995fad00000f ] (rock-paper-scissors)
//+ URL: https://www.codewars.com/kata/5672a98bdbdd995fad00000f
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================


const { assert } = require("chai")
const { rps } = require("./rockPaperScissors")

describe("rock paper scissors", function () {
  const getMsg = (n) => `Player ${n} won!`

  const solution = (p1, p2) => {
    const winMap = {
      rock: "scissors",
      scissors: "paper",
      paper: "rock"
    }
    let v = winMap[p1] === p2 ? 1 : 2
    return p1 === p2 ? "Draw!" : `Player ${v} won!`
  }

  it("player 1 win", function () {
    assert.strictEqual(rps("rock", "scissors"), getMsg(1))
    assert.strictEqual(rps("scissors", "paper"), getMsg(1))
    assert.strictEqual(rps("paper", "rock"), getMsg(1))
  })

  it("player 2 win", function () {
    assert.strictEqual(rps("scissors", "rock"), getMsg(2))
    assert.strictEqual(rps("paper", "scissors"), getMsg(2))
    assert.strictEqual(rps("rock", "paper"), getMsg(2))
  })

  it("draw", function () {
    assert.strictEqual(rps("rock", "rock"), "Draw!")
    assert.strictEqual(rps("scissors", "scissors"), "Draw!")
    assert.strictEqual(rps("paper", "paper"), "Draw!")
  })

  it("random", function () {
    const options = ["rock", "paper", "scissors"]

    for (let i = 0; i < 50; ++i) {
      let rnd1 = options[~~(Math.random() * 3)]
      let rnd2 = options[~~(Math.random() * 3)]
      assert.strictEqual(rps(rnd1, rnd2), solution(rnd1, rnd2))
    }
  })
})


