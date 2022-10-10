# + =====================================================================================================================
# +
# + 6 kyu - Multiples of 3 or 5  [ ID: 514b92a657cdc65150000006 ] (multiples-of-3-or-5)
# + URL: https://www.codewars.com/kata/514b92a657cdc65150000006
# + Category: ALGORITHMS  |  Tags: MATHEMATICS | ALGORITHMS
# +
# + =====================================================================================================================


def solution(n):
    return sum(i for i in range(1, n) if i % 3 == 0 or i % 5 == 0)
