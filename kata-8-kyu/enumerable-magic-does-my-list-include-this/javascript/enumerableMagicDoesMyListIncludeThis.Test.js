//+ ====================================================================================================================
//+
//+ 8 kyu - Enumerable Magic - Does My List Include This?  [ ID: 545991b4cbae2a5fda000158 ] (enumerable-magic-does-my-list-include-this)
//+ URL: https://www.codewars.com/kata/545991b4cbae2a5fda000158
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { include } = require("./enumerableMagicDoesMyListIncludeThis")

it("include ?", function () {
  let list = [0, 1, 2, 3, 5, 8, 13, 2, 2, 2, 11]

  assert.strictEqual(include(list, 13), true, "list includes 13")
  assert.strictEqual(include(list, 0), true, "list includes 0")
  assert.strictEqual(include(list, 100), false, "list does not include 100")
  assert.strictEqual(include(list, 2), true, "list includes 2 multiple times")
  assert.strictEqual(include(list, 11), true, "list includes 11")
  assert.strictEqual(include(list, "2"), false, "list includes 2 (integer), not ''2'' (string)")

  assert.strictEqual(include([], 0), false, "empty list doesn't include anything")
})
