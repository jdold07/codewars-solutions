// 7 kyu - lucky number  [ ID: 55afed09237df73343000042  (lucky-number) ]
// URL: https://www.codewars.com/kata/55afed09237df73343000042
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
describe("Testing if number is lucky", function () {
  it("Basic testing", function () {
    Test.assertEquals(isLucky(1892376), true, "Wrong result for 1892376")
    Test.assertEquals(isLucky(189237), false, "Wrong result for 189237")
    Test.assertEquals(isLucky(1098), true, "Wrong result for 1098")
    Test.assertEquals(isLucky(22869), true, "Wrong result for 22869")
    Test.assertEquals(isLucky(0), true, "Wrong result for 0")
  })
  it("Random testing", function () {
    for (let i = 0; i < 100; i++) {
      let n = Math.floor(Math.random() * 1000000)
      Test.assertEquals(isLucky(n), n % 9 === 0, `Wrong result for ${n}`)
    }
  })
})
