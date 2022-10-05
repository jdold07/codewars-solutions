// 7 kyu - String Merge!  [ ID: 597bb84522bc93b71e00007e  (string-merge) ]
// URL: https://www.codewars.com/kata/597bb84522bc93b71e00007e
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
describe("String Merge Tests:", () => {
  Test.assertEquals(stringMerge("person", "here", "e"), "pere")
  Test.assertEquals(stringMerge("apowiejfoiajsf", "iwahfeijouh", "j"), "apowiejouh")
  Test.assertEquals(stringMerge("abcdefxxxyzz", "abcxxxyyyxyzz", "x"), "abcdefxxxyyyxyzz")
  Test.assertEquals(stringMerge("12345654321", "123456789", "6"), "123456789")
  Test.assertEquals(stringMerge("JiOdIdA4", "oopopopoodddasdfdfsd", "d"), "JiOdddasdfdfsd")
  Test.assertEquals(stringMerge("aaaab", "abc", "a"), "abc")
  Test.assertEquals(stringMerge("aaaab", "abc", "b"), "aaaabc")
  Test.assertEquals(stringMerge("incredible", "people", "e"), "increople")
})

describe("Some 'edge cases' test", () => {
  it("One-letter-strings", () => {
    Test.assertEquals(stringMerge("a", "a String", "a"), "a String")
    Test.assertEquals(stringMerge("a String", "a", "a"), "a")
    Test.assertEquals(stringMerge("a", "a", "a"), "a")
  })

  it("Common letter at 1 end", () => {
    Test.assertEquals(stringMerge("strange", "a string element", "e"), "strangelement")
    Test.assertEquals(stringMerge("strange", "elephant", "e"), "strangelephant")
    Test.assertEquals(stringMerge("elephant", "or an element", "t"), "elephant")
    Test.assertEquals(stringMerge("strange", "elephants", "s"), "s")
  })
})

describe("Some random tests", () => {
  let zoo = "alligator,baboon,caribou,donkey,elephant,flamingo,gorilla,hedgehog,iguana,jellyfish,kangaroo,leopard,mosquito,octopus,pelican,quetzal,rhinoceros,spider,tiger,urubu,vulture,wallaby,xerus,yak,zebra".split(
    ","
  )
  let rnd = (_) => {
    let zz = Test.randomize(zoo)
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
    Test.assertEquals(stringMerge(z1, z2, exp[0]), exp.slice(1))
  }
})
