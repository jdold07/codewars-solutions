# + =====================================================================================================================
# +
# + 7 kyu - Row Weights  [ ID: 5abd66a5ccfd1130b30000a9 ] (row-weights)
# + URL: https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9
# + Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
# +
# + =====================================================================================================================

import codewars_test as test
from row_weights import row_weights


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(row_weights([80]), (80, 0))
        test.assert_equals(row_weights([100, 50]), (100, 50))
        test.assert_equals(row_weights([50, 60, 70, 80]), (120, 140))
        test.assert_equals(row_weights([13, 27, 49]), (62, 27))
        test.assert_equals(row_weights([70, 58, 75, 34, 91]), (236, 92))
        test.assert_equals(row_weights([29, 83, 67, 53, 19, 28, 96]), (211, 164))
        test.assert_equals(row_weights([0]), (0, 0))
        test.assert_equals(row_weights([100, 51, 50, 100]), (150, 151))
        test.assert_equals(row_weights([39, 84, 74, 18, 59, 72, 35, 61]), (207, 235))
        test.assert_equals(row_weights([0, 1, 0]), (0, 1))


@test.describe("Random tests")
def do():

    from random import randint
    from functools import reduce

    sol = lambda arr: reduce(lambda a, b: (a[0], a[1] + b[1]) if b[0] % 2 else (a[0] + b[1], a[1]), enumerate(arr), (0, 0))

    for _ in range(100):
        arr = [randint(1, 10 ** randint(1, 3)) for q in range(randint(1, 35))]
        expected = sol(arr)

        @test.it(f"Testing for row_weights({arr})")
        def _():
            test.assert_equals(row_weights(arr[:]), expected)
