// 8 kyu - My head is at the wrong end!  [ ID: 56f699cd9400f5b7d8000b55  (my-head-is-at-the-wrong-end) ]
// URL: https://www.codewars.com/kata/56f699cd9400f5b7d8000b55
// Category: ALGORITHMS  |  Tags: ARRAYS | LISTS | ALGORITHMS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"])
    assert.deepEqual(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"])
    assert.deepEqual(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"])
    assert.deepEqual(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"])
    assert.deepEqual(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"])
  })
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a)

  const sol = (arr) => arr.reverse()

  const base = [
    "Kenshiro",
    "Raoh",
    "Kaiou",
    "Toki",
    "Hyo",
    "Jagi",
    "Han",
    "Souther",
    "Falco",
    "Rei",
    "Shoki",
    "Juda",
    "Taiga",
    "Shin",
    "Boltz",
    "Shin",
    "Soria"
  ]

  Array.prototype.shuffle = function () {
    let i = this.length,
      j,
      k
    for (; i; ) {
      j = ~~(Math.random() * this.length)
      k = this[--i]
      this[i] = this[j]
      this[j] = k
    }
    return this
  }

  it("Testing for 40 random tests", () => {
    for (let i = 0; i < 40; i++) {
      let arr = base.shuffle().slice(0, 3)
      assert.deepEqual(fixTheMeerkat(arr.slice()), sol(arr), `Testing for ${JSON.stringify(arr)}`)
    }
  })
})
