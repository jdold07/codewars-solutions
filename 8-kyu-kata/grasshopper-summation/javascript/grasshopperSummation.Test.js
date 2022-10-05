// 8 kyu - Grasshopper - Summation  [ ID: 55d24f55d7dd296eb9000030  (grasshopper-summation) ]
// URL: https://www.codewars.com/kata/55d24f55d7dd296eb9000030
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe('summation', function () {
  it('should return the correct total', function () {
    Test.assertEquals(summation(1), 1)
    Test.assertEquals(summation(8), 36)
    Test.assertEquals(summation(22), 253)
    Test.assertEquals(summation(100), 5050)
    Test.assertEquals(summation(213), 22791)
  })
  it('random numbers test', function () {
    for (let i = 0; i < 100; i++) {
      let rand = Test.randomNumber() + 1;
      Test.assertEquals(summation(rand), solution(rand))
    }
  })
  function solution (num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
      total += i
    }
    return total
  }
})
