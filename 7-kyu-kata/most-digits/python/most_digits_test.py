# 7 kyu - Most digits  [ ID: 58daa7617332e59593000006  (most-digits) ]
# URL: https://www.codewars.com/kata/58daa7617332e59593000006
# Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import find_longest


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(find_longest([1, 10, 100]), 100)
        test.assert_equals(find_longest([9000, 8, 800]), 9000)
        test.assert_equals(find_longest([8, 900, 500]), 900)
        test.assert_equals(find_longest([3, 40000, 100]), 40000)
        test.assert_equals(find_longest([1, 200, 100000]), 100000)


@test.describe("Random tests")
def random_tests():

    from random import randint
    from functools import reduce

    sol = lambda arr: reduce(lambda a, b: b if len(str(a)) < len(str(b)) else a, arr)

    for _ in range(40):
        arr = [randint(1, 10 ** randint(1, 20)) for q in range(randint(1, 50))]
        expected = sol(arr)

        @test.it(f"Testing for find_longest({arr})")
        def _():
            test.assert_equals(find_longest(arr[:]), expected)
