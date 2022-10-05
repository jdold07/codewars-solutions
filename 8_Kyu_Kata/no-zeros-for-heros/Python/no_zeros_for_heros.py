# [object Object] - No zeros for heros  [ ID: 570a6a46455d08ff8d001002  (no-zeros-for-heros) ]
# URL: https://www.codewars.com/kata/570a6a46455d08ff8d001002
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def no_boring_zeros(n):
      if n:
          while n % 10 == 0:
              n = n // 10
      return n
