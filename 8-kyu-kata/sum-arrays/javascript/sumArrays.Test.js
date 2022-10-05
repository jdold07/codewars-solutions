// 8 kyu - Sum Arrays  [ ID: 53dc54212259ed3d4f00071c  (sum-arrays) ]
// URL: https://www.codewars.com/kata/53dc54212259ed3d4f00071c
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
describe("sum", function () {
  it("The method sum should be defined.", function () {
    Test.expect(sum, "The method sum is not defined.")
  })

  it("Empty array should yield 0.", function () {
    Test.assertEquals(sum([]), 0)
  })

  it("One number in array should be that number.", function () {
    for (let i = 0; i < 5; i++) {
      r = Test.randomNumber()
      Test.assertEquals(sum([r]), r)
    }
    Test.assertEquals(sum([5]), 5)
    Test.assertEquals(sum([1251]), 1251)
  })

  it("One negative number in array should be that number.", function () {
    for (let i = 0; i < 5; i++) {
      r = -1 * Test.randomNumber()
      Test.assertEquals(sum([r]), r)
    }
    Test.assertEquals(sum([-1]), -1)
    Test.assertEquals(sum([-521]), -521)
  })

  it("Multiple numbers should sum to correct total.", function () {
    total = 0
    array = []
    for (let i = 0; i < 10; i++) {
      t = Test.randomNumber()
      array.push(t)
      total += t
    }
    Test.assertEquals(sum(array), total)
    Test.assertEquals(sum([1, 5.2, 4, 0]), 10.2)
  })

  it("Multiple numbers with negatives should sum to correct total.", function () {
    total = 0
    array = []
    for (let i = 0; i < 10; i++) {
      // Positive numbers
      t = Test.randomNumber()
      array.push(t)
      total += t
    }
    for (let i = 0; i < 10; i++) {
      // Negative numbers
      t = -1 * Test.randomNumber()
      array.push(t)
      total += t
    }
    Test.assertEquals(sum(array), total)
    Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2)
  })
})
