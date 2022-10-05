# 8 kyu - Reversed sequence   [ ID: 5a00e05cc374cb34d100000d  (reversed-sequence) ]
# URL: https://www.codewars.com/kata/5a00e05cc374cb34d100000d
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def reverse_seq(n):
      return list(range(1,n+1))[::-1]
  
  #     result = []
  #     while n > 0:
  #         result.append(n)
  #         n -= 1
  #     return result
