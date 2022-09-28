import solution from "./Multiples of 3 or 5.js"
import { assert } from "chai"

function test(num: number, expected: number) {
  assert.strictEqual(solution.Challenge.solution(num), expected)
}

function _solution(number: number) {
  let sum = 0
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum = sum + i
    }
  }
  return sum
}

describe("solution", function () {
  it("should handle basic tests", function () {
    test(10, 23)
    test(20, 78)
    test(200, 9168)
  })
  it("should handle the smallest cases", function () {
    test(-1, 0)
    test(0, 0)
    test(1, 0)
    test(2, 0)
    test(3, 0)
    test(4, 3)
    test(5, 3)
    test(6, 8)
  })
  it("should handle random cases", function () {
    for (let i = 0; i < 10; i++) {
      const ran = Math.floor(Math.random() * 200)
      test(ran, _solution(ran))
    }
  })
})
