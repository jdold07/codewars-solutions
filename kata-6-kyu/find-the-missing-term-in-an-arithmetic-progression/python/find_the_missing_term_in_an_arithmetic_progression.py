# + =====================================================================================================================
# +
# + 6 kyu - Find the missing term in an Arithmetic Progression  [ ID: 52de553ebb55d1fca3000371 ] (find-the-missing-term-in-an-arithmetic-progression)
# + URL: https://www.codewars.com/kata/52de553ebb55d1fca3000371
# + Category: ALGORITHMS  |  Tags: ALGORITHMS | MATHEMATICS
# +
# + =====================================================================================================================


def find_missing(s):
    diffs = [s[2] - s[1], s[1] - s[0], s[-1] - s[-2]]
    d = diffs[0] if diffs.count(diffs[0]) > 1 else diffs[1]
    n = len(s) + 1
    sum_ap = n / 2 * (2 * s[0] + (n - 1) * d)
    return int(sum_ap - sum(s))
