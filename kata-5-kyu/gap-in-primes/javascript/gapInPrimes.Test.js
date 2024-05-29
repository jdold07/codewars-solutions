/* eslint-disable no-constant-condition */
//+ ====================================================================================================================
//+
//+ 5 kyu - Gap in Primes  [ ID: 561e9c843a2ef5a40c0000a4 ] (gap-in-primes)
//+ URL: https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { gap } = require("./gapInPrimes")

describe("Gap", function () {
  it("Basic tests", function () {
    assert.deepEqual(gap(2, 100, 110), [101, 103])
    assert.deepEqual(gap(4, 100, 110), [103, 107])
    assert.deepEqual(gap(6, 100, 110), null)
    assert.deepEqual(gap(8, 300, 400), [359, 367])
    assert.deepEqual(gap(10, 300, 400), [337, 347])

    assert.deepEqual(gap(4, 30000, 100000), [30109, 30113])
    assert.deepEqual(gap(6, 30000, 100000), [30091, 30097])
    assert.deepEqual(gap(8, 30000, 100000), [30161, 30169])
    assert.deepEqual(gap(11, 30000, 100000), null)
    assert.deepEqual(gap(2, 10000000, 11000000), [10000139, 10000141])
  })
})

describe("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }

  //................
  function primeSol(n) {
    if (n === 2) {
      return true
    } else if (n < 2 || n % 2 === 0) {
      return false
    } else {
      for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false
      }
      return true
    }
  }

  function gapSol(g, m, n) {
    let res = []
    let i = m
    while (i < n + 1) {
      if (primeSol(i)) {
        res.push(i)
        break
      }
      i++
    }
    while (true) {
      let j = i + 1
      while (j < n + 1) {
        if (primeSol(j)) {
          if (j - i === g) {
            res.push(j)
            return res
          } else {
            res[0] = j
            i = j
          }
        }
        j++
      }
      return null
    }
  }
  //................

  for (let i = 0; i < 100; i++) {
    let n = randint(1000, 1000000)
    it("Testing Gap: ", function () {
      assert.deepEqual(gap(2, n, n + 100000), gapSol(2, n, n + 100000))
      assert.deepEqual(gap(4, n, n + 100000), gapSol(4, n, n + 100000))
      assert.deepEqual(gap(6, n, n + 100000), gapSol(6, n, n + 100000))
      assert.deepEqual(gap(8, n, n + 100000), gapSol(8, n, n + 100000))
      let k = randint(0, 2)
      if (k % 2 === 0) assert.deepEqual(gap(2, n + 1000, n + 10000), gapSol(2, n + 1000, n + 10000))
      else assert.deepEqual(gap(4, n + 1000, n + 10000), gapSol(4, n + 1000, n + 10000))
    })
  }
})
