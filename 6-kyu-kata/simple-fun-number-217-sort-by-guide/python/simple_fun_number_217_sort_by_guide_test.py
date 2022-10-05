# 6 kyu - Simple Fun #217: Sort By Guide  [ ID: 590148d79097384be600001e  (simple-fun-number-217-sort-by-guide) ]
# URL: https://www.codewars.com/kata/590148d79097384be600001e
# Category: REFERENCE  |  Tags: ALGORITHMS | ARRAYS | SORTING
# ******************************************************************************
import codewars_test as test
from simple_fun_number_217_sort_by_guide import sort_by_guide


@test.describe("Fixed tests")
def fixed_tests():
    @test.it("Tests")
    def it_1():
        test.assert_equals(
            sort_by_guide([56, 78, 3, 45, 4, 66, 2, 2, 4], [3, 1, -1, -1, 2, -1, 4, -1, 5]), [78, 4, 3, 45, 56, 66, 2, 2, 4]
        )
        test.assert_equals(sort_by_guide([45, 56, 78], [-1, 2, 1]), [45, 78, 56])
        test.assert_equals(sort_by_guide([2, 5, 3, 1, 4, 70, 8], [2, 5, 1, 3, -1, 4, -1]), [3, 2, 1, 70, 4, 5, 8])
        test.assert_equals(
            sort_by_guide([700, 800, 400, 100, 900, 325], [2, -1, 1, -1, 3, -1]), [400, 800, 700, 100, 900, 325]
        )
        test.assert_equals(
            sort_by_guide([70, 10, 15, 800, 400, 4, 225, 438, 509, 1000], [6, 1, 4, -1, -1, 2, -1, -1, 5, 3]),
            [10, 4, 1000, 800, 400, 15, 225, 438, 509, 70],
        )
        test.assert_equals(sort_by_guide([27, 67, 80, 38, 21], [2, 5, 3, 1, 4]), [38, 27, 80, 21, 67])
        test.assert_equals(sort_by_guide([20], [-1]), [20])


@test.describe("Random tests")
def random_tests():
    from random import randint, shuffle

    def reference(a, b):
        c = sorted((x for x in zip(b, a) if x[0] != -1), reverse=True)
        return [x if y == -1 else c.pop()[1] for x, y in zip(a, b)]

    @test.it("Tests")
    def it_1():
        for _ in range(100):
            a = [randint(1, 10000) for _ in range(randint(1, 100))]
            n = randint(0, len(a))
            b = list(range(1, 1 + n)) + [-1] * (len(a) - n)
            shuffle(b)
            expected = reference(a, b)
            test.assert_equals(sort_by_guide(a, b), expected)
