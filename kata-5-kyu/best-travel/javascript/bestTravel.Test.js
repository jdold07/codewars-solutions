//+ ====================================================================================================================
//+
//+ 5 kyu - Best travel  [ ID: 55e7280b40e1c4a06d0000aa ] (best-travel)
//+ URL: https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { chooseBestSum } = require("./bestTravel")

describe("chooseBestSum", function () {
  it("Basic tests ", function () {
    let ts = [50, 55, 56, 57, 58]
    assert.strictEqual(chooseBestSum(163, 3, ts), 163)
    ts = [50]
    assert.strictEqual(chooseBestSum(163, 3, ts), null)
    ts = [91, 74, 73, 85, 73, 81, 87]
    assert.strictEqual(chooseBestSum(230, 3, ts), 228)
    assert.strictEqual(chooseBestSum(331, 2, ts), 178)
    assert.strictEqual(chooseBestSum(331, 4, ts), 331)
    assert.strictEqual(chooseBestSum(331, 5, ts), null)
    assert.strictEqual(chooseBestSum(331, 1, ts), 91)
    assert.strictEqual(chooseBestSum(700, 6, ts), 491)
    let xs = [100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89]
    assert.strictEqual(chooseBestSum(230, 4, xs), 230)
    assert.strictEqual(chooseBestSum(430, 5, xs), 430)
    assert.strictEqual(chooseBestSum(430, 8, xs), null)
    assert.strictEqual(chooseBestSum(880, 8, xs), 876)
    assert.strictEqual(chooseBestSum(2430, 15, xs), 1287)
    assert.strictEqual(chooseBestSum(100, 2, xs), 100)
    assert.strictEqual(chooseBestSum(276, 3, xs), 276)
    assert.strictEqual(chooseBestSum(3760, 17, xs), 3654)
    assert.strictEqual(chooseBestSum(3760, 40, xs), null)
    assert.strictEqual(chooseBestSum(50, 1, xs), 50)
    assert.strictEqual(chooseBestSum(1000, 18, xs), null)
    xs = [100, 64, 123, 2333, 144, 50, 132, 123, 34, 89]
    assert.strictEqual(chooseBestSum(230, 4, xs), null)
    assert.strictEqual(chooseBestSum(230, 2, xs), 223)
    assert.strictEqual(chooseBestSum(2333, 1, xs), 2333)
    assert.strictEqual(chooseBestSum(2333, 8, xs), 825)
    xs = [1000, 640, 1230, 2333, 1440, 500, 1320, 1230, 340, 890, 732, 1346]
    assert.strictEqual(chooseBestSum(2300, 4, xs), 2212)
    assert.strictEqual(chooseBestSum(2300, 5, xs), null)
    assert.strictEqual(chooseBestSum(2332, 3, xs), 2326)
    assert.strictEqual(chooseBestSum(23331, 8, xs), 10789)
    assert.strictEqual(chooseBestSum(331, 2, xs), null)
  })
})
describe("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }
  function comb897(ls, k) {
    let i,
      sub1,
      res = [],
      subset,
      nxt
    for (i = 0; i < ls.length; i++) {
      if (k === 1) {
        res.push([ls[i]])
      } else {
        subset = comb897(ls.slice(i + 1, ls.length), k - 1)
        for (sub1 = 0; sub1 < subset.length; sub1++) {
          nxt = subset[sub1]
          nxt.unshift(ls[i])
          res.push(nxt)
        }
      }
    }
    return res
  }
  function chooseBestSum897(t, k, ls) {
    let a = comb897(ls, k)
    let mx = -1
    let res = []
    for (let i = 0; i < a.length; i++) {
      let s = a[i].reduce(function (a, b) {
        return a + b
      })
      if (s >= mx && s <= t) {
        res = [a[i], s]
        mx = s
      }
    }
    return res.length !== 0 ? res[1] : null
  }
  for (let _ = 0; _ < 10; _++) {
    const r = []
    let l = randint(5, 15)
    for (let _ = 0; _ < l; _++) {
      let n = randint(10, 500)
      r.push(n)
    }
    let k = randint(50, 2000)
    let p = randint(1, 4)
    it("Testing: ", function () {
      assert.strictEqual(chooseBestSum(k, p, r), chooseBestSum897(k, p, r), "It should work for random tests too")
    })
  }
})
