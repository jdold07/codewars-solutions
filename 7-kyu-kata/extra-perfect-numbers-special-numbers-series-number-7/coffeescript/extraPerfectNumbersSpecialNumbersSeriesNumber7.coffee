# 7 kyu - Extra Perfect Numbers (Special Numbers Series  #7)  [ ID: 5a662a02e626c54e87000123  (extra-perfect-numbers-special-numbers-series-number-7) ]
# URL: https://www.codewars.com/kata/5a662a02e626c54e87000123
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
# ******************************************************************************
extraPerfect = (n) ->
  Array.from(length: n, (_, i) -> i + 1).filter (v) -> v % 2
