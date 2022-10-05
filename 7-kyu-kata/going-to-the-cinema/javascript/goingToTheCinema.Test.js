// 7 kyu - Going to the cinema  [ ID: 562f91ff6a8b77dfe900006e  (going-to-the-cinema) ]
// URL: https://www.codewars.com/kata/562f91ff6a8b77dfe900006e
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const assert = require("chai").assert

describe("Movie", function () {
  it("Basic tests", function () {
    assert.strictEqual(movie(500, 15, 0.9), 43)
    assert.strictEqual(movie(100, 10, 0.95), 24)
    assert.strictEqual(movie(0, 10, 0.95), 2)
    assert.strictEqual(movie(250, 20, 0.9), 21)
    assert.strictEqual(movie(500, 20, 0.9), 34)
    assert.strictEqual(movie(2500, 20, 0.9), 135)
  })
})
describe("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }

  //................
  function movieSol5225(card, ticket, perc) {
    let i = 0
    let sb = card
    let sa = 0
    let prev = ticket
    while (true) {
      i++
      let nou = prev * perc
      sb += nou
      prev = nou
      sa += ticket
      if (Math.ceil(sb) < sa) return i
    }
  }
  //................

  for (let i = 0; i < 100; i++) {
    let card = randint(1000, 1000000)
    let tck = randint(2, 50)
    let perc = randint(2, 50) / 100
    it("Testing Movie: ", function () {
      assert.strictEqual(movie(card, tck, perc), movieSol5225(card, tck, perc))
    })
  }
})
