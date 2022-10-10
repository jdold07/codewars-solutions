# + =====================================================================================================================
# +
# + 5 kyu - String incrementer  [ ID: 54a91a4883a7de5d7800009c ] (string-incrementer)
# + URL: https://www.codewars.com/kata/54a91a4883a7de5d7800009c
# + Category: REFERENCE  |  Tags: REGULAR EXPRESSIONS | STRINGS
# +
# + =====================================================================================================================

import codewars_test as test
from string_incrementer import increment_string


from random import randint


@test.describe("Tests")
def all_tests():
    @test.it("Fixed Tests")
    def fixed_tests():

        tests = [
            ["foo", "foo1"],
            ["foobar001", "foobar002"],
            ["foobar1", "foobar2"],
            ["foobar00", "foobar01"],
            ["foobar99", "foobar100"],
            ["", "1"],
            ["foobar000", "foobar001"],
            ["foobar999", "foobar1000"],
            ["foobar00999", "foobar01000"],
            ["fo99obar99", "fo99obar100"],
            ["foobar001", "foobar002"],
            ["1", "2"],
            ["009", "010"],
        ]

        for t in tests:
            test.assert_equals(increment_string(t[0]), t[1], f"String = {repr(t[0])}")

    @test.it("Random Tests")
    def random_tests():
        def sklasdfjioweu2(s):
            if s and s[-1].isdigit():
                return sklasdfjioweu2(s[:-1]) + "0" if s[-1] == "9" else s[:-1] + repr(int(s[-1]) + 1)
            return s + "1"

        randstr = lambda: "".join(chr(randint(32, 126)) for i in range(randint(0, 9)))
        randnum = lambda: "".join(chr(randint(48, 57)) for i in range(randint(0, 9)))
        probe = (
            lambda: "".join(randstr() + randnum() for i in range(randint(0, 9)))
            + randint(0, 9) * "0"
            + randnum()
            + randint(0, 1) * "9"
        )

        for i in range(100):
            x = probe()
            expected = sklasdfjioweu2(x)
            test.assert_equals(increment_string(x), expected, f"String = {repr(x)}")
