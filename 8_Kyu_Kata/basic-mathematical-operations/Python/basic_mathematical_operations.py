# [object Object] - Basic Mathematical Operations  [ ID: 57356c55867b9b7a60000bd7  (basic-mathematical-operations) ]
# URL: https://www.codewars.com/kata/57356c55867b9b7a60000bd7
# Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
# ******************************************************************************
import operator
  
  def basic_op(operator, value1, value2):
      if operator == "+":
          return (value1 + value2)
      elif operator == "-":
          return (value1 - value2)
      elif operator == "*":
          return (value1 * value2)
      return (value1 / value2)
