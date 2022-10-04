# 7 kyu - Most digits  [ ID: 58daa7617332e59593000006  (most-digits) ]
# URL: https://www.codewars.com/kata/58daa7617332e59593000006
# Category: NONE  |  Tags: STRINGS | FUNDAMENTALS
# ******************************************************************************
def find_longest(arr):
      length_arr = [len(str(x)) for x in arr]
      return arr[length_arr.index(max(length_arr))]
