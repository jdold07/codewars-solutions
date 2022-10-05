# 6 kyu - Error correction #1 - Hamming Code  [ ID: 5ef9ca8b76be6d001d5e1c3e  (error-correction-number-1-hamming-code) ]
# URL: https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e
# Category: ALGORITHMS  |  Tags: ALGORITHMS | BITS
# ******************************************************************************
from solution import encode
from solution import decode
import codewars_test as test
import random


@test.describe("Test encode function")
def tests_encode():
    @test.it("Should work with short word")
    def test_short_word():
        test.assert_equals(encode("hey"), "000111111000111000000000000111111000000111000111000111111111111000000111")

    @test.it("Should work with long word")
    def test_long_word():
        test.assert_equals(
            encode("The Sensei told me that i can do this kata"),
            "000111000111000111000000000111111000111000000000000111111000000111000111000000111000000000000000000111000111000000111111000111111000000111000111000111111000111111111000000111111111000000111111000111111000000111000111000111111000111000000111000000111000000000000000000111111111000111000000000111111000111111111111000111111000111111000000000111111000000111000000000000111000000000000000000111111000111111000111000111111000000111000111000000111000000000000000000111111111000111000000000111111000111000000000000111111000000000000111000111111111000111000000000000111000000000000000000111111000111000000111000000111000000000000000000111111000000000111111000111111000000000000111000111111000111111111000000000111000000000000000000111111000000111000000000111111000111111111111000000111000000000000000000111111111000111000000000111111000111000000000000111111000111000000111000111111111000000111111000000111000000000000000000111111000111000111111000111111000000000000111000111111111000111000000000111111000000000000111",
        )

    @test.it("Should work with numbers")
    def test_short_word():
        test.assert_equals(
            encode("T3st"),
            "000111000111000111000000000000111111000000111111000111111111000000111111000111111111000111000000",
        )

    @test.it("Should work with special characters")
    def test_short_word():
        test.assert_equals(
            encode("T?st!%"),
            "000111000111000111000000000000111111111111111111000111111111000000111111000111111111000111000000000000111000000000000111000000111000000111000111",
        )


@test.describe("Test decode function")
def tests_decode():
    @test.it("Should work with short word")
    def test_short_word():
        test.assert_equals(decode("100111111000111001000010000111111000000111001111000111110110111000010111"), "hey")

    @test.it("Should work with long word")
    def test_long_word():
        test.assert_equals(
            decode(
                "000111000111000111000100000111111000111000001000000111111000010111000111000100111000000000000100000111000111000000111111000111111000000111000111000111111000111111111000000111111111000000111111000110111000000111000111000111111000111000000111000000111000000000000000000111111111000111000000000111111000111111111111000111111000111111000000000111111000000111000001000000111000000000001000000111111000111111000111000111111000000111000111000000111000000000000000000111111111000111000000000111111000111000000000000111111000000010000111000111111111000111000000000100111000000000000000000111111000111000000111000000111000000000000000000111111000000000111111000111111000000000000111000111111000111111111000000000111000000000000010000111111000000111000000000111111000111111110111000000111000000000000000000111111111000111000000000111111000111000000000000111111000111000000111000111111111000000111111000000111000000000000000000111111000111000111111000111111000000000000111000111111111000111000000000111111000000000000111"
            ),
            "The Sensei told me that i can do this kata",
        )

    @test.it("Should work with numbers")
    def test_short_word():
        test.assert_equals(
            decode("000111000111000111000010000000111111000000111111000111111111000000111111000111111111000111010000"),
            "T3st",
        )

    @test.it("Should work with special characters")
    def test_short_word():
        test.assert_equals(
            decode(
                "000111000111000111000001000000111111110111111111000111111111000000111111000111111111000111000000000000111000000000000111000000111000000111000111"
            ),
            "T?st!%",
        )


def e(string):
    bits = ""
    code = ""
    for i in range(0, len(string)):
        bits += ("{0:b}".format(ord(string[i]))).zfill(8)
    for i in range(0, len(bits)):
        if bits[i] == "1":
            code += "111"
        else:
            code += "000"
    return code


@test.describe("Random test encode function")
def tests_random_encode():
    letters = "abcdefghijklmnopqrstuvwxyz0123456789+#-/%"

    @test.it("Random test")
    def test_random():
        for x in range(0, 100):
            buffer = ""
            length = random.randint(2, 19)
            for i in range(0, length):
                buffer += letters[random.randint(0, 40)]
            test.assert_equals(encode(buffer), e(buffer))


@test.describe("Random test decode function")
def tests_random_decode():
    letters = "abcdefghijklmnopqrstuvwxyz0123456789+#-/%"

    @test.it("Random test without errors")
    def test_random_without_errors():
        for x in range(0, 100):
            buffer = ""
            length = random.randint(2, 19)
            for i in range(0, length):
                buffer += letters[random.randint(0, 40)]
            test.assert_equals(decode(e(buffer)), buffer)

    @test.it("Random test with errors")
    def test_random_with_errors():
        for x in range(0, 100):
            buffer = ""
            errors = ""
            length = random.randint(2, 19)
            for i in range(0, length):
                buffer += letters[random.randint(0, 40)]
            buffer2 = e(buffer)
            for i in range(0, len(buffer2)):
                if i % 3 == 0:
                    if buffer2[i] == "1":
                        errors += "0"
                    else:
                        errors += "1"
                else:
                    errors += buffer2[i]
            test.assert_equals(decode(errors), buffer)
