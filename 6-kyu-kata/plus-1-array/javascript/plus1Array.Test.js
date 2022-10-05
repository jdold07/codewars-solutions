// 6 kyu - +1 Array  [ ID: 5514e5b77e6b2f38e0000ca9  (plus-1-array) ]
// URL: https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS | ALGORITHMS
// *****************************************************************************
describe("Fixed tests", function () {
  it("Basic tests", function () {
    Test.assertSimilar(upArray([5, 7, 4]), [5, 7, 5])
    Test.assertSimilar(upArray([9, 9, 9]), [1, 0, 0, 0])
    Test.assertSimilar(upArray([2, 1, 4, 7, 4, 8, 3, 6, 4, 7]), [2, 1, 4, 7, 4, 8, 3, 6, 4, 8])
  })

  it("Invalids array", function () {
    Test.assertSimilar(upArray([1, 2, 33]), null)
    Test.assertSimilar(upArray([1, 2, -1]), null)
    Test.assertSimilar(upArray([]), null)
  })

  it("'Big' arrays", function () {
    Test.assertSimilar(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7]), [
      9,
      2,
      2,
      3,
      3,
      7,
      2,
      0,
      3,
      6,
      8,
      5,
      4,
      7,
      7,
      5,
      8,
      0,
      8
    ])
    Test.assertSimilar(
      upArray([
        9,
        2,
        2,
        3,
        3,
        7,
        2,
        0,
        3,
        6,
        8,
        5,
        4,
        7,
        7,
        5,
        8,
        0,
        7,
        5,
        3,
        2,
        6,
        7,
        8,
        4,
        2,
        4,
        2,
        6,
        7,
        8,
        7,
        4,
        5,
        2,
        1
      ]),
      [9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7, 5, 3, 2, 6, 7, 8, 4, 2, 4, 2, 6, 7, 8, 7, 4, 5, 2, 2]
    )
  })
})

describe("Random tests", function () {
  it("Random arrays", function () {
    let rnd = function () {
        return (9 + ~~(Math.random() * 1e7)) * ~~(Math.random() * 1e7)
      },
      arr = function (n) {
        return ("" + n).split("").map(Number)
      }
    for (let x = 0; x < 25; x++) {
      let n = rnd(),
        exp = arr(n--),
        ask = arr(n),
        bad = ~~(Math.random() * ask.length),
        msg
      if (bad % 4) {
        Test.assertSimilar(upArray(ask), exp)
      } else {
        ask[bad] = ask[bad] > 6 ? -ask[bad] : (ask[bad] = 11 + ~~(Math.random() * 11))
        msg = "( " + ask[bad] + " at index " + bad + " )"
        console.log(ask)
        Test.assertSimilar(upArray(ask), null, msg)
      }
    }
  })

  it("'Big' random arrays", function () {
    let rnd = function () {
      return (9 + ~~(Math.random() * 1e7)) * ~~(Math.random() * 1e7)
    }
    for (let x = 0; x < 25; x++) {
      let ask = ("" + rnd() + rnd() + rnd()).split("").map(Number),
        bad = ~~(Math.random() * ask.length),
        exp,
        msg
      if (bad % 4) {
        function upArraySol(arr) {
          arr = arr.slice()
          if (
            !arr.length ||
            arr.some(function (v) {
              return v < 0 || v > 9
            })
          )
            return null
          var inc = 1,
            len = arr.length,
            v
          while ((v = arr[--len] + inc)) {
            arr[len] = v % 10
            inc = ~~(v / 10)
          }
          return inc ? [inc].concat(arr) : arr
        }
        exp = upArraySol(ask)
        Test.assertSimilar(upArray(ask), exp)
      } else {
        ask[bad] = ask[bad] > 6 ? -ask[bad] : (ask[bad] = 11 + ~~(Math.random() * 11))
        msg = "( " + ask[bad] + " at index " + bad + " )"
        console.log(ask)
        Test.assertSimilar(upArray(ask), null, msg)
      }
    }
  })
})
