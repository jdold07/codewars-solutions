#+ =====================================================================================================================
#+
#+ 8 kyu - Surface  Area and Volume of a Box  [ ID: 565f5825379664a26b00007c ] (surface-area-and-volume-of-a-box)
#+ URL: https://www.codewars.com/kata/565f5825379664a26b00007c
#+ Category: REFERENCE  |  Tags: GEOMETRY | FUNDAMENTALS
#+
#+ =====================================================================================================================

import codewars_test as test
from surface_area_and_volume_of_a_box import get_size





@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(get_size(4, 2, 6), [88,48])
        test.assert_equals(get_size(1, 1, 1), [6,1])
        test.assert_equals(get_size(1, 2, 1), [10,2])
        test.assert_equals(get_size(1, 2, 2), [16,4])
        test.assert_equals(get_size(10, 10, 10), [600,1000])

@test.describe("Random tests")
def random_tests():
    
    from random import randint
    
    get_sol=lambda w,h,d: (lambda v: [v/w+v/h+v/d,v/2])(w*h*d*2)
    
    for _ in range(40):
        sizes=[randint(1,100) for n in range(3)]
        @test.it(f"Testing for get_size({', '.join(map(str, sizes))})")
        def test_case():
            test.assert_equals(get_size(*sizes[:]), get_sol(*sizes))
