# + =====================================================================================================================
# +
# + 8 kyu - Formatting decimal places #0  [ ID: 5641a03210e973055a00000d ] (formatting-decimal-places-number-0)
# + URL: https://www.codewars.com/kata/5641a03210e973055a00000d
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from formatting_decimal_places_number_0 import two_decimal_places


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(two_decimal_places(4.659725356), 4.66, "didn't work for 4.659725356")
        test.assert_equals(
            two_decimal_places(173735326.3783732637948948), 173735326.38, "didn't work for 173735326.3783732637948948"
        )
        test.assert_equals(two_decimal_places(4.653725356), 4.65, "didn't work for 4.653725356")


@test.describe("Random Tests")
def random_tests():

    from random import uniform

    for i in range(100):
        number = uniform(-125.47658, 125.47658)

        @test.it(f"testing for two_decimal_places({number})")
        def test_case():
            test.assert_equals(two_decimal_places(number), round(number, 2))
