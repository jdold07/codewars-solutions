//+ ====================================================================================================================
//+
//+ 6 kyu - Convert integer to Whitespace format  [ ID: 55b350026cc02ac1a7000032 ] (convert-integer-to-whitespace-format)
//+ URL: https://www.codewars.com/kata/55b350026cc02ac1a7000032
//+ Category: REFERENCE  |  Tags: BINARY | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { whitespaceNumber } = require("./convertIntegerToWhitespaceFormat")

let unbleach = (ws) => ws.replace(/ /g, "[space]").replace(/\t/g, "[tab]").replace(/\n/g, "[LF]")

const tester894159898546 = (n, expected) => {
  it("Let's try it with " + n + ":", () => {
    let actual = whitespaceNumber(n)
    if (actual.match(/[^ \n\t]/)) {
      throw (
        "Please return only spaces, tabs and newlines. " +
        "Other characters are not allowed.\n" +
        "Tests will convert the allowed characters" +
        "to readable tags for your convenience."
      )
    }
    if (expected === undefined) {
      expected = " \t"[~~(n < 0)] + (n ? Math.abs(n).toString(2).replace(/0/g, " ").replace(/1/g, "\t") : "") + "\n"
    }
    assert.strictEqual(unbleach(actual), unbleach(expected))
  })
}

describe("Example tests", () => {
  let tests = [1, " \t\n", 0, " \n", -1, "\t\t\n", 2, " \t \n", -3, "\t\t\t\n"]
  while (tests.length) {
    tester894159898546(tests.shift(), tests.shift())
  }
})

describe("Random tests", () => {
  for (let i174271 = 1; i174271 < 38; i174271++) {
    let limit = Math.pow(2, i174271)
    tester894159898546(~~(9 - limit / 2 + Math.random() * limit))
  }
})
