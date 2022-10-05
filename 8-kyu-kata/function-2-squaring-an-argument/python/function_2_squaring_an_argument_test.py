# 8 kyu - Function 2 - squaring an argument  [ ID: 523b623152af8a30c6000027  (function-2-squaring-an-argument) ]
# URL: https://www.codewars.com/kata/523b623152af8a30c6000027
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import square

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(square(2), 4)
        test.assert_equals(square(50), 2500)
        test.assert_equals(square(1), 1)
    
@test.describe("Random Tests")
def random_tests():
    
    from random import randint  
    
    square_test = lambda n: n**2
    
    for item in range(randint(10, 200)):
        @test.it(f"testing for square({item})")
        def test_case():
            test.assert_equals(square(item),square_test(item))
