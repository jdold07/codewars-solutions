# + =====================================================================================================================
# +
# + 7 kyu - Double Sort  [ ID: 57cc79ec484cf991c900018d ] (double-sort)
# + URL: https://www.codewars.com/kata/57cc79ec484cf991c900018d
# + Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS | SORTING
# +
# + =====================================================================================================================


def db_sort(arr):
    return sorted([x for x in arr if not isinstance(x, str)]) + sorted([x for x in arr if isinstance(x, str)])
