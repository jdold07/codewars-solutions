# 6 kyu - Triple trouble  [ ID: 55d5434f269c0c3f1b000058  (triple-trouble-1) ]
# URL: https://www.codewars.com/kata/55d5434f269c0c3f1b000058
# Category: ALGORITHMS  |  Tags: ALGORITHMS
# ******************************************************************************
from random import randint

test.describe("Begin tests")
test.assert_equals(triple_double(451999277, 41177722899), 1)
test.assert_equals(triple_double(1222345, 12345), 0)
test.assert_equals(triple_double(12345, 12345), 0)
test.assert_equals(triple_double(666789, 12345667), 1)
test.assert_equals(triple_double(10560002, 100), 1)
test.assert_equals(triple_double(1112, 122), 0)

test.describe("Random test")
n1 = randint(0, 1000000000)
n2 = randint(0, 1000000000)


def Sol(num1, num2):
    s1, s2 = map(str, (num1, num2))
    for i in range(len(s2) - 1):
        if s2[i] == s2[i + 1]:
            for j in range(len(s1) - 2):
                if s1[j] == s2[i] == s1[j + 1] == s1[j + 2]:
                    return 1
    return 0


test.assert_equals(triple_double(n1, n2), Sol(n1, n2))
