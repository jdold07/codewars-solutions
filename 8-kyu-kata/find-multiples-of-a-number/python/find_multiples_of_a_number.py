# 8 kyu - Find Multiples of a Number  [ ID: 58ca658cc0d6401f2700045f  (find-multiples-of-a-number) ]
# URL: https://www.codewars.com/kata/58ca658cc0d6401f2700045f
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def find_multiples(integer, limit):
      return list(range(integer, limit + 1, integer))
