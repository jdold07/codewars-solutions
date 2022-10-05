// 7 kyu - Jumping  Number (Special Numbers Series  #4)  [ ID: 5a54e796b3bfa8932c0000ed  (jumping-number-special-numbers-series-number-4) ]
// URL: https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
describe("Basic tests", () => {
  Test.assertEquals(jumpingNumber(1), "Jumping!!")
  Test.assertEquals(jumpingNumber(7), "Jumping!!")
  Test.assertEquals(jumpingNumber(9), "Jumping!!")
  Test.assertEquals(jumpingNumber(23), "Jumping!!")
  Test.assertEquals(jumpingNumber(32), "Jumping!!")
  Test.assertEquals(jumpingNumber(79), "Not!!")
  Test.assertEquals(jumpingNumber(98), "Jumping!!")
  Test.assertEquals(jumpingNumber(8987), "Jumping!!")
  Test.assertEquals(jumpingNumber(4343456), "Jumping!!")
  Test.assertEquals(jumpingNumber(98789876), "Jumping!!")
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a)
  const sol = (n) =>
    n < 10 || (Math.abs((n % 10) - Math.floor((n % 100) / 10)) == 1 && sol(Math.floor(n / 10)) == "Jumping!!")
      ? "Jumping!!"
      : "Not!!"

  for (let i = 0; i < 40; i++) {
    const n = randint(1, Math.pow(10, randint(1, 6)))
    it(`Testing for ${n}`, () => {
      Test.assertEquals(jumpingNumber(n), sol(n), "It should work for random inputs too")
    })
  }
})
