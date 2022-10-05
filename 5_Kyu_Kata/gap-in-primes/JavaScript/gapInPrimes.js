// [object Object] - Gap in Primes  [ ID: 561e9c843a2ef5a40c0000a4  (gap-in-primes) ]
// URL: https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
function gap(g, m, n) {
      if (m <= 1) m = 2
      if (g % 2 !== 0 && m !== 2) return null
      
      function isPrime(num) {
          if (num === 2) return true
          if (num % 2 !== 0) {
              for(let i = 3, s = Math.sqrt(num); i <= s; i += 2) {
                  if (num % i === 0 || s % 1 === 0) return false
              }
              return num > 2
          }
      }
  
      let previous = null
      for (let i = m; i <= n; i++) {
          if (isPrime(i)) {
              if (previous === null) previous = i
              else if (i - previous === g) return [previous, i]
              else previous = i
          }
      }
      return null
  }
