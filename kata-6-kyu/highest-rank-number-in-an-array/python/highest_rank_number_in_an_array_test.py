# + =====================================================================================================================
# +
# + 6 kyu - Highest Rank Number in an Array  [ ID: 5420fc9bb5b2c7fd57000004 ] (highest-rank-number-in-an-array)
# + URL: https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004
# + Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from highest_rank_number_in_an_array import highest_rank


test.describe("Example Tests")

test.assert_equals(highest_rank([12, 10, 8, 12, 7, 6, 4, 10, 12]), 12)
test.assert_equals(highest_rank([12, 10, 8, 12, 7, 6, 4, 10, 10]), 10)
test.assert_equals(highest_rank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]), 12)
test.assert_equals(highest_rank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]), 3)
test.assert_equals(highest_rank([1, 2, 3]), 3)
test.assert_equals(highest_rank([1, 1, 2, 3]), 1)
test.assert_equals(highest_rank([1, 1, 2, 2, 3]), 2)


test.describe("Random Tests")

from random import randint

for _ in range(100):
    arr = [randint(0, 50) for _ in range(randint(5, 25))]
    exp = sorted(arr, key=lambda k: (-{x: arr.count(x) for x in arr}[k], -k))[0]
    test.assert_equals(highest_rank(arr), exp)
