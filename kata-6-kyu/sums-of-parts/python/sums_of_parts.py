# + =====================================================================================================================
# +
# + 6 kyu - Sums of Parts  [ ID: 5ce399e0047a45001c853c2b ] (sums-of-parts)
# + URL: https://www.codewars.com/kata/5ce399e0047a45001c853c2b
# + Category: ALGORITHMS  |  Tags: FUNDAMENTALS | PERFORMANCE | ALGORITHMS
# +
# + =====================================================================================================================


def parts_sums(ls):
    result = [sum(ls)]
    for i in range(len(ls)):
        result.append(result[i] - ls.pop(0))
    return result
