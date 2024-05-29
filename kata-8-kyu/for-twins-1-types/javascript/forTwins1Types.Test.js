//+ ====================================================================================================================
//+
//+ 8 kyu - For Twins: 1. Types  [ ID: 59c1302ecb7fb48757000013 ] (for-twins-1-types)
//+ URL: https://www.codewars.com/kata/59c1302ecb7fb48757000013
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

//+ ====================================================================================================================
//+ PRELOAD CODE
//+ ====================================================================================================================

class TestClass {
  constructor(a) {
    this.a = a
  }
}

//+ ====================================================================================================================
//+ ====================================================================================================================

import { assert } from "vitest"
const { typeValidation } = require("./forTwins1Types")

function solution(variable, type) {
  return typeof variable === type
}

let a = [42, "42", true, [42], { a: 42 }, null, undefined, new TestClass(1)],
  b = ["number", "string", "boolean", "object", "undefined"]

it("Basic Tests", function () {
  assert.strictEqual(typeValidation(a[0], b[0]), true)
  assert.strictEqual(typeValidation(a[1], b[0]), false)
})

it("Advanced Tests", function () {
  assert.strictEqual(typeValidation(a[0], b[0]), true)
  assert.strictEqual(typeValidation(a[0], b[1]), false)
  assert.strictEqual(typeValidation(a[1], b[1]), true)
  assert.strictEqual(typeValidation(a[1], b[0]), false)
  assert.strictEqual(typeValidation(a[2], b[2]), true)
  assert.strictEqual(typeValidation(a[2], b[0]), false)
  assert.strictEqual(typeValidation(a[3], b[3]), true)
  assert.strictEqual(typeValidation(a[3], b[1]), false)
  assert.strictEqual(typeValidation(a[4], b[3]), true)
  assert.strictEqual(typeValidation(a[4], b[2]), false)
  assert.strictEqual(typeValidation(a[5], b[3]), true)
  assert.strictEqual(typeValidation(a[5], b[0]), false)
  assert.strictEqual(typeValidation(a[6], b[4]), true)
  assert.strictEqual(typeValidation(a[6], b[0]), false)
  assert.strictEqual(typeValidation(a[7], b[3]), true)
  assert.strictEqual(typeValidation(a[7], b[1]), false)
})

it("Random Tests", function () {
  for (let i = 0; i < 100; i++) {
    let v = Math.floor(Math.random() * 7),
      t = Math.floor(Math.random() * 4)

    assert.strictEqual(typeValidation(a[v], b[t]), solution(a[v], b[t]))
  }
})
