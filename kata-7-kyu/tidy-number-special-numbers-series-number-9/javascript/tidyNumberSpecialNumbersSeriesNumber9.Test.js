//+ ====================================================================================================================
//+
//+ 7 kyu - Tidy Number (Special Numbers Series  #9)  [ ID: 5a87449ab1710171300000fd ] (tidy-number-special-numbers-series-number-9)
//+ URL: https://www.codewars.com/kata/5a87449ab1710171300000fd
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS | STRINGS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { tidyNumber } = require("./tidyNumberSpecialNumbersSeriesNumber9")

describe("Basic tests", () => {
  assert.strictEqual(tidyNumber(12), true)
  assert.strictEqual(tidyNumber(102), false)
  assert.strictEqual(tidyNumber(9672), false)
  assert.strictEqual(tidyNumber(2789), true)
  assert.strictEqual(tidyNumber(2335), true)
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a)
  const sol = (n, l = 9) => !n || ((k) => k <= l && sol(~~(n / 10), k))(n % 10)

  for (let i = 0; i < 40; i++) {
    const n = randint(0, 1)
      ? +[...(randint(1, Math.pow(10, randint(1, 9))) + "")].sort().join("")
      : randint(1, Math.pow(10, randint(1, 9)))
    it(`Testing for ${n}`, () => {
      assert.strictEqual(tidyNumber(n), sol(n), "It should work for random inputs too")
    })
  }
})
