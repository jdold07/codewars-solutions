//+ ====================================================================================================================
//+
//+ 8 kyu - Sum Mixed Array  [ ID: 57eaeb9578748ff92a000009 ] (sum-mixed-array)
//+ URL: https://www.codewars.com/kata/57eaeb9578748ff92a000009
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
//+
//+ ====================================================================================================================


const { assert } = require("chai")
const { sumMix } = require("./sumMixedArray")





describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(sumMix([9, 3, "7", "3"]), 22)
    assert.strictEqual(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 42)
    assert.strictEqual(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 41)
    assert.strictEqual(sumMix(["1", "5", "8", 8, 9, 9, 2, "3"]), 45)
    assert.strictEqual(sumMix([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7]), 61)
  })
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a

  function mysumMix(x) {
    return x.map((x) => Number(x)).reduce((a, b) => a + b)
  }

  let names = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 1, 2, 3, 4, 5, 6, 7, 8, 9]

  it("Testing for 100 random tests", () => {
    for (let i = 0; i < 100; i++) {
      let x = [],
        len = randint(1, 30)
      for (let k = 0; k < len; k++) x.push(names[randint(0, names.length - 1)])
      assert.strictEqual(sumMix(x.slice()), mysumMix(x.slice()), `Testing for ${x}`)
    }
  })
})


