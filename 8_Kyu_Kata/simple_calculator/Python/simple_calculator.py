# 8 kyu - simple calculator   [ ID: 5810085c533d69f4980001cf  (simple-calculator) ]
# URL: https://www.codewars.com/kata/5810085c533d69f4980001cf
# Category: NONE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def calculator(x, y, op):
    if (isinstance(x, int) or isinstance(x, float)) and (isinstance(y, int) or isinstance(y, float)):
        operators = {"+": x + y, "-": x - y, "*": x * y, "/": x / y}
        if op in operators:
            return operators[op]
    return "unknown value"
