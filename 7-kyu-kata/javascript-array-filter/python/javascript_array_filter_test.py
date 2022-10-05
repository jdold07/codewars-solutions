# 7 kyu - JavaScript Array Filter  [ ID: 514a6336889283a3d2000001  (javascript-array-filter) ]
# URL: https://www.codewars.com/kata/514a6336889283a3d2000001
# Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import get_even_numbers


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(get_even_numbers([2, 4, 5, 6]), [2, 4, 6], "Returned list is incorrect")
        test.assert_equals(get_even_numbers([]), [], "Returned list is incorrect")
        test.assert_equals(get_even_numbers([1]), [], "Returned list is incorrect")
        test.assert_equals(get_even_numbers([1, 2]), [2], "Returned list is incorrect")
        test.assert_equals(get_even_numbers([1, 2, 3, 4, 5]), [2, 4], "Returned list is incorrect")
        test.assert_equals(get_even_numbers([2, 4, 6, 8]), [2, 4, 6, 8], "Returned list is incorrect")


@test.describe("Random Tests")
def random_tests():

    import random

    def solution(arr):
        return list(filter(lambda x: x % 2 == 0, arr))

    for _ in range(50):
        arr_len = random.randint(10, 20)
        data = [i for i in random.sample(range(100), arr_len)]
        exp = solution(data[:])

        @test.it(f"Testing for get_even_numbers({repr(data)})")
        def _():
            test.assert_equals(get_even_numbers(data[:]), exp)
