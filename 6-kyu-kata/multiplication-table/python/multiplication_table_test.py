# 6 kyu - Multiplication table  [ ID: 534d2f5b5371ecf8d2000a08  (multiplication-table) ]
# URL: https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08
# Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
# ******************************************************************************
try:
    multiplication_table = multiplicationTable
except NameError:
    pass

test.describe("Basic Tests")
test.it("Should pass basic tests")
test.assert_equals(multiplication_table(3), [[1,2,3],[2,4,6],[3,6,9]])

test.describe("Random Tests")
test.it("Should pass random tests")
import random
for i in range(20):
    size = random.randint(1,100)
    test.it("Test for multiplication_table({})".format(size))
    test.assert_equals(multiplication_table(size), [[(j+1)*(i+1) for i in range(size)] for j in range(size)])
    
