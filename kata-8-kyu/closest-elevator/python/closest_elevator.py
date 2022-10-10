# + =====================================================================================================================
# +
# + 8 kyu - Closest elevator  [ ID: 5c374b346a5d0f77af500a5a ] (closest-elevator)
# + URL: https://www.codewars.com/kata/5c374b346a5d0f77af500a5a
# + Category: ALGORITHMS  |  Tags: ALGORITHMS
# +
# + =====================================================================================================================


def elevator(left, right, call):
    return ["right", "left"][(max(left, call) - min(left, call)) < (max(right, call) - min(right, call))]
