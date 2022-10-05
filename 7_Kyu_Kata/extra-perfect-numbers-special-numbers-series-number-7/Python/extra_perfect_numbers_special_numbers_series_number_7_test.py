# [object Object] - Extra Perfect Numbers (Special Numbers Series  #7)  [ ID: 5a662a02e626c54e87000123  (extra-perfect-numbers-special-numbers-series-number-7) ]
# URL: https://www.codewars.com/kata/5a662a02e626c54e87000123
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
# ******************************************************************************
test.describe("Basic tests")
test.assert_equals(extra_perfect(3), [1,3])
test.assert_equals(extra_perfect(5), [1,3,5])
test.assert_equals(extra_perfect(7), [1,3,5,7])
test.assert_equals(extra_perfect(28), [1,3,5,7,9,11,13,15,17,19,21,23,25,27])
test.assert_equals(extra_perfect(39), [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39])
print("<COMPLETEDIN::>")

test.describe("Random tests")
from random import randint
def random_tests():
    sol=lambda n: list(range(1,n+1,2))
    
    for _ in range(100):
        n=randint(1,100)
        test.it("Testing for "+str(n))
        test.assert_equals(extra_perfect(n), sol(n), "It should work for random inputs too")
        print("<COMPLETEDIN::>")
random_tests()
