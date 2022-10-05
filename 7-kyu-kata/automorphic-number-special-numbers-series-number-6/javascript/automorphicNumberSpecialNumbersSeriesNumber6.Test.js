// 7 kyu - Automorphic Number (Special Numbers Series  #6)  [ ID: 5a58d889880385c2f40000aa  (automorphic-number-special-numbers-series-number-6) ]
// URL: https://www.codewars.com/kata/5a58d889880385c2f40000aa
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
describe("Basic tests", () => {
  Test.assertEquals(automorphic(1), "Automorphic")
  Test.assertEquals(automorphic(3), "Not!!")
  Test.assertEquals(automorphic(6), "Automorphic")
  Test.assertEquals(automorphic(9), "Not!!")
  Test.assertEquals(automorphic(25), "Automorphic")
  Test.assertEquals(automorphic(53), "Not!!")
  Test.assertEquals(automorphic(76), "Automorphic")
  Test.assertEquals(automorphic(95), "Not!!")
  Test.assertEquals(automorphic(625), "Automorphic")
  Test.assertEquals(automorphic(225), "Not!!")
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a)
  const sol = (n) => ([1, 5, 6, 25, 76, 376, 625, 9376].includes(n) ? "Automorphic" : "Not!!")

  for (let i = 0; i < 40; i++) {
    const n = randint(0, 1) ? [1, 5, 6, 25, 76, 376, 625, 9376][randint(0, 7)] : randint(1, Math.pow(80, randint(0, 2)) * 10)
    it(`Testing for ${n}`, () => {
      Test.assertEquals(automorphic(n), sol(n), "It should work for random inputs too")
    })
  }
})
