//+ ====================================================================================================================
//+
//+ 6 kyu - Primorial Of  a Number   [ ID: 5a99a03e4a6b34bb3c000124 ] (primorial-of-a-number)
//+ URL: https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS | NUMBER THEORY
//+
//+ ====================================================================================================================

function numPrimorial(n) {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19]
  if (primes.length < n) {
    let cur = 23
    while (primes.length < n) {
      let isPrime = true
      for (let i = 3; i <= cur ** 0.5 + 1; i += 2) {
        if (!(cur % i)) {
          isPrime = false
          break
        }
      }
      if (isPrime) primes.push(cur)
      cur += 2
    }
  }
  return primes.slice(0, n).reduce((a, c) => a * c, 1)
}

module.exports = { numPrimorial }
