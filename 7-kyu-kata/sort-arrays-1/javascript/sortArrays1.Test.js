// 7 kyu - Sort arrays - 1  [ ID: 51f41b98e8f176e70d0002a8  (sort-arrays-1) ]
// URL: https://www.codewars.com/kata/51f41b98e8f176e70d0002a8
// Category: REFERENCE  |  Tags: SORTING | ARRAYS | FUNDAMENTALS
// *****************************************************************************
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(sortme(["one", "two", "three"]), ["one", "three", "two"])
  })
})

describe("Random tests", () => {
  const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  for (let i = 0; i < 100; i++) {
    let arr = Array.from(
      { length: randint(3, 6) },
      (_, i) => Array.from({ length: randint(4, 10) }, (_, i) => s[randint(0, s.length - 1)]).join``
    )
    let expected = arr.sort()
    it(`sortme(${JSON.stringify(arr)}) should equal ${JSON.stringify(expected)}`, () => {
      assert.deepEqual(sortme(arr.slice()), expected)
    })
  }
})
