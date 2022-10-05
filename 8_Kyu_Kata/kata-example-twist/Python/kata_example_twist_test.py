# [object Object] - Kata Example Twist  [ ID: 525c1a07bb6dda6944000031  (kata-example-twist) ]
# URL: https://www.codewars.com/kata/525c1a07bb6dda6944000031
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import websites

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(len(websites), 1000)
        test.assert_equals(type(websites), list)
        test.assert_equals(list(set(websites)), ["codewars"])
