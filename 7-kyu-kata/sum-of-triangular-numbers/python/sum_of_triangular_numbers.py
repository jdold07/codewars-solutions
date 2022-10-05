# 7 kyu - Sum of Triangular Numbers  [ ID: 580878d5d27b84b64c000b51  (sum-of-triangular-numbers) ]
# URL: https://www.codewars.com/kata/580878d5d27b84b64c000b51
# Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
# ******************************************************************************
def sum_triangular_numbers(n):
    if n < 1:
        return 0
    triangular_series = []
    for x in range(1, n + 1):
        triangular_series.append((1 + x) * x // 2)
    return sum(triangular_series)
