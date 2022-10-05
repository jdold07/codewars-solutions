// 8 kyu - Improving Math.round(x)  [ ID: 56be025f9347a066c7000e4f  (improving-math-dot-round-x) ]
// URL: https://www.codewars.com/kata/56be025f9347a066c7000e4f
// Category: REFERENCE  |  Tags: FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING | MATHEMATICS | LOGIC
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
    console.log("<h3>Rounding Math.PI</h3>")
    Test.assertEquals(Math.roundTo(mathpie, 1), 3.1)
    Test.assertEquals(Math.roundTo(mathpie, 2), 3.14)
    Test.assertEquals(Math.roundTo(mathpie, 3), 3.142)
    Test.assertEquals(Math.roundTo(mathpie, 4), 3.1416)
    Test.assertEquals(Math.roundTo(mathpie, 5), 3.14159)
    Test.assertEquals(Math.roundTo(mathpie, 6), 3.141593)
    Test.assertEquals(Math.roundTo(mathpie, 7), 3.1415927)
    Test.assertEquals(Math.roundTo(mathpie, 8), 3.14159265)
    Test.assertEquals(Math.roundTo(mathpie, 9), 3.141592654)
    Test.assertEquals(Math.roundTo(mathpie, 10), 3.1415926536)
    console.log("<hr />")

    console.log("<h3>Rounding Math.E</h3>")
    Test.assertEquals(Math.roundTo(euler, 1), 2.7)
    Test.assertEquals(Math.roundTo(euler, 2), 2.72)
    Test.assertEquals(Math.roundTo(euler, 3), 2.718)
    Test.assertEquals(Math.roundTo(euler, 4), 2.7183)
    Test.assertEquals(Math.roundTo(euler, 5), 2.71828)
    Test.assertEquals(Math.roundTo(euler, 6), 2.718282)
    Test.assertEquals(Math.roundTo(euler, 7), 2.7182818)
    Test.assertEquals(Math.roundTo(euler, 8), 2.71828183)
    Test.assertEquals(Math.roundTo(euler, 9), 2.718281828)
    Test.assertEquals(Math.roundTo(euler, 10), 2.7182818285)
    console.log("<hr />")

    console.log("<h3>Random Tests</h3>")
    function rndto(n, p) {
      return rnd(exponent(10, p) * n) / exponent(10, p)
    }
    for (i = 0; i < 100; i++) {
      var randNum = 1000 * rng()
      var precision = rnd(10 * rng())
      Test.assertEquals(Math.roundTo(randNum, precision), rndto(randNum, precision))
    }
  })
})
