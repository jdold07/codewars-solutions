# 7 kyu - Remove duplicate words  [ ID: 5b39e3772ae7545f650000fc  (remove-duplicate-words) ]
# URL: https://www.codewars.com/kata/5b39e3772ae7545f650000fc
# Category: NONE  |  Tags: STRINGS | REGULAR EXPRESSIONS | ALGORITHMS
# ******************************************************************************
def remove_duplicate_words(s):
    result = []
    [result.append(x) for x in s.split() if x not in result]
    return " ".join(result)
