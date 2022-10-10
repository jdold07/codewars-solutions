//+ ====================================================================================================================
//+
//+ 7 kyu - Currying functions: multiply all elements in an array  [ ID: 586909e4c66d18dd1800009b ] (currying-functions-multiply-all-elements-in-an-array)
//+ URL: https://www.codewars.com/kata/586909e4c66d18dd1800009b
//+ Category: REFERENCE  |  Tags: FUNCTIONAL PROGRAMMING | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert, expect } = require("chai")
const { multiplyAll } = require("./curryingFunctionsMultiplyAllElementsInAnArray")

const mySolution = (array) => (n) => array.map((e) => e * n)

it("must return an array", function () {
  expect(Array.isArray(multiplyAll([1])(1)))
})

it("array has correct length", function () {
  expect(multiplyAll([1, 2])(1).length === 2, "array should have the same length as the array passed in as an argument")
})

it("returned array has correct values", function () {
  assert.deepEqual(multiplyAll([1, 2, 3])(1), [1, 2, 3])
  assert.deepEqual(multiplyAll([1, 2, 3])(2), [2, 4, 6])
  assert.deepEqual(multiplyAll([1, 2, 3])(0), [0, 0, 0])
  assert.deepEqual(multiplyAll([])(10), [], "should return an empty array")
})

// random tests
const randomArray = () => {
  let l = Math.floor(Math.random() * 10)
  let arr = Array(l)
    .fill(0)
    .map(() => Math.floor(Math.random() * 100))
  return arr
}

const randomInteger = () => Math.floor(Math.random() * 100)

it("random tests", function () {
  for (let i = 0; i < 20; i++) {
    let a = randomArray()
    let n = randomInteger()
    assert.deepEqual(multiplyAll(a.slice())(n), mySolution(a)(n))
  }
})
