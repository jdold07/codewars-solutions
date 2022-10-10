# + =====================================================================================================================
# +
# + 7 kyu - Kill The Monsters!  [ ID: 5b36137991c74600f200001b ] (kill-the-monsters)
# + URL: https://www.codewars.com/kata/5b36137991c74600f200001b
# + Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS | MATHEMATICS | STRINGS
# +
# + =====================================================================================================================

import codewars_test as test
from kill_the_monsters import kill_monsters


import random


@test.describe("Default Tests")
def test_group():
    @test.it("Default Test Cases")
    def test_case():
        test.assert_equals(kill_monsters(50, 7, 10), "hits: 2, damage: 20, health: 30", "For input (50, 7, 10)")
        test.assert_equals(kill_monsters(20, 1, 10), "hits: 0, damage: 0, health: 20", "For input (20, 1, 10)")
        test.assert_equals(kill_monsters(30, 4, 50), "hero died", "For input (30, 4, 50)")
        test.assert_equals(kill_monsters(10, 4, 100), "hero died", "For input (10, 4, 100)")
        test.assert_equals(kill_monsters(100, 31, 1), "hits: 10, damage: 10, health: 90", "For input (100, 31, 1)")
        test.assert_equals(kill_monsters(42, 30, 2), "hits: 9, damage: 18, health: 24", "For input (42, 30, 2)")
        test.assert_equals(kill_monsters(10, 7, 5), "hero died", "For input (10, 7, 5)")


@test.describe("Random Tests")
def test_group():
    def solution(health, monsters, damage):
        hits = 0
        damage_taken = 0
        monsters -= 3
        while monsters > 0:
            health -= damage
            hits += 1
            damage_taken += damage
            monsters -= 3
            if health <= 0:
                return "hero died"
        return f"hits: {hits}, damage: {damage_taken}, health: {health}"

    @test.it("100 Random Test Cases")
    def test_case():
        for i in range(100):
            randomh = random.randint(10, 1000)
            randomm = random.randint(1, 200)
            randomdm = random.randint(1, 60)
            test.assert_equals(
                kill_monsters(randomh, randomm, randomdm),
                solution(randomh, randomm, randomdm),
                f"For input ({randomh}, {randomm}, {randomdm})",
            )
