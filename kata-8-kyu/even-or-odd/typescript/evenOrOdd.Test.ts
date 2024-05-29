//+ ====================================================================================================================
//+
//+ 8 kyu - Even or Odd  [ ID: 53da3dbb4a5168369a0000fe ] (even-or-odd)
//+ URL: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
//+ Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { even_or_odd } from "./evenOrOdd"

describe("solution", function () {
  it("basicTests", function () {
    assert.equal(even_or_odd(2), "Even", "even_or_odd(2)")
    assert.equal(even_or_odd(1), "Odd", "even_or_odd(1)")
    assert.equal(even_or_odd(-4), "Even", "even_or_odd(-4)")
    assert.equal(even_or_odd(-3), "Odd", "even_or_odd(-3)")
    assert.equal(even_or_odd(0), "Even")

    assert.equal(even_or_odd(1545452), "Even")
    assert.equal(even_or_odd(7), "Odd")
    assert.equal(even_or_odd(78), "Even")
    assert.equal(even_or_odd(17), "Odd")
    assert.equal(even_or_odd(74156741), "Odd")
    assert.equal(even_or_odd(100000), "Even")
  })

  it("randomTests", function () {
    function ernd() {
      return (25 + ~~(Math.random() * 25)) * 2
    }
    function ornd() {
      return ernd() + 1
    }

    for (let r = 0, x; r < 6; r++) {
      if (Math.random() > 0.5) {
        x = ernd()
        assert.equal(even_or_odd(x), "Even", "even_or_odd(" + x + ")")
      } else {
        x = ornd()
        assert.equal(even_or_odd(x), "Odd", "even_or_odd(" + x + ")")
      }
    }
  })
})
