# 8 kyu - simple calculator   [ ID: 5810085c533d69f4980001cf  (simple-calculator) ]
# URL: https://www.codewars.com/kata/5810085c533d69f4980001cf
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import calculator

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Simple Test Cases')
    def simple_test():
        test.assert_equals(calculator(6, 2, '+'),8)
        test.assert_equals(calculator(4, 3, '-'),1)
        test.assert_equals(calculator(5, 5, '*'),25)
        test.assert_equals(calculator(5, 4, '/'),1.25)
        
    @test.it("Error Test Cases")
    def error_test():
        test.assert_equals(calculator(6, "$", '+'),"unknown value")
        test.assert_equals(calculator(6, 2, '&'),"unknown value")
        test.assert_equals(calculator(4, 3, '\\'),"unknown value")
        test.assert_equals(calculator("a", 3,"+"), "unknown value")
        test.assert_equals(calculator(6, 2, '='),"unknown value")
        test.assert_equals(calculator(6, 2, '\t'),"unknown value")
        test.assert_equals(calculator(":", ",", '+'),"unknown value")
        
@test.describe("Random Tests")
def random_test():
    
    import random as rnd
    import operator
    
    ops = { "+": operator.add, "-": operator.sub, "*": operator.mul, "/": operator.truediv}
    
    def solution(x,y,op):
        if  (type(x) == int or type(x) == float) and  (type(y) == int or type(y) == float):
            return ops[op](x,y) if op in ops else "unknown value"
        else :
            return "unknown value"
        
    operations = ['+', '-', '*', '-']
    invalidOperations =['a', 'b', '%', '_', '[', 'm', '7', '9', 'o', '^', '#']    
    
    for _ in range(100):
        a = rnd.randint(0, 1000)
        b = rnd.randint(0, 1000)
        op = rnd.randint(0, len(operations)-1)
        if rnd.randint(0, 2) == 0:            
            expected = solution(a, b, op)
            actual = calculator(a, b, op)
            @test.it(f"testing for calculator({a}, {b}, {operations[op]})")
            def test_case():
                test.assert_equals(actual, expected)
        else:
            @test.it(f"testing for calculator({a}, {b}, {invalidOperations[rnd.randint(0,len(invalidOperations)-1)]})")
            def test_case():
                test.assert_equals(calculator(a, b, invalidOperations[rnd.randint(0,len(invalidOperations)-1)]),"unknown value")


    
