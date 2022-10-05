# 7 kyu - Factorial  [ ID: 57a049e253ba33ac5e000212  (factorial-1) ]
# URL: https://www.codewars.com/kata/57a049e253ba33ac5e000212
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import factorial


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():

        tests = (
            (0, 1),
            (1, 1),
            (2, 2),
            (3, 6),
            (4, 24),
            (5, 120),
            (6, 720),
            (7, 5040),
        )

        for t in tests:
            inp, exp = t
            test.assert_equals(factorial(inp), exp)


@test.describe("Random Tests")
def _():

    from random import randint
    from math import factorial as _reference

    for _ in range(100):
        n = randint(0, 17)

        @test.it(f"testing for factorial({n})")
        def test_case():
            test.assert_equals(factorial(n), _reference(n))
