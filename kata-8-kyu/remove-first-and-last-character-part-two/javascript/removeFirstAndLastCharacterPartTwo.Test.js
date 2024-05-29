//+ ====================================================================================================================
//+
//+ 8 kyu - Remove First and Last Character Part Two  [ ID: 570597e258b58f6edc00230d ] (remove-first-and-last-character-part-two)
//+ URL: https://www.codewars.com/kata/570597e258b58f6edc00230d
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS | STRINGS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { array } = require("./removeFirstAndLastCharacterPartTwo")

it("Tests", function () {
  assert.strictEqual(array(""), null)
  assert.strictEqual(array("1"), null)
  assert.strictEqual(array("1, 3"), null)
  assert.strictEqual(array("1,2,3"), "2")
  assert.strictEqual(array("1,2,3,4"), "2 3")
})

const R = (a, b) => a + ~~(Math.random() * (b - a + 1))

function solution(arr) {
  return arr.split(",").slice(1, -1).join(" ") || null
}

it("Random Tests", function () {
  for (let i = 0; i < 200; i++) {
    let a = []
    for (let j = R(1, 10); j; j--) {
      let s = ""
      for (let k = R(1, 3); k; k--) s += "abcdef123456"[R(0, 11)]
      a.push(s)
    }
    let text = a.join(",")
    assert.strictEqual(array(text), solution(text))
  }
})
