# 6 kyu - Highest Rank Number in an Array  [ ID: 5420fc9bb5b2c7fd57000004  (highest-rank-number-in-an-array) ]
# URL: https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004
# Category: NONE  |  Tags: ARRAYS | FUNDAMENTALS
# ******************************************************************************
from statistics import mode
  
  
  def highest_rank(arr):
      return mode(sorted(arr, reverse=True))
