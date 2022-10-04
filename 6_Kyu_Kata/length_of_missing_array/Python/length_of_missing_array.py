# 6 kyu - Length of missing array  [ ID: 57b6f5aadb5b3d0ae3000611  (length-of-missing-array) ]
# URL: https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611
# Category: NONE  |  Tags: ARRAYS | ALGORITHMS
# ******************************************************************************
def get_length_of_missing_array(list_2d):
      if not list_2d or None in list_2d or len(min(list_2d)) == 0:
          return 0
      for i, row in enumerate(sorted(list_2d, key=len)):
          if len(row) != i + len(min(list_2d)):
              return i + len(min(list_2d))
