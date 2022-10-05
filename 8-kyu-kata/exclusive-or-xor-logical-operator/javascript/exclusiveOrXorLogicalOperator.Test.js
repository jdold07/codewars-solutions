// 8 kyu - Exclusive "or" (xor) Logical Operator  [ ID: 56fa3c5ce4d45d2a52001b3c  (exclusive-or-xor-logical-operator) ]
// URL: https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Your 'xor' function/operator", () => {
  it("should work for the four basic cases described above", () => {
    Test.assertEquals(xor(false, false), false, "false xor false === false")
    Test.assertEquals(xor(true, false), true, "true xor false === true")
    Test.assertEquals(xor(false, true), true, "false xor true === true")
    Test.assertEquals(xor(true, true), false, "true xor true === false")
    Test.assertNotEquals(xor(true, true), true, "'xor' is NOT identical to 'or'")
  })
  it("should work properly when nested", () => {
    Test.assertEquals(xor(false, xor(false, false)), false)
    Test.assertEquals(xor(xor(true, false), false), true)
    Test.assertEquals(xor(xor(true, true), false), false)
    Test.assertEquals(xor(true, xor(true, true)), true)
    Test.assertEquals(xor(xor(false, false), xor(false, false)), false)
    Test.assertEquals(xor(xor(false, false), xor(false, true)), true)
    Test.assertEquals(xor(xor(true, false), xor(false, false)), true)
    Test.assertEquals(xor(xor(true, false), xor(true, false)), false)
    Test.assertEquals(xor(xor(true, true), xor(true, false)), true)
    Test.assertEquals(xor(xor(true, xor(true, true)), xor(xor(true, true), false)), true)
  })
  it("should work for random tests", () => {
    var a, b
    for (let i = 0; i < 666; i++) {
      a = Test.randomNumber() > 50
      b = Test.randomNumber() > 50
      Test.assertEquals(xor(a, b), (a || b) && !(a && b))
    }
  })
})
