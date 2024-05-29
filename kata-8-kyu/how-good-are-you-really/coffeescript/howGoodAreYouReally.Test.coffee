#+ =====================================================================================================================
#+
#+ 8 kyu - How good are you really?  [ ID: 5601409514fc93442500010b ] (how-good-are-you-really)
#+ URL: https://www.codewars.com/kata/5601409514fc93442500010b
#+ Category: REFERENCE  |  Tags: FUNDAMENTALS
#+
#+ =====================================================================================================================

{ assert } = require "vitest"
{ betterThanAverage } = require "./howGoodAreYouReally"

describe "Basic Tests", ->
  assert.strictEqual betterThanAverage([2, 3], 5), true
  assert.strictEqual betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true
  assert.strictEqual betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69), true
  assert.strictEqual betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false
  assert.strictEqual betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false

describe "Random Tests", ->
  sol = (classPoints, yourPoints) -> classPoints.reduce(((a, b) -> a + b), 0) / classPoints.length < yourPoints
  for t in [1..100]
    arr = Array.from length: 50, -> Math.floor Math.random() * 100
    points = Math.floor Math.random() * 100
    assert.strictEqual betterThanAverage(arr.slice(), points), sol arr, points
