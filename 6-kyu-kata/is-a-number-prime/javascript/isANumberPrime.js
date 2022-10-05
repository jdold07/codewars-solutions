// 6 kyu - Is a number prime?  [ ID: 5262119038c0985a5b00029f  (is-a-number-prime) ]
// URL: https://www.codewars.com/kata/5262119038c0985a5b00029f
// Category: ALGORITHMS  |  Tags: MATHEMATICS | ALGORITHMS
// *****************************************************************************
function isPrime(num) {
      if (num === 2) return true
      if (num % 2 === 0) return false
      for (let i = 3, s = Math.sqrt(num); i <= s; i += 2) {
              if (num % i === 0 || s % 1 === 0) return false
          }
      return num > 2
  }
