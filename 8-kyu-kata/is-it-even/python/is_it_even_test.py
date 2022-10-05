# 8 kyu - Is it even?  [ ID: 555a67db74814aa4ee0001b5  (is-it-even) ]
# URL: https://www.codewars.com/kata/555a67db74814aa4ee0001b5
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import is_even


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_tests():
        test.assert_equals(is_even(0), True)
        test.assert_equals(is_even(0.5), False)
        test.assert_equals(is_even(1), False)
        test.assert_equals(is_even(2), True)
        test.assert_equals(is_even(-4), True)
        test.assert_equals(is_even(15), False)
        test.assert_equals(is_even(20), True)
        test.assert_equals(is_even(220), True)
        test.assert_equals(is_even(222222221), False)
        test.assert_equals(is_even(500000000), True)


@test.describe("Random Tests")
def random_tests():

    from random import randint, random, choice

    def _is_even_solution(n):
        return n % 2 == 0

    def _do_one_test_int():
        number = randint(-100, 100)
        expected_solution = _is_even_solution(number)
        user_solution = is_even(number)
        test.assert_equals(user_solution, expected_solution)

    def _do_one_test_float():
        number = 100 * random() - 50
        expected_solution = _is_even_solution(number)
        user_solution = is_even(number)
        test.assert_equals(user_solution, expected_solution)

    @test.it("Random Test Cases")
    def random_test_cases():
        options = [_do_one_test_int, _do_one_test_float]
        for _ in range(100):
            test = choice(options)
            test()
