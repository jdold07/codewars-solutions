# 8 kyu - Find the Remainder  [ ID: 524f5125ad9c12894e00003f  (find-the-remainder) ]
# URL: https://www.codewars.com/kata/524f5125ad9c12894e00003f
# Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import remainder
from random import randint

@test.describe("Sample test cases")
def basic():
    @test.it("Basic tests")
    def _():
        test.assert_equals(remainder(17,5), 2, 'Returned value should be the value left over after dividing as much as possible.')
        test.assert_equals(remainder(13, 72), remainder(72, 13), 'The order the arguments are passed should not matter.')
        test.assert_equals(remainder(1, 0), None, 'Divide by zero should return None')
        test.assert_equals(remainder(0, 0), None, 'Divide by zero should return None')
        test.assert_equals(remainder(0, 1), None, 'Divide by zero should return None')
        test.assert_equals(remainder(-1, 0), 0, 'Divide by zero should only be checked for the lowest number')
        test.assert_equals(remainder(0, -1), 0, 'Divide by zero should only be checked for the lowest number')
        test.assert_equals(remainder(-13, -13), 0, 'Should handle negative numbers')
        test.assert_equals(remainder(-60, 340), -20, 'Should handle negative numbers')
        test.assert_equals(remainder(60, -40), -20, 'Should handle negative numbers')

@test.describe("Random tests")
def random():
    sol=lambda a,b: max(a,b)%min(a,b) if min(a,b) else None
    rand = lambda: (randint(0, 1)*2-1) * randint(0, 10**randint(1, 5))
    for _ in range(40):
        a, b = rand(), rand()
        @test.it("Testing for %s and %s" %(a,b))
        def _():
            test.assert_equals(remainder(a,b),sol(a,b))
