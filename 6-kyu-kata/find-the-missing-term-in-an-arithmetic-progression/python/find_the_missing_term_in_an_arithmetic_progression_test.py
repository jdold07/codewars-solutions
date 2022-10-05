# 6 kyu - Find the missing term in an Arithmetic Progression  [ ID: 52de553ebb55d1fca3000371  (find-the-missing-term-in-an-arithmetic-progression) ]
# URL: https://www.codewars.com/kata/52de553ebb55d1fca3000371
# Category: ALGORITHMS  |  Tags: ALGORITHMS | MATHEMATICS
# ******************************************************************************
test.assert_equals(find_missing([1, 2, 3, 4, 6, 7, 8, 9]), 5)

from random import random, randint, randrange, choice


def fixture(bound, steps):
    a = randint(-bound, bound)
    c = randrange(3, bound + 3) * choice([-1, 1])
    good_sequence = [a + i * c for i in range(steps)]
    index = randrange(1, len(good_sequence) - 1)
    expected = good_sequence[index]
    bad_sequence = good_sequence[:index] + good_sequence[index + 1 :]
    test.describe("Testing sequence of {} numbers".format(steps))
    actual = find_missing(bad_sequence)
    test.assert_equals(actual, expected)


for i in range(10):
    base = 1 + i * 5
    fixture(base, 10)
    fixture(base, 100)
    fixture(base, 1000)
    fixture(base, 10000)
    fixture(base, 100000)
