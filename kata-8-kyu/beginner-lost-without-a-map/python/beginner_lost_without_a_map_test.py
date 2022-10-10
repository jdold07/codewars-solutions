# + =====================================================================================================================
# +
# + 8 kyu - Beginner - Lost Without a Map  [ ID: 57f781872e3d8ca2a000007e ] (beginner-lost-without-a-map)
# + URL: https://www.codewars.com/kata/57f781872e3d8ca2a000007e
# + Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
# +
# + =====================================================================================================================

import codewars_test as test
from beginner_lost_without_a_map import maps


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        tests = [[[1, 2, 3], [2, 4, 6]], [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]], [[], []]]

        for inp, exp in tests:
            test.assert_equals(maps(inp), exp)


@test.describe("Random Tests")
def random_tests():

    from random import randint

    reference = lambda a: [e * 2 for e in a]

    for _ in range(100):
        test_case = [randint(-1000, 1000) for i in range(randint(1, 1000))]

        @test.it(f"testing for maps({test_case})")
        def test_case():
            test.assert_equals(maps(test_case[:]), reference(test_case[:]))
