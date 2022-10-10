//+ ====================================================================================================================
//+
//+ 7 kyu - Sum of Odd Cubed Numbers  [ ID: 580dda86c40fa6c45f00028a ] (sum-of-odd-cubed-numbers)
//+ URL: https://www.codewars.com/kata/580dda86c40fa6c45f00028a
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | FUNCTIONAL PROGRAMMING | ARRAYS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { cubeOdd } = require("./sumOfOddCubedNumbers")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(cubeOdd([-5, -5, 5, 5]), 0)
    for (let i = 0; i <= 100; i++) {
      let r = []
      for (let j = 0; j <= Math.floor(Math.random() * 8 + 3); j++) {
        if (Math.floor(Math.random() * 20 + 1) == 1) r.push("a")
        else r.push(Math.floor(Math.random() * 61 - 10))
      }
      let myAnswer = solution(r)
      let theirAnswer = cubeOdd(r)
      assert.strictEqual(theirAnswer, myAnswer)
    }

    function solution(arr) {
      let sum = 0
      for (let i = 0; i < arr.length; i++) {
        let cubed = arr[i] * arr[i] * arr[i]
        if (isNaN(cubed)) {
          return undefined
        }
        if (cubed % 2 != 0) {
          sum += cubed
        }
      }
      return sum
    }
  })
})
