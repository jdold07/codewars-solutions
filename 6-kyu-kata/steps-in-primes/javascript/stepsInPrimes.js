// 6 kyu - Steps in Primes  [ ID: 5613d06cee1e7da6d5000055  (steps-in-primes) ]
// URL: https://www.codewars.com/kata/5613d06cee1e7da6d5000055
// Category: REFERENCE  |  Tags: MATHEMATICS | NUMBER THEORY
// *****************************************************************************
function isPrime(i) {
    for (j = 3; j * j <= i; j += 2) {
      if (!(i % j)) return false
    }
    return true
  }
  
  function step(g, m, n) {
    let i = m
    const primes = []
    if (m !== 2 && g % 2) return null
    if (m === 2) {
      primes.push(m)
      i = 3
    } else if (!(m % 2)) i += 1
  
    for (i; i <= n; i += 2) {
      if (!isPrime(i)) continue
      if (primes.includes(i - g)) return [i - g, i]
      primes.push(i)
    }
    return null
  }
// *****************************************************************************
// *****************************************************************************
function step(g, m, n) {
    if (g > 1 && g % 2) return null
    let primes = []
    let i = m
    if (m === 2) {
      primes.push(m)
      i = 3
    } else if (!(m % 2)) i += 1
  
    for (i; i <= n; i += 2) {
      let isPrime = true
      for (j = 3; j * j <= i; j += 2) {
        if (!(i % j)) {
          isPrime = false
          break
        }
      }
      if (isPrime && primes.includes(i - g)) return [i - g, i]
      isPrime && primes.push(i)
    }
    return null
  }

