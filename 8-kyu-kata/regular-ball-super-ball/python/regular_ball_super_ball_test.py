# 8 kyu - Regular Ball Super Ball  [ ID: 53f0f358b9cb376eca001079  (regular-ball-super-ball) ]
# URL: https://www.codewars.com/kata/53f0f358b9cb376eca001079
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import Ball

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(Ball().ball_type,"regular")
        test.assert_equals(Ball('super').ball_type, "super")
