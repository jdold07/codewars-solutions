# + =====================================================================================================================
# +
# + 7 kyu - Triangular Treasure  [ ID: 525e5a1cb735154b320002c8 ] (triangular-treasure)
# + URL: https://www.codewars.com/kata/525e5a1cb735154b320002c8
# + Category: ALGORITHMS  |  Tags: ALGORITHMS | MATHEMATICS
# +
# + =====================================================================================================================

import codewars_test as test
from triangular_treasure import triangular


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(triangular(2), 3)
        test.assert_equals(triangular(7), 28)
        test.assert_equals(triangular(12), 78)
        test.assert_equals(triangular(25), 325)
        test.assert_equals(triangular(50), 1275)
        test.assert_equals(triangular(1000), 500500)
        test.assert_equals(triangular(5000), 12502500)
        test.assert_equals(triangular(10000), 50005000)
        test.assert_equals(triangular(0), 0)
        test.assert_equals(triangular(-1), 0)
        test.assert_equals(triangular(-5), 0)


@test.describe("Random tests")
def _():

    from random import randint

    sol = lambda n: n * (n + 1) // 2 if n > 0 else 0

    for _ in range(40):
        randexp = randint(1, 15)
        n = randint(1, 10**randexp)

        @test.it(f"Testing for triangular({n})")
        def _():
            test.assert_equals(triangular(n), sol(n))
