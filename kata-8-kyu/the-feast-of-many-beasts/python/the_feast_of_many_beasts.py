# + =====================================================================================================================
# +
# + 8 kyu - The Feast of Many Beasts  [ ID: 5aa736a455f906981800360d ] (the-feast-of-many-beasts)
# + URL: https://www.codewars.com/kata/5aa736a455f906981800360d
# + Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
# +
# + =====================================================================================================================


def feast(beast, dish):
    lc_beast = beast.lower()
    lc_dish = dish.lower()
    return lc_beast[0] == lc_dish[0] and lc_beast[-1] == lc_dish[-1]
