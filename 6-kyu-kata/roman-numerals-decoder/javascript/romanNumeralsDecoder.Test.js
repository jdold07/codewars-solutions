// 6 kyu - Roman Numerals Decoder  [ ID: 51b6249c4612257ac0000005  (roman-numerals-decoder) ]
// URL: https://www.codewars.com/kata/51b6249c4612257ac0000005
// Category: ALGORITHMS  |  Tags: ALGORITHMS
// *****************************************************************************
const strictEqual = require("chai").assert.strictEqual

function doTest(romanString, expected) {
  const actual = solution(romanString)
  strictEqual(actual, expected, `for roman number ${romanString}`)
}

describe("Tests", () => {
  it("sample tests", () => {
    doTest("XXI", 21)
    doTest("I", 1)
    doTest("IV", 4)
    doTest("MMVIII", 2008)
    doTest("MDCLXVI", 1666)
  })

  const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const MIN_ROMAN = 1,
    MAX_ROMAN = 3999

  function toRoman(number) {
    const NUMBERS = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1]
    ]
    let romanString = ""

    for (let i = 0; number > 0 && i < NUMBERS.length; i++) {
      while (number >= NUMBERS[i][1]) {
        romanString += NUMBERS[i][0]
        number -= NUMBERS[i][1]
      }
    }
    return romanString
  }

  it("random tests", () => {
    for (let i = 0; i < 100; i++) {
      const number = randInt(MIN_ROMAN, MAX_ROMAN)
      const romanString = toRoman(number)
      doTest(romanString, number)
    }
  })
})
