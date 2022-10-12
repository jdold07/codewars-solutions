# + =====================================================================================================================
# +
# + 5 kyu - Simple Pig Latin  [ ID: 520b9d2ad5c005041100000f ] (simple-pig-latin)
# + URL: https://www.codewars.com/kata/520b9d2ad5c005041100000f
# + Category: ALGORITHMS  |  Tags: REGULAR EXPRESSIONS | ALGORITHMS
# +
# + =====================================================================================================================

from re import sub


def pig_it(text):
    return sub(r"\b(\w)(\w*)\b", r"\2\1ay", text)
