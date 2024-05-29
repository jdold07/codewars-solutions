//+ ====================================================================================================================
//+
//+ 8 kyu - CSV representation of array  [ ID: 5a34af40e1ce0eb1f5000036 ] (csv-representation-of-array)
//+ URL: https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { toCsvText } = require("./csvRepresentationOfArray")

describe("Basic tests", () => {
  it("Should work with basic tests", function () {

  assert.strictEqual(
    toCsvText([
      [0, 1, 2, 3, 45],
      [10, 11, 12, 13, 14],
      [20, 21, 22, 23, 24],
      [30, 31, 32, 33, 34]
    ]),
    "0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34"
  )

  assert.strictEqual(
    toCsvText([
      [-25, 21, 2, -33, 48],
      [30, 31, -32, 33, -34]
    ]),
    "-25,21,2,-33,48\n30,31,-32,33,-34"
  )

  assert.strictEqual(
    toCsvText([
      [5, 55, 5, 5, 55],
      [6, 6, 66, 23, 24],
      [666, 31, 66, 33, 7]
    ]),
    "5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7"
  )
})
})

describe("Random Tests", () => {
  const randomInteger = (a, b) => Math.floor(Math.random() * (b - a + 1) + a)

  const check = (array) => {
    return array.join("\n")
  }

  for (let i = 1; i <= 97; i++) {
    const array = []
    const lengthArray = randomInteger(2, 10)

    for (let i = 1; i <= lengthArray; i++) {
      const element = []
      const lengthElement = randomInteger(2, 10)

      for (let i = 1; i <= lengthElement; i++) {
        element.push(randomInteger(-100, 100))
      }
      array.push(element)
    }

    const expected = check(array)

    it(`Testing №${i + 3}`, () => {
      assert.strictEqual(toCsvText(array), expected, `It should work for random tests too`)
    })
  }
})
