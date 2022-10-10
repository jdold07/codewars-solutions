# + =====================================================================================================================
# +
# + 8 kyu - Find the Remainder  [ ID: 524f5125ad9c12894e00003f ] (find-the-remainder)
# + URL: https://www.codewars.com/kata/524f5125ad9c12894e00003f
# + Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
# +
# + =====================================================================================================================


def remainder(a, b):
    return None if min(a, b) == 0 else max(a, b) % min(a, b)
