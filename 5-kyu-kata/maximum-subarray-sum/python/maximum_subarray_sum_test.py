# 5 kyu - Maximum  subarray sum  [ ID: 54521e9ec8e60bc4de000d6c  (maximum-subarray-sum) ]
# URL: https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
# Category: REFERENCE  |  Tags: ALGORITHMS | LISTS | DYNAMIC PROGRAMMING | FUNDAMENTALS
# ******************************************************************************
try:
    # backwards compatibility
    max_sequence = maxSequence
except NameError:
    pass

test.describe("Tests")
test.it("should work on an empty array")
test.assert_equals(max_sequence([]), 0)
test.it("should work on the example")
test.assert_equals(max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6)
test.it("should work on the example with negative numbers")
test.assert_equals(max_sequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]), 0)
test.it("should work on this too")
test.assert_equals(max_sequence([7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43]), 155)
test.it("should work on random arrays")
from random import randint


def randomArray(size):
    return [randint(-30, 30) for i in range(0, size)]


def max_sequence_sol(arr):
    lowest = ans = total = 0
    for i in arr:
        total += i
        lowest = min(lowest, total)
        ans = max(ans, total - lowest)
    return ans


for i in range(50):
    ary = randomArray(50)
    test.assert_equals(max_sequence(ary[:]), max_sequence_sol(ary))
