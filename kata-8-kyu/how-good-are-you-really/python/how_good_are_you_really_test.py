# + =====================================================================================================================
# +
# + 8 kyu - How good are you really?  [ ID: 5601409514fc93442500010b ] (how-good-are-you-really)
# + URL: https://www.codewars.com/kata/5601409514fc93442500010b
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from how_good_are_you_really import better_than_average


from random import randint

test.describe("Basic Tests")

test.it("better_than_average([2, 3], 5) should return True")
test.assert_equals(better_than_average([2, 3], 5), True)

test.it("better_than_average([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True")
test.assert_equals(better_than_average([100, 40, 34, 57, 29, 72, 57, 88], 75), True)

test.it("better_than_average([12, 23, 34, 45, 56, 67, 78, 89, 90], 69) should return True")
test.assert_equals(better_than_average([12, 23, 34, 45, 56, 67, 78, 89, 90], 69), True)

test.it("better_than_average([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False")
test.assert_equals(better_than_average([41, 75, 72, 56, 80, 82, 81, 33], 50), False)

test.it("better_than_average([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False")
test.assert_equals(better_than_average([29, 55, 74, 60, 11, 90, 67, 28], 21), False)

test.describe("Random Tests")


def solution(arr, points):
    return sum(arr) < points * len(arr)


for i in range(10):
    arr = []
    for j in range(50):
        arr.append(randint(0, 99))

    points = randint(0, 99)

    test.it("better_than_average(%s, %d) should return %s" % (arr, points, solution(arr, points)))
    test.assert_equals(better_than_average(arr, points), solution(arr, points))
