//+ ====================================================================================================================
//+
//+ 7 kyu - A Rule of Divisibility by 7  [ ID: 55e6f5e58f7817808e00002e ] (a-rule-of-divisibility-by-7)
//+ URL: https://www.codewars.com/kata/55e6f5e58f7817808e00002e
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { seven } = require("./aRuleOfDivisibilityBy7")

describe("Seven", function () {
  it("Basic tests ", function () {
    assert.deepEqual(seven(1021), [10, 2])
    assert.deepEqual(seven(477557101), [28, 7])
    assert.deepEqual(seven(477557102), [47, 7])
    assert.deepEqual(seven(234002979), [21, 7])
    assert.deepEqual(seven(1603), [7, 2])
    assert.deepEqual(seven(371), [35, 1])
    assert.deepEqual(seven(1369851), [0, 5])
    assert.deepEqual(seven(483), [42, 1])
    assert.deepEqual(seven(483595), [28, 4])
    assert.deepEqual(seven(0), [0, 0])
    assert.deepEqual(seven(286 * 7), [7, 2])
  })
})

describe("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }
  // --------------------
  function sol1378(m) {
    let cnt = 0
    while (m > 99) {
      let a0 = m % 10
      m = ~~((m - a0) / 10) - 2 * a0
      cnt += 1
    }
    return [m, cnt]
  }
  // --------------------
  for (let _ = 0; _ < 100; _++) {
    let n = randint(50, 7500000)
    it("Testing: ", function () {
      assert.deepEqual(seven(n), sol1378(n), "It should work for random tests too")
    })
  }
})
