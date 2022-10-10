//+ ====================================================================================================================
//+
//+ 7 kyu - String Merge!  [ ID: 597bb84522bc93b71e00007e ] (string-merge)
//+ URL: https://www.codewars.com/kata/597bb84522bc93b71e00007e
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomize } = require("../../../utils/cwUtils")
const { assert } = require("chai")
const { stringMerge } = require("./stringMerge")

describe("String Merge Tests:", () => {
  assert.strictEqual(stringMerge("person", "here", "e"), "pere")
  assert.strictEqual(stringMerge("apowiejfoiajsf", "iwahfeijouh", "j"), "apowiejouh")
  assert.strictEqual(stringMerge("abcdefxxxyzz", "abcxxxyyyxyzz", "x"), "abcdefxxxyyyxyzz")
  assert.strictEqual(stringMerge("12345654321", "123456789", "6"), "123456789")
  assert.strictEqual(stringMerge("JiOdIdA4", "oopopopoodddasdfdfsd", "d"), "JiOdddasdfdfsd")
  assert.strictEqual(stringMerge("aaaab", "abc", "a"), "abc")
  assert.strictEqual(stringMerge("aaaab", "abc", "b"), "aaaabc")
  assert.strictEqual(stringMerge("incredible", "people", "e"), "increople")
})

describe("Some 'edge cases' test", () => {
  it("One-letter-strings", () => {
    assert.strictEqual(stringMerge("a", "a String", "a"), "a String")
    assert.strictEqual(stringMerge("a String", "a", "a"), "a")
    assert.strictEqual(stringMerge("a", "a", "a"), "a")
  })

  it("Common letter at 1 end", () => {
    assert.strictEqual(stringMerge("strange", "a string element", "e"), "strangelement")
    assert.strictEqual(stringMerge("strange", "elephant", "e"), "strangelephant")
    assert.strictEqual(stringMerge("elephant", "or an element", "t"), "elephant")
    assert.strictEqual(stringMerge("strange", "elephants", "s"), "s")
  })
})

describe("Some random tests", () => {
  let zoo = "alligator,baboon,caribou,donkey,elephant,flamingo,gorilla,hedgehog,iguana,jellyfish,kangaroo,leopard,mosquito,octopus,pelican,quetzal,rhinoceros,spider,tiger,urubu,vulture,wallaby,xerus,yak,zebra".split(
    ","
  )
  let rnd = () => {
    let zz = randomize(zoo)
    return zz.slice(-2)
  }
  let commonLetters = (s1, s2) =>
    [..."ygoluritnase"]
      .reduce((c, l) => (s1.includes(l) && s2.includes(l) ? c.concat(l) : c), [])
      .filter((l) => l != s1[0] && l != s2.slice(-1))
  for (let t = 0; t < 10; t++) {
    let z1,
      z2,
      cc = []
    while (cc.length == 0) {
      ;([z1, z2] = rnd()), (cc = commonLetters(z1, z2))
    }
    let exp = cc.map((l) => l + z1.slice(0, z1.indexOf(l)) + z2.slice(z2.indexOf(l))).sort((a, b) => b.length - a.length)[0]
    console.log(`What for merging ${z1} and ${z2} on ${exp[0]}?`)
    assert.strictEqual(stringMerge(z1, z2, exp[0]), exp.slice(1))
  }
})
