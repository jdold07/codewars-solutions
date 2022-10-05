# 8 kyu - No zeros for heros  [ ID: 570a6a46455d08ff8d001002  (no-zeros-for-heros) ]
# URL: https://www.codewars.com/kata/570a6a46455d08ff8d001002
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import no_boring_zeros


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(no_boring_zeros(1450), 145)
        test.assert_equals(no_boring_zeros(960000), 96)
        test.assert_equals(no_boring_zeros(1050), 105)
        test.assert_equals(no_boring_zeros(-1050), -105)
        test.assert_equals(no_boring_zeros(0), 0)
        test.assert_equals(no_boring_zeros(2016), 2016)


@test.describe("Random Tests")
def random_tests():

    from random import randint

    def no_boring_zeros_236(n):
        if n == 0:
            return 0
        while n % 10 == 0:
            n = n // 10
        return n

    for _ in range(100):
        k = randint(100, 10000)

        @test.it(f"testing for no_boring_zeros({k})")
        def test_case():
            test.assert_equals(no_boring_zeros(1000 * k), no_boring_zeros_236(1000 * k))
            test.assert_equals(no_boring_zeros(10 * k), no_boring_zeros_236(10 * k))
            test.assert_equals(no_boring_zeros(-k), no_boring_zeros_236(-k))
            test.assert_equals(no_boring_zeros(2 * k), no_boring_zeros_236(2 * k))
