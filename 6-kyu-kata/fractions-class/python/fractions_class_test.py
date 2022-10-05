# 6 kyu - Fractions class  [ ID: 572bbd7c72a38bd878000a73  (fractions-class) ]
# URL: https://www.codewars.com/kata/572bbd7c72a38bd878000a73
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import fractions
import random

test.describe("Basic Tests")
test.assert_equals(Fraction(1, 8) + Fraction(4, 5), Fraction(37, 40))
test.assert_equals(Fraction(1, 4) + Fraction(3, 4), Fraction(1, 1))
test.assert_equals(Fraction(911, 920) + Fraction(980, 906), Fraction(863483, 416760))
test.assert_equals(Fraction(610, 941) + Fraction(253, 985), Fraction(838923, 926885))
test.assert_equals(Fraction(956, 798) + Fraction(662, 189), Fraction(16880, 3591))
test.assert_equals(Fraction(694, 485) + Fraction(853, 861), Fraction(1011239, 417585))
test.assert_equals(Fraction(982, 111) + Fraction(219, 561), Fraction(191737, 20757))
test.assert_equals(Fraction(344, 873) + Fraction(658, 486), Fraction(41201, 23571))
test.assert_equals(Fraction(662, 361) + Fraction(322, 382), Fraction(184563, 68951))
test.assert_equals(Fraction(740, 813) + Fraction(184, 348), Fraction(33926, 23577))
test.assert_equals(Fraction(579, 441) + Fraction(543, 807), Fraction(78524, 39543))
test.assert_equals(Fraction(212, 979) + Fraction(46, 580), Fraction(83997, 283910))

test.describe("Random Tests")
for _ in range(75):
    num1, den1, num2, den2 = [random.randint(1, 1000) for __ in range(4)]
    test.assert_equals(
        str(Fraction(num1, den1) + Fraction(num2, den2)),
        str(fractions.Fraction(num1, den1) + fractions.Fraction(num2, den2)),
    )
