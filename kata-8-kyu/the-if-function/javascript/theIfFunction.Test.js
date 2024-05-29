//+ ====================================================================================================================
//+
//+ 8 kyu - The 'if' function  [ ID: 54147087d5c2ebe4f1000805 ] (the-if-function)
//+ URL: https://www.codewars.com/kata/54147087d5c2ebe4f1000805
//+ Category: REFERENCE  |  Tags: FUNCTIONAL PROGRAMMING | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { expect } from "vitest"
const { _if } = require("./theIfFunction")

describe("Tests", () => {
  it("test", () => {
    let a,
      b,
      c,
      d,
      e = false

    _if(
      true,
      function () {
        expect(true)
        a = true
      },
      function () {
        expect(false, "Should respond to true correctly")
      }
    )
    _if(
      null,
      function () {
        expect(false, "Should support falsy/truesy values")
      },
      function () {
        expect(true)
        b = true
      }
    )
    _if(
      1,
      function () {
        expect(true)
        c = true
      },
      function () {
        expect(false, "Should support falsy/truesy values")
      }
    )
    _if(
      3 < 4,
      function () {
        expect(true)
        d = true
      },
      function () {
        expect(false, "Should support comparison")
      }
    )
    _if(
      9 % 3 == 0,
      function () {
        expect(true)
        e = true
      },
      function () {
        expect(false, "Should support comparison")
      }
    )

    expect(a && b && c && d && e)
  })
})
