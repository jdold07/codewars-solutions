# [object Object] - Training JS #7: if..else and ternary operator  [ ID: 57202aefe8d6c514300001fd  (training-js-number-7-if-dot-else-and-ternary-operator) ]
# URL: https://www.codewars.com/kata/57202aefe8d6c514300001fd
# Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
# ******************************************************************************
import codewars_test as test
from solution import sale_hotdogs

@test.describe("Fixed tests")
def tests():
    @test.it("Sample tests")
    def tests():
        test.assert_equals(sale_hotdogs(0),0)
        test.assert_equals(sale_hotdogs(1),100)
        test.assert_equals(sale_hotdogs(2),200)
        test.assert_equals(sale_hotdogs(3),300)
        test.assert_equals(sale_hotdogs(4),400)
        test.assert_equals(sale_hotdogs(5),475)
        test.assert_equals(sale_hotdogs(9),855)
        test.assert_equals(sale_hotdogs(10),900)
        test.assert_equals(sale_hotdogs(11),990)
        test.assert_equals(sale_hotdogs(100),9000)


@test.describe("Random tests")
def tests():
    @test.it("It should work for random input")
    def tests():
        from random import randint
        
        for _ in range(40):
            n=4+randint(0,6) + (randint(0,1)*randint(1,10**3))
            expected = n*(100 if n<5 else 95 if n>=5 and n<10 else 90) 
            test.assert_equals(sale_hotdogs(n), expected)
