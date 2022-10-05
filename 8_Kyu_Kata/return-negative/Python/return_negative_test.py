# [object Object] - Return Negative  [ ID: 55685cd7ad70877c23000102  (return-negative) ]
# URL: https://www.codewars.com/kata/55685cd7ad70877c23000102
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import make_negative

@test.describe("Fixed Tests")
def basic_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        for n, expected in ((42,-42), (-9,-9), (0,0)):
            actual = make_negative(n)
            message = f"For n = {n}, expected {expected} but got {actual}"
            test.assert_equals(actual, expected, message)

@test.describe("Random Tests")
def random_tests():
    
    from random import randint as rnd

    for _ in range(100):
        number = rnd(-1000, 1000)
        @test.it(f"testing for make_negative({number})")
        def test_case():
            actual = make_negative(number)
            expected = - abs(number)
            message = f"For n = {number}, expected {expected} but got {actual}"
            test.assert_equals(actual, expected, message)
