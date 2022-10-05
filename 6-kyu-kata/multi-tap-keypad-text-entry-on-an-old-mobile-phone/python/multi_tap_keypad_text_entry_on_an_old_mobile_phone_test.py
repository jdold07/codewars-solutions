# 6 kyu - Multi-tap Keypad Text Entry on an Old Mobile Phone  [ ID: 54a2e93b22d236498400134b  (multi-tap-keypad-text-entry-on-an-old-mobile-phone) ]
# URL: https://www.codewars.com/kata/54a2e93b22d236498400134b
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
from multi_tap_keypad_text_entry_on_an_old_mobile_phone import presses
import codewars_test as test


@test.describe("Basic Tests")
def _():
    @test.it("should work for simple words")
    def _():
        test.assert_equals(presses("LOL"), 9)

    @test.it("should work for phrases with spaces")
    def _():
        test.assert_equals(presses("HOW R U"), 13)

    @test.it("should work for phrases with numbers")
    def _():
        test.assert_equals(presses("WHERE DO U WANT 2 MEET L8R"), 47)

    @test.it("should allow input in lowercase")
    def _():
        test.assert_equals(presses("lol"), 9)

    @test.it("should handle the 0 digit")
    def _():
        test.assert_equals(presses("0"), 2)
        test.assert_equals(presses("ZER0"), 11)

    @test.it("should handle the 1 digit")
    def _():
        test.assert_equals(presses("1"), 1)
        test.assert_equals(presses("IS NE1 OUT THERE"), 31)

    @test.it("should handle non-alphabetic characters")
    def _():
        test.assert_equals(presses("#"), 1)
        test.assert_equals(presses("#codewars #rocks"), 36)


@test.describe("Random Tests")
def desc2():
    from random import randint

    keys = ["1", "ABC2", "DEF3", "GHI4", "JKL5", "MNO6", "PQRS7", "TUV8", "WXYZ9", "*", " 0", "#"]
    keystrokes = {
        " ": 1,
        "#": 1,
        "*": 1,
        "1": 1,
        "0": 2,
        "3": 4,
        "2": 4,
        "5": 4,
        "4": 4,
        "7": 5,
        "6": 4,
        "9": 5,
        "8": 4,
        "A": 1,
        "C": 3,
        "B": 2,
        "E": 2,
        "D": 1,
        "G": 1,
        "F": 3,
        "I": 3,
        "H": 2,
        "K": 2,
        "J": 1,
        "M": 1,
        "L": 3,
        "O": 3,
        "N": 2,
        "Q": 2,
        "P": 1,
        "S": 4,
        "R": 3,
        "U": 2,
        "T": 1,
        "W": 1,
        "V": 3,
        "Y": 3,
        "X": 2,
        "Z": 4,
    }

    def solmobile(phrase):
        return sum(map(lambda letter: keystrokes[letter], phrase.upper()))

    for _ in range(40):
        phrase = "".join(["".join(keys)[randint(0, 38)] for x in range(randint(5, 25))])

        @test.it(f'Testing for presses("{phrase}")')
        def it2():
            test.assert_equals(presses(phrase), solmobile(phrase), "It should work for random inputs too")
