// 8 kyu - Are arrow functions odd?  [ ID: 559f80b87fa8512e3e0000f5  (are-arrow-functions-odd) ]
// URL: https://www.codewars.com/kata/559f80b87fa8512e3e0000f5
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Should handle basic arrays", function () {
  Test.assertSimilar(odds([]), [], "Should handle empty array")
  Test.assertSimilar(odds([2, 4, 6]), [], "Should handle array with even numbers only")
  Test.assertSimilar(odds([1, 3, 5]), [1, 3, 5], "Should handle array with odd numbers only")
  Test.assertSimilar(odds([1, 2, 3, 4, 5, 6]), [1, 3, 5], "Should handle mixed array")
})

describe("Should handle random arrays", function () {
  function testOdds(values) {
    return values.filter((elem) => elem % 2)
  }
  for (let testCount = 0; testCount < 5; testCount++) {
    let array = []
    for (let index = 0; index < Math.ceil(Math.random() * 100); index++) {
      array.push(Math.ceil(Math.random() * 100))
    }
    Test.assertSimilar(odds(array), testOdds(array), "Should handle random array")
  }
})
