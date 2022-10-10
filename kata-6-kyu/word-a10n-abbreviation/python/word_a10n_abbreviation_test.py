# + =====================================================================================================================
# +
# + 6 kyu - Word a10n (abbreviation)  [ ID: 5375f921003bf62192000746 ] (word-a10n-abbreviation)
# + URL: https://www.codewars.com/kata/5375f921003bf62192000746
# + Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from word_a10n_abbreviation import abbreviate


@test.describe("Fixed tests")
def _():
    @test.it("Tests")
    def __():
        test.assert_equals(abbreviate("internationalization"), "i18n")
        test.assert_equals(abbreviate("accessibility"), "a11y")
        test.assert_equals(abbreviate("Accessibility"), "A11y")
        test.assert_equals(abbreviate("elephant-ride"), "e6t-r2e")


@test.describe("Random tests")
def _():
    from itertools import chain
    from random import choice, randint

    joins = [", ", "-", ": ", "; ", ". ", "'", "_", " ", "5"]
    words = ["cat", "mat", "doggy", "balloon", "sits", "sat", "a", "is", "on", "the", "monolithic", "double-barreled"]
    abbreviations = ["cat", "mat", "d3y", "b5n", "s2s", "sat", "a", "is", "on", "the", "m8c", "d4e-b6d"]

    @test.it("Tests")
    def __():
        for _ in range(100):
            indexes = [randint(0, len(words) - 1) for _ in range(randint(1, 10))]
            chosen_words = [words[i] for i in indexes]
            chosen_abbrs = [abbreviations[i] for i in indexes]
            chosen_joins = [choice(joins) for _ in indexes[1:]]
            input = "".join(chain(*zip(chosen_words, chosen_joins)))
            output = "".join(chain(*zip(chosen_abbrs, chosen_joins)))
            test.assert_equals(abbreviate(input), output)
