# 8 kyu - Short Long Short  [ ID: 50654ddff44f800200000007  (short-long-short) ]
# URL: https://www.codewars.com/kata/50654ddff44f800200000007
# Category: ALGORITHMS  |  Tags: ALGORITHMS
# ******************************************************************************
def solution(a, b):
      return a + b + a if len(a) < len(b) else b + a + b
  
