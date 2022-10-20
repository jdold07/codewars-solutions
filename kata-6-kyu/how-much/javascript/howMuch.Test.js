//+ ====================================================================================================================
//+
//+ 6 kyu - How Much?  [ ID: 55b4d87a3766d9873a0000d4 ] (how-much)
//+ URL: https://www.codewars.com/kata/55b4d87a3766d9873a0000d4
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { howMuch } = require("./howMuch")

describe("Testing...", function () {
  it("Basic tests", function () {
    assert.deepEqual(howMuch(1, 100), [
      ["M: 37", "B: 5", "C: 4"],
      ["M: 100", "B: 14", "C: 11"]
    ])
    assert.deepEqual(howMuch(1000, 1100), [["M: 1045", "B: 149", "C: 116"]])
    assert.deepEqual(howMuch(10000, 9950), [["M: 9991", "B: 1427", "C: 1110"]])
    assert.deepEqual(howMuch(0, 200), [
      ["M: 37", "B: 5", "C: 4"],
      ["M: 100", "B: 14", "C: 11"],
      ["M: 163", "B: 23", "C: 18"]
    ])
    assert.deepEqual(howMuch(1500, 1600), [["M: 1549", "B: 221", "C: 172"]])
    assert.deepEqual(howMuch(2950, 2950), [])
    assert.deepEqual(howMuch(20000, 20100), [
      ["M: 20008", "B: 2858", "C: 2223"],
      ["M: 20071", "B: 2867", "C: 2230"]
    ])
  })

  it("Random tests", function () {
    function randint(a, b) {
      return Math.floor(Math.random() * (b - a + 1) + a)
    }
    //-------------------------
    function howMuch1233(m, n) {
      let i = Math.min(m, n)
      let j = Math.max(m, n)
      let res = []
      while (i <= j) {
        if (i % 9 == 1 && i % 7 == 2) {
          res = res.concat([["M: " + i, "B: " + ~~(i / 7), "C: " + ~~(i / 9)]])
        }
        i++
      }
      return res
    }
    //-------------------------
    for (let i = 0; i < 50; i++) {
      let m = randint(60000, 60550)
      let n = randint(60551, 60709)
      assert.deepEqual(howMuch(m, n), howMuch1233(m, n), "It should work with random inputs")
    }
  })
})
