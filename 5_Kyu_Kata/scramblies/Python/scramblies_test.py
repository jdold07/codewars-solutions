# [object Object] - Scramblies  [ ID: 55c04b4cc56a697bb0000048  (scramblies) ]
# URL: https://www.codewars.com/kata/55c04b4cc56a697bb0000048
# Category: ALGORITHMS  |  Tags: STRINGS | PERFORMANCE | ALGORITHMS
# ******************************************************************************
import codewars_test as test
from solution import scramble
from random import randint, randrange, choice, choices, shuffle
from collections import Counter

def dotest(s1, s2, expected):
    actual = scramble(s1, s2)
    test.assert_equals(actual, expected, f"With\ns1 = \"{s1}\"\ns2 = \"{s2}\"")


def solver(s1,s2):
    return len(Counter(s2)- Counter(s1)) == 0

base="abcdefghijklmnopqrstuvwxyz"

def rand_chars(min_len, max_len):
    return choices(base, k = randint(min_len, max_len))

def do_rand_test(min_len, max_len):
    L1 = rand_chars(min_len, max_len)
    expected = bool(randint(0,1))
    if expected:
        L2 = L1[:]
        shuffle(L2)
        L2 = L2[:randrange(len(L1))]
    else:
        cntr = Counter(L1)
        c  = choice(list(cntr.keys()))
        L2 = sum([[k] * randrange(v+1) if k != c else [k] * (v+1)  for k,v in cntr.items()], [])
        shuffle(L2)
    dotest(''.join(L1), ''.join(L2), expected)
    
    
@test.describe("Tests")
def test_group():
    @test.it("Sample tests")
    def test_case():
        for s1, s2, expected in [
            ('rkqodlw', 'world', True),
            ('cedewaraaossoqqyt', 'codewars', True),
            ('katas', 'steak', False),
            ('scriptjava', 'javascript', True),
            ('scriptingjava', 'javascript', True),
            ('scriptsjava','javascripts',True),
            ('jscripts','javascript',False),
            ('aabbcamaomsccdd','commas',True),
            ('commas','commas',True),
            ('sammoc','commas',True)
        ]:
            dotest(s1, s2, expected)
    @test.it("Random tests")
    def test_case():
        for _ in range(500):
            do_rand_test(10, 20)
    @test.it("Performance tests")
    def test_case():
        for _ in range(20):
            do_rand_test(100_000, 600_000)
            
