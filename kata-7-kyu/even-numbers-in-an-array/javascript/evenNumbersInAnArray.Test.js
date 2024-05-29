//+ ====================================================================================================================
//+
//+ 7 kyu - Even numbers in an array  [ ID: 5a431c0de1ce0ec33a00000c ] (even-numbers-in-an-array)
//+ URL: https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { evenNumbers } = require("./evenNumbersInAnArray")

describe("Basic tests", () => {
  it("Should work with basic tests", function () {

  assert.deepEqual(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8])
  assert.deepEqual(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26])
  assert.deepEqual(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6])
})
})

describe("Random Tests", () => {
  const randomInteger = (a, b) => Math.floor(Math.random() * (b - a + 1) + a)

  const check = (array, number) => array.filter((item) => item % 2 === 0).slice(-number)

  const checkUnique = (array, number) => {
    const number2 = number
    for (let i = array.length - 1; number > 0; i--) {
      if (array[i] % 2 === 0) {
        array.push(array[i])
        number--
        i--
      }
    }
    array.splice(0, array.length - number2)
    return array.reverse()
  }

  for (let i = 1; i <= 20; i++) {
    const arrayLength = randomInteger(5, 8)
    const array = []

    for (let i = 1; i <= 3; i++) {
      array.push(2)
      array.push(23)
      array.push(4)
      array.push(-8)
    }

    for (let i = 1; i <= arrayLength; i++) {
      array.push(randomInteger(-20, 20))
    }

    const number = randomInteger(1, 6)

    it(`Test №${i}`, () => {
      let expected = check(array, number)
      let got = evenNumbers(array, number)
      let expectedUnique = checkUnique(array, number)

      assert.deepEqual(got, expected, `It should work for random tests too`)
      assert.notStrictEqual(got, expectedUnique, `You should return a new array`)
    })
  }
})
