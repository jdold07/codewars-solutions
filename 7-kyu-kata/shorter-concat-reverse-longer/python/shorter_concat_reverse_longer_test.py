# 7 kyu - shorter concat [reverse longer]  [ ID: 54557d61126a00423b000a45  (shorter-concat-reverse-longer) ]
# URL: https://www.codewars.com/kata/54557d61126a00423b000a45
# Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
# ******************************************************************************
import random, string


def random_string():
    l = random.randint(0, 10)
    output = ""
    for i in range(l):
        output += string.ascii_lowercase[random.randint(0, 25)]
    return output


def test_shorter_reverse_longer(a, b):
    return a + b[::-1] + a if len(b) > len(a) else b + a[::-1] + b


test.assert_equals(shorter_reverse_longer("first", "abcde"), "abcdetsrifabcde")
test.assert_equals(shorter_reverse_longer("hello", "bau"), "bauollehbau")
test.assert_equals(shorter_reverse_longer("abcde", "fghi"), "fghiedcbafghi")
for i in range(100):
    a, b = random_string(), random_string()
    test.assert_equals(shorter_reverse_longer(a, b), test_shorter_reverse_longer(a, b))
