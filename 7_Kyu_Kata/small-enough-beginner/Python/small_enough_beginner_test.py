# [object Object] - Small enough? - Beginner  [ ID: 57cc981a58da9e302a000214  (small-enough-beginner) ]
# URL: https://www.codewars.com/kata/57cc981a58da9e302a000214
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
# ******************************************************************************
import codewars_test as test
from solution import small_enough

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():

        tests = (
            ([[66, 101] ,200], True),
            ([[78, 117, 110, 99, 104, 117, 107, 115] ,100], False),
            ([[101, 45, 75, 105, 99, 107], 107], True),
            ([[80, 117, 115, 104, 45, 85, 112, 115] ,120], True),
            ([[1, 1, 1, 1, 1, 2] ,1], False),
            ([[78, 33, 22, 44, 88, 9, 6] ,87], False),
            ([[1, 2, 3, 4, 5, 6, 7, 8, 9] ,10], True),
            ([[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12] ,12], True),
        )
        
        for inp, exp in tests:
            test.assert_equals(small_enough(*inp), exp)
    

@test.describe("Random Test")
def _():
    
    from random import randint
    
    def create_test(arr_len, limit, result=True):
        limit = abs(limit)
        limit += limit == 0
        return ([randint(0, limit) for _ in range(arr_len)], limit + (1 - result) * randint(1, 100))
            
    reference = lambda a, l: all(e <= l for e in a)
        
    for _ in range(100):
        test_case = create_test(randint(1, 100), randint(0, 1000), randint(0, 100) % 2)
        expected = reference(*test_case)
        @test.it(f"testing for small_enough({test_case})")
        def test_case():
            test.assert_equals(small_enough(*test_case),expected)
