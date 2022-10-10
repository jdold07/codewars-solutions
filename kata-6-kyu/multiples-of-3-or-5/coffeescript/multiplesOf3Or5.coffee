#+ =====================================================================================================================
#+
#+ 6 kyu - Multiples of 3 or 5  [ ID: 514b92a657cdc65150000006 ] (multiples-of-3-or-5)
#+ URL: https://www.codewars.com/kata/514b92a657cdc65150000006
#+ Category: ALGORITHMS  |  Tags: MATHEMATICS | ALGORITHMS
#+
#+ =====================================================================================================================

solution = (n) ->
  sum = i = 0
  while i < n - 1
    i++
    if (i % 3) == 0 || (i % 5) == 0
      sum += i
  sum

module.exports = { solution }
