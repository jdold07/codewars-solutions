//+ ====================================================================================================================
//+
//+ 7 kyu - Filter the number  [ ID: 55b051fac50a3292a9000025 ] (filter-the-number)
//+ URL: https://www.codewars.com/kata/55b051fac50a3292a9000025
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { filterString } = require("./filterTheNumber")

let p17b9fe10e8d57952934e977b31da3c78 = function (g54) {
  return +g54
    .split("")
    .filter((c) => !isNaN(c))
    .join("")
}
let k748h4f = ""

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  let j = s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4()
  k748h4f = p17b9fe10e8d57952934e977b31da3c78(j)
  return j
}

describe("Fixed Tests", function () {
  it("should pass some fixed tests", function () {
    assert.strictEqual(filterString("123"), 123, "Just return the numbers")
    assert.strictEqual(filterString("a1b2c3"), 123, "Just return the numbers")
    assert.strictEqual(filterString("aa1bb2cc3dd"), 123, "Just return the numbers")
  })
})

describe("Random Tests", function () {
  it("should pass some random tests", function () {
    for (let i4839rf8u = 0; i4839rf8u < 50; i4839rf8u++) {
      assert.strictEqual(filterString(guid()), k748h4f, "Just return the numbers")
    }
  })
})
