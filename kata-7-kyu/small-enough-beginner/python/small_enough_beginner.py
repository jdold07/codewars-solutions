# + =====================================================================================================================
# +
# + 7 kyu - Small enough? - Beginner  [ ID: 57cc981a58da9e302a000214 ] (small-enough-beginner)
# + URL: https://www.codewars.com/kata/57cc981a58da9e302a000214
# + Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
# +
# + =====================================================================================================================


def small_enough(array, limit):
    return not len([x for x in array if x > limit])
