# [object Object] - Multiplication table for number  [ ID: 5a2fd38b55519ed98f0000ce  (multiplication-table-for-number) ]
# URL: https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
# Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
# ******************************************************************************
def multi_table(number):
      result = ""
      for x in range(1,10):
          result += f"{x} * {number} = {x * number}\n"
      return result + f"10 * {number} = {10 * number}"
