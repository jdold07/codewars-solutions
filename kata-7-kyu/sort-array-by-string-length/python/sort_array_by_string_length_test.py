# + =====================================================================================================================
# +
# + 7 kyu - Sort array by string length  [ ID: 57ea5b0b75ae11d1e800006c ] (sort-array-by-string-length)
# + URL: https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
# + Category: REFERENCE  |  Tags: SORTING | ARRAYS | FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from sort_array_by_string_length import sort_by_length


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():

        tests = [
            [["i", "to", "beg", "life"], ["beg", "life", "i", "to"]],
            [["", "pizza", "brains", "moderately"], ["", "moderately", "brains", "pizza"]],
            [["short", "longer", "longest"], ["longer", "longest", "short"]],
            [["a", "of", "dog", "food"], ["dog", "food", "a", "of"]],
            [["", "bees", "eloquent", "dictionary"], ["", "dictionary", "eloquent", "bees"]],
            [
                ["a short sentence", "a longer sentence", "the longest sentence"],
                ["a longer sentence", "the longest sentence", "a short sentence"],
            ],
        ]

        for exp, inp in tests:
            test.assert_equals(sort_by_length(inp), exp)


@test.describe("Random Tests")
def _():

    from random import sample, randint, choice
    from string import ascii_letters

    def generate_test_case():
        return ["".join(choice(ascii_letters) for _ in range(l)) for l in sample(range(100), randint(0, 100))]

    reference = lambda a: sorted(a, key=len)

    for _ in range(100):
        test_case = generate_test_case()
        expected = reference(test_case)

        @test.it(f"testing for sort_by_length({test_case})")
        def test_case():
            test.assert_equals(sort_by_length(test_case[:]), expected)
