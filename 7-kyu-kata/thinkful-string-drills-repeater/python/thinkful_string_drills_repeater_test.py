# 7 kyu - Thinkful - String Drills: Repeater  [ ID: 585a1a227cb58d8d740001c3  (thinkful-string-drills-repeater) ]
# URL: https://www.codewars.com/kata/585a1a227cb58d8d740001c3
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test


@test.describe("Fixed Tests")
def basic_tests():
    test.assert_equals(repeater("a", 5), "aaaaa")
    test.assert_equals(repeater("Na", 16), "NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa")
    test.assert_equals(repeater("Wub ", 6), "Wub Wub Wub Wub Wub Wub ")


@test.describe("More Tests")
def more_tests():
    test.assert_equals(repeater("la", 12), "lalalalalalalalalalalala")
    test.assert_equals(repeater("dance\n", 3), "dance\ndance\ndance\n")
    test.assert_equals(
        repeater("A stopped clock is right twice a day. ", 2),
        "A stopped clock is right twice a day. A stopped clock is right twice a day. ",
    )
    test.assert_equals(repeater("nine", 9), "nineninenineninenineninenineninenine")


@test.describe("Random Tests")
def random_tests():

    from random import choice

    def myrepeater(string, n):
        return string * n

    words = "This is an array of random strings that might show up in some test".split(" ")

    for _ in range(100):

        word = choice(words)
        n = choice(range(1, 11))

        @test.it(f"Testing for repeater({word}, {n})")
        def test_case():
            test.assert_equals(repeater(word, n), myrepeater(word, n), "It should work for random inputs too")
