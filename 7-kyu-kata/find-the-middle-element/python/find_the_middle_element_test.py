# 7 kyu - Find the middle element  [ ID: 545a4c5a61aa4c6916000755  (find-the-middle-element) ]
# URL: https://www.codewars.com/kata/545a4c5a61aa4c6916000755
# Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import gimme

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(gimme([2, 3, 1]), 0, 'Finds the index of middle element')
        test.assert_equals(gimme([5, 10, 14]), 1, 'Finds the index of middle element')        
        test.assert_equals(gimme([1, 3, 4]), 1, 'Finds the index of middle element')
        test.assert_equals(gimme([15, 10, 14]), 2, 'Finds the index of middle element')        
        test.assert_equals(gimme([-0.410, -23, 4]), 0, 'Finds the index of middle element(Negative numbers)')
        test.assert_equals(gimme([-15, -10, 14]), 1, 'Finds the index of middle element (Negative numbers)')
        
@test.describe("Random tests")
def _():
    
    from random import randint
    
    def gimmesol(a): return a.index(sorted(a)[1])
    
    for i in range(40):
        testmat=[]
        while len(testmat)<3:
            x=randint(0,50)-100
            if x not in testmat: testmat+=[x]
        @test.it(f"Testing for random array: {testmat}")
        def _():
            test.assert_equals(gimme(testmat[:]), gimmesol(testmat[:]))
