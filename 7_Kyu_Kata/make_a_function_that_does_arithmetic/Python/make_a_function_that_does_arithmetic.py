# 7 kyu - Make a function that does arithmetic!  [ ID: 583f158ea20cfcbeb400000a  (make-a-function-that-does-arithmetic) ]
# URL: https://www.codewars.com/kata/583f158ea20cfcbeb400000a
# Category: NONE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def arithmetic(a, b, operator):
    if operator == "add":
        return a + b
    if operator == "subtract":
        return a - b
    if operator == "multiply":
        return a * b
    return a / b
