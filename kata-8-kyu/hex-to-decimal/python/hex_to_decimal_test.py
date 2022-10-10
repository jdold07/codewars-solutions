# + =====================================================================================================================
# +
# + 8 kyu - Hex to Decimal  [ ID: 57a4d500e298a7952100035d ] (hex-to-decimal)
# + URL: https://www.codewars.com/kata/57a4d500e298a7952100035d
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from hex_to_decimal import hex_to_dec


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(hex_to_dec("1"), 1)
        test.assert_equals(hex_to_dec("a"), 10)
        test.assert_equals(hex_to_dec("10"), 16)


@test.describe("Random Tests")
def random_tests():

    from random import randint

    for _ in range(100):
        num = randint(0, 20000)
        hex_num = hex(num)[2:]

        @test.it(f"testing for hcx_to_dec({num})")
        def test_case():
            test.assert_equals(hex_to_dec(hex_num), num)
