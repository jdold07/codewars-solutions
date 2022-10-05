# 8 kyu - Swap Values  [ ID: 5388f0e00b24c5635e000fc6  (swap-values) ]
# URL: https://www.codewars.com/kata/5388f0e00b24c5635e000fc6
# Category: BUG_FIXES  |  Tags: DEBUGGING | ARRAYS | FUNDAMENTALS
# ******************************************************************************
def swap_values(args):
    args[0], args[1] = args[1], args[0]
    return args
