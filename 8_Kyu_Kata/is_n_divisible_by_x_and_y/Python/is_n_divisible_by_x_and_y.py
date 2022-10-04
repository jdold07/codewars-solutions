# 8 kyu - Is n divisible by x and y?  [ ID: 5545f109004975ea66000086  (is-n-divisible-by-x-and-y) ]
# URL: https://www.codewars.com/kata/5545f109004975ea66000086
# Category: NONE  |  Tags: REFACTORING
# ******************************************************************************
def is_divisible(n, x, y):
    return False if n % x or n % y else True
