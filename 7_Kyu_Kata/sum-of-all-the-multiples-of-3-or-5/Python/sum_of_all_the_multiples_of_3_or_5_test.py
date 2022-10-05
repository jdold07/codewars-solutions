# [object Object] - Sum of all the multiples of 3 or 5  [ ID: 57f36495c0bb25ecf50000e7  (sum-of-all-the-multiples-of-3-or-5) ]
# URL: https://www.codewars.com/kata/57f36495c0bb25ecf50000e7
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
test.describe("Basic Tests")
test.it("Expected 5 to equal 8")
test.assert_equals(find(5), 8)
test.it("Expected 10 to equal 33")
test.assert_equals(find(10), 33)
test.it("Expected 100 to equal 2418")
test.assert_equals(find(100), 2418)
test.it("Expected 1000 to equal 234168")
test.assert_equals(find(1000), 234168)
import random
test.describe("Random Tests")
def findSOLVEIT(n):
    result = 0
    for i in range(3,n+1):
        if i%3==0 or i%5==0:
            result += i
    return result
for cwtests in range(0,96):
    num = random.randint(1,100000)
    result = findSOLVEIT(num)
    test.it("Expected "+str(num)+" to equal "+str(result))
    test.assert_equals(find(num), result)
