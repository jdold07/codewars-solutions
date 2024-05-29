//+ ====================================================================================================================
//+
//+ 8 kyu - I love you,  a little ,  a lot,  passionately ... not at all  [ ID: 57f24e6a18e9fad8eb000296 ] (i-love-you-a-little-a-lot-passionately-dot-dot-dot-not-at-all)
//+ URL: https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { howMuchILoveYou } = require("./iLoveYouALittleALotPassionatelyDotDotDotNotAtAll")

describe("howMuchILoveYou", function () {
  it("Basic tests", function () {
    assert.strictEqual(howMuchILoveYou(7), "I love you")
    assert.strictEqual(howMuchILoveYou(3), "a lot")
    assert.strictEqual(howMuchILoveYou(6), "not at all")
    assert.strictEqual(howMuchILoveYou(2), "a little")
    assert.strictEqual(howMuchILoveYou(5), "madly")
  })
})

describe("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }

  function howMuchILoveYouUN(nbPetals) {
    return ["I love you", "a little", "a lot", "passionately", "madly", "not at all"][(nbPetals - 1) % 6] //g
  }

  it("Testing for 100 random tests", () => {
    for (let i = 0; i < 100; i++) {
      let r = randint(100, 500)
      let exp = howMuchILoveYouUN(r)
      assert.strictEqual(howMuchILoveYou(r), exp, `Testing for nbPetals = ${r}`)
    }
  })
})
