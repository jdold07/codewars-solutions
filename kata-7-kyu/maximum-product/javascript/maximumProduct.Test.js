//+ ====================================================================================================================
//+
//+ 7 kyu - Maximum Product   [ ID: 5a4138acf28b82aa43000117 ] (maximum-product)
//+ URL: https://www.codewars.com/kata/5a4138acf28b82aa43000117
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { adjacentElementsProduct } = require("./maximumProduct")

it("Fixed tests", function () {
  assert.strictEqual(adjacentElementsProduct([5, 8]), 40)
  assert.strictEqual(adjacentElementsProduct([1, 2, 3]), 6)
  assert.strictEqual(adjacentElementsProduct([1, 5, 10, 9]), 90)
  assert.strictEqual(adjacentElementsProduct([4, 12, 3, 1, 5]), 48)
  assert.strictEqual(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6)
  assert.strictEqual(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21)
  assert.strictEqual(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50)
  assert.strictEqual(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30)
  assert.strictEqual(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]), -14)
  assert.strictEqual(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6)
  assert.strictEqual(adjacentElementsProduct([1, 0, 1, 0, 1000]), 0)
  assert.strictEqual(adjacentElementsProduct([1, 2, 3, 0]), 6)
})

function solution(array) {
  let r = array[0] * array[1]
  for (let i = 1; i < array.length - 1; i++) {
    const x = array[i] * array[i + 1]
    if (x > r) r = x
  }
  return r
}

it("Random tests", function () {
  for (let i = 0; i < 300; i++) {
    let a = []
    let max = Math.floor(Math.random() * 49) + 2
    for (let j = 0; j < max; j++) a.push(Math.floor(Math.random() * 2001) - 1000)
    let result = solution(a)
    assert.strictEqual(adjacentElementsProduct(a), result)
  }
})
