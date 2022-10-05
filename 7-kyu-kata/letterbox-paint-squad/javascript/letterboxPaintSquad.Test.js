// 7 kyu - Letterbox Paint-Squad  [ ID: 597d75744f4190857a00008d  (letterbox-paint-squad) ]
// URL: https://www.codewars.com/kata/597d75744f4190857a00008d
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const { assert } = require("chai")

describe("Solution Tests", function () {
  // Reference implementation for the random test cases
  let paintLetterboxesDinglemouse20170730 = function (start, end) {
    let freq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = start; i <= end; i++) {
      for (let c of `${i}`.split("")) freq[+c - "0"]++
    }
    return freq
  }

  // =================================

  it("ex", function () {
    assert.deepEqual(paintLetterboxes(125, 132), [1, 9, 6, 3, 0, 1, 1, 1, 1, 1])
  })

  it("same", function () {
    assert.deepEqual(paintLetterboxes(1001, 1001), [2, 2, 0, 0, 0, 0, 0, 0, 0, 0])
  })

  it("random (same)", function () {
    for (let r = 1; r <= 20; r++) {
      let start = Math.floor(Math.random() * 1000 + 1)
      let end = start
      let expected = paintLetterboxesDinglemouse20170730(start, end)
      let actual = paintLetterboxes(start, end)
      assert.deepEqual(actual, expected, `${start} - ${end} : [${expected}]`)
    }
  })

  it("random (different)", function () {
    for (let r = 1; r <= 500; r++) {
      let start = Math.floor(Math.random() * 1000 + 1)
      let end = Math.floor(Math.random() * 100 + start)
      let expected = paintLetterboxesDinglemouse20170730(start, end)
      let actual = paintLetterboxes(start, end)
      assert.deepEqual(actual, expected), `${start} - ${end} : [${expected}]`
    }
  })
})
