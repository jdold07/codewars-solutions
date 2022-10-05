# 8 kyu - Sum The Strings  [ ID: 5966e33c4e686b508700002d  (sum-the-strings) ]
# URL: https://www.codewars.com/kata/5966e33c4e686b508700002d
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def sum_str(a, b):
      return str((int(a) if len(a) else 0) + (int(b) if len(b) else 0))
