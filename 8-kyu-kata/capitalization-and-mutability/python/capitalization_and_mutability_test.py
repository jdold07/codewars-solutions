# 8 kyu - Capitalization and Mutability  [ ID: 595970246c9b8fa0a8000086  (capitalization-and-mutability) ]
# URL: https://www.codewars.com/kata/595970246c9b8fa0a8000086
# Category: BUG_FIXES  |  Tags: STRINGS | DEBUGGING
# ******************************************************************************
import codewars_test as test

# for backward compatibilty
try:
    from solution import capitalizeWord as capitalize_word
except ImportError:
    from solution import capitalize_word


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(capitalize_word("word"), "Word")
        test.assert_equals(capitalize_word("i"), "I")
        test.assert_equals(capitalize_word("glasswear"), "Glasswear")


@test.describe("Random tests")
def random_tests():

    from string import ascii_lowercase as LETTERS
    from random import randint, choice

    for _ in range(25):
        rnd_str = "".join(choice(LETTERS) for _ in range(randint(1, 10)))

        @test.it(f"testing for capitalize_word({rnd_str})")
        def test_case():
            test.assert_equals(capitalize_word(rnd_str), rnd_str.capitalize())
