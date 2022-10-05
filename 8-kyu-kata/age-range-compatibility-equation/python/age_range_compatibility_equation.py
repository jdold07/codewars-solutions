# 8 kyu - Age Range Compatibility Equation  [ ID: 5803956ddb07c5c74200144e  (age-range-compatibility-equation) ]
# URL: https://www.codewars.com/kata/5803956ddb07c5c74200144e
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def dating_range(age):
      return f"{int(age // 2 + 7)}-{int((age - 7) * 2)}" if age > 14 else f"{int(age * 0.9)}-{int(age * 1.1)}"
  
