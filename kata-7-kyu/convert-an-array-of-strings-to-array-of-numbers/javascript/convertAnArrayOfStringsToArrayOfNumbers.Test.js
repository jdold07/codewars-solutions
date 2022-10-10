//+ ====================================================================================================================
//+
//+ 7 kyu - Convert an array of strings to array of numbers  [ ID: 5783d8f3202c0e486c001d23 ] (convert-an-array-of-strings-to-array-of-numbers)
//+ URL: https://www.codewars.com/kata/5783d8f3202c0e486c001d23
//+ Category: REFERENCE  |  Tags: ARRAYS | PARSING | STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { toNumberArray } = require("./convertAnArrayOfStringsToArrayOfNumbers")

it('Running toNumberArray("1.1", "2.2", "3.3")...', function () {
  assert.deepEqual(toNumberArray(["1.1", "2.2", "3.3"]), [1.1, 2.2, 3.3])
})

let n = Math.floor(getRandomArbitrary(1, 50))
console.log("Generating " + n + " random test cases...")

for (let i = 0; i < n; i++) {
  let m = Math.floor(getRandomArbitrary(1, 10))
  const strval = []
  let strrep = "["

  for (let j = 0; j < m; j++) {
    const newval = getRandomArbitrary(1, 10).toFixed(1) + ""
    strval.push(newval)
    strrep = j == 0 ? strrep + '"' + newval + '"' : strrep + ', "' + newval + '"'
  }
  strrep = strrep + "]"

  it("Running toNumberArray(" + strrep + ")...", function () {
    assert.deepEqual(toNumberArray(strval), tNA(strval))
  })
}

function tNA(s) {
  return s.map((x) => parseFloat(x))
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}
