# + =====================================================================================================================
# +
# + 7 kyu - Sorted? yes? no? how?  [ ID: 580a4734d6df748060000045 ] (sorted-yes-no-how)
# + URL: https://www.codewars.com/kata/580a4734d6df748060000045
# + Category: REFERENCE  |  Tags: ARRAYS | SORTING | FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from sorted_yes_no_how import is_sorted_and_how


@test.describe("Basic Tests")
def _():
    @test.it("[1, 2]")
    def _():
        test.assert_equals(is_sorted_and_how([1, 2]), "yes, ascending")

    @test.it("[15, 7, 3, -8]")
    def _():
        test.assert_equals(is_sorted_and_how([15, 7, 3, -8]), "yes, descending")

    @test.it("[4, 2, 30]")
    def _():
        test.assert_equals(is_sorted_and_how([4, 2, 30]), "no")


@test.describe("Random Tests")
def _():
    from random import randint

    def is_descending(arr):
        for i in range(len(arr) - 1):
            if arr[i + 1] > arr[i]:
                return False
        return True

    def is_ascending(arr):
        for i in range(len(arr) - 1):
            if arr[i + 1] < arr[i]:
                return False
        return True

    def is_sorted_and_how_check(arr):
        if is_ascending(arr):
            return "yes, ascending"
        if is_descending(arr):
            return "yes, descending"
        return "no"

    def random_array(size):
        set_ = set()
        for i in range(size):
            set_.add(randint(-10000, 20000))
        array = list(set_)
        x = randint(0, 5)
        if x in [1, 2]:
            array.sort()
        elif x in [3, 4]:
            array.sort()
            array.reverse()
        return array

    for x in range(50):
        n = x * 2 * x + randint(2, 10)

        @test.it("random array of size {}".format(n))
        def _():
            array = random_array(7)
            result = is_sorted_and_how_check(array)
            res = is_sorted_and_how(array)
            test.assert_equals(res, result)
