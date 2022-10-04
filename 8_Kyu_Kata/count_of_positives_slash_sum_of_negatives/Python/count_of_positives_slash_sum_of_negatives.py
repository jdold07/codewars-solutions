# 8 kyu - Count of positives / sum of negatives  [ ID: 576bb71bbbcf0951d5000044  (count-of-positives-slash-sum-of-negatives) ]
# URL: https://www.codewars.com/kata/576bb71bbbcf0951d5000044
# Category: NONE  |  Tags: FUNDAMENTALS | ARRAYS | LISTS
# ******************************************************************************
def count_positives_sum_negatives(arr):
      result = []
      if len(arr):    #test for empty list
          result.append(len(list(filter(lambda x: x>0, arr)))) #filter input for positives into a list and append length to result
          result.append(sum(list(filter(lambda x: x<0, arr)))) #filter input for negatives into a list and append sum to result
      return result   #return either empty list if "if" test failed or the result of the 2 "if" appends
