# 7 kyu - Round up to the next multiple of 5  [ ID: 55d1d6d5955ec6365400006d  (round-up-to-the-next-multiple-of-5) ]
# URL: https://www.codewars.com/kata/55d1d6d5955ec6365400006d
# Category: NONE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def round_to_next5(n):
    while n % 5:
        n += 1
    return n
