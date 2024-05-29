//+ ====================================================================================================================
//+
//+ 6 kyu - Which are  in?  [ ID: 550554fd08b86f84fe000a58 ] (which-are-in)
//+ URL: https://www.codewars.com/kata/550554fd08b86f84fe000a58
//+ Category: REFACTORING  |  Tags: ARRAYS | LISTS | STRINGS | REFACTORING
//+
//+ ====================================================================================================================

const { randomize } = require("../../../utils/cwUtils")
import { assert } from "vitest"
const { inArray } = require("./whichAreIn")

let a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
let a1 = ["arp", "live", "strong"]

it("Fixed Tests", () => {
  assert.deepEqual(inArray(a1, a2), ["arp", "live", "strong"])
  //a1 = ["arp", "arp", "arp"] //-- dumb test
  //assert.deepEqual(inArray(a1, a2), ["arp"])
  a1 = ["xyz", "live", "strong"]
  assert.deepEqual(inArray(a1, a2), ["live", "strong"])
  a1 = ["live", "strong", "arp"]
  assert.deepEqual(inArray(a1, a2), ["arp", "live", "strong"])
  // eslint-disable-next-line no-sparse-arrays
  a1 = ["live", "strong", , "lyal", "lysh", "arp"]
  assert.deepEqual(inArray(a1, a2), ["arp", "live", "strong"])
  a1 = ["tarp", "mice", "bull"]
  assert.deepEqual(inArray(a1, a2), [])
  a1 = []
  assert.deepEqual(inArray(a1, a2), [])
})

it("Some random test:", function () {
  const uu = "I should have known that you would have a perfect answer for me (since most Ruby questions \
  I browse here have your input somewhere). I am glad you pointed out the versioning; I \
  am using 1.9.2. apidock (mladen's comment) does not have sample; neither does ruby-doc. In \
  your opinion, what is the best reference for Ruby, updated to 1.9?".split(
    /\s+/
  )

  const vv = ["1.9", "ou", "ve", "ect", "omm", "gla", "oint", "pini", "wh", "oes", "by", "ion", "or", "he", "ple", "ing"]

  let sample = function (aa, x) {
    return randomize(aa).slice(0, x)
  }

  let __in__array__ = function (aa, bb) {
    return aa.filter(function (a) {
      return bb.some(function (b) {
        return b.indexOf(a) > -1
      })
    })
  }

  randomize([1, 2, 3, 4, 5, 6, 7, 8, 9]).forEach(function (x) {
    let arr1 = sample(vv, x + 1),
      arr2 = sample(uu, 15 + x * 2),
      exp = __in__array__(arr1, arr2).sort()
    assert.deepEqual(inArray(arr1, arr2), exp)
  })
})
