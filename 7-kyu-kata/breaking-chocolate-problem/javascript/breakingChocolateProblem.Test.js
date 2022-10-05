// 7 kyu - Breaking chocolate problem  [ ID: 534ea96ebb17181947000ada  (breaking-chocolate-problem) ]
// URL: https://www.codewars.com/kata/534ea96ebb17181947000ada
// Category: ALGORITHMS  |  Tags: ALGORITHMS
// *****************************************************************************
describe("Breaking chocolate", () => {
  it("Fixed tests", () => {
    Test.assertEquals(breakChocolate(5, 5), 24)
    Test.assertEquals(breakChocolate(7, 4), 27)
    Test.assertEquals(breakChocolate(1, 1), 0)
    Test.assertEquals(breakChocolate(0, 0), 0, "What If I Told You There is No Chocolate?")
    Test.assertEquals(breakChocolate(6, 1), 5)
  })
  it("Random tests", () => {
    const rnd = (n) => Math.floor(Math.random() * n)
    const refBreakChocolate = (m, n) => Math.max(0, m * n - 1)
    for (let i = 100; i--; ) {
      const m = rnd(100),
        n = rnd(100)
      Test.assertEquals(breakChocolate(m, 0), 0)
      Test.assertEquals(breakChocolate(0, n), 0)
      Test.assertEquals(breakChocolate(m, n), refBreakChocolate(m, n))
    }
  })
})
