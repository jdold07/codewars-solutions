// 7 kyu - Indexed capitalization  [ ID: 59cfc09a86a6fdf6df0000f1  (indexed-capitalization) ]
// URL: https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Basic tests", function () {
  Test.assertDeepEquals(capitalize("abcdef", [1, 2, 5]), "aBCdeF")
  Test.assertDeepEquals(capitalize("abcdef", [1, 2, 5, 100]), "aBCdeF")
  Test.assertDeepEquals(capitalize("codewars", [1, 3, 5, 50]), "cOdEwArs")
  Test.assertDeepEquals(capitalize("abracadabra", [2, 6, 9, 10]), "abRacaDabRA")
  Test.assertDeepEquals(capitalize("codewarriors", [5]), "codewArriors")
  Test.assertDeepEquals(capitalize("indexinglessons", [0]), "Indexinglessons")
})

describe("Random tests", function () {
  let letters = "abcdefghijklmnopqrstuvwxyz"
  for (let i = 0; i < 100; i++) {
    r = Math.floor(Math.random() * 10 + 10)
    if (r > 25) {
      letters += letters
    }
    s = letters.slice(1, r)
    n = Array.from(new Set(Array.from({ length: r }, () => Math.floor(Math.random() * s.length)))).sort()
    Test.assertDeepEquals(capitalize(s, n), capitalizeRT13x(s, n), "It should work for random inputs too")
  }
})

function capitalizeRT13x(s, arr) {
  let st = ""
  for (let i = 0; i < s.length; i++) {
    if (arr.includes(i)) {
      st += s.charAt(i).toUpperCase()
    } else {
      st += s.charAt(i)
    }
  }
  return st
}
