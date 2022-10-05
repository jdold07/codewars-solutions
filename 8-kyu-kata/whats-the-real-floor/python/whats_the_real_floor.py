# 8 kyu - What's the real floor?  [ ID: 574b3b1599d8f897470018f6  (whats-the-real-floor) ]
# URL: https://www.codewars.com/kata/574b3b1599d8f897470018f6
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def get_real_floor(n):
      return n if n<1 else n-2 if n>13 else n-1
