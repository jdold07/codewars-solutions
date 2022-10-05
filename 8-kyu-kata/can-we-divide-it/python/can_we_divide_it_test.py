# 8 kyu - Can we divide it?  [ ID: 5a2b703dc5e2845c0900005a  (can-we-divide-it) ]
# URL: https://www.codewars.com/kata/5a2b703dc5e2845c0900005a
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import is_divide_by


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(is_divide_by(8, 2, 4), True)
        test.assert_equals(is_divide_by(12, -3, 4), True)
        test.assert_equals(is_divide_by(8, 3, 4), False)
        test.assert_equals(is_divide_by(48, 2, -5), False)
        test.assert_equals(is_divide_by(-100, -25, 10), True)
        test.assert_equals(is_divide_by(10000, 5, -3), False)
        test.assert_equals(is_divide_by(4, 4, 2), True)
        test.assert_equals(is_divide_by(5, 2, 3), False)
        test.assert_equals(is_divide_by(-96, 25, 17), False)
        test.assert_equals(is_divide_by(33, 1, 33), True)


@test.describe("Random Tests")
def random_tests():
    import random

    for i in range(100):
        number = random.randint(1, 10000)
        a = random.randint(1, 4)
        b = random.randint(1, 7)

        @test.it(f"Testing for is_divide_by({number}, {a}, {b})")
        def test_case():
            test.assert_equals(is_divide_by(number, a, b), (not (number % a or number % b)))

    for i in range(100):
        number = random.randint(-10000, 1000)
        a = random.randint(-4, -1)
        b = random.randint(-7, -1)

        @test.it(f"Testing for is_divide_by({number}, {a}, {b})")
        def test_case():
            test.assert_equals(is_divide_by(number, a, b), (not (number % a or number % b)))

    for i in range(100):
        number = random.randint(-1000, 1000)
        a = random.randint(1, 4)
        b = random.randint(-7, -1)

        @test.it(f"Testing for is_divide_by({number}, {a}, {b})")
        def test_case():
            test.assert_equals(is_divide_by(number, a, b), (not (number % a or number % b)))
