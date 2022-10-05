# 8 kyu - Grasshopper - Array Mean  [ ID: 55d277882e139d0b6000005d  (grasshopper-array-mean) ]
# URL: https://www.codewars.com/kata/55d277882e139d0b6000005d
# Category: REFERENCE  |  Tags: ARRAYS | LISTS | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import find_average


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(find_average([1]), 1)
        test.assert_equals(find_average([1, 3, 5, 7]), 4)
        test.assert_equals(find_average([-1, 3, 5, -7]), 0)
        test.assert_equals(find_average([5, 7, 3, 7]), 5.5)
        test.assert_equals(find_average([]), 0)


@test.describe("Random tests")
def random_tests():

    from random import randint

    find_sol = lambda nums: 1.0 * sum(nums) / len(nums)

    for _ in range(40):
        nums = [randint(-10, 100) for x in range(randint(1, 20))]
        expected = find_sol(nums)

        @test.it(f"testing for find_average({nums})")
        def test_case():
            test.assert_equals(find_average(nums), expected)
