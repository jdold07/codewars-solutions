//+ ====================================================================================================================
//+
//+ 8 kyu - Price of Mangoes  [ ID: 57a77726bb9944d000000b06 ] (price-of-mangoes)
//+ URL: https://www.codewars.com/kata/57a77726bb9944d000000b06
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { mango } = require("./priceOfMangoes")

it("Tests", () => {
  assert.strictEqual(mango(3, 3), 6)
  assert.strictEqual(mango(9, 5), 30)
  assert.strictEqual(mango(2, 3), 6)
  assert.strictEqual(mango(7, 3), 15)
  assert.strictEqual(mango(31, 11), 231)
  assert.strictEqual(mango(14, 2), 20)
})

it("Random Tests:", function () {
  function mangoCheck(quantity, price) {
    return ~~(quantity / 3) * 2 * price + (quantity % 3) * price
  }
  for (let i = 1; i < 100; i++) {
    let q1 = Math.floor(Math.random() * 100 + 1)
    let p1 = Math.floor(Math.random() * 100 + 1)
    assert.strictEqual(mango(q1, p1), mangoCheck(q1, p1))
  }
})
