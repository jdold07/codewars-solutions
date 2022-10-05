# 8 kyu - Exclusive "or" (xor) Logical Operator  [ ID: 56fa3c5ce4d45d2a52001b3c  (exclusive-or-xor-logical-operator) ]
# URL: https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import xor


@test.describe("Your 'xor' function/operator")
def _():
    @test.it("should work for the four basic cases described above")
    def _():
        test.assert_equals(xor(False, False), False, "False xor False == False")
        test.assert_equals(xor(True, False), True, "True xor False == True")
        test.assert_equals(xor(False, True), True, "False xor True == True")
        test.assert_equals(xor(True, True), False, "True xor True == False")

    @test.it("should work properly when nested")
    def _():
        test.assert_equals(xor(False, xor(False, False)), False)
        test.assert_equals(xor(xor(True, False), False), True)
        test.assert_equals(xor(xor(True, True), False), False)
        test.assert_equals(xor(True, xor(True, True)), True)
        test.assert_equals(xor(xor(False, False), xor(False, False)), False)
        test.assert_equals(xor(xor(False, False), xor(False, True)), True)
        test.assert_equals(xor(xor(True, False), xor(False, False)), True)
        test.assert_equals(xor(xor(True, False), xor(True, False)), False)
        test.assert_equals(xor(xor(True, True), xor(True, False)), True)
        test.assert_equals(xor(xor(True, xor(True, True)), xor(xor(True, True), False)), True)

    @test.it("random tests")
    def _():
        from random import randrange as rand

        for _ in range(100):
            a, b = map(bool, (rand(2), rand(2)))
            exp = a != b
            test.assert_equals(xor(a, b), exp)
