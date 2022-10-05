// 8 kyu - Grasshopper - Order of operations  [ ID: 560ecf0cb040de130e00007d  (grasshopper-order-of-operations) ]
// URL: https://www.codewars.com/kata/560ecf0cb040de130e00007d
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const func = orderOperations.toString()
describe('order of operations', () => {
  it('should not use any numbers other than 2', () => {
    let re = /([013456789])/gi
    let others = func.match(re)
    Test.assertEquals(others, null)
  })
  it('should have the plus and the multiplication in the same place', () => {
    let re = /[+,*]/gi
    let operators = func.match(re)
    Test.assertEquals(operators[0], '+')
    Test.assertEquals(operators[1], '*')
    Test.assertEquals(operators[2], '+')
    Test.assertEquals(operators[3], '*')
  })
  it('should get the correct number', () => {
    Test.assertEquals(orderOperations(), 32)
  })
})
