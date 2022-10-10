//+ ====================================================================================================================
//+
//+ 6 kyu - 1/n- Cycle  [ ID: 5a057ec846d843c81a0000ad ] (_1-slash-n-cycle)
//+ URL: https://www.codewars.com/kata/5a057ec846d843c81a0000ad
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { cycle } = require("./_1SlashNCycle")

describe("cycle", () => {
  it("Basic tests", () => {
    assert.strictEqual(cycle(33), 2)
    assert.strictEqual(cycle(18118), -1)
    assert.strictEqual(cycle(69), 22)
    assert.strictEqual(cycle(197), 98)
    assert.strictEqual(cycle(65), -1)
    assert.strictEqual(cycle(97), 96)
    assert.strictEqual(cycle(19), 18)
    assert.strictEqual(cycle(111), 3)
    assert.strictEqual(cycle(53), 13)
    assert.strictEqual(cycle(59), 58)
    assert.strictEqual(cycle(93), 15)
    assert.strictEqual(cycle(51), 16)
    assert.strictEqual(cycle(159), 13)
    assert.strictEqual(cycle(183), 60)
    assert.strictEqual(cycle(197), 98)
    assert.strictEqual(cycle(167), 166)
    assert.strictEqual(cycle(94), -1)
    assert.strictEqual(cycle(133), 18)
    assert.strictEqual(cycle(218713), 9744)
    assert.strictEqual(cycle(38127), 6230)
    assert.strictEqual(cycle(431541), 726)
    assert.strictEqual(cycle(221193), 3510)
    assert.strictEqual(cycle(1234567), 34020)
  })
})

describe("RandomTest", () => {
  it("cycle", () => {
    for (let i = 0; i < 150; ++i) {
      let n = 200 + Math.floor((500001 - 200) * Math.random()),
        sol = solve(n)
      assert.strictEqual(cycle(n), sol)
    }

    function solve(n) {
      let c = 1,
        r = {},
        p = 0
      if (0 == n % 2 || 0 == n % 5) return -1
      for (; ; c *= 10) {
        c %= n
        if (r[c]) return p - r[c]
        r[c] = p++
      }
    }
  })
})
