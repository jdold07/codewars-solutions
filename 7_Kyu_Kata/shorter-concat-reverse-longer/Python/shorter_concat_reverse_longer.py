# [object Object] - shorter concat [reverse longer]  [ ID: 54557d61126a00423b000a45  (shorter-concat-reverse-longer) ]
# URL: https://www.codewars.com/kata/54557d61126a00423b000a45
# Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
# ******************************************************************************
shorter_reverse_longer = lambda a, b: b + a[::-1] + b if len(a) >= len(b) else a + b[::-1] + a
