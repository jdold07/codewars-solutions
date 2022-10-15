//+ ====================================================================================================================
//+
//+ 7 kyu - Get the Middle Character  [ ID: 56747fd5cb988479af000028 ] (get-the-middle-character)
//+ URL: https://www.codewars.com/kata/56747fd5cb988479af000028
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { getMiddle } from "./getTheMiddleCharacter"

function doTest(string: string, expected: string) {
  assert.strictEqual(getMiddle(string), expected)
}

const _getMiddle = function (s: string) {
  const half = s.length / 2
  return s.length % 2 === 0 ? s.slice(half - 1, half + 1) : s[Math.floor(half)]
}

describe("solution", function () {
  it("should handle basic tests", function () {
    doTest("test", "es")
    doTest("testing", "t")
    doTest("middle", "dd")
    doTest("A", "A")
  })
  it("should handle bigger tests", function () {
    doTest("aaaaaaaaaaaeeeeeeeeeeeeyyyyyyyyyyyyyuu", "ee")
    doTest("aaaaaaaaaaafffeeeeeeeeeeeeg", "f")
    doTest("45321096", "21")
    doTest("NiceToMeetYou", "M")
  })
  it("should handle random tests", function () {
    for (let x = 0; x < 10; x++) {
      const length = Math.floor(Math.random() * 20)
      let str = ""
      for (let i = 0; i < length; i++) {
        str += String.fromCharCode(97 + Math.floor(Math.random() * 26))
      }
      const exp = _getMiddle(str)
      doTest(str, exp)
    }
  })
})
