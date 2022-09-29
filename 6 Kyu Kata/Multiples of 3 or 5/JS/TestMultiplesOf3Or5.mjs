import { assert } from "chai"
import { describe, it } from "mocha"
import solution from "./MultiplesOf3Or5"

function test(n, expected) {
  it(`n=${n}`, () => {
    let actual = solution(n)
    assert.strictEqual(actual, expected)
  })
}

describe("basic tests", function () {
  test(10, 23)
  test(20, 78)
  test(200, 9168)
})

describe("smallest cases", function () {
  test(-1, 0)
  test(0, 0)
  test(1, 0)
  test(2, 0)
  test(3, 0)
  test(4, 3)
  test(5, 3)
  test(6, 8)
})

describe("random cases", function () {
  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function _solution(number) {
    let sum = 0

    for (let i = 1; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i
      }
    }
    return sum
  }

  for (let i = 0; i < 100; i++) {
    let rand = randInt(0, 10 ** randInt(1, 5)) - 100
    test(rand, _solution(rand))
  }
})
