# [object Object] - Find the next perfect square!  [ ID: 56269eb78ad2e4ced1000013  (find-the-next-perfect-square) ]
# URL: https://www.codewars.com/kata/56269eb78ad2e4ced1000013
# Category: REFERENCE  |  Tags: ALGEBRA | FUNDAMENTALS
# ******************************************************************************
Test.describe "findNextSquare", ->
  Test.it "should return the next square for perfect squares", ->
    Test.assertEquals(findNextSquare(121), 144, "Wrong output for 121")
    Test.assertEquals(findNextSquare(625), 676, "Wrong output for 625")
    Test.assertEquals(findNextSquare(319225), 320356, "Wrong output for 319225")
    Test.assertEquals(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936")

  Test.it "should return -1 for numbers which aren't perfect squares", ->
    Test.assertEquals(findNextSquare(155), -1, "Wrong output for 155")
    Test.assertEquals(findNextSquare(342786627), -1, "Wrong output for 342786627")

  Test.it "should work for random inputs", ->

    solution = (number) ->
      sqrt = Math.sqrt(number) + 1

      if sqrt % 1 is 0
        return sqrt * sqrt

      -1

    for i in [0...40]
      power = (Math.floor(Math.random() * 10) % 5) + 1
      sq = Math.floor(Math.random() * 10**power)
      sq = sq*sq if Math.random() > 0.5

      message = "Wrong output for #{sq}"
      Test.assertEquals(findNextSquare(sq), solution(sq), message)

