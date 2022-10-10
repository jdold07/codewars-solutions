# + =====================================================================================================================
# +
# + 8 kyu - Invert values  [ ID: 5899dc03bc95b1bf1b0000ad ] (invert-values)
# + URL: https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
# + Category: REFERENCE  |  Tags: LISTS | FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from invert_values import invert


import random


@test.describe("Invert values")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5])
        test.assert_equals(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5])
        test.assert_equals(invert([]), [])
        test.assert_equals(invert([0]), [0])

    @test.it("Random Tests")
    def _():

        for _ in range(500):
            lst = [random.randint(-1000, 1000) for _ in range(random.randint(0, 1000))]
            expected = [-x for x in lst]
            test.assert_equals(invert(lst[:]), expected, f"Testing for lst = {repr(lst)}")
