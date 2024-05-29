//+ ====================================================================================================================
//+
//+ 5 kyu - What's a Perfect Power  anyway?  [ ID: 54d4c8b08776e4ad92000835 ] (whats-a-perfect-power-anyway)
//+ URL: https://www.codewars.com/kata/54d4c8b08776e4ad92000835
//+ Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert, expect } from "vitest"
const { isPP } = require("./whatsAPerfectPowerAnyway")

describe("perfect powers", function () {
  it("should work for some examples", function () {
    assert.deepEqual(isPP(4), [2, 2], "4 = 2^2")
    assert.deepEqual(isPP(9), [3, 2], "9 = 3^2")
    assert.strictEqual(isPP(5), null, "5 isn't a perfect power")
  })
  it("should work for the first perfect powers", function () {
    let pp = [
        4,
        8,
        9,
        16,
        25,
        27,
        32,
        36,
        49,
        64,
        81,
        100,
        121,
        125,
        128,
        144,
        169,
        196,
        216,
        225,
        243,
        256,
        289,
        324,
        343,
        361,
        400,
        441,
        484
      ],
      i
    for (i = 0; i < pp.length; ++i) {
      expect(isPP(pp[i]) !== null, "the perfect power " + pp[i] + " wasn't recognized as one")
    }
  })
  it("should work for random perfect powers", function () {
    let k, m, i, r, l
    for (i = 0; i < 100; ++i) {
      ;(m = (2 + Math.random() * 0xff) | 0), (k = (2 + (Math.random() * Math.log(0x0fffffff)) / Math.log(m)) | 0)
      l = Math.pow(m, k)
      r = isPP(l)
      if (r === null) {
        expect(r !== null, l + " is a perfect power")
        break
      } else if (Math.pow(r[0], r[1]) !== l) {
        assert.strictEqual(Math.pow(r[0], r[1]), l, "your pair (" + r[0] + ", " + r[1] + ") doesn't work for " + l)
        break
      }
    }
  })
  it("should return valid pairs for random inputs", function () {
    let i, r, l

    for (i = 0; i < 100; ++i) {
      l = (Math.random() * 0x0000ffff) | 0
      r = isPP(l)
      if (r !== null && Math.pow(r[0], r[1]) !== l) {
        assert.strictEqual(Math.pow(r[0], r[1]), l, "your pair (" + r[0] + ", " + r[1] + ") doesn't work for " + l)
        break
      }
    }
  })
  it("should work for random inputs", function () {
    let solution = function (n) {
        let primes = [],
          i,
          j,
          g = 0,
          gcd = function (a, b) {
            return a ? gcd(b % a, a) : b
          }

        // counting prime factors
        for (i = 2, j = 0; n > 1; ) {
          while (n % i === 0) {
            j++
            n /= i
          }
          if (j !== 0) {
            primes.push([i, j])
            // checking greatest common divisor of
            // factor exponents
            if (g !== 0) {
              g = gcd(g, j)
              if (g === 1) return null
            } else {
              g = j
            }
          }
          j = 0
          i++
        }
        if (primes.length === 0 || g === 1) {
          return null
        }
        for (j = 1, i = 0; i < primes.length; ++i) {
          j *= Math.pow(primes[i][0], primes[i][1] / g)
        }
        return [j, g]
      },
      i,
      l,
      r,
      s,
      k
    for (i = 0; i < 100; ++i) {
      l = (Math.random() * 0x0000ffff) | 0
      r = isPP(l)
      s = solution(l)
      if (r !== null) k = Math.pow(r[0], r[1])
      if (r === null && s !== null) {
        expect(r !== null, "returned null on perfect power " + l)
        break
      } else if (r !== null && s === null) {
        expect(r === null, "returned not null on non-perfect power " + l)
        break
      } else if (r !== null && k !== l) {
        assert.strictEqual(k, l, "your pair (" + r[0] + ", " + r[1] + ") doesn't work for " + l)
        break
      }
    }
  })
})
