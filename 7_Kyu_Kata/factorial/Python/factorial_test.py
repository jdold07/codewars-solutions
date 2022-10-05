# [object Object] - Factorial  [ ID: 54ff0d1f355cfd20e60001fc  (factorial) ]
# URL: https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc
# Category: REFERENCE  |  Tags: ALGORITHMS | FUNDAMENTALS
# ******************************************************************************
from random import randint, choice
from math import factorial as fact
import codewars_test as test
from solution import factorial


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(factorial(0), 1, "factorial for 0 is 1"),
        test.assert_equals(factorial(1), 1, "factorial for 1 is 1"),
        test.assert_equals(factorial(2), 2, "factorial for 2 is 2"),
        test.assert_equals(factorial(3), 6, "factorial for 3 is 6"),
        test.assert_equals(factorial(4), 24, "factorial for 4 is 24"),
        test.assert_equals(factorial(5), 120, "factorial for 5 is 120"),
        test.assert_equals(factorial(6), 720, "factorial for 6 is 720"),
        test.assert_equals(factorial(7), 5040, "factorial for 7 is 5040"),
        test.assert_equals(factorial(8), 40320, "factorial for 8 is 40320"),
        test.assert_equals(factorial(9), 362880, "factorial for 9 is 362880"),
        test.assert_equals(factorial(10), 3628800, "factorial for 10 is 3628800"),
        test.assert_equals(factorial(11), 39916800, "factorial for 11 is 39916800"),
        test.assert_equals(factorial(12), 479001600, "factorial for 12 is 479001600"),
        test.expect_error("Should throw error", lambda: factorial(-1), exception=ValueError),
        test.expect_error("Should throw error", lambda: factorial(-100), exception=ValueError),
        test.expect_error("Should throw error", lambda: factorial(22), exception=ValueError),

@test.describe("Random Cases")
def random_tests():
    def solution(n):
        try:
            assert(0 <= n < 13)
        except:
            raise ValueError()
        return fact(n)
    for _ in range(100):
        n = randint(0, 12) if randint(0, 5) else randint(-42, 42)
        @test.it(f"testing for factorial({n})")
        def random_test_cases():
            if n < 0 or n > 12:
                test.expect_error("Should throw error", lambda: factorial(n), exception=ValueError)
            else:
                test.assert_equals(factorial(n), solution(n))
