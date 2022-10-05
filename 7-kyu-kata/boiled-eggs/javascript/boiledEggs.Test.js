// 7 kyu - Boiled Eggs  [ ID: 52b5247074ea613a09000164  (boiled-eggs) ]
// URL: https://www.codewars.com/kata/52b5247074ea613a09000164
// Category: ALGORITHMS  |  Tags: MATHEMATICS | ALGORITHMS
// *****************************************************************************
const { assert } = require("chai")

describe("Boiled Eggs", function () {
  it("should calculate the cooking time", function () {
    assert.strictEqual(cookingTime(0), 0, "0 eggs")
    assert.strictEqual(cookingTime(1), 5, "1 egg")
    assert.strictEqual(cookingTime(5), 5, "5 eggs")
    assert.strictEqual(cookingTime(8), 5, "8 eggs")
    assert.strictEqual(cookingTime(9), 10, "9 eggs")
    assert.strictEqual(cookingTime(10), 10, "10 eggs")
    assert.strictEqual(cookingTime(16), 10, "16 eggs")
    assert.strictEqual(cookingTime(20), 15, "20 eggs")
    assert.strictEqual(cookingTime(100), 65, "100 eggs")
  })
})

describe("Random tests", () => {
  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  for (let i = 0; i < 100; i++) {
    let n = randint(0, 10 ** randint(1, 5))
    let expected = 5 * Math.ceil(n / 8)
    it(`cookingTime(${n}) should equal ${expected}`, () => {
      assert.strictEqual(cookingTime(n), expected)
    })
  }
})
