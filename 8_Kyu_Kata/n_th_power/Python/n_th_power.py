# 8 kyu - N-th Power  [ ID: 57d814e4950d8489720008db  (n-th-power) ]
# URL: https://www.codewars.com/kata/57d814e4950d8489720008db
# Category: NONE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def index(array, n):
      return -1 if len(array) < n+1 else array[n] ** n
