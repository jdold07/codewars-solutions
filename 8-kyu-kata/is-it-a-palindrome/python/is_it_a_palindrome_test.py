# 8 kyu - Is it a palindrome?  [ ID: 57a1fd2ce298a731b20006a4  (is-it-a-palindrome) ]
# URL: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
from random import randint
from is_it_a_palindrome import is_palindrome
import codewars_test as test


@test.describe("Fixed tests")
def fixed_tests():
    def fixed_test(i, o):
        @test.it(f"Testing for {i}")
        def t():
            test.assert_equals(is_palindrome(i), o)

    fixed_test("a", True)
    fixed_test("aba", True)
    fixed_test("Abba", True)
    fixed_test("malam", True)
    fixed_test("walter", False)
    fixed_test("kodok", True)
    fixed_test("Kasue", False)
    fixed_test("hello", False)
    fixed_test("Bob", True)
    fixed_test("Madam", True)
    fixed_test("AbBa", True)
    fixed_test("", True)
    fixed_test("LAGrALLyiclOaEowNvmU", False)
    fixed_test("cWalaIYFGucHEhbnEH", False)
    fixed_test("smlWLKQYCrRUcqOLYuGGuYLOqcURrCYQKLWlms", True)
    fixed_test("dRjLeHcvvcHeLjRd", True)
    fixed_test("wvvqHAfrFWkIYygRQHTR", False)
    fixed_test("zuKWoAyeQNvhurRlYlUUlYlRruhvNQeyAoWKuz", True)
    fixed_test("QtFpQMSYPMnnMPYSMQpFtQ", True)
    fixed_test("muNcdggdcNum", True)
    fixed_test("TUkKinLuE", False)
    fixed_test("MaKeRSDisini", False)


@test.describe("Random tests: guaranteed to be palindromes")
def random_tests_palindrome():
    for t in range(30):
        chars = [chr(randint(97, 122)) for _ in range(randint(0, 20))]
        chars.extend(chars[randint(-2, -1) :: -1])
        for i in range(len(chars)):
            if randint(0, 1):
                chars[i] = chars[i].upper()
        s = "".join(chars)

        @test.it(f"Testing for {s}")
        def t():
            test.assert_equals(is_palindrome(s), True)


@test.describe("Addition random tests")
def random_tests_2():
    for t in range(30):
        chars = [chr(randint(97, 122)) for _ in range(randint(0, 40))]
        for i in range(len(chars)):
            if randint(0, 1):
                chars[i] = chars[i].upper()
        s = "".join(chars)
        exp = s.lower() == s.lower()[::-1]

        @test.it(f"Testing for {s}")
        def t():
            test.assert_equals(is_palindrome(s), exp)
