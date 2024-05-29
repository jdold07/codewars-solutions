//+ ====================================================================================================================
//+
//+ 8 kyu - Find the position!  [ ID: 5808e2006b65bff35500008f ] (find-the-position)
//+ URL: https://www.codewars.com/kata/5808e2006b65bff35500008f
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { position } = require("./findThePosition")

it("Basic Tests", () => {
  assert.strictEqual(position("a"), "Position of alphabet: 1")
  assert.strictEqual(position("z"), "Position of alphabet: 26")
  assert.strictEqual(position("e"), "Position of alphabet: 5")
})

it("Random Test", () => {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
  for (let i = 0; i < 100; i++) {
    const letter = ALPHABET[Math.floor(Math.random() * 26)]
    assert.strictEqual(position(letter), "Position of alphabet: " + (letter.charCodeAt(0) - 96))
  }
})
