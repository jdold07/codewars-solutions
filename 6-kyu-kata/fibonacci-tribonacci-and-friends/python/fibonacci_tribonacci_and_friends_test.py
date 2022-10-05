# 6 kyu - Fibonacci, Tribonacci and friends  [ ID: 556e0fccc392c527f20000c5  (fibonacci-tribonacci-and-friends) ]
# URL: https://www.codewars.com/kata/556e0fccc392c527f20000c5
# Category: REFERENCE  |  Tags: ARRAYS | LISTS | NUMBER THEORY | FUNDAMENTALS
# ******************************************************************************
test.describe("Basic tests")
test.assert_equals(Xbonacci([0, 1], 10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
test.assert_equals(Xbonacci([1, 1], 10), [1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
test.assert_equals(Xbonacci([0, 0, 0, 0, 1], 10), [0, 0, 0, 0, 1, 1, 2, 4, 8, 16])
test.assert_equals(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10), [1, 0, 0, 0, 0, 0, 1, 2, 3, 6])
test.assert_equals(
    Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 8, 16, 32, 64, 128, 256]
)
test.assert_equals(Xbonacci([0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0], 10), [0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0])
test.assert_equals(
    Xbonacci([0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20), [0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.5, 1, 2, 4, 8, 16, 32, 64, 128]
)
test.assert_equals(
    Xbonacci([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
)
test.assert_equals(Xbonacci([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 9), [1, 2, 3, 4, 5, 6, 7, 8, 9])
test.assert_equals(Xbonacci([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 0), [])

test.describe("Random tests")
from random import randint


def Xsol(s, n):
    l = len(s)
    while len(s) < n:
        s += [sum(s[-l:])]
    return s[:n]


for _ in range(40):
    sign = [randint(0, 20) for x in range(randint(1, 20))]
    n = randint(1, 50)
    test.it("Testing for signature: " + str(sign) + " and n: " + str(n))
    test.assert_equals(Xbonacci(sign[:], n), Xsol(sign, n), "It should work for random inputs too")
