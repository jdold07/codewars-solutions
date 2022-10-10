//+ ====================================================================================================================
//+
//+ 7 kyu - Evens times last  [ ID: 5a1a9e5032b8b98477000004 ] (evens-times-last)
//+ URL: https://www.codewars.com/kata/5a1a9e5032b8b98477000004
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { evenLast } = require("./evensTimesLast")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(evenLast([2, 2, 2, 2]), 8)
    assert.notStrictEqual(evenLast([]), 2)
    assert.strictEqual(evenLast([]), 0)
    assert.strictEqual(evenLast([1, 3, 3, 1, 10]), 140)
    assert.notStrictEqual(evenLast([1, 3, 3, 1, 10]), 150)
    assert.notStrictEqual(evenLast([-11, 3, 3, 1, 10]), 150)
    assert.strictEqual(evenLast([2, 3, 4, 5]), 30)

    function myEvenLast(numbers) {
      let total = 0
      if (numbers.length == 0) return total
      for (let i = 0; i < numbers.length; i += 2) total += numbers[i]
      return total * numbers.pop()
    }

    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max + 1 - min) + min)
    }

    for (let i = 0; i < 50; i++) {
      let a = getRandomNumber(0, 100)
      let b = getRandomNumber(0, 100)
      let c = getRandomNumber(0, 100)
      let d = getRandomNumber(0, 100)
      let e = getRandomNumber(0, 100)
      assert.strictEqual(evenLast([a, b, c, d, e]), myEvenLast([a, b, c, d, e]))
    }
  })
})
