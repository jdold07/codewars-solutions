# + =====================================================================================================================
# +
# + 8 kyu - Keep Hydrated!  [ ID: 582cb0224e56e068d800003c ] (keep-hydrated-1)
# + URL: https://www.codewars.com/kata/582cb0224e56e068d800003c
# + Category: REFERENCE  |  Tags: ALGORITHMS | MATHEMATICS | FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from keep_hydrated_1 import litres


@test.describe("Fixed tests")
def basic_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(litres(2), 1, "should return 1 litre")
        test.assert_equals(litres(1.4), 0, "should return 0 litres")
        test.assert_equals(litres(12.3), 6, "should return 6 litres")
        test.assert_equals(litres(0.82), 0, "should return 0 litres")
        test.assert_equals(litres(11.8), 5, "should return 5 litres")
        test.assert_equals(litres(1787), 893, "should return 893 litres")
        test.assert_equals(litres(0), 0, "should return 0 litres")


@test.describe("Random Tests")
def random_tests():

    from random import randint

    def ans(time):
        return int(time / 2)

    for _ in range(100):
        time = randint(0, 1000)

        @test.it(f"Testing for litres({time})")
        def test_case():
            test.assert_equals(litres(time), ans(time), "It should work for random inputs too")
