# 8 kyu - Beginner Series #2 Clock  [ ID: 55f9bca8ecaa9eac7100004a  (beginner-series-number-2-clock) ]
# URL: https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import past


@test.describe("Fixed Tests")
def basic_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(past(0, 1, 1), 61000)
        test.assert_equals(past(1, 1, 1), 3661000)
        test.assert_equals(past(0, 0, 0), 0)
        test.assert_equals(past(1, 0, 1), 3601000)
        test.assert_equals(past(1, 0, 0), 3600000)


@test.describe("Random Tests")
def random_tests():
    from random import randint

    ans = lambda h, m, s: (h * 3600 + m * 60 + s) * 1000

    for _ in range(500):
        h, m, s = randint(0, 23), randint(0, 59), randint(0, 59)

        @test.it(f"Testing for past({h}, {m}, {s})")
        def test_case():
            test.assert_equals(past(h, m, s), ans(h, m, s))
