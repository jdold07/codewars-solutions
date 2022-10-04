# 7 kyu - Find the middle element  [ ID: 545a4c5a61aa4c6916000755  (find-the-middle-element) ]
# URL: https://www.codewars.com/kata/545a4c5a61aa4c6916000755
# Category: NONE  |  Tags: ARRAYS | FUNDAMENTALS
# ******************************************************************************
def gimme(input_array):
      return input_array.index(sorted(input_array)[1])
