# 7 kyu - Sort arrays - 1  [ ID: 51f41b98e8f176e70d0002a8  (sort-arrays-1) ]
# URL: https://www.codewars.com/kata/51f41b98e8f176e70d0002a8
# Category: REFERENCE  |  Tags: SORTING | ARRAYS | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import sortme

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(sortme(["one", "two", "three"]), ["one", "three", "two"])

@test.describe("Random Tests")
def random_tests():
    
    from random import randint, sample
      
    for _ in range(100):          
        arr = ["".join(sample("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", k = randint(4, 10))) for i in range(randint(3,6))]
        expected = sorted(arr)
        @test.it(f"testing for sortme({arr})")
        def test_case():
            test.assert_equals(sortme(arr[:]), expected)

