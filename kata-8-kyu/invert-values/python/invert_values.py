# + =====================================================================================================================
# +
# + 8 kyu - Invert values  [ ID: 5899dc03bc95b1bf1b0000ad ] (invert-values)
# + URL: https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
# + Category: REFERENCE  |  Tags: LISTS | FUNDAMENTALS
# +
# + =====================================================================================================================


def invert(lst):
    return list(map(lambda x: x * -1, lst))
