# 7 kyu - Maximum Length Difference  [ ID: 5663f5305102699bad000056  (maximum-length-difference) ]
# URL: https://www.codewars.com/kata/5663f5305102699bad000056
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def mxdiflg(a1, a2):
    if a1 == [] or a2 == []:
        return -1
    max_a1 = len(sorted(a1, key=len)[-1])
    max_a2 = len(sorted(a2, key=len)[-1])
    min_a1 = len(sorted(a1, key=len)[0])
    min_a2 = len(sorted(a2, key=len)[0])
    return max(max_a1 - min_a2, max_a2 - min_a1)
