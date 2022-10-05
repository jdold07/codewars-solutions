# [object Object] - Smallest Permutation  [ ID: 5fefee21b64cc2000dbfa875  (smallest-permutation) ]
# URL: https://www.codewars.com/kata/5fefee21b64cc2000dbfa875
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
from solution import min_permutation
import codewars_test as test
import random

def testing(n, res):
    test.assert_equals(min_permutation(n), res)

@test.describe("Sample tests")
def sampleTests():
    @test.it("Should return permutation with smallest abs()")
    def _():
        testing(-20, -20)
        testing(-32, -23)
        testing(0, 0)
        testing(10, 10)
        testing(29394, 23499)

def solution(n):
    if n >= 0 and type(n) == int:
        sortedDigits = sorted([int(digit) for digit in str(n)])
    else:
        sortedDigits = sorted([int(digit) for digit in str(n)[1:]])
    hasLeadingZeros = True
    for index in range(len(sortedDigits)):
        if sortedDigits[index] != 0 and hasLeadingZeros:
            firstNonZero =  sortedDigits[index]
            sortedDigits.pop(index)
            sortedDigits.insert(0, firstNonZero)
            hasLeadingZeros = False
    if n >= 0 and type(n) == int:        
        return int("".join([str(digit) for digit in sortedDigits]))
    else:
        sortedDigits.insert(0, "-")
        return int("".join([str(digit) for digit in sortedDigits]))

@test.describe("Random Tests")
def randomTests():
    @test.it("Should return permutation with smallest abs()")
    def _():
        for i in range(300):
            a = random.randint(1, 2)
            if a == 1:
                b = random.randint(0, 10000000)
                testing(b, solution(b))
            else:
                b = random.randint(1, 10000000)
                testing(-b, solution(-b))
