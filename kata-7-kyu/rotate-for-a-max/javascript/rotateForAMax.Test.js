/* eslint-disable no-constant-condition */
//+ ====================================================================================================================
//+
//+ 7 kyu - Rotate for a Max  [ ID: 56a4872cbb65f3a610000026 ] (rotate-for-a-max)
//+ URL: https://www.codewars.com/kata/56a4872cbb65f3a610000026
//+ Category: REFERENCE  |  Tags: ALGORITHMS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { maxRot } = require("./rotateForAMax")

function testing(actual, expected) {
  assert.strictEqual(actual, expected)
}

describe("maxRot", function () {
  it("Basic tests", function () {
    testing(maxRot(38458215), 85821534)
    testing(maxRot(195881031), 988103115)
    testing(maxRot(896219342), 962193428)
    testing(maxRot(69418307), 94183076)
    testing(maxRot(257117280), 571172802)
    testing(maxRot(240522578), 452782025)
    testing(maxRot(561656824), 666824515)
    testing(maxRot(672963486), 796348662)
    testing(maxRot(48192242), 89242412)
    testing(maxRot(25053359), 55392035)
    testing(maxRot(785727925), 877925752)
    testing(maxRot(275076894), 750768942)
    testing(maxRot(507992495), 507992495)
    testing(maxRot(461358517), 638517415)
    testing(maxRot(563692037), 669203753)
    testing(maxRot(159043701), 590437011)
    testing(maxRot(896304934), 963049348)
    testing(maxRot(273293210), 732932102)
    testing(maxRot(451496516), 549651641)
    testing(maxRot(1), 1)
  })
})

it("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }

  function maxRotSOLab(n) {
    let s = n.toString()
    let res = ""
    let mx = +n
    let r
    if (s.length === 1) return n
    while (true) {
      for (let i = 0; i < s.length; ++i) {
        r = s.substring(1) + s.charAt(0)
      }
      s = r
      res += s[0]
      s = s.substring(1)
      let nb = parseInt(res + s)
      if (nb > mx) mx = nb
      if (s.length === 1) break
    }
    return mx
  }

  for (let i = 0; i < 200; i++) {
    let rnd = randint(100000, 1000000000)
    let r = maxRotSOLab(rnd)
    testing(maxRot(rnd), r)
  }
})
