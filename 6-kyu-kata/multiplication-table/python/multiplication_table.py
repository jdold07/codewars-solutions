# 6 kyu - Multiplication table  [ ID: 534d2f5b5371ecf8d2000a08  (multiplication-table) ]
# URL: https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08
# Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
# ******************************************************************************
def multiplication_table(size):
    result = []
    for row in range(1, size + 1):
        result.append([num * row for num in range(1, size + 1)])
    return result
