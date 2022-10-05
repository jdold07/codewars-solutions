# 8 kyu - Reversed Words  [ ID: 51c8991dee245d7ddf00000e  (reversed-words) ]
# URL: https://www.codewars.com/kata/51c8991dee245d7ddf00000e
# Category: ALGORITHMS  |  Tags: STRINGS | ALGORITHMS
# ******************************************************************************
import codewars_test as test

try:
    from solution import reverseWords as reverse_words
except ImportError:
    from solution import reverse_words


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Tests")
    def basic_tests():
        test.assert_equals(reverse_words("hello world!"), "world! hello")
        test.assert_equals(reverse_words("yoda doesn't speak like this"), "this like speak doesn't yoda")
        test.assert_equals(reverse_words("foobar"), "foobar")
        test.assert_equals(reverse_words("kata editor"), "editor kata")
        test.assert_equals(reverse_words("row row row your boat"), "boat your row row row")


@test.describe("Random Tests")
def random_tests():

    from random import randint, choice
    from string import ascii_letters, punctuation

    s = ascii_letters + punctuation

    for _ in range(100):
        strng = " ".join("".join(choice(s) for j in range(0, randint(1, 10))) for i in range(0, randint(0, 100)))
        expected = " ".join(strng.split(" ")[::-1])

        @test.it(f"Testing for reverse_words({strng})")
        def test_case():
            test.assert_equals(reverse_words(strng), expected)
