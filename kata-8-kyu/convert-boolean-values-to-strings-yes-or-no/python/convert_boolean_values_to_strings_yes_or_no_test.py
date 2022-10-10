# + =====================================================================================================================
# +
# + 8 kyu - Convert boolean values to strings 'Yes' or 'No'.  [ ID: 53369039d7ab3ac506000467 ] (convert-boolean-values-to-strings-yes-or-no)
# + URL: https://www.codewars.com/kata/53369039d7ab3ac506000467
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from convert_boolean_values_to_strings_yes_or_no import bool_to_word


@test.describe("Fixed Tests")
def basic_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(bool_to_word(True), "Yes")
        test.assert_equals(bool_to_word(False), "No")


@test.describe("Random Tests")
def random_tests():

    from random import choice

    sol = lambda b: ["No", "Yes"][b]

    for _ in range(100):
        bool = choice([True, False])

        @test.it(f"Testing for bool_to_word({bool})")
        def test_case():
            test.assert_equals(bool_to_word(bool), sol(bool))
