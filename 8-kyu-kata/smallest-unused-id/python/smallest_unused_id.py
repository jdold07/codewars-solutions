# 8 kyu - Smallest unused ID  [ ID: 55eea63119278d571d00006a  (smallest-unused-id) ]
# URL: https://www.codewars.com/kata/55eea63119278d571d00006a
# Category: ALGORITHMS  |  Tags: FUNDAMENTALS | ALGORITHMS
# ******************************************************************************
def next_id(arr):
    if arr:
        for x in range(max(arr) + 2):
            if x in arr:
                continue
            return x
    return 0
