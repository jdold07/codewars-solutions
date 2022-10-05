# 8 kyu - 101 Dalmatians - squash the bugs, not the dogs!  [ ID: 56f6919a6b88de18ff000b36  (101-dalmatians-squash-the-bugs-not-the-dogs) ]
# URL: https://www.codewars.com/kata/56f6919a6b88de18ff000b36
# Category: BUG_FIXES  |  Tags: DEBUGGING | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import how_many_dalmatians


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(how_many_dalmatians(26), "More than a handful!")
        test.assert_equals(how_many_dalmatians(8), "Hardly any")
        test.assert_equals(how_many_dalmatians(14), "More than a handful!")
        test.assert_equals(how_many_dalmatians(80), "Woah that's a lot of dogs!")
        test.assert_equals(how_many_dalmatians(100), "Woah that's a lot of dogs!")
        test.assert_equals(how_many_dalmatians(50), "More than a handful!")
        test.assert_equals(how_many_dalmatians(10), "Hardly any")
        test.assert_equals(how_many_dalmatians(101), "101 DALMATIONS!!!")


@test.describe("Random tests")
def random_tests():

    from random import randint

    sol = lambda n: ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"][
        sum([n > 10, n > 50, n >= 101])
    ]

    for _ in range(40):
        n = randint(1, 101)

        @test.it(f"Testing for how_many_dalmatians{n}")
        def test_case():
            test.assert_equals(how_many_dalmatians(n), sol(n))
