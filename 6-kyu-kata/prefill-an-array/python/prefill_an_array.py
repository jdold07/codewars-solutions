# 6 kyu - Prefill an Array  [ ID: 54129112fb7c188740000162  (prefill-an-array) ]
# URL: https://www.codewars.com/kata/54129112fb7c188740000162
# Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
# ******************************************************************************
def prefill(n, v=None):
    if str(n).isnumeric() and int(n) >= 0:
        return [v] * int(n)
    else:
        raise TypeError(f"{n} is invalid")
