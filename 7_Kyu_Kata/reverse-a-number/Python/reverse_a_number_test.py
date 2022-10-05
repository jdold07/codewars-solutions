# [object Object] - Reverse a Number  [ ID: 555bfd6f9f9f52680f0000c5  (reverse-a-number) ]
# URL: https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5
# Category: GAMES  |  Tags: ALGORITHMS | FUNDAMENTALS
# ******************************************************************************
try    : type( reverse_number )
except :  reverse_number = reverseNumber

test.it("Sample tests")
test.assert_equals(reverse_number(123), 321)
test.assert_equals(reverse_number(-123), -321, 'Negative Numbers should be preserved')
test.assert_equals(reverse_number(1000), 1)
test.assert_equals(reverse_number(4321234), 4321234)
test.assert_equals(reverse_number(5), 5)
test.assert_equals(reverse_number(0), 0)
test.assert_equals(reverse_number(98989898), 89898989)


test.it("Random tests")
from random import randint as rnd

def rnd_data(): return [ str(rnd(1,9)) for _ in range(10) ]

def test_reverse(option=None):
    ttt = [ rnd_data() for _ in range(99) ]
    for tt in ttt:
        n, exp = int("".join(tt)), int("".join(tt[::-1]))
        if option==1 : n *= (10**rnd(1,5))
        if option==-1: n,exp = -n,-exp
        print( n, exp )
        test.assert_equals( reverse_number(n), exp )

test.it("Should reverse number")
test_reverse()

test.it("Should handle negative numbers")
test_reverse(-1)

test.it("Should handle 0(s)-ending-numbers")
test_reverse(1)

