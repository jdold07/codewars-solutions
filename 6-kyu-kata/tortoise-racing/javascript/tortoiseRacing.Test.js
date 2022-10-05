// 6 kyu - Tortoise racing  [ ID: 55e2adece53b4cdcb900006c  (tortoise-racing) ]
// URL: https://www.codewars.com/kata/55e2adece53b4cdcb900006c
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS | ALGORITHMS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Tortoise Racing", function () {
  it("Basic tests ", function () {
    assert.deepEqual(race(720, 850, 70), [0, 32, 18])
    assert.deepEqual(race(80, 91, 37), [3, 21, 49])
    assert.deepEqual(race(80, 100, 40), [2, 0, 0])
    assert.deepEqual(race(720, 850, 37), [0, 17, 4])
    assert.deepEqual(race(720, 850, 370), [2, 50, 46])
    assert.deepEqual(race(120, 850, 37), [0, 3, 2])
    assert.deepEqual(race(820, 850, 550), [18, 20, 0])
    assert.deepEqual(race(820, 81, 550), null)
  })
})

describe("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }
  // --------------------
  function sol1378(v1, v2, g) {
    let d = v2 - v1
    if (d <= 0) return null
    let h = ~~(g / d)
    let r = g % d
    let mn = ~~((r * 60) / d)
    let s = ~~((((r * 60) % d) * 60) / d)
    return [h, mn, s]
  }
  // --------------------
  for (let _ = 0; _ < 50; _++) {
    let v1 = randint(50, 750)
    let v2 = randint(v1 + 20, 850)
    let g = randint(60, 150)
    it("Testing: ", function () {
      assert.deepEqual(race(v1, v2, g), sol1378(v1, v2, g), "It should work for random tests too")
    })
  }
})
