# + =====================================================================================================================
# +
# + 8 kyu - The Feast of Many Beasts  [ ID: 5aa736a455f906981800360d ] (the-feast-of-many-beasts)
# + URL: https://www.codewars.com/kata/5aa736a455f906981800360d
# + Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
# +
# + =====================================================================================================================

import math
import random
import codewars_test as test
from the_feast_of_many_beasts import feast


def author_solution(beast, dish):
    return beast[0] == dish[0] and beast[-1] == dish[-1]


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(feast("great blue heron", "garlic naan"), True)
        test.assert_equals(feast("chickadee", "chocolate cake"), True)
        test.assert_equals(feast("brown bear", "bear claw"), False)
        test.assert_equals(feast("marmot", "mulberry tart"), True)
        test.assert_equals(feast("porcupine", "pie"), True)
        test.assert_equals(feast("cat", "yogurt"), False)
        test.assert_equals(feast("electric eel", "lasagna"), False)
        test.assert_equals(feast("slow loris", "salsas"), True)
        test.assert_equals(feast("ox", "orange lox"), True)
        test.assert_equals(feast("blue-footed booby", "blueberry"), True)


@test.describe("Random Tests")
def random_tests():
    def make_string(minimum, maximum):
        array = []
        possible = "abcdefghijklmnopqrstuvwxyz"
        length = math.ceil((random.random() * maximum) + minimum)
        for _ in range(0, length):
            array.append(possible[math.floor(random.random() * len(possible))])
        return "".join(array)

    for _ in range(100):
        beast = make_string(2, 40)
        dish = make_string(2, 40)
        if random.random() < 0.6:
            dish = dish[:-1] + beast[1]

        @test.it(f"testing for feast({beast}, {dish})")
        def test_case():
            test.assert_equals(feast(beast, dish), author_solution(beast, dish))
