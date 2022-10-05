# 7 kyu - Fizz Buzz  [ ID: 5300901726d12b80e8000498  (fizz-buzz) ]
# URL: https://www.codewars.com/kata/5300901726d12b80e8000498
# Category: ALGORITHMS  |  Tags: ALGORITHMS | FUNDAMENTALS | ARRAYS
# ******************************************************************************
def fizzbuzz(n):
    return [
        "FizzBuzz" if not val % 3 and not val % 5 else "Fizz" if not val % 3 else "Buzz" if not val % 5 else val
        for val in range(1, n + 1)
    ]
