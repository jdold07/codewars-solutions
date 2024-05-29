//+ ====================================================================================================================
//+
//+ 8 kyu - Add Length  [ ID: 559d2284b5bb6799e9000047 ] (add-length)
//+ URL: https://www.codewars.com/kata/559d2284b5bb6799e9000047
//+ Category: REFERENCE  |  Tags: ARRAYS | LISTS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { addLength } = require("./addLength")

it("Basic tests", function () {
  assert.deepEqual(addLength("apple ban"), ["apple 5", "ban 3"])
  assert.deepEqual(addLength("you will win"), ["you 3", "will 4", "win 3"])
  assert.deepEqual(addLength("you"), ["you 3"])
  assert.deepEqual(addLength("y"), ["y 1"])
  assert.deepEqual(addLength("x y z"), ["x 1", "y 1", "z 1"])
  assert.deepEqual(addLength("xyz"), ["xyz 3"])
  assert.deepEqual(addLength("xyz x y z xyz"), ["xyz 3", "x 1", "y 1", "z 1", "xyz 3"])
  assert.deepEqual(addLength("a bc cde"), ["a 1", "bc 2", "cde 3"])
  assert.deepEqual(addLength("a ab abc"), ["a 1", "ab 2", "abc 3"])
  assert.deepEqual(addLength("a ab abc ab a"), ["a 1", "ab 2", "abc 3", "ab 2", "a 1"])
})

describe("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }
  const base = "    abcdefghijklmnopqrstuvwxyz    ABCDEFGHIJKLMNOPQRSTUVWXYZ    "
  function add_sol(str) {
    return str.split(" ").map(function (a) {
      return [a, a.length].join(" ")
    })
  }

  for (let _ = 0; _ < 40; _++) {
    let s = [],
      len = randint(1, 60)
    for (let j = 0; j < len; j++) {
      s.push(base[randint(0, base.length - 1)])
    }
    s = s
      .join("")
      .trim()
      .replace(/\s{2,100}/g, " ")
    if (s == "") s = "CodeWars"
    it("Testing for " + JSON.stringify(s), function () {
      assert.deepEqual(addLength(s), add_sol(s), "It should work for random inputs too")
    })
  }
})
