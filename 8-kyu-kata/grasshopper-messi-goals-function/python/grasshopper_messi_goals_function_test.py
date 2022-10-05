# 8 kyu - Grasshopper - Messi goals function  [ ID: 55f73be6e12baaa5900000d4  (grasshopper-messi-goals-function) ]
# URL: https://www.codewars.com/kata/55f73be6e12baaa5900000d4
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import goals


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(goals(0, 0, 0), 0)
        test.assert_equals(goals(5, 10, 2), 17)


@test.describe("Random Tests")
def random_tests():

    from random import randint

    for i in range(50):
        l = randint(0, 50)
        c = randint(0, 20)
        r = randint(0, 10)

        @test.it(f"testing for goals({l}, {c}, {r})")
        def test_case():
            test.assert_equals(goals(l, c, r), l + c + r)
