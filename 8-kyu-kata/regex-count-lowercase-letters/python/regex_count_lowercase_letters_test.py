# 8 kyu - Regex count lowercase letters  [ ID: 56a946cd7bd95ccab2000055  (regex-count-lowercase-letters) ]
# URL: https://www.codewars.com/kata/56a946cd7bd95ccab2000055
# Category: REFERENCE  |  Tags: FUNDAMENTALS | REGULAR EXPRESSIONS | ALGORITHMS
# ******************************************************************************
import codewars_test as test
from regex_count_lowercase_letters import lowercase_count


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(lowercase_count("abc"), 3)
        test.assert_equals(lowercase_count("abcABC123"), 3)
        test.assert_equals(lowercase_count("abcABC123!@#$%^&*()_-+=}{[]|':;?/>.<,~"), 3)
        test.assert_equals(lowercase_count(""), 0)
        test.assert_equals(lowercase_count("ABC123!@#$%^&*()_-+=}{[]|':;?/>.<,~"), 0)
        test.assert_equals(lowercase_count("abcdefghijklmnopqrstuvwxyz"), 26)


@test.describe("Random Tests")
def random_tests():
    from random import randint, choice

    chars = "abcdefghijklmnopqrstuvwqyzqwertyuiopasdfghjklzxcvbnmABC0123456789!@#\$%^&*()-_+={}[]|\:;?/>.<,)"

    def randchar():
        return choice(chars)

    def randstr(l):
        return "".join(randchar() for _ in range(l))

    def solution(strng):
        return len([ch for ch in strng if ch.islower()])

    for i in range(40):
        strng = randstr(randint(5, 20))

        @test.it(f"testing for lowercase_count({strng})")
        def test_case():
            test.assert_equals(lowercase_count(strng), solution(strng))
