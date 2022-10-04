# 8 kyu - Regex count lowercase letters  [ ID: 56a946cd7bd95ccab2000055  (regex-count-lowercase-letters) ]
# URL: https://www.codewars.com/kata/56a946cd7bd95ccab2000055
# Category: NONE  |  Tags: FUNDAMENTALS | REGULAR EXPRESSIONS | ALGORITHMS
# ******************************************************************************
def lowercase_count(strng):
    return len("".join(x for x in strng if x.islower()))


# ******************************************************************************
# ******************************************************************************
def lowercase_count(strng):
    return len("".join(x for x in strng if x in map(chr, range(97, 123))))
