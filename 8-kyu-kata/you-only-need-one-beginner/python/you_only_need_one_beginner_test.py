# 8 kyu - You only need one - Beginner  [ ID: 57cc975ed542d3148f00015b  (you-only-need-one-beginner) ]
# URL: https://www.codewars.com/kata/57cc975ed542d3148f00015b
# Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
# ******************************************************************************
# New tests for 3.8+
import codewars_test as test
from you_only_need_one_beginner import check


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        tests = [
            (True, ([66, 101], 66)),
            (False, ([78, 117, 110, 99, 104, 117, 107, 115], 8)),
            (True, ([101, 45, 75, 105, 99, 107], 107)),
            (True, ([80, 117, 115, 104, 45, 85, 112, 115], 45)),
            (True, (["t", "e", "s", "t"], "e")),
            (False, (["what", "a", "great", "kata"], "kat")),
            (True, ([66, "codewars", 11, "alex loves pushups"], "alex loves pushups")),
            (False, (["come", "on", 110, "2500", 10, "!", 7, 15], "Come")),
            (True, (["when's", "the", "next", "Katathon?", 9, 7], "Katathon?")),
            (False, ([8, 7, 5, "bored", "of", "writing", "tests", 115], 45)),
            (True, (["anyone", "want", "to", "hire", "me?"], "me?")),
        ]

        for exp, inp in tests:
            test.assert_equals(check(*inp), exp)


@test.describe("Random Tests")
def random_tests():

    from random import randint, shuffle

    strings = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split()

    def generate_test_case():
        shuffle(strings)
        seq = [randint(0, 1000) for _ in range(randint(1, 100))] + strings
        shuffle(seq)
        if randint(0, 1000) % 2:
            elem = seq[randint(0, len(seq) - 1)]
        else:
            elem = randint(0, 1000)
        return (seq, elem)

    reference = lambda s, e: e in s

    for _ in range(100):
        test_case = generate_test_case()

        @test.it(f"testing for check({test_case})")
        def test_case():
            test.assert_equals(check(test_case[0][:], test_case[1]), reference(*test_case))
