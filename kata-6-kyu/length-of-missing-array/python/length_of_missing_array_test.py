# + =====================================================================================================================
# +
# + 6 kyu - Length of missing array  [ ID: 57b6f5aadb5b3d0ae3000611 ] (length-of-missing-array)
# + URL: https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611
# + Category: ALGORITHMS  |  Tags: ARRAYS | ALGORITHMS
# +
# + =====================================================================================================================

import codewars_test as test
from length_of_missing_array import get_length_of_missing_array


test.describe("Basic Tests")
tests = (
    ([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]], 3),
    ([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]], 2),
    ([[None], [None, None, None]], 2),
    ([["a", "a", "a"], ["a", "a"], ["a", "a", "a", "a"], ["a"], ["a", "a", "a", "a", "a", "a"]], 5),
)


for case in tests:
    inp, exp = case
    test.assert_equals(get_length_of_missing_array(inp), exp)


test.describe("Random Tests")


def reference(a):
    lns = a and all(a) and list(map(len, a))
    return int(bool(lns)) and sum(range(min(lns), max(lns) + 1)) - sum(lns)


from random import randint, shuffle


def generate_test_case():
    start = randint(0, 100)
    size = randint(0, 50)

    if size < 3:
        return []
    if size == 3:
        return [[0] * i for i in (start, start + 2)]

    end = start + size

    len_range = list(range(start, end + 1))
    missing = randint(start + 1, end - 1)
    len_range.remove(missing)
    test_case = [[0] * l for l in len_range]
    if randint(0, 50) % 20 == 0:
        test_case.append(None)

    if randint(0, 50) % 20 == 0 and [] not in test_case:
        test_case.append([])

    shuffle(test_case)

    return test_case


for _ in range(100):
    test_case = generate_test_case()
    test.assert_equals(get_length_of_missing_array(test_case), reference(test_case))
