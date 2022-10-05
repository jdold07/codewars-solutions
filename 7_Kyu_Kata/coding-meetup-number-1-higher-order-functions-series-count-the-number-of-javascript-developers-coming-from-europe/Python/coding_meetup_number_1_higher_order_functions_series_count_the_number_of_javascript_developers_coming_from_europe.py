# [object Object] - Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe  [ ID: 582746fa14b3892727000c4f  (coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe) ]
# URL: https://www.codewars.com/kata/582746fa14b3892727000c4f
# Category: ALGORITHMS  |  Tags: DATA STRUCTURES | FUNDAMENTALS | ALGORITHMS | STRINGS | REGULAR EXPRESSIONS | ARRAYS | FUNCTIONAL PROGRAMMING
# ******************************************************************************
def count_developers(lst):
      result = 0
      for x in lst:
          result += 1 if x["continent"] == "Europe" and x["language"] == "JavaScript" else 0
      return result
