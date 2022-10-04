# 7 kyu - Odd March  Bits 8 bits  [ ID: 58ee4db3e479611e6f000086  (odd-march-bits-8-bits-1) ]
# URL: https://www.codewars.com/kata/58ee4db3e479611e6f000086
# Category: NONE  |  Tags: BITS | BINARY | ARRAYS | FUNDAMENTALS
# ******************************************************************************
def bit_march(n: int) -> list:
      return [[int(x) for x in ("0" * (8 - n - i) + "1" * n + "0" * i)] for i in range(8 - n + 1)]
