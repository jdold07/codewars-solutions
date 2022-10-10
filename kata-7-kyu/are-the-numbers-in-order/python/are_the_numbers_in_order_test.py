# + =====================================================================================================================
# +
# + 7 kyu - Are the numbers in order?  [ ID: 56b7f2f3f18876033f000307 ] (are-the-numbers-in-order)
# + URL: https://www.codewars.com/kata/56b7f2f3f18876033f000307
# + Category: ALGORITHMS  |  Tags: FUNDAMENTALS | MATHEMATICS | ALGORITHMS
# +
# + =====================================================================================================================

import codewars_test as test
from are_the_numbers_in_order import in_asc_order


test.describe("Basic Tests")
test.it("Tests")
arr = [1, 2]
test.assert_equals(in_asc_order(arr), True)

arr = [2, 1]
test.assert_equals(in_asc_order(arr), False)
arr = [1, 2, 3]
test.assert_equals(in_asc_order(arr), True)

arr = [1, 3, 2]
test.assert_equals(in_asc_order(arr), False)
arr = [1, 4, 13, 97, 508, 1047, 20058]
test.assert_equals(in_asc_order(arr), True)

arr = [56, 98, 123, 67, 742, 1024, 32, 90969]
test.assert_equals(in_asc_order(arr), False)

# The following function is for generatins random values without the module random
# in Python


def randint(a, b):
    import random

    return random.randint(a, b)


def in_asc_order_mine(arr):
    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:
            return False
    return True


test.it("Random Cases")
test.it("Arrays of 20 elements")
k = 20
for h in range(20):
    arr = []
    while True:
        elem = randint(50, 100000)
        if elem not in arr:
            arr.append(elem)
        if len(arr) == k:
            break
    result = in_asc_order_mine(arr)
    test.assert_equals(in_asc_order(arr), result)
    arr_ = arr[:]
    arr_.sort()
    result_ = in_asc_order_mine(arr_)
    test.assert_equals(in_asc_order(arr_), result_)


k = 50
test.it("Arrays of 50 elements")
for h in range(20):
    arr = []
    while True:
        elem = randint(50, 100000)
        if elem not in arr:
            arr.append(elem)
        if len(arr) == k:
            break
    result = in_asc_order_mine(arr)
    test.assert_equals(in_asc_order(arr), result)
    arr_ = arr[:]
    arr_.sort()
    result_ = in_asc_order_mine(arr_)
    test.assert_equals(in_asc_order(arr_), result_)

k = 100
test.it("Arrays of 100 elements")
for h in range(20):
    arr = []
    while True:
        elem = randint(50, 100000)
        if elem not in arr:
            arr.append(elem)
        if len(arr) == k:
            break
    result = in_asc_order_mine(arr)
    test.assert_equals(in_asc_order(arr), result)
    arr_ = arr[:]
    arr_.sort()
    result_ = in_asc_order_mine(arr_)
    test.assert_equals(in_asc_order(arr_), result_)
