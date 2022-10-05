// 7 kyu - Extra Perfect Numbers (Special Numbers Series  #7)  [ ID: 5a662a02e626c54e87000123  (extra-perfect-numbers-special-numbers-series-number-7) ]
// URL: https://www.codewars.com/kata/5a662a02e626c54e87000123
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
import { assert } from "chai"
import { extraPerfect } from "./solution"

describe("Basic tests", () => {
  it("Testing for 3", () => assert.deepEqual(extraPerfect(3), [1, 3]))
  it("Testing for 5", () => assert.deepEqual(extraPerfect(5), [1, 3, 5]))
  it("Testing for 7", () => assert.deepEqual(extraPerfect(7), [1, 3, 5, 7]))
  it("Testing for 28", () => assert.deepEqual(extraPerfect(28), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]))
  it("Testing for 39", () =>
    assert.deepEqual(extraPerfect(39), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]))
})

describe("Random tests", () => {
  const randint = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min
  const sol = (n: number) => Array.from({ length: n }, (_, i) => i + 1).filter((item) => item % 2 !== 0)

  for (let i = 0; i < 100; i++) {
    const n = randint(1, Math.pow(10, randint(1, 2)))
    it(`Testing for ${n}`, () => {
      assert.deepEqual(extraPerfect(n), sol(n))
    })
  }
})
