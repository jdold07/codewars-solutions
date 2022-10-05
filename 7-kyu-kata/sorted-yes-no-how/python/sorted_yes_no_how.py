# 7 kyu - Sorted? yes? no? how?  [ ID: 580a4734d6df748060000045  (sorted-yes-no-how) ]
# URL: https://www.codewars.com/kata/580a4734d6df748060000045
# Category: REFERENCE  |  Tags: ARRAYS | SORTING | FUNDAMENTALS
# ******************************************************************************
def is_sorted_and_how(arr):
      return (
          "yes, ascending" if sorted(arr) == arr else 
          "yes, descending" if sorted(arr, reverse=True) == arr else 
          "no"
      )
