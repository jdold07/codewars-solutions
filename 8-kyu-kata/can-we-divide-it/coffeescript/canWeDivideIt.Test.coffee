# 8 kyu - Can we divide it?  [ ID: 5a2b703dc5e2845c0900005a  (can-we-divide-it) ]
# URL: https://www.codewars.com/kata/5a2b703dc5e2845c0900005a
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
Test.describe "Basic tests", ->
  Test.assertEquals isDivideBy(8, 2, 4), true
  Test.assertEquals isDivideBy(12, -3, 4), true
  Test.assertEquals isDivideBy(8, 3, 4), false
  Test.assertEquals isDivideBy(5, 2, -2), false
  Test.assertEquals isDivideBy(-100, -25, 10), true
  Test.assertEquals isDivideBy(10000, 5, -3), false
  Test.assertEquals isDivideBy(4, 4, 2), true
  Test.assertEquals isDivideBy(5, 2, 3), false
  Test.assertEquals isDivideBy(-96, 25, 17), false
  Test.assertEquals isDivideBy(33, 1, 33), true

Test.describe "Random Tests for positive integers", ->
  randomInt = (a, b) -> Math.floor Math.random() * (b - a + 1) + a
  check = (number, a, b) -> (number % a) is 0 && (number % b) is 0

  for i in [0..9]
    number = randomInt 1, 10000
    a = randomInt 1, 4
    b = randomInt 1, 7
    Test.it "Testing for isDivideBy(" + number + ", " + a + ", " + b + ")", ->
      Test.assertEquals isDivideBy(number, a, b), check(number, a, b), "It should work for random tests too"

Test.describe "Random Tests for negative integers", ->
  randomInt = (a, b) -> Math.floor Math.random() * (b - a + 1) + a
  check = (number, a, b) -> (number % a) is 0 && (number % b) is 0

  for i in [0..9]
    number = randomInt -10000, 1000
    a = randomInt -4, -1
    b = randomInt -7, -1
    Test.it "Testing for isDivideBy(" + number + ", " + a + ", " + b + ")", ->
      Test.assertEquals isDivideBy(number, a, b), check(number, a, b), "It should work for random tests too"
