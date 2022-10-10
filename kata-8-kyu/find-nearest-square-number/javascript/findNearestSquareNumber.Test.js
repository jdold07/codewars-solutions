//+ ====================================================================================================================
//+
//+ 8 kyu - Find Nearest square number  [ ID: 5a805d8cafa10f8b930005ba ] (find-nearest-square-number)
//+ URL: https://www.codewars.com/kata/5a805d8cafa10f8b930005ba
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { nearestSq } = require("./findNearestSquareNumber")

it("Basic tests", () => {
  assert.strictEqual(nearestSq(1), 1)
  assert.strictEqual(nearestSq(2), 1)
  assert.strictEqual(nearestSq(10), 9)
  assert.strictEqual(nearestSq(111), 121)
  assert.strictEqual(nearestSq(9999), 10000)
})

console.log("<COMPLETEDIN::>")

it("Small Random Tests", () => {
  function randSmallTests() {
    for (let i = 0; i < 100; i++) {
      let num = Math.floor(Math.random() * 200000)
      if (num > 1) {
        let sol = Math.pow(Math.round(Math.pow(num, 0.5)), 2)
        assert.strictEqual(nearestSq(num), sol, "It should work for random inputs too")
      }
    }
  }

  randSmallTests()
  console.log("<COMPLETEDIN::>")
})

it("Big Random Tests", () => {
  function randBigTests() {
    //it('Big Random Tests')
    for (let j = 0; j < 1000; j++) {
      let num = Math.floor(Math.random() * 2000000)
      if (num > 499) {
        let sol = Math.pow(Math.round(Math.pow(num, 0.5)), 2)
        assert.strictEqual(nearestSq(num), sol, "It should work for random inputs too")
      }
    }
  }

  randBigTests()
  console.log("<COMPLETEDIN::>")
})
