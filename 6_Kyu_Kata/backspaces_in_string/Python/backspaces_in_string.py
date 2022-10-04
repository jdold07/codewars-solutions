# 6 kyu - Backspaces in string  [ ID: 5727bb0fe81185ae62000ae3  (backspaces-in-string) ]
# URL: https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
# Category: NONE  |  Tags: FUNDAMENTALS | STRINGS | ALGORITHMS
# ******************************************************************************
import re
  
  
  def clean_string(s):
      while "#" in s:
          s = re.sub(r".?(\#)", "", s, count=1)
      return s
