//+ ====================================================================================================================
//+
//+ 7 kyu - Split In Parts  [ ID: 5650ab06d11d675371000003 ] (split-in-parts)
//+ URL: https://www.codewars.com/kata/5650ab06d11d675371000003
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { splitInParts } = require("./splitInParts")

it("Basic Tests", function () {
  assert.strictEqual(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s")
  assert.strictEqual(splitInParts("HelloKata", 1), "H e l l o K a t a")
  assert.strictEqual(splitInParts("HelloKata", 9), "HelloKata")
})

it("Random Tests", function () {
  let randint = (a, b) => Math.floor(Math.random() * (b - a + 1) + a)
  let randchar = () => String.fromCharCode(randint(97, 122))
  let randstring = () => [...Array(randint(1, 500))].map(() => randchar()).join("")
  for (let i = 0; i < 100; i++) {
    let s = randstring()
    let partLength = randint(1, s.length / 7)
    let ans = s.match(RegExp(`.{1,${partLength}}`, "g")).join(" ")
    assert.strictEqual(splitInParts(s, partLength), ans)
  }
})
