//+ ====================================================================================================================
//+
//+ 8 kyu - Are arrow functions odd?  [ ID: 559f80b87fa8512e3e0000f5 ] (are-arrow-functions-odd)
//+ URL: https://www.codewars.com/kata/559f80b87fa8512e3e0000f5
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { odds } = require("./areArrowFunctionsOdd")

it("Should handle basic arrays", function () {
  assert.deepEqual(odds([]), [], "Should handle empty array")
  assert.deepEqual(odds([2, 4, 6]), [], "Should handle array with even numbers only")
  assert.deepEqual(odds([1, 3, 5]), [1, 3, 5], "Should handle array with odd numbers only")
  assert.deepEqual(odds([1, 2, 3, 4, 5, 6]), [1, 3, 5], "Should handle mixed array")
})

it("Should handle random arrays", function () {
  function testOdds(values) {
    return values.filter((elem) => elem % 2)
  }
  for (let testCount = 0; testCount < 5; testCount++) {
    let array = []
    for (let index = 0; index < Math.ceil(Math.random() * 100); index++) {
      array.push(Math.ceil(Math.random() * 100))
    }
    assert.deepEqual(odds(array), testOdds(array), "Should handle random array")
  }
})
