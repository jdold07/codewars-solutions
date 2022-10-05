// 7 kyu - Count the divisors of a number  [ ID: 542c0f198e077084c0000c2e  (count-the-divisors-of-a-number) ]
// URL: https://www.codewars.com/kata/542c0f198e077084c0000c2e
// Category: REFERENCE  |  Tags: NUMBER THEORY | MATHEMATICS | FUNDAMENTALS
// *****************************************************************************
function getDivisorsCnt(n){
      const sqrt = Math.sqrt(n)
      let answer = 0
      for (let i = 1; i <= sqrt; i++) {
          if (n % (i) === 0) answer++
      }
      return sqrt % 1 === 0 ? answer * 2 - 1 : answer * 2
  }
// *****************************************************************************
// *****************************************************************************
function getDivisorsCnt(n){
      const s = Math.sqrt(n)
      let arr = []
      if (n === 1) return 1
      if (n === 2) return 2
      for (let i = 0; i < s; i++) {
          if (n % (i + 1) == 0) arr.push(i + 1)
      }
      return s % 1 === 0 ? arr.length * 2 - 1 : arr.length * 2
  }

