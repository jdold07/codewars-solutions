# 7 kyu - Form The Minimum  [ ID: 5ac6932b2f317b96980000ca  (form-the-minimum) ]
# URL: https://www.codewars.com/kata/5ac6932b2f317b96980000ca
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import min_value

try:
    min_value = minValue
except NameError:
    pass


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(min_value([1, 3, 1]), 13)
        test.assert_equals(min_value([4, 7, 5, 7]), 457)
        test.assert_equals(min_value([4, 8, 1, 4]), 148)
        test.assert_equals(min_value([5, 7, 9, 5, 7]), 579)
        test.assert_equals(min_value([6, 7, 8, 7, 6, 6]), 678)
        test.assert_equals(min_value([5, 6, 9, 9, 7, 6, 4]), 45679)
        test.assert_equals(min_value([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679)
        test.assert_equals(min_value([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789)


@test.describe("Random Tests")
def _():

    from random import randint

    for _ in range(100):
        test_arr = [randint(1, 9) for _ in range(randint(1, 20))]
        exp_res = int("".join(map(str, sorted(set(test_arr)))))

        @test.it(f"Testing: {test_arr}, expecting: {exp_res}")
        def _():
            test.assert_equals(min_value(test_arr[:]), exp_res)
