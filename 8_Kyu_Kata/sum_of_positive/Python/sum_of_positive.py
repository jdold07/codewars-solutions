# 8 kyu - Sum of positive  [ ID: 5715eaedb436cf5606000381  (sum-of-positive) ]
# URL: https://www.codewars.com/kata/5715eaedb436cf5606000381
# Category: NONE  |  Tags: ARRAYS | FUNDAMENTALS
# ******************************************************************************
def positive_sum(arr):
    def positive_check(value):
        return value >= 0

    return sum(filter(positive_check, arr))
