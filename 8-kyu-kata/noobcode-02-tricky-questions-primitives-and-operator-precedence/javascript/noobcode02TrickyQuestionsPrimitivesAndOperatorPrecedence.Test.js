// 8 kyu - noobCode 02: TRICKY QUESTIONS ( primitives and operator precedence)  [ ID: 572269697297444c570008b9  (noobcode-02-tricky-questions-primitives-and-operator-precedence) ]
// URL: https://www.codewars.com/kata/572269697297444c570008b9
// Category: GAMES  |  Tags: PUZZLES
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(greaterThanLessThan(1, 2, 3), true)
    Test.assertEquals(greaterThanLessThan(3, 2, 1), true)
    Test.assertEquals(greaterThanLessThan(3, 2, 4), true)
    Test.assertEquals(greaterThanLessThan(Number(null), 0, 1), true)
    Test.assertEquals(greaterThanLessThan(10, 20, 30), true)
    Test.assertEquals(greaterThanLessThan(123456789, 234567899, 34578999), true)
    Test.assertEquals(greaterThanLessThan(700000000001, 700000000002, -1), false)
    Test.assertEquals(greaterThanLessThan(-6, -5, 1), false)
    Test.assertEquals(greaterThanLessThan(6, 5, -6), false)

    function gTLTcheck(a, b, c) {
      return a < b < c
    }

    for (let i = 0; i < 25; i++) {
      let a = Math.round(Math.random() * 10 ** Math.random())
      let b = Math.round(Math.random() * 10 ** Math.random())
      let c = Math.round(Math.random() * 10 ** Math.random())
      Test.assertEquals(greaterThanLessThan(a, b, c), gTLTcheck(a, b, c))
    }
  })
})
