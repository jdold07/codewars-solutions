// 8 kyu - Grasshopper - Personalized Message  [ ID: 5772da22b89313a4d50012f7  (grasshopper-personalized-message) ]
// URL: https://www.codewars.com/kata/5772da22b89313a4d50012f7
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("greeting", () => {
  it("fixed tests", () => {
    Test.assertEquals(greet("Daniel", "Daniel"), "Hello boss")
    Test.assertEquals(greet("Greg", "Daniel"), "Hello guest")
  })
  it("random tests", () => {
    for (let i = 0; i < 10; i++) {
      let first = Test.randomToken()
      let second = Test.randomToken()
      Math.floor(Math.random() * 2)
        ? Test.assertEquals(greet(first, first), "Hello boss")
        : Test.assertEquals(greet(first, second), "Hello guest")
    }
  })
})
