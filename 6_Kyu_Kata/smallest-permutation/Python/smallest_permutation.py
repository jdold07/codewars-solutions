# [object Object] - Smallest Permutation  [ ID: 5fefee21b64cc2000dbfa875  (smallest-permutation) ]
# URL: https://www.codewars.com/kata/5fefee21b64cc2000dbfa875
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
from re import sub
  
  def min_permutation(n):
      min_perm = "".join(sorted(str(n)))
      return int(sub("^(-?)(0)(0*)([123456789]{1})", "\\1\\4\\3\\2", min_perm))
