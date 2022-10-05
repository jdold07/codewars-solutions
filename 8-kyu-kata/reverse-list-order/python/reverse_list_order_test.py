# 8 kyu - Reverse List Order  [ ID: 53da6d8d112bd1a0dc00008b  (reverse-list-order) ]
# URL: https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b
# Category: REFERENCE  |  Tags: LISTS | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import reverse_list


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(reverse_list([1, 2, 3, 4]), [4, 3, 2, 1])
        test.assert_equals(reverse_list([3, 1, 5, 4]), [4, 5, 1, 3])
        test.assert_equals(reverse_list([3, 6, 9, 2]), [2, 9, 6, 3])
        test.assert_equals(reverse_list([1]), [1])


@test.describe("Random Tests")
def random_tests():

    from random import randint as R

    for _ in range(100):
        a = [R(-10, 10) for _ in range(R(0, 10))]
        b = a[::-1]

        @test.it(f"testing for reverse_list({a})")
        def test_case():
            test.assert_equals(reverse_list(a), b)
