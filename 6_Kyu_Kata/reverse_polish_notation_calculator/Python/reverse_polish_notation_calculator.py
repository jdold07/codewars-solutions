# 6 kyu - Reverse polish notation calculator  [ ID: 52f78966747862fc9a0009ae  (reverse-polish-notation-calculator) ]
# URL: https://www.codewars.com/kata/52f78966747862fc9a0009ae
# Category: NONE  |  Tags: ALGORITHMS | MATHEMATICS | INTERPRETERS | PARSING | STRINGS
# ******************************************************************************
def calc(expr):
      expr = expr.split(" ") if expr else "0"
      result = []
      for i in range(len(expr)):
          if not expr[i] in "+-*/":
              result.append(expr[i])
          else:
              result.append(f"({result.pop(-2)} {expr[i]} {result.pop()})")
      answer = eval(result.pop()) if result else eval(expr)
      return int(answer) if not answer % 2 else answer
