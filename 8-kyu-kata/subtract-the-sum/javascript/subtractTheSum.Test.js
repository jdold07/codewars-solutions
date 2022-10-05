// 8 kyu - Subtract the Sum  [ ID: 56c5847f27be2c3db20009c3  (subtract-the-sum) ]
// URL: https://www.codewars.com/kata/56c5847f27be2c3db20009c3
// Category: GAMES  |  Tags: PUZZLES
// *****************************************************************************
describe("Test", function () {
  it("Basic Test", function () {
    Test.assertEquals(SubtractSum(10), "apple")
  })

  it("Random Tests", function () {
    for (let i = 0; i < 100; i++) {
      let m = Math.floor(Math.random() * 9990) + 10
      Test.assertEquals(SubtractSum(m), "apple")
    }
  })
})
