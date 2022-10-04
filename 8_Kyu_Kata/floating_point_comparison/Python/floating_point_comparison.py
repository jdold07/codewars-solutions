# 8 kyu - Floating point comparison  [ ID: 5f9f43328a6bff002fa29eb8  (floating-point-comparison) ]
# URL: https://www.codewars.com/kata/5f9f43328a6bff002fa29eb8
# Category: NONE  |  Tags: FUNDAMENTALS | MATHEMATICS | DEBUGGING
# ******************************************************************************
def approx_equals(a, b):
      tolerance = 0.001   #set test tolerance as variable
      if a < 0 and b < 0: #remove possibility of errors when testing 2 negatives
          a = abs(a)
          b = abs(b)
      if a >= b:          #ensure result can compare to positive tolerance
          return float(a - b) < tolerance
      return float(b - a) < tolerance
