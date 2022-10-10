//+ ====================================================================================================================
//+
//+ 8 kyu - isReallyNaN  [ ID: 56c24c58e0c0f741d4001aef ] (isreallynan)
//+ URL: https://www.codewars.com/kata/56c24c58e0c0f741d4001aef
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert, expect } = require("chai")
const { isReallyNaN } = require("./isreallynan")

const rand_int = () => ~~(Math.random() * 100)
const rand_float = () => Math.random() * 100
const rand_string_from_int = () => rand_int().toString
const rand_string_from_float = () => rand_float().toString

it("Fixed Tests", () => {
  expect(isReallyNaN(0) === false)
  expect(isReallyNaN(37) === false)
  expect(isReallyNaN("37") === false)
  expect(isReallyNaN(NaN) === true)
  expect(isReallyNaN(undefined) === false)

  // These really are NaN
  expect(isReallyNaN(Number.NaN) === true)
  expect(isReallyNaN(0 / 0) === true)

  // These are not NaN, but would have been true with global isNaN()
  expect(isReallyNaN("NaN") === false)
  expect(isReallyNaN({}) === false)
  expect(isReallyNaN("blabla") === false)

  // These are not NaN, and already work fine both for
  // isNaN() and for Number.isNaN()
  expect(isReallyNaN(rand_int()) === false)
  expect(isReallyNaN(rand_string_from_int()) === false)
  expect(isReallyNaN(true) === false)
  expect(isReallyNaN(null) === false)
  expect(isReallyNaN(rand_float()) === false)
  expect(isReallyNaN(rand_string_from_float()) === false)
  expect(isReallyNaN("") === false)
  expect(isReallyNaN(" ") === false)
})

// Random tests, to stop people gaming this Kata
it("Random Tests:", function () {
  const cases = [
    "",
    " ",
    null,
    undefined,
    rand_int(),
    rand_float(),
    0 / 0,
    rand_string_from_int(),
    rand_string_from_float(),
    true,
    false,
    "blablabla",
    "NaN",
    {},
    Number.NaN,
    NaN
  ]
  for (let i = 0; i < 100; i++) {
    let rand = ~~(Math.random() * cases.length)
    let testcase = cases[rand]
    assert.strictEqual(isReallyNaN(testcase), Number.isNaN(testcase))
  }
})
