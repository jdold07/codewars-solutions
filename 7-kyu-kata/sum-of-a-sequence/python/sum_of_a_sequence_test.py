# 7 kyu - Sum of a sequence  [ ID: 586f6741c66d18c22800010a  (sum-of-a-sequence) ]
# URL: https://www.codewars.com/kata/586f6741c66d18c22800010a
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS | MATHEMATICS
# ******************************************************************************
import codewars_test as test
from solution import sequence_sum

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(sequence_sum(2, 6, 2), 12)
        test.assert_equals(sequence_sum(1, 5, 1), 15)
        test.assert_equals(sequence_sum(1, 5, 3), 5)
        test.assert_equals(sequence_sum(0, 15, 3), 45)
        test.assert_equals(sequence_sum(16, 15, 3), 0)
        test.assert_equals(sequence_sum(2, 24, 22), 26)
        test.assert_equals(sequence_sum(2, 2, 2), 2)
        test.assert_equals(sequence_sum(2, 2, 1), 2)
        test.assert_equals(sequence_sum(1, 15, 3), 35)
        test.assert_equals(sequence_sum(15, 1, 3), 0)

@test.describe("Random tests")
def _():
    
    from random import randint
    
    sol=lambda b,e,s: (lambda a: a*(a+1)/2*s+b*(a+1))(int((e-b)/s)) if b<=e else 0
    
    for _ in range(40):
        b,e,s=randint(0,1000),randint(0,1000),randint(1,100)
        @test.it(f"Testing for sequence_sum{b}, {e}, {s}")
        def _():
            test.assert_equals(sequence_sum(b,e,s), sol(b,e,s))
