# + =====================================================================================================================
# +
# + 8 kyu - Check same case  [ ID: 5dd462a573ee6d0014ce715b ] (check-same-case)
# + URL: https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from check_same_case import same_case


import string
from random import choice


@test.describe("Basic Tests")
def test_group():
    @test.it("basic test case")
    def test_case():
        test.assert_equals(same_case("C", "B"), 1)
        test.assert_equals(same_case("b", "a"), 1)
        test.assert_equals(same_case("d", "d"), 1)
        test.assert_equals(same_case("A", "s"), 0)
        test.assert_equals(same_case("c", "B"), 0)
        test.assert_equals(same_case("b", "Z"), 0)
        test.assert_equals(same_case("\t", "Z"), -1)
        test.assert_equals(same_case("H", ":"), -1)


@test.describe("Random tests")
def random_tests():
    def generate_random_case():
        a = choice(string.printable)
        b = choice(string.printable)
        return a, b

    def _same_case_ref(a, b):
        if not a.isalpha() or not b.isalpha():
            return -1
        elif (a.isupper() and b.isupper()) or (a.islower() and b.islower()):
            return 1
        return 0

    def _do_one_test():
        a, b = generate_random_case()
        expected = _same_case_ref(a, b)
        actual = same_case(a, b)
        test.assert_equals(actual, expected)

    @test.it("Random Test Cases")
    def random_test_cases():
        for _ in range(100):
            _do_one_test()
