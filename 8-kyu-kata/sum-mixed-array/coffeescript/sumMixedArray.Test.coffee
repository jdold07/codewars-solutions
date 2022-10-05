# 8 kyu - Sum Mixed Array  [ ID: 57eaeb9578748ff92a000009  (sum-mixed-array) ]
# URL: https://www.codewars.com/kata/57eaeb9578748ff92a000009
# Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
# ******************************************************************************
describe "Basic Tests", ->
  it "Testing for basic tests", ->
    Test.assertEquals sumMix([9, 3, "7", "3"]), 22
    Test.assertEquals sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 42
    Test.assertEquals sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 41
    Test.assertEquals sumMix(["1", "5", "8", 8, 9, 9, 2, "3"]), 45
    Test.assertEquals sumMix([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7]), 61

describe "Random Tests", ->
  it "Testing for random tests", ->
    sol = (arr) -> arr.reduce ((a, b) -> a + +b), 0

    randint = (min, max) -> Math.floor(Math.random() * (max - min + 1)) + min

    for i in [1..100]
      arr = Array.from length: randint(1, 30), -> if randint(0, 1) == 0 then randint -100, 100 else String randint -100, 100
      Test.assertEquals sumMix(arr), sol arr
