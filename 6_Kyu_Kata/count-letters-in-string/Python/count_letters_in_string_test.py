# [object Object] - Count letters in string  [ ID: 5808ff71c7cfa1c6aa00006d  (count-letters-in-string) ]
# URL: https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d
# Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
# ******************************************************************************
test.describe("Basic Test")
test.assert_equals(letter_count("codewars"), {"a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1})
test.assert_equals(letter_count("activity"), {"a": 1, "c": 1, "i": 2, "t": 2, "v": 1, "y": 1})
test.assert_equals(letter_count("arithmetics"), {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2})
test.assert_equals(letter_count("traveller"), {"a": 1, "e": 2, "l": 2, "r": 2, "t": 1, "v": 1})
test.assert_equals(letter_count("daydreamer"), {"a": 2, "d": 2, "e": 2, "m": 1, "r": 2, "y": 1})

test.describe("Random Test")
from random import randint
from collections import defaultdict
sol=lambda s: {l: s.count(l) for l in set(s)}
base="abcdefghijklmnopqrstuvwxyz"

for _ in range(40):
    s="".join([base[randint(0,len(base)-1)] for q in range(randint(8,25))])
    test.it("Testing for "+repr(s))
    test.assert_equals(letter_count(s),sol(s),"It should work for random inputs too")
