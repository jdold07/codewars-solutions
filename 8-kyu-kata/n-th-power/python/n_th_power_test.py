# 8 kyu - N-th Power  [ ID: 57d814e4950d8489720008db  (n-th-power) ]
# URL: https://www.codewars.com/kata/57d814e4950d8489720008db
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import index


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(index([1, 2, 3, 4], 2), 9)
        test.assert_equals(index([1, 3, 10, 100], 3), 1000000)
        test.assert_equals(index([5, 1], 0), 1)
        test.assert_equals(index([3, 1], 1), 1)
        test.assert_equals(index([1, 2], 2), -1)
        test.assert_equals(index([1, 2], 3), -1)
        test.assert_equals(index([7], 0), 1)
        test.assert_equals(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9), 1)
        test.assert_equals(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 100], 9), 1000000000000000000)
        test.assert_equals(index([29, 82, 45, 10], 3), 1000)
        test.assert_equals(index([6, 31], 3), -1)
        test.assert_equals(index([75, 68, 35, 61, 9, 36, 89, 11, 30], 10), -1)


@test.describe("Random Tests")
def random_tests():

    from random import randint as R

    def solution(array, n):
        if len(array) <= n:
            return -1
        return array[n] ** n

    for _ in range(100):
        n = R(0, 10)
        a = [R(0, 20) for _ in range(R(0, 10))]
        expected = solution(a, n)

        @test.it(f"testing for index({a}, {n})")
        def test_case():
            test.assert_equals(index(a[:], n), expected)
