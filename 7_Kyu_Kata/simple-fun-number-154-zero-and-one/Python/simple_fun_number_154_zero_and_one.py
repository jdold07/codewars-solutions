# [object Object] - Simple Fun #154: Zero And One  [ ID: 58ad09d6154165a1c80000d1  (simple-fun-number-154-zero-and-one) ]
# URL: https://www.codewars.com/kata/58ad09d6154165a1c80000d1
# Category: GAMES  |  Tags: PUZZLES
# ******************************************************************************
from re import sub
  
  def zero_and_one(s):
      return len(sub("01|10", "", s))
