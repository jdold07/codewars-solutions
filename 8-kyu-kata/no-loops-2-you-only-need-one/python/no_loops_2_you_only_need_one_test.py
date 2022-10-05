# 8 kyu - No Loops 2 - You only need one  [ ID: 57cc40b2f8392dbf2a0003ce  (no-loops-2-you-only-need-one) ]
# URL: https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce
# Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
# ******************************************************************************
import codewars_test as test
from solution import check


@test.describe("Fixed tests")
def _():
    @test.it("Tests")
    def __():
        test.assert_equals(check([66, 101], 66), True)
        test.assert_equals(check([80, 117, 115, 104, 45, 85, 112, 115], 45), True)
        test.assert_equals(check(["t", "e", "s", "t"], "e"), True)
        test.assert_equals(check(["what", "a", "great", "kata"], "kat"), False)

    @test.it("Edge Cases")
    def __():
        test.assert_equals(check([66, "codewars", 11, "alex loves pushups"], "alex loves pushups"), True)
        test.assert_equals(check(["come", "on", 110, "2500", 10, "!", 7, 15], "Come"), False)
        test.assert_equals(check(["when's", "the", "next", "Katathon?", 9, 7], "Katathon?"), True)
        test.assert_equals(check([8, 7, 5, "bored", "of", "writing", "tests", 115], 45), False)
        test.assert_equals(check(["anyone", "want", "to", "hire", "me?"], "me?"), True)


@test.describe("Random Tests")
def _():
    from random import randint, choice, shuffle

    def reference(a, x):
        return x in a

    def generate_random_case():
        array = [randint(0, 10) for _ in range(40)]
        first = array[0]
        if choice([True, False]):
            array.remove(first)
        shuffle(array)
        return array, first

    @test.it("Random Test Cases")
    def __():
        for _ in range(100):
            array, x = generate_random_case()
            expected_solution = reference(array, x)
            user_solution = check(array, x)
            test.assert_equals(user_solution, expected_solution)
