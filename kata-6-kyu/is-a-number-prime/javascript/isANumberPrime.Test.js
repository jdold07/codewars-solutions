//+ ====================================================================================================================
//+
//+ 6 kyu - Is a number prime?  [ ID: 5262119038c0985a5b00029f ] (is-a-number-prime)
//+ URL: https://www.codewars.com/kata/5262119038c0985a5b00029f
//+ Category: ALGORITHMS  |  Tags: MATHEMATICS | ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { isPrime } = require("./isANumberPrime")

describe("Basic", () => {
  it("Basic tests", () => {
    assert.strictEqual(isPrime(0), false, "0 is not prime")
    assert.strictEqual(isPrime(1), false, "1 is not prime")
    assert.strictEqual(isPrime(2), true, "2 is prime")
    assert.strictEqual(isPrime(73), true, "73 is prime")
    assert.strictEqual(isPrime(75), false, "75 is not prime")
    assert.strictEqual(isPrime(-1), false, "-1 is not prime")
  })

  it("Test prime", () => {
    assert.strictEqual(isPrime(3), true, "3 is prime")
    assert.strictEqual(isPrime(5), true, "5 is prime")
    assert.strictEqual(isPrime(7), true, "7 is prime")
    assert.strictEqual(isPrime(41), true, "41 is prime")
    assert.strictEqual(isPrime(5099), true, "5099 is prime")
  })

  it("Test not prime", () => {
    assert.strictEqual(isPrime(4), false, "4 is not prime")
    assert.strictEqual(isPrime(6), false, "6 is not prime")
    assert.strictEqual(isPrime(8), false, "8 is not prime")
    assert.strictEqual(isPrime(9), false, "9 is not prime")
    assert.strictEqual(isPrime(45), false, "45 is not prime")
    assert.strictEqual(isPrime(-5), false, "-5 is not prime")
    assert.strictEqual(isPrime(-8), false, "-8 is not prime")
    assert.strictEqual(isPrime(-41), false, "-41 is not prime")
  })
})

describe("Random tests", () => {
  let generate = function () {
    let precalculate = function () {
      let count = 1 << 16
      let sieve = new Uint8Array(count)
      sieve[0] = sieve[1] = 1
      for (let idx = 2; idx < 256; ++idx) {
        if (sieve[idx] == 1) continue

        sieve[idx] = 0
        for (let n = idx * idx; n < sieve.length; n += idx) sieve[n] = 1
      }
      return sieve
    }
    let sieve = precalculate()
    let smallPrimes = []
    for (let i = 0; i < sieve.length; ++i) if (!sieve[i]) smallPrimes.push(i)

    let checkPrime = function (num) {
      if (num < 3 || num & (1 == 0)) return false

      let max = Math.sqrt(num) | 0
      for (let i = 0; smallPrimes[i] <= max; ++i) if (num % smallPrimes[i] == 0) return false
      return true
    }
    let nextPrime = function (num) {
      while (!checkPrime(++num));
      return num
    }

    let cases = []
    let MAX = 2000000000
    for (let i = 0; i < 500; ++i) {
      let num = (Math.random() * MAX) | 0
      num = nextPrime(num)
      cases.push({ num: num, prime: true })
    }

    for (let i = 0; i < 450; ++i) {
      let num = (Math.random() * MAX) | 0
      while (checkPrime(++num));
      cases.push({ num: num, prime: false })
    }

    for (let i = 0; i < 40; ++i) {
      let num = (Math.random() * (1 << 15)) | 0
      num = nextPrime(num)
      cases.push({ num: num * num, prime: false })
    }

    for (let i = 0; i < 10; ++i) {
      let num = (Math.random() * MAX) | 0
      num = nextPrime(num)
      cases.push({ num: -num, prime: false })
    }

    cases = cases.map((c) => {
      return { c: c, k: Math.random() }
    })
    cases.sort((e1, e2) => e1.k - e2.k)
    cases = cases.map((e) => e.c)

    return cases
  }

  it("Random tests", () => {
    let testCases = generate()
    for (let test of testCases) {
      assert.strictEqual(isPrime(test.num), test.prime, test.num + (test.prime ? " is prime" : " is not prime"))
    }
  })
})
