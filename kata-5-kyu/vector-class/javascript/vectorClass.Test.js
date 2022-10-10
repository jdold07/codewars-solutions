//+ ====================================================================================================================
//+
//+ 5 kyu - Vector class  [ ID: 526dad7f8c0eb5c4640000a4 ] (vector-class)
//+ URL: https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4
//+ Category: ALGORITHMS  |  Tags: OBJECT-ORIENTED PROGRAMMING | ALGORITHMS | LINEAR ALGEBRA
//+
//+ ====================================================================================================================

const { assert, expect } = require("chai")
const { Vector } = require("./vectorClass")

let a = new Vector([1, 2, 3])
let b = new Vector([3, 4, 5])
let c = new Vector([5, 6, 7, 8])

describe("Testing arithmetic", function () {
  it("Addition", function () {
    expect(a.add(b).equals(new Vector([4, 6, 8])))
    assert.throws(
      function () {
        c.add(a)
        a.add(c)
      },
      Error,
      undefined,
      "Adding vectors with different lengths should throw an error."
    )
  })
  it("Subtraction", function () {
    expect(a.subtract(b).equals(new Vector([-2, -2, -2])))
    assert.throws(
      function () {
        c.subtract(a)
        a.subtract(c)
      },
      Error,
      undefined,
      "Subtracting vectors with different lengths should throw an error."
    )
  })
  it("Dot Product", function () {
    assert.strictEqual(a.dot(b), 26)
    assert.strictEqual(b.dot(a), a.dot(b))
    assert.throws(
      function () {
        c.dot(a)
        a.dot(c)
      },
      Error,
      undefined,
      "Dotting vectors with different lengths should throw an error."
    )
  })
  it("Norms", function () {
    expect(a.norm() - Math.sqrt(14) < 0.1)
    expect(b.norm() - Math.sqrt(50) < 0.1)
    expect(c.norm() - Math.sqrt(174) < 0.1)
  })
})

describe("Auxiliary function", function () {
  it("Equality", function () {
    expect(a.equals(new Vector([1, 2, 3])))
    expect(b.equals(new Vector([3, 4, 5])))
    expect(!a.equals(b))
    expect(!b.equals(c))
    expect(!a.equals(c))
  })
  it("Strings", function () {
    assert.strictEqual(a.toString(), "(1,2,3)")
    assert.strictEqual(b.toString(), "(3,4,5)")
    assert.strictEqual(c.toString(), "(5,6,7,8)")
  })
})
