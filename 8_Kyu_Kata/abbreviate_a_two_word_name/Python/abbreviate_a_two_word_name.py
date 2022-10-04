# 8 kyu - Abbreviate a Two Word Name  [ ID: 57eadb7ecd143f4c9c0000a3  (abbreviate-a-two-word-name) ]
# URL: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
# Category: NONE  |  Tags: STRINGS | ARRAYS | FUNDAMENTALS
# ******************************************************************************
def abbrev_name(name):
    return f"{name[0].upper()}.{name[(name.index(' ')+1)].upper()}"
