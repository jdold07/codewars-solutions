# [object Object] - Age Range Compatibility Equation  [ ID: 5803956ddb07c5c74200144e  (age-range-compatibility-equation) ]
# URL: https://www.codewars.com/kata/5803956ddb07c5c74200144e
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
test.describe("Example Test Cases")

test.assert_equals(dating_range(17), "15-20")
test.assert_equals(dating_range(40), "27-66")
test.assert_equals(dating_range(15), "14-16")
test.assert_equals(dating_range(35), "24-56")
test.assert_equals(dating_range(10), "9-11")


test.describe("Basic Test Cases")

test.assert_equals(dating_range(53), "33-92")
test.assert_equals(dating_range(19), "16-24")
test.assert_equals(dating_range(12), "10-13")
test.assert_equals(dating_range(7), "6-7")
test.assert_equals(dating_range(33), "23-52")


test.describe("Random Test Cases")

def solution(age):
    if age <= 14:
        AGE_RANGE = (
            int(age * 0.9), 
            int(age * 1.1)
        )
    else:
        AGE_RANGE = (
            age//2 + 7,
            2 * (age - 7)
        )
    return "{}-{}".format(*AGE_RANGE)

from random import randint

for _ in range(50):
    n = randint(1, 100)
    test.assert_equals(dating_range(n), solution(n))
