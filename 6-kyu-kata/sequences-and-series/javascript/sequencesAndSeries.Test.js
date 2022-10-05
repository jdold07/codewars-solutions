// 6 kyu - Sequences and Series  [ ID: 5254bd1357d59fbbe90001ec  (sequences-and-series) ]
// URL: https://www.codewars.com/kata/5254bd1357d59fbbe90001ec
// Category: GAMES  |  Tags: MATHEMATICS | ALGORITHMS | PUZZLES
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

function getScoreSolution(n) {
  return n * (n + 1) * 25
}

describe("Real Test", () => {
  it("Example Test", () => {
    assert.strictEqual(getScore(1), 50)
    assert.strictEqual(getScore(2), 150)
    assert.strictEqual(getScore(3), 300)
    assert.strictEqual(getScore(4), 500)
    assert.strictEqual(getScore(5), 750)
  })

  it("Random Tests", () => {
    function random(max, min = 1) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    for (let i = 1; i <= 100; i++) {
      let test = random(i * i)
      assert.strictEqual(getScore(test), getScoreSolution(test))
    }
  })
})
