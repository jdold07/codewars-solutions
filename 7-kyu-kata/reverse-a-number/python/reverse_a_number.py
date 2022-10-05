# 7 kyu - Reverse a Number  [ ID: 555bfd6f9f9f52680f0000c5  (reverse-a-number) ]
# URL: https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5
# Category: GAMES  |  Tags: ALGORITHMS | FUNDAMENTALS
# ******************************************************************************
def reverse_number(n):
    return int(str(abs(n))[::-1]) * -1 if n < 0 else int(str(n)[::-1])
