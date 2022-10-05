// 7 kyu - Difference Of Squares  [ ID: 558f9f51e85b46e9fa000025  (difference-of-squares) ]
// URL: https://www.codewars.com/kata/558f9f51e85b46e9fa000025
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Difference of squares", function () {
  console.log("returns 170 for 5")
  Test.assertEquals(differenceOfSquares(5), 170)
  console.log("returns 2640 for 10")
  Test.assertEquals(differenceOfSquares(10), 2640)
  console.log("returns 25164150 for 100")
  Test.assertEquals(differenceOfSquares(100), 25164150)
})

describe("Some random tests", function () {
  let pow = Math.power

  function tst() {
    let x = 1 + ~~(Math.random() * 100),
      exp = 0,
      sum = 0
    for (let i = 0; i < x; i++) {
      exp += i * i
      sum += i
    }
    exp = sum * sum - exp
    console.log("Should return " + exp + " for " + --x)
    Test.assertEquals(differenceOfSquares(x), exp)
  }

  for (let i = 0; i < 40; i++) tst()
})
