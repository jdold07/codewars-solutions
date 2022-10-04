# 6 kyu - Kebabize  [ ID: 57f8ff867a28db569e000c4a  (kebabize) ]
# URL: https://www.codewars.com/kata/57f8ff867a28db569e000c4a
# Category: NONE  |  Tags: FUNDAMENTALS | STRINGS | REGULAR EXPRESSIONS
# ******************************************************************************
def kebabize(s):
    new_s = ""
    for x in s:
        if x.isalpha():
            new_s += x if x.islower() else f"-{x.lower()}"
    return new_s.strip("-")
