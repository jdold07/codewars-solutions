// 7 kyu - Evens times last  [ ID: 5a1a9e5032b8b98477000004  (evens-times-last) ]
// URL: https://www.codewars.com/kata/5a1a9e5032b8b98477000004
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(evenLast([2, 2, 2, 2]), 8)
    Test.assertNotEquals(evenLast([]), 2)
    Test.assertEquals(evenLast([]), 0)
    Test.assertEquals(evenLast([1, 3, 3, 1, 10]), 140)
    Test.assertNotEquals(evenLast([1, 3, 3, 1, 10]), 150)
    Test.assertNotEquals(evenLast([-11, 3, 3, 1, 10]), 150)
    Test.assertEquals(evenLast([2, 3, 4, 5]), 30)

    function myEvenLast(numbers) {
      let total = 0
      if (numbers.length == 0) return total
      for (let i = 0; i < numbers.length; i += 2) total += numbers[i]
      return total * numbers.pop()
    }

    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max + 1 - min) + min)
    }

    for (let i = 0; i < 50; i++) {
      let a = getRandomNumber(0, 100)
      let b = getRandomNumber(0, 100)
      let c = getRandomNumber(0, 100)
      let d = getRandomNumber(0, 100)
      let e = getRandomNumber(0, 100)
      Test.assertEquals(evenLast([a, b, c, d, e]), myEvenLast([a, b, c, d, e]))
    }
  })
})
