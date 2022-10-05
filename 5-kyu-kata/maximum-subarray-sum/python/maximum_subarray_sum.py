# 5 kyu - Maximum  subarray sum  [ ID: 54521e9ec8e60bc4de000d6c  (maximum-subarray-sum) ]
# URL: https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
# Category: REFERENCE  |  Tags: ALGORITHMS | LISTS | DYNAMIC PROGRAMMING | FUNDAMENTALS
# ******************************************************************************
def max_sequence(arr):
    max_sum = 0
    for i, num in enumerate(arr):
        if num > 0:
            cur_sum = num
            for x in range(i + 1, len(arr)):
                cur_sum += arr[x]
                max_sum = cur_sum if cur_sum > max_sum else max_sum
    return max_sum
