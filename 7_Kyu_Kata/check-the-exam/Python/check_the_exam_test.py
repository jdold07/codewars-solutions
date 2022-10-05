# [object Object] - Check the exam  [ ID: 5a3dd29055519e23ec000074  (check-the-exam) ]
# URL: https://www.codewars.com/kata/5a3dd29055519e23ec000074
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
# ******************************************************************************
import codewars_test as test
from solution import check_exam

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(check_exam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6)
        test.assert_equals(check_exam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7)
        test.assert_equals(check_exam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16)
        test.assert_equals(check_exam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0)
    
@test.it("Random tests")
def random_tests():
    
    import random
    
    def sol67y_0(arr1,arr2):
        c = 0 
        for i in range(len(arr1)):
            if arr1[i] == arr2[i]: c+=4 
            elif arr2[i] == '': continue 
            else: c-=1 
        return c if c > 0 else 0
    
    lets1, lets2 = ['a','b','c','d'], ['a','b','c','d','']
    
    for i in range(100):
        ans = [lets1[random.randrange(0, 4)] for c in range(4)]
        stu = [lets2[random.randrange(0, 5)] for c in range(4)]    
        expected = sol67y_0(ans,stu) 
        @test.it(f"testing for check_exam({ans}, {stu})")
        def test_case():
            test.assert_equals(check_exam(ans,stu),expected)
        
