# [object Object] - Fix string case  [ ID: 5b180e9fedaa564a7000009a  (fix-string-case) ]
# URL: https://www.codewars.com/kata/5b180e9fedaa564a7000009a
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def solve(s):
      upper = len([letter for letter in s if letter.isupper()])
      lower = len([letter for letter in s if letter.islower()])
      return s.upper() if upper > lower else s.lower()
