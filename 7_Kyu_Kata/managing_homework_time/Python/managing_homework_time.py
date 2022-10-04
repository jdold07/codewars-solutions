# 7 kyu - Managing Homework Time  [ ID: 58cbc48930bcf09b7a000117  (managing-homework-time) ]
# URL: https://www.codewars.com/kata/58cbc48930bcf09b7a000117
# Category: NONE  |  Tags: ALGORITHMS
# ******************************************************************************
def time_per_day(n):
    return round((sum((x[0] * x[1] * 0.75) for x in n) / (60 * 5)), 2)
