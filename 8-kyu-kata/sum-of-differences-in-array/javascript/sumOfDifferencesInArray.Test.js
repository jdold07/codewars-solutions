// 8 kyu - Sum of differences in array  [ ID: 5b73fe9fb3d9776fbf00009e  (sum-of-differences-in-array) ]
// URL: https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
// Basic tests

describe("sumOfDifferences([1, 2, 10]", function () {
  Test.assertEquals(sumOfDifferences([1, 2, 10]), 9)
})

describe("sumOfDifferences([-3, -2, -1])", function () {
  Test.assertEquals(sumOfDifferences([-3, -2, -1]), 2)
})

describe("sumOfDifferences([1, 1, 1, 1, 1])", function () {
  Test.assertEquals(sumOfDifferences([1, 1, 1, 1, 1]), 0)
})

describe("sumOfDifferences([-17, 17])", function () {
  Test.assertEquals(sumOfDifferences([-17, 17]), 34)
})

describe("sumOfDifferences([])", function () {
  Test.assertEquals(sumOfDifferences([]), 0)
})

describe("sumOfDifferences([0])", function () {
  Test.assertEquals(sumOfDifferences([0]), 0)
})

describe("sumOfDifferences([-1])", function () {
  Test.assertEquals(sumOfDifferences([-1]), 0)
})

describe("sumOfDifferences([1])", function () {
  Test.assertEquals(sumOfDifferences([1]), 0)
})

// Random tests

let randomArray = (n, bound) => Array.from({ length: n }, () => -bound + Math.floor(Math.random() * 2 * bound))
let sumOfDifferencesTest = (arr) => (arr.length == 0 ? 0 : Math.max.apply(null, arr) - Math.min.apply(null, arr))

for (let i = 0; i < 100; i++) {
  let n = Math.floor(Math.random() * 30)
  let bound = Math.floor(Math.random() * 30)
  let randomArr = randomArray(n, bound)

  describe("Test for random array: [" + randomArr + "]", function () {
    Test.assertEquals(sumOfDifferences(randomArr.slice()), sumOfDifferencesTest(randomArr))
  })
}
