# 7 kyu - Form The Minimum  [ ID: 5ac6932b2f317b96980000ca  (form-the-minimum) ]
# URL: https://www.codewars.com/kata/5ac6932b2f317b96980000ca
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def min_value(digits):
    return int("".join(map(str, sorted(list(set(digits))))))
