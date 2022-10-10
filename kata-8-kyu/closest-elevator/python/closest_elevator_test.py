# + =====================================================================================================================
# +
# + 8 kyu - Closest elevator  [ ID: 5c374b346a5d0f77af500a5a ] (closest-elevator)
# + URL: https://www.codewars.com/kata/5c374b346a5d0f77af500a5a
# + Category: ALGORITHMS  |  Tags: ALGORITHMS
# +
# + =====================================================================================================================

import codewars_test as test
from closest_elevator import elevator


from random import randrange


@test.describe("elevator(left, right, call)")
def elevator_test():
    @test.it("should work for the examples provided in the Kata description")
    def sample_tests():
        test.assert_equals(elevator(0, 1, 0), "left")
        test.assert_equals(elevator(0, 1, 1), "right")
        test.assert_equals(elevator(0, 1, 2), "right")
        test.assert_equals(elevator(0, 0, 0), "right")
        test.assert_equals(elevator(0, 2, 1), "right")

    @test.it("should work for all 3^3 possible cases (tested in sequence)")
    def fixed_tests():
        test.assert_equals(elevator(0, 0, 0), "right")
        test.assert_equals(elevator(0, 0, 1), "right")
        test.assert_equals(elevator(0, 0, 2), "right")
        test.assert_equals(elevator(0, 1, 0), "left")
        test.assert_equals(elevator(0, 1, 1), "right")
        test.assert_equals(elevator(0, 1, 2), "right")
        test.assert_equals(elevator(0, 2, 0), "left")
        test.assert_equals(elevator(0, 2, 1), "right")
        test.assert_equals(elevator(0, 2, 2), "right")
        test.assert_equals(elevator(1, 0, 0), "right")
        test.assert_equals(elevator(1, 0, 1), "left")
        test.assert_equals(elevator(1, 0, 2), "left")
        test.assert_equals(elevator(1, 1, 0), "right")
        test.assert_equals(elevator(1, 1, 1), "right")
        test.assert_equals(elevator(1, 1, 2), "right")
        test.assert_equals(elevator(1, 2, 0), "left")
        test.assert_equals(elevator(1, 2, 1), "left")
        test.assert_equals(elevator(1, 2, 2), "right")
        test.assert_equals(elevator(2, 0, 0), "right")
        test.assert_equals(elevator(2, 0, 1), "right")
        test.assert_equals(elevator(2, 0, 2), "left")
        test.assert_equals(elevator(2, 1, 0), "right")
        test.assert_equals(elevator(2, 1, 1), "right")
        test.assert_equals(elevator(2, 1, 2), "left")
        test.assert_equals(elevator(2, 2, 0), "right")
        test.assert_equals(elevator(2, 2, 1), "right")
        test.assert_equals(elevator(2, 2, 2), "right")

    @test.it("should work for random tests")
    def random_tests():
        def solution(left, right, call):
            return "left" if abs(call - left) < abs(call - right) else "right"

        for _ in range(100):
            left, right, call = randrange(0, 3), randrange(0, 3), randrange(0, 3)
            print("Testing for: left = %d, right = %d, call = %d" % (left, right, call))
            test.assert_equals(elevator(left, right, call), solution(left, right, call))
