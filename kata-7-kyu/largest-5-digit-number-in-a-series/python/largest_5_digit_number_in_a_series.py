# + =====================================================================================================================
# +
# + 7 kyu - Largest 5 digit number in a series  [ ID: 51675d17e0c1bed195000001 ] (largest-5-digit-number-in-a-series)
# + URL: https://www.codewars.com/kata/51675d17e0c1bed195000001
# + Category: ALGORITHMS  |  Tags: ALGORITHMS
# +
# + =====================================================================================================================


def solution(digits):
    result = 0
    for i in range(0, len(digits)):
        num = int(digits[i : i + 5])
        if num > result:
            result = num
    return result
