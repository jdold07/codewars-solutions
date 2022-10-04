# 5 kyu - Number of trailing zeros of N!  [ ID: 52f787eb172a8b4ae1000a34  (number-of-trailing-zeros-of-n) ]
# URL: https://www.codewars.com/kata/52f787eb172a8b4ae1000a34
# Category: NONE  |  Tags: ALGORITHMS | LOGIC | MATHEMATICS
# ******************************************************************************
def zeros(n):
      zeroes = 0
      while n > 5:
          n /= 5
          zeroes += int(n)
      return zeroes
