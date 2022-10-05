// 7 kyu - Sum of all arguments  [ ID: 540c33513b6532cd58000259  (sum-of-all-arguments) ]
// URL: https://www.codewars.com/kata/540c33513b6532cd58000259
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
    function mySolution() {
      let total = 0
      for (let i in arguments) {
        i = arguments[i]
        total += i
      }
      return total
    }

    randArray = function () {
      let res = [Math.floor(51 * Math.random())]
      while (Math.random() < 0.75) res.push(Math.floor(51 * Math.random()))
      return res
    }

    console.log("Simple tests:")
    Test.assertEquals(sum(1), 1)
    Test.assertEquals(sum(1, 2), 3)
    Test.assertEquals(sum(5, 7, 9), 21)
    Test.assertEquals(sum(12, 1, 1, 1, 1), 16)
    Test.assertEquals(sum(12, 1, 1, 1, 1, 1, 1), 18)

    console.log("Random tests:")
    for (let i = 0; i < 10; i++) {
      let curr = randArray()
      Test.assertEquals(mySolution.apply(null, curr), sum.apply(null, curr))
    }
  })
})
