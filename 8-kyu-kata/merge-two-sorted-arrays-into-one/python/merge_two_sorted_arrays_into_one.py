# 8 kyu - Merge two sorted arrays into one  [ ID: 5899642f6e1b25935d000161  (merge-two-sorted-arrays-into-one) ]
# URL: https://www.codewars.com/kata/5899642f6e1b25935d000161
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
# ******************************************************************************
def merge_arrays(arr1, arr2):
    return sorted(list(set(arr1 + arr2)))
