//+ ====================================================================================================================
//+
//+ 7 kyu - Longest vowel chain  [ ID: 59c5f4e9d751df43cf000035 ] (longest-vowel-chain)
//+ URL: https://www.codewars.com/kata/59c5f4e9d751df43cf000035
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { solve } = require("./longestVowelChain")

describe("Basic tests", function () {
  it("Test", () => {
    assert.strictEqual(solve("codewarriors"), 2)
    assert.strictEqual(solve("suoidea"), 3)
    assert.strictEqual(solve("ultrarevolutionariees"), 3)
    assert.strictEqual(solve("strengthlessnesses"), 1)
    assert.strictEqual(solve("cuboideonavicuare"), 2)
    assert.strictEqual(solve("chrononhotonthuooaos"), 5)
    assert.strictEqual(solve("iiihoovaeaaaoougjyaw"), 8)
  })
})

describe("Random tests", function () {
  for (let i = 0; i < 100; i++) {
    let r = [1, 2, 3][(Math.random() * 3) | 0]
    let s = randomWord(r) + "z"
    let exp = solve51_Yx(s)
    it(`Testing for "${s}"`, () => {
      assert.strictEqual(solve(s), exp, "It should work for random inputs too")
    })
  }
})

function randomWord(r) {
  let letters = "abcdefghijklmnopqrstuvwxyz"
  let vowels = "aeiou"
  for (let i = 0; i < r; i++) {
    vowels += vowels
    letters += letters
  }
  return (vowels + letters)
    .split("")
    .sort(function () {
      return 0.5 - Math.random()
    })
    .join("")
}
function solve51_Yx(s) {
  let maxi = 0
  let count = 0
  let vowels = "aeiou"
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s.charAt(i))) {
      count++
    } else {
      if (count > maxi) {
        maxi = count
      }
      count = 0
    }
  }
  return maxi
}
