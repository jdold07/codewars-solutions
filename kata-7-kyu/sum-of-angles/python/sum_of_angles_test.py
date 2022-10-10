# + =====================================================================================================================
# +
# + 7 kyu - Sum of angles  [ ID: 5a03b3f6a1c9040084001765 ] (sum-of-angles)
# + URL: https://www.codewars.com/kata/5a03b3f6a1c9040084001765
# + Category: REFERENCE  |  Tags: GEOMETRY | FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from sum_of_angles import angle


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(angle(3), 180)
        test.assert_equals(angle(4), 360)


@test.describe("Random tests")
def _():

    from random import randint

    sol = lambda n: (n - 2) * 180

    for _ in range(40):
        n = randint(3, 10 ** randint(1, 2))

        @test.it(f"Testing for angle({n})")
        def _():
            test.assert_equals(angle(n), sol(n))
