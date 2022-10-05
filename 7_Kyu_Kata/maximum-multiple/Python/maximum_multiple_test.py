# [object Object] - Maximum Multiple  [ ID: 5aba780a6a176b029800041c  (maximum-multiple) ]
# URL: https://www.codewars.com/kata/5aba780a6a176b029800041c
# Category: BUG_FIXES  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import max_multiple

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(max_multiple(2,7),6)
        test.assert_equals(max_multiple(3,10),9)
        test.assert_equals(max_multiple(7,17),14)
        test.assert_equals(max_multiple(10,50),50)
        test.assert_equals(max_multiple(37,200),185)
        test.assert_equals(max_multiple(7,100),98)

@test.describe("Random tests")
def _():
    
    from random import randint
    sol=lambda d,b: b//d*d
    
    for _ in range(40):
        d = randint(1, 1000)
        b = randint(1000, 1002000)
        @test.it(f"Testing for max_multiple({d}, {b})")
        def _():
            test.assert_equals(max_multiple(d,b), sol(d,b))
     
