//+ ====================================================================================================================
//+
//+ 7 kyu - The old switcheroo 2  [ ID: 55d6a0e4ededb894be000005 ] (the-old-switcheroo-2)
//+ URL: https://www.codewars.com/kata/55d6a0e4ededb894be000005
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { encode } = require("./theOldSwitcheroo2")

it("Initial Tests", () => {
  assert.strictEqual(encode("abc"), "123")
  assert.strictEqual(encode("ABCD"), "1234")
  assert.strictEqual(encode("ZzzzZ"), "2626262626")
  assert.strictEqual(encode("abc-#@5"), "123-#@5")
  assert.strictEqual(
    encode("this is a long string!! Please [encode] @C0RrEctly"),
    "208919 919 1 1215147 1920189147!! 161251195 [51431545] @30181853201225"
  )
})
it("Random Tests", function () {
  if (Math.random == undefined) assert.strictEqual(false, true, "Math Object must contain random Method!")
  if (Math.floor == undefined) assert.strictEqual(false, true, "Math Object must contain floor Method!")
  if (Math.random.toString().indexOf("[native code]") == -1 || Math.random.toString().length != 35)
    assert.strictEqual(false, true, "Math.random method must be Native!")
  if (Math.floor.toString().indexOf("[native code]") == -1 || Math.floor.toString().length != 34)
    assert.strictEqual(false, true, "Math.floor method must be Native!")

  let rand = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  let char = function () {
    return String.fromCharCode(rand(97, 122))
  }
  let times = 100
  let s1
  // let s2

  function sol(str) {
    return str.replace(/[a-z]/gi, (c) => c.charCodeAt(0) - (c.charCodeAt(0) > 96 ? 96 : 64))
  }
  let randomStr = function (length) {
    let arr = []
    for (let i = 0; i <= length; i++) arr.push(rand(1, 100) + char() + rand(1, 100))
    return arr.join("")
  }
  while (--times >= 0) {
    s1 = randomStr(rand(0, 40))
    assert.strictEqual(encode(s1), sol(s1))
  }
})
