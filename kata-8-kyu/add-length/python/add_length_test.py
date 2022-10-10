# + =====================================================================================================================
# +
# + 8 kyu - Add Length  [ ID: 559d2284b5bb6799e9000047 ] (add-length)
# + URL: https://www.codewars.com/kata/559d2284b5bb6799e9000047
# + Category: REFERENCE  |  Tags: ARRAYS | LISTS | FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from add_length import add_length


@test.describe("Fixed Tests")
def basic_tests():
    test.assert_equals(add_length("apple ban"), ["apple 5", "ban 3"])
    test.assert_equals(add_length("you will win"), ["you 3", "will 4", "win 3"])
    test.assert_equals(add_length("you"), ["you 3"])
    test.assert_equals(add_length("y"), ["y 1"])
    test.assert_equals(add_length("x y z"), ["x 1", "y 1", "z 1"])
    test.assert_equals(add_length("xyz"), ["xyz 3"])
    test.assert_equals(add_length("xyz x y z xyz"), ["xyz 3", "x 1", "y 1", "z 1", "xyz 3"])
    test.assert_equals(add_length("a bc cde"), ["a 1", "bc 2", "cde 3"])
    test.assert_equals(add_length("a ab abc"), ["a 1", "ab 2", "abc 3"])
    test.assert_equals(add_length("a ab abc ab a"), ["a 1", "ab 2", "abc 3", "ab 2", "a 1"])


@test.describe("Random Tests")
def random_tests():

    from random import randint
    from re import sub

    add_sol = lambda s: [*map(lambda x: " ".join([x, str(len(x))]), s.split(" "))]

    for _ in range(40):
        base = "    abcdefghijklmnopqrstuvwxyz    ABCDEFGHIJKLMNOPQRSTUVWXYZ    "
        s = "".join([base[randint(0, len(base) - 1)] for _ in range(randint(1, 60))]).strip()
        s = sub("\s{2,100}", " ", s)
        if s == "":
            s = "CodeWars"

        @test.it(f"Testing for add_length({s})")
        def test_case():
            test.assert_equals(add_length(s), add_sol(s))
