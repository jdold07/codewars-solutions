// 8 kyu - String repeat  [ ID: 57a0e5c372292dd76d000d7e  (string-repeat) ]
// URL: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
// *****************************************************************************
const solution = (n, s) => Array.from({ length: n + 1 }).join(s)

describe("Tests", function () {
  it("Basic tests", function () {
    Test.assertSimilar(repeatStr(3, "*"), "***")
    Test.assertSimilar(repeatStr(5, "#"), "#####")
    Test.assertSimilar(repeatStr(2, "ha "), "ha ha ")
    Test.assertSimilar(repeatStr(5, ">"), ">>>>>")
    Test.assertSimilar(repeatStr(10, "!"), "!!!!!!!!!!")
    Test.assertSimilar(repeatStr(3, "hello "), "hello hello hello ")
    Test.assertSimilar(repeatStr(3, "$"), "$$$")
    Test.assertSimilar(repeatStr(5, "a"), "aaaaa")
    Test.assertSimilar(repeatStr(6, "A"), "AAAAAA")
    Test.assertSimilar(repeatStr(7, "aA"), "aAaAaAaAaAaAaA")
  })
  it("Random tests", function () {
    for (let i = 0; i < 10; i++) {
      let num = Test.randomNumber()
      let s = Test.randomToken()[0]
      Test.assertSimilar(repeatStr(num, s), solution(num, s))
    }
  })
})
