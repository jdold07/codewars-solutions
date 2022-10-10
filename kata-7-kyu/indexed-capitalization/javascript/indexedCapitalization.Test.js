//+ ====================================================================================================================
//+
//+ 7 kyu - Indexed capitalization  [ ID: 59cfc09a86a6fdf6df0000f1 ] (indexed-capitalization)
//+ URL: https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { capitalize } = require("./indexedCapitalization")

it("Basic tests", function () {
  assert.deepEqual(capitalize("abcdef", [1, 2, 5]), "aBCdeF")
  assert.deepEqual(capitalize("abcdef", [1, 2, 5, 100]), "aBCdeF")
  assert.deepEqual(capitalize("codewars", [1, 3, 5, 50]), "cOdEwArs")
  assert.deepEqual(capitalize("abracadabra", [2, 6, 9, 10]), "abRacaDabRA")
  assert.deepEqual(capitalize("codewarriors", [5]), "codewArriors")
  assert.deepEqual(capitalize("indexinglessons", [0]), "Indexinglessons")
})

it("Random tests", function () {
  let letters = "abcdefghijklmnopqrstuvwxyz"
  for (let i = 0; i < 100; i++) {
    const r = Math.floor(Math.random() * 10 + 10)
    if (r > 25) {
      letters += letters
    }
    const s = letters.slice(1, r)
    const n = Array.from(new Set(Array.from({ length: r }, () => Math.floor(Math.random() * s.length)))).sort()
    assert.deepEqual(capitalize(s, n), capitalizeRT13x(s, n), "It should work for random inputs too")
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
