// 7 kyu - Count the divisors of a number  [ ID: 542c0f198e077084c0000c2e  (count-the-divisors-of-a-number) ]
// URL: https://www.codewars.com/kata/542c0f198e077084c0000c2e
// Category: REFERENCE  |  Tags: NUMBER THEORY | MATHEMATICS | FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(getDivisorsCnt(1), 1)
    Test.assertEquals(getDivisorsCnt(10), 4)
    Test.assertEquals(getDivisorsCnt(11), 2)
    Test.assertEquals(getDivisorsCnt(54), 8)
    Test.assertEquals(getDivisorsCnt(25), 3)
    ;(function () {
      function _getDivisorsCnt(n) {
        let i = 2
        let tmp
        let ret = 1
        while (n > 1) {
          tmp = 0
          while (n % i === 0) {
            tmp++
            n /= i
          }
          ret *= ++tmp
          i++
        }
        return ret
      }

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }

      for (let i = 0; i < 500; i++) {
        let rand = getRandomInt(2000, 500000)
        let expected = _getDivisorsCnt(rand)
        let actual = getDivisorsCnt(rand)
        Test.assertEquals(actual, expected, ["Random test case. (", rand, ")"].join(""))
      }

      for (let i = 1; i < 100; i++) {
        let sqr = i * i
        let expected = _getDivisorsCnt(sqr)
        let actual = getDivisorsCnt(sqr)
        Test.assertEquals(actual, expected, ["Square number test. (", sqr, ")"].join(""))
      }
    })()
  })
})
