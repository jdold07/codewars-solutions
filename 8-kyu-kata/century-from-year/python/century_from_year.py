# 8 kyu - Century From Year  [ ID: 5a3fe3dde1ce0e8ed6000097  (century-from-year) ]
# URL: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
# Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS | DATE TIME
# ******************************************************************************
def century(year):
      return year // 100 + 1 if year % 100 else year / 100
