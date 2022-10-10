# + =====================================================================================================================
# +
# + 8 kyu - Powers of 2  [ ID: 57a083a57cb1f31db7000028 ] (powers-of-2)
# + URL: https://www.codewars.com/kata/57a083a57cb1f31db7000028
# + Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from powers_of_2 import powers_of_two


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(powers_of_two(0), [1])
        test.assert_equals(powers_of_two(1), [1, 2])
        test.assert_equals(powers_of_two(4), [1, 2, 4, 8, 16])


@test.describe("Random Tests")
def random_test():
    from random import shuffle

    tests = list(range(0, 201))
    shuffle(tests)

    def _powers_of_two(n):
        return [2**x for x in range(0, n + 1)]

    for n in tests:

        @test.it(f"testing for powers_of_two({n})")
        def test_case():
            test.assert_equals(powers_of_two(n), _powers_of_two(n))
