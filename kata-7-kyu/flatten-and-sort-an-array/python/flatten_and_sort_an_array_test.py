# + =====================================================================================================================
# +
# + 7 kyu - Flatten and sort an array  [ ID: 57ee99a16c8df7b02d00045f ] (flatten-and-sort-an-array)
# + URL: https://www.codewars.com/kata/57ee99a16c8df7b02d00045f
# + Category: REFERENCE  |  Tags: ARRAYS | SORTING | FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from flatten_and_sort_an_array import flatten_and_sort


def test_flatten_and_sort(array, expected):
    test.assert_equals(flatten_and_sort(array), expected, "flatten_and_sort({!r})".format(array))


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test_flatten_and_sort([[]], [])
        test_flatten_and_sort([[], []], [])
        test_flatten_and_sort([[], [1]], [1])
        test_flatten_and_sort([[], [], [], [2], [], [1]], [1, 2])
        test_flatten_and_sort([[3, 2, 1], [7, 9, 8], [6, 4, 5]], [1, 2, 3, 4, 5, 6, 7, 8, 9])
        test_flatten_and_sort([[1, 3, 5], [100], [2, 4, 6]], [1, 2, 3, 4, 5, 6, 100])
        test_flatten_and_sort(
            [[111, 999], [222], [333], [444], [888], [777], [666], [555]], [111, 222, 333, 444, 555, 666, 777, 888, 999]
        )

    @test.it("should work for some core test cases")
    def more_test_cases():
        test_flatten_and_sort([[9, 7, 5, 3, 1], [8, 6, 4, 2, 0], [], [1]], [0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        test_flatten_and_sort([[1], [], [1], [], [], [-1, -2, -1], [0, 3], [1], [2]], [-2, -1, -1, 0, 1, 1, 1, 2, 3])
        test_flatten_and_sort(
            [[], [], [64], [], [504, 503], [4096], [], [303], [202], [2500], [], [100]],
            [64, 100, 202, 303, 503, 504, 2500, 4096],
        )
        test_flatten_and_sort([[90, 81, 72], [63, 54, 35], [], [46], [27, 18, 0]], [0, 18, 27, 35, 46, 54, 63, 72, 81, 90])
        test_flatten_and_sort([[1], [], [1], [1], [0], [-1], [], [0], [-1], [0], [-1]], [-1, -1, -1, 0, 0, 0, 1, 1, 1])
        test_flatten_and_sort([[-9, -8, -7, -6, -5, -4, -3, -2, -1]], [-9, -8, -7, -6, -5, -4, -3, -2, -1])
        test_flatten_and_sort([[9, 8, 7, 6, 5, 4, 3, 2, 1]], [1, 2, 3, 4, 5, 6, 7, 8, 9])


@test.describe("Random Tests")
def random_tests():

    import itertools
    import random

    def unflatten_array(array, split_count):
        indexes = sorted(itertools.chain((0, len(array)), (random.randrange(len(array) + 1) for _ in range(split_count))))
        return [array[a:b] for a, b in zip(indexes, indexes[1:])]

    for _ in range(100):
        values = [random.randrange(-10000, 10000) for _ in range(random.randrange(256))]
        array = unflatten_array(values[:], random.randrange(len(values) + 1))

        @test.it(f"Testing for flatten_and_sort({repr(array)})")
        def __():
            test_flatten_and_sort(array[:], sorted(values[:]))
