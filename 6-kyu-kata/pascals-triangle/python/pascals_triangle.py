# 6 kyu - Pascal's Triangle  [ ID: 5226eb40316b56c8d500030f  (pascals-triangle) ]
# URL: https://www.codewars.com/kata/5226eb40316b56c8d500030f
# Category: ALGORITHMS  |  Tags: ARRAYS | MATHEMATICS | ALGORITHMS
# ******************************************************************************
def pascals_triangle(n):
      rows = []
      for row in range(n):
          rows.append([1])
          for val in range(1, row):
              rows[row].append(rows[row - 1][val - 1] + rows[row - 1][val])
          if row != 0:
              rows[row].append(1)
      return [val for row in rows for val in row]
