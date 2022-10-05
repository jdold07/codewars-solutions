# 8 kyu - Grasshopper - Terminal game combat function  [ ID: 586c1cf4b98de0399300001d  (grasshopper-terminal-game-combat-function-1) ]
# URL: https://www.codewars.com/kata/586c1cf4b98de0399300001d
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import combat


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(combat(100, 5), 95)
        test.assert_equals(combat(83, 16), 67)
        test.assert_equals(combat(20, 30), 0)


@test.describe("Random Tests")
def random_tests():

    import random
    import itertools

    for num in itertools.repeat(1, 20):
        health = random.choice(range(1, 100))
        damage = random.choice(range(1, 100))

        @test.it(f"testing for combat({health}, {damage})")
        def test_case():
            test.assert_equals(combat(health, damage), 0 if (health - damage) < 0 else health - damage)
