# 8 kyu - SpeedCode #2 - Array Madness  [ ID: 56ff6a70e1a63ccdfa0001b1  (speedcode-number-2-array-madness) ]
# URL: https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1
# Category: GAMES  |  Tags: ARRAYS | PUZZLES
# ******************************************************************************
def array_madness(a, b):
    return sum(x**2 for x in a) > sum(y**3 for y in b)
