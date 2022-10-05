# 7 kyu - Two fighters, one winner.  [ ID: 577bd8d4ae2807c64b00045b  (two-fighters-one-winner) ]
# URL: https://www.codewars.com/kata/577bd8d4ae2807c64b00045b
# Category: REFERENCE  |  Tags: GAMES | ALGORITHMS | LOGIC | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from preloaded import Fighter
from two_fighters_one_winner import declare_winner


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew"), "Lew")

        test.assert_equals(declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Harry"), "Harry")

        test.assert_equals(declare_winner(Fighter("Harald", 20, 5), Fighter("Harry", 5, 4), "Harry"), "Harald")

        test.assert_equals(declare_winner(Fighter("Harald", 20, 5), Fighter("Harry", 5, 4), "Harald"), "Harald")

        test.assert_equals(declare_winner(Fighter("Jerry", 30, 3), Fighter("Harald", 20, 5), "Jerry"), "Harald")

        test.assert_equals(declare_winner(Fighter("Jerry", 30, 3), Fighter("Harald", 20, 5), "Harald"), "Harald")


@test.describe("200 Random test cases")
def _():

    import random

    names = [
        "Willy",
        "Johnny",
        "Max",
        "Lui",
        "Marco",
        "Bostin",
        "Loyd",
        "Mark",
        "Cuban",
        "Lew",
        "Rocky",
        "Mario",
        "David",
        "Patrick",
        "Michael",
    ]

    def correct(fighter1, fighter2, first_attacker):

        SWITCH = {fighter1: fighter2, fighter2: fighter1}

        current_attacker = fighter1 if fighter1.name == first_attacker else fighter2

        while True:

            # Attack
            SWITCH[current_attacker].health -= current_attacker.damage_per_attack

            # Check if dead
            if SWITCH[current_attacker].health <= 0:
                return current_attacker.name

            # Change who the attacker is - time for revenge!
            current_attacker = SWITCH[current_attacker]

    for trial in range(200):
        name1 = random.choice(names)
        name2 = random.choice(names)
        while name1 == name2:
            name2 = random.choice(names)

        health1, damagePerAttack1 = random.randint(1, 1000), random.randint(1, 100)
        health2, damagePerAttack2 = random.randint(1, 1000), random.randint(1, 100)
        first = random.choice((name1, name2))

        @test.it("testing for declare_winner")
        def test_case():
            test.assert_equals(
                declare_winner(Fighter(name1, health1, damagePerAttack1), Fighter(name2, health2, damagePerAttack2), first),
                correct(Fighter(name1, health1, damagePerAttack1), Fighter(name2, health2, damagePerAttack2), first),
            )
