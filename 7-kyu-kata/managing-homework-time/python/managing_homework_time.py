# 7 kyu - Managing Homework Time  [ ID: 58cbc48930bcf09b7a000117  (managing-homework-time) ]
# URL: https://www.codewars.com/kata/58cbc48930bcf09b7a000117
# Category: ALGORITHMS  |  Tags: ALGORITHMS
# ******************************************************************************
def time_per_day(l):
      return round((sum((x[0] * x[1] * 0.75) for x in l) / (60 * 5)), 2)
  
