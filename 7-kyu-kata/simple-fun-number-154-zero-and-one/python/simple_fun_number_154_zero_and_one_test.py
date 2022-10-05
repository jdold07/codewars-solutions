# 7 kyu - Simple Fun #154: Zero And One  [ ID: 58ad09d6154165a1c80000d1  (simple-fun-number-154-zero-and-one) ]
# URL: https://www.codewars.com/kata/58ad09d6154165a1c80000d1
# Category: GAMES  |  Tags: PUZZLES
# ******************************************************************************
import codewars_test as test
from solution import zero_and_one

@test.describe("Fixed tests")
def test_group():
    @test.it("Sample tests")
    def test_case():
        test.assert_equals(zero_and_one("01010"), 1)
        test.assert_equals(zero_and_one("11101111"), 6)
        test.assert_equals(zero_and_one("01"), 0)
        test.assert_equals(zero_and_one("10"), 0)
        test.assert_equals(zero_and_one("110110"), 2)
        test.assert_equals(zero_and_one("110100"), 2)


@test.describe("Random tests")
def test_group():
    from random import randint
    import re
    
    for _ in range(100):
        s = "".join(str(randint(0, 1)) for _ in range(randint(1, 100)))
        
        @test.it(f'Testing "{s}"')
        def test_case():
            expected = len(re.sub("01|10", "", s))
            test.assert_equals(zero_and_one(s), expected)
            
