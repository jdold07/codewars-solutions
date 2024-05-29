//+ ====================================================================================================================
//+
//+ 8 kyu - Take an Arrow to the knee, Functionally  [ ID: 559f3123e66a7204f000009f ] (take-an-arrow-to-the-knee-functionally)
//+ URL: https://www.codewars.com/kata/559f3123e66a7204f000009f
//+ Category: REFERENCE  |  Tags: ARRAYS | STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { ArrowFunc } = require("./takeAnArrowToTheKneeFunctionally")

it("Fixed tests", () => {
  assert.strictEqual(ArrowFunc([84, 101, 115, 116]), "Test", "Convert those numbers to letters")
  assert.strictEqual(ArrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72]), "FUS ROH DAH", "Keep it up!")
  assert.strictEqual(
    ArrowFunc([
      73,
      32,
      119,
      97,
      115,
      32,
      97,
      110,
      32,
      97,
      100,
      118,
      101,
      110,
      116,
      117,
      114,
      101,
      114,
      32,
      108,
      105,
      107,
      101,
      32,
      121,
      111,
      117,
      44,
      32,
      117,
      110,
      116,
      105,
      108,
      32,
      73,
      32,
      116,
      111,
      111,
      107,
      32,
      97,
      110,
      32,
      97,
      114,
      114,
      111,
      119,
      32,
      116,
      111,
      32,
      116,
      104,
      101,
      32,
      107,
      110,
      101,
      101
    ]),
    "I was an adventurer like you, until I took an arrow to the knee",
    "Final one, come on!"
  )
})

it("Random tests", () => {
  for (let i3214 = 3; i3214 < 42; i3214++) {
    let codeArr = []
    for (let i987 = i3214; i987 > 0; i987--) {
      codeArr.push(~~(Math.random() * 60 + 64))
    }
    assert.strictEqual(ArrowFunc(codeArr), codeArr.map((a) => String.fromCharCode(a)).join(""))
  }
})
