# 8 kyu - Merge two sorted arrays into one  [ ID: 5899642f6e1b25935d000161  (merge-two-sorted-arrays-into-one) ]
# URL: https://www.codewars.com/kata/5899642f6e1b25935d000161
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
# ******************************************************************************
import codewars_test as test
from solution import merge_arrays

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Should work for arr1 and arr2 in asc order")
    def _():
        test.assert_equals(merge_arrays([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8])
        test.assert_equals(merge_arrays([10,8,6,4,2], [9,7,5,3,1]), [1,2,3,4,5,6,7,8,9,10])
        test.assert_equals(merge_arrays([-20,35,36,37,39,40], [-10,-5,0,6,7,8,9,10,25,38,50,62]), [-20,-10,-5,0,6,7,8,9,10,25,35,36,37,38,39,40,50,62])

    @test.it("Should work for arr1 and arr2 with different lengths") 
    def _():
        test.assert_equals(merge_arrays([5,6,7,8,9,10], [20,18,15,14,13,12,11,4,3,2]), [2,3,4,5,6,7,8,9,10,11,12,13,14,15,18,20])
        test.assert_equals(merge_arrays([45,30,20,15,12,5], [9,10,18,25,35,50]), [5,9,10,12,15,18,20,25,30,35,45,50])
        test.assert_equals(merge_arrays([-8,-3,-2,4,5,6,7,15,42,90,134], [216,102,74,32,8,2,0,-9,-13]), [-13,-9,-8,-3,-2,0,2,4,5,6,7,8,15,32,42,74,90,102,134,216])

    @test.it("Should work with duplicate numbers")
    def _():
        test.assert_equals(merge_arrays([-100,-27,-8,5,23,56,124,325], [-34,-27,6,12,25,56,213,325,601]), [-100,-34,-27,-8,5,6,12,23,25,56,124,213,325,601])
        test.assert_equals(merge_arrays([18,7,2,0,-22,-46,-103,-293], [-300,-293,-46,-31,-5,0,18,19,74,231]), [-300,-293,-103,-46,-31,-22,-5,0,2,7,18,19,74,231])
        test.assert_equals(merge_arrays([105,73,-4,-73,-201], [-201,-73,-4,73,105]), [-201,-73,-4,73,105])
        
@test.describe("Random Tests")
def random_tests():
    
    from random import randint

    def reference(a, b):
        return sorted(set(a).union(set(b)))
    
    randarr = lambda: sorted((randint(-100, 100) for _ in range(randint(1, 100))), reverse=(randint(0, 10) % 2))
    
    for _ in range(100):
        arr1, arr2 = randarr(), randarr()
        expected = reference(arr1, arr2)
        @test.it(f"testing for merge_arrays({arr1}, {arr2})")
        def test_case():
            test.assert_equals(merge_arrays(arr1, arr2), expected)
