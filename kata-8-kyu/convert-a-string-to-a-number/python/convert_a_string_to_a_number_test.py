# + =====================================================================================================================
# +
# + 8 kyu - Convert a String to a Number!  [ ID: 544675c6f971f7399a000e79 ] (convert-a-string-to-a-number)
# + URL: https://www.codewars.com/kata/544675c6f971f7399a000e79
# + Category: REFERENCE  |  Tags: PARSING | STRINGS | FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from convert_a_string_to_a_number import string_to_number


from random import randint


@test.describe("string_to_number")
def basic_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(string_to_number("1234"), 1234)
        test.assert_equals(string_to_number("605"), 605)
        test.assert_equals(string_to_number("1405"), 1405)
        test.assert_equals(string_to_number("-7"), -7)


@test.describe("Random Tests")
def random_tests():
    for _ in range(100):
        num = randint(-50000, 50000)

        @test.it(f"Testing for string_to_number('{num}')")
        def test_case():
            test.assert_equals(string_to_number(str(num)), num, "It should work for random inputs too")
