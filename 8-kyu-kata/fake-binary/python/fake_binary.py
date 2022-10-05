# 8 kyu - Fake Binary  [ ID: 57eae65a4321032ce000002d  (fake-binary) ]
# URL: https://www.codewars.com/kata/57eae65a4321032ce000002d
# Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
# ******************************************************************************
def fake_bin(x):
    return "".join(list(map(lambda v: "0" if int(v) < 5 else "1", list(x))))
