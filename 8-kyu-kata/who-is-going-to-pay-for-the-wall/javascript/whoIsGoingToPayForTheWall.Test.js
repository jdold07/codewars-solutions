// 8 kyu - Who is going to pay for the wall?  [ ID: 58bf9bd943fadb2a980000a7  (who-is-going-to-pay-for-the-wall) ]
// URL: https://www.codewars.com/kata/58bf9bd943fadb2a980000a7
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
// *****************************************************************************
describe("Basic tests", () => {
  Test.assertSimilar(whoIsPaying("Mexico"), ["Mexico", "Me"])
  Test.assertSimilar(whoIsPaying("Melania"), ["Melania", "Me"])
  Test.assertSimilar(whoIsPaying("Melissa"), ["Melissa", "Me"])
  Test.assertSimilar(whoIsPaying("Me"), ["Me"])
  Test.assertSimilar(whoIsPaying(""), [""])
  Test.assertSimilar(whoIsPaying("I"), ["I"])
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a
  const sol = (s) => (s.length > 2 ? [s, s.slice(0, 2)] : [s])
  const base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

  for (let i = 0; i < 40; i++) {
    const s = [...Array(randint(1, 20))].map((_) => base[randint(0, base.length - 1)]).join("")
    it(`Testing for '${s}'`, () => {
      Test.assertSimilar(whoIsPaying(s), sol(s), "It should work for random inputs too")
    })
  }
})
