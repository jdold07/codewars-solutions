# 7 kyu - Sum of Minimums!  [ ID: 5d5ee4c35162d9001af7d699  (sum-of-minimums) ]
# URL: https://www.codewars.com/kata/5d5ee4c35162d9001af7d699
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
# ******************************************************************************
def sum_of_minimums(numbers):
    result = 0
    for i, c in enumerate(numbers):
        result += min(numbers[i])
    return result
