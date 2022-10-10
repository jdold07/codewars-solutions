# + =====================================================================================================================
# +
# + 7 kyu - Row Weights  [ ID: 5abd66a5ccfd1130b30000a9 ] (row-weights)
# + URL: https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9
# + Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
# +
# + =====================================================================================================================


def row_weights(array):
    result = [0, 0]
    for index, weight in enumerate(array):
        result[0] += weight if not index % 2 else 0
        result[1] += weight if index % 2 else 0
    return tuple(result)
