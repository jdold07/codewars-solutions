# + =====================================================================================================================
# +
# + 7 kyu - Find the capitals  [ ID: 539ee3b6757843632d00026b ] (find-the-capitals-1)
# + URL: https://www.codewars.com/kata/539ee3b6757843632d00026b
# + Category: REFERENCE  |  Tags: STRINGS | ARRAYS | FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from find_the_capitals_1 import capitals


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(capitals("CodEWaRs"), [0, 3, 4, 6])


@test.describe("Random Tests")
def random_tests():

    from random import random, choice

    alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    def solution(word):
        return [x for x in range(len(word)) if word[x] != word[x].lower()]

    for i in range(100):
        word = "".join([choice(alphabet) for j in range(int(random() * 30) + 3)])

        @test.it(f'testing for capitals("{word}")')
        def test_case():
            test.assert_equals(capitals(word), solution(word))
