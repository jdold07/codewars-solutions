# 8 kyu - Grasshopper - Check for factor  [ ID: 55cbc3586671f6aa070000fb  (grasshopper-check-for-factor) ]
# URL: https://www.codewars.com/kata/55cbc3586671f6aa070000fb
# Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import check_for_factor

@test.describe("Fixed Tests")
def fixed_tests():    
    @test.it("Should return True")
    def should_return_true():
        test.assert_equals(check_for_factor(10, 2), True)
        test.assert_equals(check_for_factor(63, 7), True)
        test.assert_equals(check_for_factor(2450, 5), True)
        test.assert_equals(check_for_factor(24612, 3), True)
        
    @test.it("Should return False")
    def should_return_false():
        test.assert_equals(check_for_factor(9, 2), False)
        test.assert_equals(check_for_factor(653, 7), False)
        test.assert_equals(check_for_factor(2453, 5), False)
        test.assert_equals(check_for_factor(24617, 3), False)
    
@test.describe("Random tests")
def random_tests():
    
    from random import randint
    
    
    sol = lambda base, factor: base % factor == 0
    for t in range(100):
        b, f = randint(1, 10000), randint(1, 20)
        @test.it(f"testing for check_for_factor({b}, {f})")
        def test_case():
            test.assert_equals(check_for_factor(b, f),sol(b, f))
