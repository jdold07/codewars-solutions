#+ =====================================================================================================================
#+
#+ 6 kyu - Steps in Primes  [ ID: 5613d06cee1e7da6d5000055 ] (steps-in-primes)
#+ URL: https://www.codewars.com/kata/5613d06cee1e7da6d5000055
#+ Category: REFERENCE  |  Tags: MATHEMATICS | NUMBER THEORY
#+
#+ =====================================================================================================================

step = (g, m, n) ->
  i = m
  primes = []
  if m != 2 && (g % 2)
    return null
  if m == 2
    primes.push m
    i = 3
  else if !(m % 2)
    i += 1

  while i <= n
    if !isPrime i
      i += 2
      continue
    return [i - g, i] if primes.includes i - g
    primes.push i
    i += 2

  return null

isPrime = (i) ->
  for j in [3..(Math.ceil i ** 0.5)] by 2
    return false if !(i % j)
  return true

module.exports = { step }
