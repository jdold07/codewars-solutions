# [object Object] - To square(root) or not to square(root)  [ ID: 57f6ad55cca6e045d2000627  (to-square-root-or-not-to-square-root) ]
# URL: https://www.codewars.com/kata/57f6ad55cca6e045d2000627
# Category: ALGORITHMS  |  Tags: MATHEMATICS | ARRAYS | ALGORITHMS
# ******************************************************************************
import codewars_test as test
from solution import square_or_square_root
 
@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        tests = [
            [[4, 3, 9, 7, 2, 1 ], [2, 9, 3, 49, 4, 1]],
            [[100, 101, 5, 5, 1, 1], [10, 10201, 25, 25, 1, 1]],
            [[1, 2, 3, 4, 5, 6], [1, 4, 9, 2, 25, 36]],
        ]
        
        for inp, exp in tests:
            test.assert_equals(square_or_square_root(inp), exp)
    
@test.describe("Random Tests")
def random_tests():    
    from random import randint
    
    def tests_case():
        return [randint(1, 101) for _ in range(randint(3, 20))]        
        
    def reference(arr):
        res = []
        for elem in arr:
            s = int(elem ** 0.5)
            if s ** 2 == elem:
                res.append(s)
            else:
                res.append(elem ** 2)
        return res
        
    for _ in range(30):
        arr = tests_case()
        expected = reference(arr)
        @test.it(f"testing for square_or_square_root({arr})")
        def test_case():
            test.assert_equals(square_or_square_root(arr),expected)
