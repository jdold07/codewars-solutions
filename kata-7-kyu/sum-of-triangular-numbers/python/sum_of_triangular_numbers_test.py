# + =====================================================================================================================
# +
# + 7 kyu - Sum of Triangular Numbers  [ ID: 580878d5d27b84b64c000b51 ] (sum-of-triangular-numbers)
# + URL: https://www.codewars.com/kata/580878d5d27b84b64c000b51
# + Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from sum_of_triangular_numbers import sum_triangular_numbers


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(sum_triangular_numbers(6), 56)
        test.assert_equals(sum_triangular_numbers(34), 7140)
        test.assert_equals(sum_triangular_numbers(-291), 0)
        test.assert_equals(sum_triangular_numbers(943), 140205240)
        test.assert_equals(sum_triangular_numbers(-971), 0)


@test.describe("Random Tests")
def _():

    from random import randint

    def sum_triangular_numbers_check(n):
        if n <= 0:
            return 0
        return n * (n + 1) * (n + 2) // 6

    for h in range(100):
        n = randint(100, 1000)
        result = sum_triangular_numbers_check(n)
        res = sum_triangular_numbers(n)

        @test.it("Testing for sum_triangular_numbers({n})")
        def _():
            test.assert_equals(res, result)
