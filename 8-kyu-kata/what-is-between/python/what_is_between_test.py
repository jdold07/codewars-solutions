# 8 kyu - What is between?  [ ID: 55ecd718f46fba02e5000029  (what-is-between) ]
# URL: https://www.codewars.com/kata/55ecd718f46fba02e5000029
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS
# ******************************************************************************
import codewars_test as test
from solution import between


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(between(1, 4), [1, 2, 3, 4])
        test.assert_equals(between(-2, 2), [-2, -1, 0, 1, 2])
        test.assert_equals(between(-10, 10), list(range(-10, 10 + 1)))
        test.assert_equals(between(5, 100), list(range(5, 100 + 1)))


@test.describe("Random tests")
def random_tests():

    from random import randint, choice

    for _ in range(50):
        a = randint(-100, 100)
        b = a + randint(1, choice([5, 20, 50]))

        @test.it(f"testing for between({a}, {b})")
        def test_case():
            test.assert_equals(between(a, b), list(range(a, b + 1)))
