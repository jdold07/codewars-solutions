# [object Object] - Plural  [ ID: 52ceafd1f235ce81aa00073a  (plural) ]
# URL: https://www.codewars.com/kata/52ceafd1f235ce81aa00073a
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import plural

@test.describe("Fixed tests")
def _():
    @test.it("Tests")
    def __():
        test.assert_equals(plural(0), True)
        test.assert_equals(plural(1), False)
        test.assert_equals(plural(100), True)

@test.describe("Random tests")
def _():
    from random import randint
    
    @test.it("Tests")
    def __():
        for _ in range(100):
            n = randint(2, 100) if randint(0, 9) else 1
            expected = n != 1
            test.assert_equals(plural(n), expected)
