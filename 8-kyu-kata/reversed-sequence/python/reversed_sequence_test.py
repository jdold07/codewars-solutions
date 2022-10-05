# 8 kyu - Reversed sequence   [ ID: 5a00e05cc374cb34d100000d  (reversed-sequence) ]
# URL: https://www.codewars.com/kata/5a00e05cc374cb34d100000d
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
# New tests for 3.8+
import codewars_test as test
from solution import reverse_seq

try:
    reverseseq = reverse_seq
except:
    pass  # maintain the previous function name


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(reverseseq(5), [5, 4, 3, 2, 1])
        test.assert_equals(reverseseq(6), [6, 5, 4, 3, 2, 1])
        test.assert_equals(reverseseq(100), list(range(1, 101))[::-1])
        test.assert_equals(reverseseq(10000), list(range(1, 10001))[::-1])
        test.assert_equals(reverseseq(100000), list(range(1, 100001))[::-1])
        test.assert_equals(reverseseq(1000000), list(range(1, 1000001))[::-1])


@test.describe("Random Tests")
def random_tests():

    from random import randint

    for _ in range(50):
        n = randint(2, 10000)
        expected = list(range(1, n + 1))[::-1]
        result = reverseseq(n)

        @test.it(f"testing for reverseseq({n})")
        def test_case():
            test.assert_equals(result, expected)
