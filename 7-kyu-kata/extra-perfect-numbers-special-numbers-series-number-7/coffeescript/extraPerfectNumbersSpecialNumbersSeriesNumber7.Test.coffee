# 7 kyu - Extra Perfect Numbers (Special Numbers Series  #7)  [ ID: 5a662a02e626c54e87000123  (extra-perfect-numbers-special-numbers-series-number-7) ]
# URL: https://www.codewars.com/kata/5a662a02e626c54e87000123
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
# ******************************************************************************
describe "Basic tests", ->
  it "Testing for 3", ->
    Test.assertDeepEquals extraPerfect(3), [1, 3]
  it "Testing for 5", ->
    Test.assertDeepEquals extraPerfect(5), [1, 3, 5]
  it "Testing for 7", ->
    Test.assertDeepEquals extraPerfect(7), [1, 3, 5, 7]
  it "Testing for 28", ->
    Test.assertDeepEquals extraPerfect(28), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]
  it "Testing for 39", ->
    Test.assertDeepEquals extraPerfect(39), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]

describe "Random tests", ->
  randint = (min, max) -> Math.floor(Math.random() * (max - min + 1)) + min
  sol = (n) -> Array.from({ length: n }, (_, i) -> i + 1).filter (item) -> item % 2 isnt 0

  for t in [1..100]
    n = randint(1, Math.pow(10, randint(1, 2)))
    it "Testing for #{n}", ->
      Test.assertDeepEquals extraPerfect(n), sol(n)
