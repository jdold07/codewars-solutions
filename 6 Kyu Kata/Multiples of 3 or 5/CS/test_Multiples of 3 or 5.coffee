describe = require("mocha").describe
it = require("mocha").it

describe "Basic Tests", ->
  it "Testing for basic tests", ->
    Test.assertEquals solution(10), 23, "Expected 23, got " + solution 10
    Test.assertEquals solution(20), 78, "Expected 78, got " + solution 20
    Test.assertEquals solution(200), 9168, "Expected 9168, got " + solution 200
    Test.assertEquals solution(0), 0, "Expected 0, got " + solution 0
    Test.assertEquals solution(1), 0, "Expected 0, got " + solution 1

describe "Random Tests", ->
  sol = (number) -> Array.from(length: number).reduce ((a, _, i) -> a + (if (i % 3) == 0 || (i % 5) == 0 then i else 0)), 0

  randInt = (min, max) -> Math.floor(Math.random() * (max - min + 1)) + min

  for i in [1..100]
    n = randInt 0, 10 ** randInt 1, 5
    expected = sol n
    it "solution(#{n}) should equal #{expected}", ->
      Test.assertEquals solution(n), expected
