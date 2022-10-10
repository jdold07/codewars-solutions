#+ =====================================================================================================================
#+
#+ 8 kyu - Student's Final Grade  [ ID: 5ad0d8356165e63c140014d4 ] (students-final-grade)
#+ URL: https://www.codewars.com/kata/5ad0d8356165e63c140014d4
#+ Category: REFERENCE  |  Tags: FUNDAMENTALS
#+
#+ =====================================================================================================================

import codewars_test as test
from students_final_grade import final_grade





@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(final_grade(100, 12), 100)
        test.assert_equals(final_grade(99, 0), 100)
        test.assert_equals(final_grade(10, 15), 100)
        test.assert_equals(final_grade(85, 5), 90)
        test.assert_equals(final_grade(55, 3), 75)
        test.assert_equals(final_grade(55, 0), 0)
        test.assert_equals(final_grade(20, 2), 0)
        
@test.describe("Random tests")
def random_tests():    
    import random
    
    _solution = lambda e, p: 100 if e > 90 or p > 10 else 90 if e > 75 and p > 4 else 75 if e > 50 and p > 1 else 0
    
    for _ in range(100):
        a, b = min(random.randint(10, 150), 100), random.randint(0, 20)
        @test.it(f"testing for final_grade({a}, {b})")
        def test_case():
            test.assert_equals(final_grade(a, b), _solution(a, b))
