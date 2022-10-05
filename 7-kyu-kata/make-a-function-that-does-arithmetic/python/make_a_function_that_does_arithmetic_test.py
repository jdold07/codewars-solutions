# 7 kyu - Make a function that does arithmetic!  [ ID: 583f158ea20cfcbeb400000a  (make-a-function-that-does-arithmetic) ]
# URL: https://www.codewars.com/kata/583f158ea20cfcbeb400000a
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import arithmetic

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!")
        test.assert_equals(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a minus b!")
        test.assert_equals(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!")
        test.assert_equals(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!")

@test.describe("Random tests")
def _():
    
    from random import randint
    
    sol=lambda a,b,o: eval("".join([str(a),"+" if o=="add" else "-" if o=="subtract" else "*" if o=="multiply" else "/",str(b)]))
    base=["add","subtract","multiply","divide"]
    
    for _ in range(40):
        a,b,o=randint(-10,10),randint(1,10),base[randint(0,3)]
        @test.it(f"Testing for arithmetic({a}, {b}, {o})")
        def _():
            test.assert_equals(arithmetic(a,b,o),sol(a,b,o))
