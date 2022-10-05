// 8 kyu - Return Negative  [ ID: 55685cd7ad70877c23000102  (return-negative) ]
// URL: https://www.codewars.com/kata/55685cd7ad70877c23000102
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(makeNegative(42), -42)
    Test.assertEquals(makeNegative(-9), -9)
    Test.assertEquals(makeNegative(0), 0)
    Test.assertEquals(makeNegative(1), -1)
    Test.assertEquals(makeNegative(-1), -1)

    Test.assertEquals(makeNegative(0.12), -0.12)
    Test.assertEquals(makeNegative(0.00001), -0.00001)
    Test.assertEquals(makeNegative(-0.00001), -0.00001)

    var rnd = Math.floor(Math.random() * 101)
    Test.assertEquals(makeNegative(rnd), -rnd)

    rnd = -Math.floor(Math.random() * 101)
    Test.assertEquals(makeNegative(rnd), rnd)
  })
})
