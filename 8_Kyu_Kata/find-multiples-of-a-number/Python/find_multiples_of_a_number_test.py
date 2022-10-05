# [object Object] - Find Multiples of a Number  [ ID: 58ca658cc0d6401f2700045f  (find-multiples-of-a-number) ]
# URL: https://www.codewars.com/kata/58ca658cc0d6401f2700045f
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import find_multiples

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(find_multiples(5, 25), [5, 10, 15, 20, 25])
        test.assert_equals(find_multiples(1, 2), [1, 2])
        test.assert_equals(find_multiples(5, 7), [5])
        test.assert_equals(find_multiples(4, 27), [4, 8, 12, 16, 20, 24])
        test.assert_equals(find_multiples(11, 54), [11, 22, 33, 44])
    
@test.describe("Random Tests:")
def random_tests():    
    import random
    
    def my_find_multiples(integer, limit):
        return [i for i in range(integer, limit + 1) if i % integer == 0]

    for i in range(50):
        integer = random.randint(1,100)
        limit = random.randint(101,30000)
        solution = my_find_multiples(integer, limit)
        @test.it(f"testing for find_multiples({integer}, {limit})")
        def test_case():
             test.assert_equals(find_multiples(integer, limit), solution)
    
