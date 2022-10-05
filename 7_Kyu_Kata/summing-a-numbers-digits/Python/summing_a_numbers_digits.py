# [object Object] - Summing  a number's digits  [ ID: 52f3149496de55aded000410  (summing-a-numbers-digits) ]
# URL: https://www.codewars.com/kata/52f3149496de55aded000410
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def sum_digits(number):
      return sum(map(int, list(str(abs(number)))))
  
      # total = 0
      # for x in list(str(abs(number))):
      #     total += int(x)
      # return total
