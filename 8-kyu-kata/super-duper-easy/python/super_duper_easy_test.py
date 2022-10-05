# 8 kyu - Super Duper Easy  [ ID: 55a5bfaa756cfede78000026  (super-duper-easy) ]
# URL: https://www.codewars.com/kata/55a5bfaa756cfede78000026
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import problem

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(problem("hello"), "Error")
        test.assert_equals(problem(1), 56)
        test.assert_equals(problem(5), 256)
        test.assert_equals(problem(0), 6)
        test.assert_equals(problem(1.2), 66)
        test.assert_equals(problem(3), 156)
        test.assert_equals(problem("RyanIsCool"), "Error")

@test.describe('Random tests')
def random_tests():    
    import random
        
    for _ in range(30):
        x = random.randint(1, 500)
        @test.it(f'Testing random number {x}')
        def test_case():
            test.assert_equals(problem(x), x*50+6)
