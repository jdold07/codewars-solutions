# [object Object] - Basic Mathematical Operations  [ ID: 57356c55867b9b7a60000bd7  (basic-mathematical-operations) ]
# URL: https://www.codewars.com/kata/57356c55867b9b7a60000bd7
# Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
# ******************************************************************************
# New tests for 3.8+
import codewars_test as test
from solution import basic_op

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(basic_op('+', 4, 7), 11)
        test.assert_equals(basic_op('-', 15, 18), -3)
        test.assert_equals(basic_op('*', 5, 5), 25)
        test.assert_equals(basic_op('/', 49, 7), 7)
        
@test.describe("Random tests")
def random_tests():
    
    from random import randint
    
    sol=lambda op, v1, v2: eval("".join([str(v1),op,str(v2)]))
    
    ops="+-*/"
    
    for _ in range(40):
        op,v1,v2=ops[randint(0,3)],randint(1,10**randint(1,5)),randint(1,10**randint(1,5))
        @test.it(f"testing for basic_op({op, v1, v2})")
        def test_case():
            test.assert_equals(basic_op(op,v1,v2),sol(op,v1,v2))
