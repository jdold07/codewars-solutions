# + =====================================================================================================================
# +
# + 8 kyu - Return the day   [ ID: 59dd3ccdded72fc78b000b25 ] (return-the-day)
# + URL: https://www.codewars.com/kata/59dd3ccdded72fc78b000b25
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from return_the_day import whatday


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(whatday(1), "Sunday")
        test.assert_equals(whatday(2), "Monday")
        test.assert_equals(whatday(3), "Tuesday")
        test.assert_equals(whatday(4), "Wednesday")
        test.assert_equals(whatday(5), "Thursday")
        test.assert_equals(whatday(6), "Friday")
        test.assert_equals(whatday(7), "Saturday")
        test.assert_equals(whatday(0), "Wrong, please enter a number between 1 and 7")
        test.assert_equals(whatday(8), "Wrong, please enter a number between 1 and 7")
        test.assert_equals(whatday(20), "Wrong, please enter a number between 1 and 7")


@test.describe("Random Tests")
def random_tests():

    from random import randint

    def solution(num):
        weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return weekdays[num - 1] if 0 < num <= len(weekdays) else "Wrong, please enter a number between 1 and 7"

    for _ in range(10):
        num = randint(0, 15)

        @test.it("Random number: %d" % num)
        def test_case():
            test.assert_equals(whatday(num), solution(num))
