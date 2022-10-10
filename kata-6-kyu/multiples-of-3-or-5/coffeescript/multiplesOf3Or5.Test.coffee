#+ =====================================================================================================================
#+
#+ 6 kyu - Multiples of 3 or 5  [ ID: 514b92a657cdc65150000006 ] (multiples-of-3-or-5)
#+ URL: https://www.codewars.com/kata/514b92a657cdc65150000006
#+ Category: ALGORITHMS  |  Tags: MATHEMATICS | ALGORITHMS
#+
#+ =====================================================================================================================

{ assert } = require "chai"
{ solution } = require "./multiplesOf3Or5"

describe "Basic Tests", ->
  it "Testing for basic tests", ->
    assert.strictEqual solution(10), 23, "Expected 23, got " + solution 10
    assert.strictEqual solution(20), 78, "Expected 78, got " + solution 20
    assert.strictEqual solution(200), 9168, "Expected 9168, got " + solution 200
    assert.strictEqual solution(0), 0, "Expected 0, got " + solution 0
    assert.strictEqual solution(1), 0, "Expected 0, got " + solution 1

describe "Random Tests", ->
  sol = (number) -> Array.from(length: number).reduce ((a, _, i) -> a + (if (i % 3) == 0 || (i % 5) == 0 then i else 0)), 0

  randint = (min, max) -> Math.floor(Math.random() * (max - min + 1)) + min

  for i in [1..100]
    n = randint 0, 10 ** randint 1, 5
    expected = sol n
    it "solution(#{n}) should equal #{expected}", ->
      assert.strictEqual solution(n), expected
