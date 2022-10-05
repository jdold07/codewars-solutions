# 8 kyu - Grasshopper - If/else syntax debug  [ ID: 57089707fe2d01529f00024a  (grasshopper-if-slash-else-syntax-debug) ]
# URL: https://www.codewars.com/kata/57089707fe2d01529f00024a
# Category: BUG_FIXES  |  Tags: DEBUGGING
# ******************************************************************************
import codewars_test as test
from solution import check_alive

try:
    check_alive(0)
except:
    check_alive = checkAlive


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(check_alive(5), True)
        test.assert_equals(check_alive(0), False)
        test.assert_equals(check_alive(-5), False)


@test.describe("Random Tests")
def random_tests():

    from random import randint

    def solution(h):
        return h > 0

    for _ in range(10):
        a = randint(-10, 10)

        @test.it(f"testing for check_alive({a})")
        def test_case():
            test.assert_equals(check_alive(a), solution(a))
