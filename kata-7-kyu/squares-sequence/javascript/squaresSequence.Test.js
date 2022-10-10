//+ ====================================================================================================================
//+
//+ 7 kyu - Squares sequence  [ ID: 5546180ca783b6d2d5000062 ] (squares-sequence)
//+ URL: https://www.codewars.com/kata/5546180ca783b6d2d5000062
//+ Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { squares } = require("./squaresSequence")

describe("Test Suite", () => {
  it("Fixed tests", () => {
    assert.deepEqual(squares(2, 5), [2, 4, 16, 256, 65536])
    assert.deepEqual(squares(3, 3), [3, 9, 81])
    assert.deepEqual(squares(5, 3), [5, 25, 625])
    assert.deepEqual(squares(10, 4), [10, 100, 10000, 100000000])
  })

  describe("Random tests", () => {
    const ref = (x, n) => {
      let array = []
      for (let i = 0; i < n; i++) {
        array.push(i ? array[i - 1] * array[i - 1] : x)
      }
      return array
    }

    const rndI = (n) => Math.floor(Math.random() * n)

    for (let i = 100; i--; ) {
      let x = rndI(5)
      let n = rndI(25) - 5

      if (n > 0) {
        while (Math.pow(x, Math.pow(2, n - 1)) >= Number.MAX_SAFE_INTEGER) {
          x = rndI(5)
          n = rndI(20)
        }
      }

      const expected = ref(x, n)
      const actual = squares(x, n)
      it("Testing with (" + x.toString() + "," + n.toString() + ")", () => {
        assert.deepEqual(actual, expected)
      })
    }
  })
})
