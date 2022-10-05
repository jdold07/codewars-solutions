# 7 kyu - Factorial  [ ID: 54ff0d1f355cfd20e60001fc  (factorial) ]
# URL: https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc
# Category: REFERENCE  |  Tags: ALGORITHMS | FUNDAMENTALS
# ******************************************************************************
def factorial(n):
    result = 1
    if n >= 0 and n <= 12:
        for x in range(1, n + 1):
            result *= x
    else:
        raise ValueError("ValueError")
    return result
