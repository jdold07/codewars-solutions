# + =====================================================================================================================
# +
# + 7 kyu - Two Oldest Ages  [ ID: 511f11d355fe575d2c000001 ] (two-oldest-ages-1)
# + URL: https://www.codewars.com/kata/511f11d355fe575d2c000001
# + Category: ALGORITHMS  |  Tags: ARRAYS | ALGORITHMS
# +
# + =====================================================================================================================

import codewars_test as test
from two_oldest_ages_1 import two_oldest_ages


from random import randint


@test.describe("Sample Tests")
def basic_tests():
    test.assert_equals(two_oldest_ages([1, 5, 87, 45, 8, 8]), [45, 87])
    test.assert_equals(two_oldest_ages([6, 5, 83, 5, 3, 18]), [18, 83])
    test.assert_equals(two_oldest_ages([10, 1]), [1, 10])


@test.describe("Random tests")
def random_tests():
    for _ in range(40):
        arr = [randint(0, 100) for _ in range(randint(2, 30))]
        exp = sorted(arr)[-2:]

        @test.it("Testing: %s, expecting: %s" % (arr, exp))
        def test_case():
            test.assert_equals(two_oldest_ages(arr), exp)
