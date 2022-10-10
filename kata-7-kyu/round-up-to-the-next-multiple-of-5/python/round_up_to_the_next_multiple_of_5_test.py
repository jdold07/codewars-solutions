# + =====================================================================================================================
# +
# + 7 kyu - Round up to the next multiple of 5  [ ID: 55d1d6d5955ec6365400006d ] (round-up-to-the-next-multiple-of-5)
# + URL: https://www.codewars.com/kata/55d1d6d5955ec6365400006d
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from round_up_to_the_next_multiple_of_5 import UNKNOWN


import random

test.describe("Basic Tests.")
inp = 0
out = round_to_next5(inp)
test.assert_equals(out, 0, "Input: {}".format(inp))

inp = 1
out = round_to_next5(inp)
test.assert_equals(out, 5, "Input: {}".format(inp))

inp = -1
out = round_to_next5(inp)
test.assert_equals(out, 0, "Input: {}".format(inp))

inp = 3
out = round_to_next5(inp)
test.assert_equals(out, 5, "Input: {}".format(inp))

inp = 5
out = round_to_next5(inp)
test.assert_equals(out, 5, "Input: {}".format(inp))

inp = 7
out = round_to_next5(inp)
test.assert_equals(out, 10, "Input: {}".format(inp))

inp = 20
out = round_to_next5(inp)
test.assert_equals(out, 20, "Input: {}".format(inp))

inp = 39
out = round_to_next5(inp)
test.assert_equals(out, 40, "Input: {}".format(inp))

inp = 990
out = round_to_next5(inp)
test.assert_equals(out, 990, "Input: {}".format(inp))

inp = 121
out = round_to_next5(inp)
test.assert_equals(out, 125, "Input: {}".format(inp))

inp = 555
out = round_to_next5(inp)
test.assert_equals(out, 555, "Input: {}".format(inp))

test.describe("Random Tests.")
for _ in range(100):
    n = random.randrange(-2000, 2000)
    expected = (n // 5) * 5 + bool(n % 5) * 5
    submitted = round_to_next5(n)
    test.assert_equals(submitted, expected, "Input: {}\nShould pass random tests.".format(n))
