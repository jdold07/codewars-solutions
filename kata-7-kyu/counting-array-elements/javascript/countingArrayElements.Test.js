//+ ====================================================================================================================
//+
//+ 7 kyu - Counting Array Elements  [ ID: 5569b10074fe4a6715000054 ] (counting-array-elements)
//+ URL: https://www.codewars.com/kata/5569b10074fe4a6715000054
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { count } = require("./countingArrayElements")

describe("Basic tests", function () {
  it("Returns an empty hash when the array is empty", function () {
    assert.deepEqual(count([]), {})
  })

  it("Counts a single elements in the array", function () {
    assert.deepEqual(count(["a"]), { a: 1 })
  })

  it("Counts a more complex array", function () {
    assert.deepEqual(count(["a", "a", "b", "b", "b"]), { a: 2, b: 3 })
    assert.deepEqual(count(["a", "b", "b", "b", "a"]), { a: 2, b: 3 })
  })

  it("Counts any elements", function () {
    assert.deepEqual(count(["", "a", true, 15, "b", "b"]), { 15: 1, "": 1, a: 1, true: 1, b: 2 })
  })
})

describe("Random tests", function () {
  const base = ["Ryoma Nagare", "Hayato Jin", "Musashi Tomoe", "Benkei Kurama", "Saotome-agase", "Michiru Saotome"]

  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }

  function solcount(array) {
    const res = {}
    for (let i = 0; i < array.length; i++) {
      res[array[i]] = (res[array[i]] || 0) + 1
    }
    return res
  }
  for (let _ = 0; _ < 40; _++) {
    const arr = []
    const arrlen = randint(0, 25)
    for (let j = 0; j < arrlen; j++) {
      arr.push(base[randint(0, base.length - 1)])
    }
    it("Testing for [" + arr.join(", ") + "]", function () {
      assert.deepEqual(count([].concat(arr)), solcount(arr), "It should work for random inputs too")
    })
  }
})
