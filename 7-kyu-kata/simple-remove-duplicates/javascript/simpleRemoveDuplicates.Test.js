// 7 kyu - Simple remove duplicates  [ ID: 5ba38ba180824a86850000f7  (simple-remove-duplicates) ]
// URL: https://www.codewars.com/kata/5ba38ba180824a86850000f7
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const { assert, config } = require("chai")
config.truncateThreshold = 0

describe("Simple remove duplicates", () => {
  it("Example tests", () => {
    assert.deepEqual(solve([3, 4, 4, 3, 6, 3]), [4, 6, 3])
    assert.deepEqual(solve([1, 2, 1, 2, 1, 2, 3]), [1, 2, 3])
    assert.deepEqual(solve([1, 2, 3, 4]), [1, 2, 3, 4])
    assert.deepEqual(solve([1, 1, 4, 5, 1, 2, 1]), [4, 5, 2, 1])
    assert.deepEqual(solve([1, 2, 1, 2, 1, 1, 3]), [2, 1, 3])
  })
  it("Random tests", () => {
    const rnd = (m, n = 0) => (Math.random() * (n - m) + m) | 0
    const refSolve = ([...a]) => Array.from(new Set(a.reverse())).reverse()
    for (let i = 0; i < 100; i++) {
      const length = rnd(3 * i, 5 * i)
      const xs = Array.from({ length }, () => rnd(length / 2))
      const expected = refSolve(xs)
      assert.deepEqual(solve(xs), expected)
    }
  })
})
