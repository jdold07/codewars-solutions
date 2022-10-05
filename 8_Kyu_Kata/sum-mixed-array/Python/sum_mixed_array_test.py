# [object Object] - Sum Mixed Array  [ ID: 57eaeb9578748ff92a000009  (sum-mixed-array) ]
# URL: https://www.codewars.com/kata/57eaeb9578748ff92a000009
# Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
# ******************************************************************************
import codewars_test as test
from solution import sum_mix

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(sum_mix([9, 3, '7', '3']), 22)
        test.assert_equals(sum_mix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
        test.assert_equals(sum_mix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)
        test.assert_equals(sum_mix(['1', '5', '8', 8, 9, 9, 2, '3']), 45)
        test.assert_equals(sum_mix([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7]), 61)

@test.describe("Random Tests")
def random_tests():
    
    from random import randint
    
    sol=lambda arr: (sum(int(a) for a in arr))
    
    for _ in range(40):
        arr=[randint(-100,100) if randint(0,1) else str(randint(-100,100)) for q in range(randint(1,100))]
        expected = sol(arr)
        @test.it(f"Testing for sum_mix({arr})")
        def test_case():
            test.assert_equals(sum_mix(arr), expected)
