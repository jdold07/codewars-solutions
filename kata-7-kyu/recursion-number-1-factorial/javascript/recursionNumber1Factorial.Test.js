//+ ====================================================================================================================
//+
//+ 7 kyu - Recursion #1 - Factorial  [ ID: 5694cb0ec554589633000036 ] (recursion-number-1-factorial)
//+ URL: https://www.codewars.com/kata/5694cb0ec554589633000036
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | RECURSION | MATHEMATICS
//+
//+ ====================================================================================================================

const { assert, expect } = require("chai")
const { factorial } = require("./recursionNumber1Factorial")

const factorialTable = [
  1,
  1,
  2,
  6,
  24,
  120,
  720,
  5040,
  40320,
  362880,
  3628800,
  39916800,
  479001600,
  6227020800,
  87178291200,
  1307674368000
]

describe(`Basic tests`, () => {
  factorialTable.forEach((v, i) => {
    it(`factorial(${i})`, () => {
      assert.strictEqual(factorial(i), v)
    })
  })
})

describe(`Anti-cheating`, () => {
  //remove comments
  const functionAsString = factorial
    .toString()
    .replace(/\/\/.+/g, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")

  it(`No hardcoded values`, () => {
    factorialTable.slice(4).forEach((v) => {
      expect(!new RegExp(v, "g").test(functionAsString))
    })
  })

  it(`No loops needed`, () => {
    const loops = ["for", "while", "reduce", "map", "filter"]

    loops.forEach((v) => {
      expect(!new RegExp(v, "g").test(functionAsString), `Found "${v}".`)
    })
  })

  it(`It has to call itself`, () => {
    expect(/factorial\s?\(/.test(functionAsString))
  })
})
