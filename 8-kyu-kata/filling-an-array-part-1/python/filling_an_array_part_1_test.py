# 8 kyu - Filling an array (part 1)  [ ID: 571d42206414b103dc0006a1  (filling-an-array-part-1) ]
# URL: https://www.codewars.com/kata/571d42206414b103dc0006a1
# Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import arr


@test.describe("Basic Tests")
def basic_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(arr(4), [0, 1, 2, 3])
        test.assert_equals(arr(0), [])
        test.assert_equals(arr(), [])


@test.describe("Random Tests")
def random_tests():

    from random import randint

    check = lambda n: list(range(n))

    for i in range(1, 101):
        n = randint(0, 36)
        expected = check(n)

        @test.it("Testing №{} should work for arr({})".format(i, n))
        def test_case():
            test.assert_equals(arr(n), expected)
