# 7 kyu - Simple Fun #176: Reverse Letter  [ ID: 58b8c94b7df3f116eb00005b  (simple-fun-number-176-reverse-letter) ]
# URL: https://www.codewars.com/kata/58b8c94b7df3f116eb00005b
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import string
import random


def randgen():
    rand = random.randint(1, 20)
    base = " 0123456789abcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    word = "".join(random.choice(base) for i in range(rand))
    return word


test.describe("Basic test")

test.assert_equals(reverse_letter("krishan"), "nahsirk")

test.assert_equals(reverse_letter("ultr53o?n"), "nortlu")

test.assert_equals(reverse_letter("ab23c"), "cba")

test.assert_equals(reverse_letter("krish21an"), "nahsirk")

test.describe("Random tests")

for i in range(100):
    a = randgen()
    expected = "".join([i for i in a if i.isalpha()])[::-1]
    actual = reverse_letter(a)
    test.assert_equals(actual, expected)
