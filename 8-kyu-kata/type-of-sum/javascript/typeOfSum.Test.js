// 8 kyu - Type of sum  [ ID: 5a2e9ae2b6cfd7692a0000ba  (type-of-sum) ]
// URL: https://www.codewars.com/kata/5a2e9ae2b6cfd7692a0000ba
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Basic tests", () => {
  Test.assertEquals(typeOfSum(12, 1), "number")
  Test.assertEquals(typeOfSum("d", 1), "string")
  Test.assertEquals(typeOfSum(1, "a"), "string")
  Test.assertEquals(typeOfSum("dd", ""), "string")
  Test.assertEquals(typeOfSum(true, 1), "number")
  Test.assertEquals(typeOfSum("s", false), "string")
  Test.assertEquals(typeOfSum(null, 1), "number")
  Test.assertEquals(typeOfSum("s", null), "string")
  Test.assertEquals(typeOfSum(null, undefined), "number")
  Test.assertEquals(typeOfSum(undefined, "re"), "string")
  Test.assertEquals(typeOfSum(undefined, true), "number")
  Test.assertEquals(typeOfSum(null, false), "number")
})

describe("Random Tests", () => {
  const randomInteger = (a, b) => Math.floor(Math.random() * (b - a + 1) + a)

  const check = (a, b) => typeof (a + b)
  const answers = [0, 1, "a", "b", null, undefined, true, false]
  let index = randomInteger(0, 7)

  for (let i = 1; i <= 88; i++) {
    const index1 = randomInteger(0, 7)
    const index2 = randomInteger(0, 7)

    const a = answers[index1]
    const b = answers[index2]

    it(`Testing №${i} for typeOfSum(${a}, ${b})`, () => {
      Test.assertEquals(typeOfSum(a, b), check(a, b), `It should work for random tests too`)
    })
  }
})
