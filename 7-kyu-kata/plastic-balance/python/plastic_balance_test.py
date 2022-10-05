# 7 kyu - Plastic Balance  [ ID: 625ea5c1a071210065c923af  (plastic-balance) ]
# URL: https://www.codewars.com/kata/625ea5c1a071210065c923af
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS | LISTS | DATA STRUCTURES | ARRAYS
# ******************************************************************************
from solution import plastic_balance
import codewars_test as test
import random

def ee(lst):
    while lst!=[]:
        if lst[0] + lst[-1] == sum(lst[1:-1]):
            break
        lst = lst[1:-1]
    return lst

@test.describe("plastic_balance")
def tests():
    # Use "it" to identify the conditions you are testing for
    @test.it("basic_tests")
    def plastic_balance_test():
        test.assert_equals(plastic_balance([1,2,3,4,5]), [])
        test.assert_equals(plastic_balance([0,104,3,101,0,111]), [104,3,101,0])
        test.assert_equals(plastic_balance([1,-1]), [1,-1])
        test.assert_equals(plastic_balance([0]), [0])
        test.assert_equals(plastic_balance([100,0,-100]), [100,0,-100])
        test.assert_equals(plastic_balance([4,4]), [])

@test.describe("random_tests")
def tests2():
    @test.it("random_tests")
    def re():
        for l in range(300):
            i = random.randint(1, 500)
            ok = random.randint(1,20)
            x = []
            for i in range(i):
                j = random.randrange(-500,500)
                x.append(j)
            if ok%2==0:
                x.insert(0, sum(x))
                x.append(0)
            expected = ee(x)
            actual = plastic_balance(x)
            test.assert_equals(actual, expected)
